/**
 * Secure Application Configuration
 * 
 * 🔒 SECURITY POLICY:
 * 1. NEVER hardcode private secrets or billing keys in client-side files.
 * 2. Any key placed in front-end JS is visible to anyone inspecting the network tab.
 * 3. The current GIS Observatory uses 100% free, keyless, and secure HTTPS endpoints
 *    (Esri ArcGIS, CartoDB, and Open-Meteo).
 * 4. If connecting to a private ML backend requiring authorization, use standard
 *    Bearer token authorization over strictly HTTPS connections.
 */

window.APP_CONFIG = (function() {
  // Free public HTTPS endpoints (Zero credentials required)
  const defaults = {
    WEATHER_API_URL: "https://api.open-meteo.com/v1/forecast",
    ELEVATION_API_URL: "https://api.open-meteo.com/v1/elevation",
    REMOTE_ML_ENDPOINT: null, // e.g. "https://api.yourbackend.com/v1/predict"
    REMOTE_ML_KEY: null       // Optional auth token
  };

  return {
    get: function(key) {
      return defaults[key];
    },
    
    /**
     * Set a remote ML API endpoint safely with HTTPS validation
     * @param {string} endpointUrl - Must use HTTPS
     * @param {string} [authToken] - Optional bearer or api key
     */
    setRemoteEndpoint: function(endpointUrl, authToken = null) {
      if (!endpointUrl) {
        defaults.REMOTE_ML_ENDPOINT = null;
        defaults.REMOTE_ML_KEY = null;
        return;
      }
      
      // Enforce HTTPS security
      if (!endpointUrl.startsWith("https://") && !endpointUrl.startsWith("http://localhost")) {
        console.error("🔒 Security Warning: Remote endpoints must use HTTPS to prevent credential interception.");
        throw new Error("Insecure endpoint rejected: Remote API must use HTTPS.");
      }

      defaults.REMOTE_ML_ENDPOINT = endpointUrl;
      if (authToken) {
        defaults.REMOTE_ML_KEY = authToken;
      }
    }
  };
})();
