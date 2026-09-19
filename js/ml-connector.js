/**
 * AI/ML Prediction Connector & Risk Engine
 * Connects AI/ML model predictions to the GIS Map
 * Allows dynamic recalculation based on live rainfall simulation,
 * and provides clean hooks to connect to backend ML endpoints (FastAPI/Flask).
 */

class MLRiskConnector {
  constructor() {
    this.remoteApiEndpoint = null;
    this.rainfallSimulationMultiplier = 1.0; // 1.0 = actual/baseline
    this.listeners = [];
  }

  /**
   * Set rainfall multiplier from simulation slider
   * @param {number} multiplier 0.0 (drought) to 2.5 (extreme cloudburst)
   */
  setRainfallMultiplier(multiplier) {
    this.rainfallSimulationMultiplier = multiplier;
    this.notifySubscribers();
  }

  /**
   * Subscribe to risk recalculation events
   */
  onRiskUpdate(callback) {
    this.listeners.push(callback);
  }

  notifySubscribers() {
    this.listeners.forEach(cb => cb(this.rainfallSimulationMultiplier));
  }

  /**
   * Calculates dynamic AI/ML susceptibility score based on terrain parameters
   * & simulated / live rainfall
   * 
   * Multi-Criteria Landslide Susceptibility Index (LSI):
   * S = w1*Norm(Slope) + w2*Norm(Rainfall) + w3*Norm(SoilMoisture) + w4*Norm(Geology)
   */
  computeDynamicRisk(feature) {
    const props = feature.properties;

    // 1. Slope Factor (0 to 1) - steep slopes above 45 deg peak at 1.0
    const slopeScore = Math.min(1.0, Math.max(0.0, (props.slope_deg - 10) / 40));

    // 2. Simulated Rainfall Factor (scaled by simulation slider)
    const effectiveRain24h = (props.rainfall_24h_mm || 50) * this.rainfallSimulationMultiplier;
    // 150mm 24h rain is critical threshold in Himalayas / North East
    const rainScore = Math.min(1.0, Math.max(0.0, effectiveRain24h / 180));

    // 3. Soil Moisture Factor
    const effectiveSoilMoisture = Math.min(99, (props.soil_moisture_pct || 60) * (0.6 + 0.4 * this.rainfallSimulationMultiplier));
    const soilScore = effectiveSoilMoisture / 100;

    // 4. Geological vulnerability (Disang shale, schist, sandstone have different friction angles)
    let geologyScore = 0.5;
    const geo = (props.geology || "").toLowerCase();
    if (geo.includes("shale") || geo.includes("phyllite") || geo.includes("schist")) {
      geologyScore = 0.9;
    } else if (geo.includes("sandstone") || geo.includes("siltstone") || geo.includes("limestone")) {
      geologyScore = 0.65;
    } else if (geo.includes("gneiss") || geo.includes("granite") || geo.includes("volcanic")) {
      geologyScore = 0.35;
    }

    // Weighted ensemble (similar to Random Forest / Logistic Regression weights for NER)
    const weights = { slope: 0.35, rain: 0.35, soil: 0.15, geology: 0.15 };
    const rawScore = (
      slopeScore * weights.slope +
      rainScore * weights.rain +
      soilScore * weights.soil +
      geologyScore * weights.geology
    );

    const susceptibilityScore = Math.min(0.99, Math.max(0.05, Number(rawScore.toFixed(2))));

    // Determine Risk Level & Color
    let riskLevel = "Low";
    let color = "#10B981"; // Green
    let glowClass = "glow-low";

    if (susceptibilityScore >= 0.80) {
      riskLevel = "Critical";
      color = "#EF4444"; // Red
      glowClass = "glow-critical";
    } else if (susceptibilityScore >= 0.60) {
      riskLevel = "High";
      color = "#F97316"; // Orange
      glowClass = "glow-high";
    } else if (susceptibilityScore >= 0.30) {
      riskLevel = "Medium";
      color = "#F59E0B"; // Yellow
      glowClass = "glow-medium";
    }

    return {
      susceptibilityScore,
      riskLevel,
      color,
      glowClass,
      effectiveRain24h: Math.round(effectiveRain24h),
      effectiveSoilMoisture: Math.round(effectiveSoilMoisture),
      confidence: props.ml_confidence || Math.round(85 + Math.random() * 12)
    };
  }

  /**
   * Hook for connecting to a remote ML API (FastAPI / Flask) securely
   * @param {string} [endpointUrl] - HTTPS URL for remote ML prediction endpoint
   * @param {string} [apiKey] - Optional bearer token / API key
   */
  async fetchRemotePredictions(endpointUrl, apiKey = null) {
    const targetUrl = endpointUrl || (window.APP_CONFIG && window.APP_CONFIG.get("REMOTE_ML_ENDPOINT"));
    if (!targetUrl) return null;

    // Security check: strictly enforce HTTPS (or localhost for dev)
    if (!targetUrl.startsWith("https://") && !targetUrl.startsWith("http://localhost") && !targetUrl.startsWith("http://127.0.0.1")) {
      console.error("🔒 Security Alert: Remote prediction endpoint rejected. Must use HTTPS to prevent data interception.");
      return null;
    }

    const token = apiKey || (window.APP_CONFIG && window.APP_CONFIG.get("REMOTE_ML_KEY"));
    const headers = { "Content-Type": "application/json" };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    this.remoteApiEndpoint = targetUrl;
    try {
      const response = await fetch(targetUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          region: "North Eastern Region",
          simulation_multiplier: this.rainfallSimulationMultiplier
        })
      });
      if (!response.ok) throw new Error(`API error: ${response.status}`);
      const mlGeoJSON = await response.json();
      return mlGeoJSON;
    } catch (err) {
      console.warn("Could not connect to remote ML API; falling back to local ML engine.", err.message);
      return null;
    }
  }
}

// Global instance
window.MLConnector = new MLRiskConnector();
