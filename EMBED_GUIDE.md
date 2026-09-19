# 🗺️ Frontend Embedding & AI/ML Integration Guide
### NER Interactive Landslide Risk GIS Early Warning Map

This project provides an interactive, production-grade GIS Landslide Susceptibility Map focused on the **North Eastern Region (NER) of India** (Assam, Arunachal Pradesh, Meghalaya, Manipur, Mizoram, Nagaland, Sikkim, and Tripura).

It is built with **100% free, secure, and keyless APIs**, eliminating external billing or credential exposure risks.

---

## 1. Quickest Method: Embed via `<iframe>` (Recommended)

You can drop the entire interactive map into **any** frontend website (React, Next.js, Vue, Angular, or standard HTML) using a responsive `<iframe>`.

### HTML / Vanilla JS
```html
<div style="width: 100%; height: 750px; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
  <iframe 
    src="/path-to-map/index.html" 
    width="100%" 
    height="100%" 
    style="border: none;"
    title="NER Landslide Early Warning Map"
    loading="lazy"
    allow="geolocation"
  ></iframe>
</div>
```

### React / Next.js Component (`LandslideRiskMap.jsx`)
```jsx
import React from 'react';

export default function LandslideRiskMap() {
  return (
    <section className="w-full my-6">
      <div className="w-full h-[750px] rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl">
        <iframe
          src="/mapping/index.html" // Place the map files in public/mapping/
          className="w-full h-full border-0"
          title="NER Landslide GIS Map"
          loading="lazy"
        />
      </div>
    </section>
  );
}
```

> **Tip for Next.js**: Place the map files (`index.html`, `style.css`, `app.js`, `data/`, `js/`) inside your project's `public/ner-map/` directory. Then reference `<iframe src="/ner-map/index.html" ... />`.

---

## 2. Free & Secure APIs Used (Zero API Keys Needed)

| Purpose | Provider | Endpoint / Tile URL | Auth / Key |
| :--- | :--- | :--- | :--- |
| **Topographic Terrain & Shaded Relief** | Esri World Topo Map | `https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/...` | **100% Free / Keyless** |
| **High-Res Satellite Imagery** | Esri World Imagery | `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/...` | **100% Free / Keyless** |
| **Dark Mode GIS Basemap** | CartoDB Dark Matter | `https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png` | **100% Free / Keyless** |
| **Live Precipitation & Weather** | Open-Meteo API | `https://api.open-meteo.com/v1/forecast?latitude=...&longitude=...` | **100% Free / Keyless** |
| **Elevation / Altitude** | Open-Meteo Elevation | `https://api.open-meteo.com/v1/elevation?latitude=...&longitude=...` | **100% Free / Keyless** |

---

## 3. Connecting AI/ML Prediction Results

The map includes a modular ML Connector in [`js/ml-connector.js`](file:///g:/MAPPING_HAKATON/js/ml-connector.js).

### Option A: Static ML Prediction Output (GeoJSON)
If your AI/ML teammate saves their model results to a JSON file, simply export it to [`data/ner_hotspots.json`](file:///g:/MAPPING_HAKATON/data/ner_hotspots.json) or [`data/ner_hotspots.js`](file:///g:/MAPPING_HAKATON/data/ner_hotspots.js) with this schema:

```json
{
  "type": "Feature",
  "geometry": { "type": "Point", "coordinates": [91.7323, 25.2986] },
  "properties": {
    "id": "NER-MG-01",
    "name": "Cherrapunji Escarpment",
    "district": "East Khasi Hills",
    "state": "Meghalaya",
    "elevation_m": 1430,
    "slope_deg": 47.6,
    "rainfall_24h_mm": 215.8,
    "soil_moisture_pct": 94.2,
    "susceptibility_score": 0.96,
    "risk_level": "Critical", // "Low", "Medium", "High", or "Critical"
    "ml_confidence": 97.4,
    "evacuation_advisory": "Immediate Red Alert: Low-lying gorge evacuation advised."
  }
}
```

### Option B: Live Python Backend (FastAPI / Flask)
If your ML team has an active prediction API (e.g. running XGBoost, Random Forest, or an LSTM):

```javascript
// In app.js or from your frontend:
window.MLConnector.fetchRemotePredictions("https://your-ml-api.com/api/predict")
  .then(liveGeoJSON => {
    if (liveGeoJSON) {
      NER_LANDSLIDE_DATA.features = liveGeoJSON.features;
      window.MLConnector.notifySubscribers(); // Triggers instant map re-render
    }
  });
```

---

## 4. Key Interactive Features

- 🟢🟡🟠🔴 **4 Risk Level Tiers**: Low (`#10B981`), Medium (`#F59E0B`), High (`#F97316`), and Critical (`#EF4444`) with animated pulsating radar rings.
- 🎚️ **Live AI/ML Rainfall Simulation Slider**: Move from 0.2x (Drought) to 2.5x (Cloudburst) and watch all 27 hotspots across the 8 NE states dynamically shift risk categories in real time.
- 📊 **Slide-Out Telemetry Drawer**: Displays slope angle, elevation, soil moisture, geological formation, early warning advisory, and a 12-hour rainfall profile chart.
- 🔥 **Hazard Heatmap & Danger Belts**: Toggle regional susceptibility heatmaps and critical mountain highway corridors (NH-10, NH-29, Dima Hasao, Tupul, etc.).
- 📍 **State Quick Navigation**: 1-click fly-to zoom for Sikkim, Meghalaya, Assam, Arunachal Pradesh, Nagaland, Manipur, Mizoram, and Tripura.
- 🔍 **Instant Corridors Search**: Type any hill pass, district, or state to fly directly to it.
