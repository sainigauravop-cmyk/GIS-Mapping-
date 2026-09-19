/**
 * Open-Meteo Weather & Terrain Service
 * Uses Open-Meteo Free & Open Source API (NO API KEY REQUIRED, HTTPS SECURE)
 * Docs: https://open-meteo.com/en/docs
 */

class WeatherTerrainService {
  constructor() {
    this.baseUrl = (window.APP_CONFIG && window.APP_CONFIG.get("WEATHER_API_URL")) || "https://api.open-meteo.com/v1/forecast";
    this.elevationUrl = (window.APP_CONFIG && window.APP_CONFIG.get("ELEVATION_API_URL")) || "https://api.open-meteo.com/v1/elevation";
    this.cache = new Map();
  }

  /**
   * Fetches real-time live precipitation, temperature, wind, and 7-day rainfall history
   * @param {number} lat Latitude
   * @param {number} lon Longitude
   */
  async getLiveTelemetry(lat, lon) {
    const cacheKey = `${lat.toFixed(3)},${lon.toFixed(3)}`;
    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      // Return cached if under 10 minutes old
      if (Date.now() - cached.timestamp < 10 * 60 * 1000) {
        return cached.data;
      }
    }

    try {
      const url = `${this.baseUrl}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,rain,weather_code,wind_speed_10m&hourly=precipitation_probability,precipitation,soil_moisture_0_to_1cm&daily=precipitation_sum,precipitation_hours&timezone=Asia%2FKolkata&forecast_days=3`;
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }

      const data = await response.json();

      const telemetry = {
        isLive: true,
        elevation: data.elevation || 0,
        temperature: data.current?.temperature_2m ?? "--",
        humidity: data.current?.relative_humidity_2m ?? "--",
        currentPrecipitation_mm: data.current?.precipitation ?? 0,
        rain_mm: data.current?.rain ?? 0,
        windSpeed_kmh: data.current?.wind_speed_10m ?? "--",
        todayPrecipitation_mm: data.daily?.precipitation_sum?.[0] ?? 0,
        hourlyRain: data.hourly?.precipitation?.slice(0, 12) || [],
        hourlyLabels: (data.hourly?.time?.slice(0, 12) || []).map(t => t.split('T')[1]),
        soilMoisture: data.hourly?.soil_moisture_0_to_1cm?.[0] ? Math.round(data.hourly.soil_moisture_0_to_1cm[0] * 100) : null
      };

      this.cache.set(cacheKey, { timestamp: Date.now(), data: telemetry });
      return telemetry;
    } catch (err) {
      console.warn("Live weather fetch failed or offline; using simulated fallback telemetry.", err.message);
      return {
        isLive: false,
        elevation: null,
        temperature: "22.4",
        humidity: "86",
        currentPrecipitation_mm: 12.5,
        windSpeed_kmh: "14.2",
        todayPrecipitation_mm: 48.0,
        hourlyRain: [2, 5, 8, 14, 18, 22, 16, 12, 9, 6, 4, 3],
        hourlyLabels: ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
        soilMoisture: 78
      };
    }
  }

  /**
   * Fetches topographic elevation for given coordinates
   */
  async getElevation(lat, lon) {
    try {
      const res = await fetch(`${this.elevationUrl}?latitude=${lat}&longitude=${lon}`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.elevation?.[0] || null;
    } catch {
      return null;
    }
  }
}

// Global instance
window.WeatherService = new WeatherTerrainService();
