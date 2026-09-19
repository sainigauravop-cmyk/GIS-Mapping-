/**
 * Landslide GIS Early Warning & Risk Map (Pan-India & North Eastern Region)
 * Main Application Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  // State variables
  let currentBaseLayer = null;
  let map = null;
  let markersLayer = null;
  let heatmapLayer = null;
  let hazardZonesLayer = null;
  let rainfallChartInstance = null;
  let activeSelectedFeature = null;
  let activeRegionFilter = "ALL";
  let activeStateFilter = "ALL";
  let activeRiskFilter = "ALL";

  // Base tile layers (100% Free, Secure, Zero API Key required)
  const tileProviders = {
    topo: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
      attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community",
      maxZoom: 18
    }),
    satellite: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
      maxZoom: 18
    }),
    dark: L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 19
    })
  };

  // State & Region geographic centers and zoom levels
  const stateBounds = {
    ALL: { center: [23.5, 82.5], zoom: 5 },
    "North East": { center: [26.0, 92.8], zoom: 7 },
    "North India": { center: [31.5, 77.5], zoom: 7 },
    "South India": { center: [12.5, 76.5], zoom: 7 },
    
    // North Eastern States
    Sikkim: { center: [27.35, 88.52], zoom: 9 },
    Meghalaya: { center: [25.50, 91.30], zoom: 9 },
    Assam: { center: [26.20, 92.90], zoom: 8 },
    "Arunachal Pradesh": { center: [27.80, 94.00], zoom: 8 },
    Nagaland: { center: [25.90, 94.20], zoom: 9 },
    Manipur: { center: [24.80, 93.90], zoom: 9 },
    Mizoram: { center: [23.30, 92.85], zoom: 9 },
    Tripura: { center: [23.80, 91.80], zoom: 9 },

    // Himalayan & Northern States
    Uttarakhand: { center: [30.20, 79.25], zoom: 8 },
    "Himachal Pradesh": { center: [31.85, 77.25], zoom: 8 },
    "Jammu & Kashmir": { center: [33.35, 75.25], zoom: 8 },
    "West Bengal": { center: [27.00, 88.35], zoom: 9 },
    Punjab: { center: [31.60, 75.85], zoom: 8 },
    Haryana: { center: [30.40, 76.95], zoom: 8 },

    // Western Ghats & Southern Hills
    Kerala: { center: [10.85, 76.45], zoom: 8 },
    Maharashtra: { center: [18.90, 73.55], zoom: 8 },
    Karnataka: { center: [13.60, 75.30], zoom: 8 },
    "Tamil Nadu": { center: [11.00, 77.00], zoom: 8 }
  };

  // 1. Initialize Map
  function initMap() {
    map = L.map("map", {
      center: stateBounds.ALL.center,
      zoom: stateBounds.ALL.zoom,
      zoomControl: false
    });

    // Custom Zoom control placed at top right
    L.control.zoom({ position: "topright" }).addTo(map);

    // Default base layer: Topo Terrain
    currentBaseLayer = tileProviders.topo;
    currentBaseLayer.addTo(map);

    // Layer groups
    markersLayer = L.layerGroup().addTo(map);
    hazardZonesLayer = L.layerGroup().addTo(map);

    // Render layers
    renderHazardZones();
    renderHotspots();
    initHeatmap();
  }

  // 2. Custom Marker Generator
  function createMarkerIcon(riskLevel, color) {
    const isHighAlert = (riskLevel === "Critical" || riskLevel === "High");
    const radarHtml = isHighAlert ? `<div class="radar-ring" style="border: 2px solid ${color};"></div>` : "";

    return L.divIcon({
      className: "custom-risk-marker-container",
      html: `
        <div class="custom-risk-marker" data-risk="${riskLevel}">
          ${radarHtml}
          <div class="marker-core" style="background-color: ${color};"></div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12]
    });
  }

  // 3. Render Hotspot Markers
  function renderHotspots() {
    markersLayer.clearLayers();

    const counts = { Critical: 0, High: 0, Medium: 0, Low: 0 };
    const features = NER_LANDSLIDE_DATA.features;

    features.forEach((feature) => {
      // Dynamic ML assessment
      const dynamicRisk = window.MLConnector.computeDynamicRisk(feature);
      const riskLevel = dynamicRisk.riskLevel;
      counts[riskLevel] = (counts[riskLevel] || 0) + 1;

      // Check region filter
      if (activeRegionFilter !== "ALL" && feature.properties.region !== activeRegionFilter) {
        return;
      }

      // Check state filter
      if (activeStateFilter !== "ALL" && feature.properties.state !== activeStateFilter) {
        return;
      }

      // Check risk filter
      if (activeRiskFilter !== "ALL" && riskLevel !== activeRiskFilter) {
        return;
      }

      const [lon, lat] = feature.geometry.coordinates;
      const marker = L.marker([lat, lon], {
        icon: createMarkerIcon(riskLevel, dynamicRisk.color),
        title: feature.properties.name
      });

      // Mini Glassmorphic Popup
      const popupHtml = `
        <div class="popup-card">
          <div class="popup-header">
            <span class="popup-badge" style="background: ${dynamicRisk.color}33; color: ${dynamicRisk.color}; border: 1px solid ${dynamicRisk.color}66;">
              ${riskLevel} Risk
            </span>
            <span style="font-size: 10px; color: #94a3b8;">LSI: ${dynamicRisk.susceptibilityScore}</span>
          </div>
          <div class="popup-title">${feature.properties.name}</div>
          <div class="popup-metric-row">
            <span>State / District:</span>
            <span>${feature.properties.district}, ${feature.properties.state}</span>
          </div>
          <div class="popup-metric-row">
            <span>Slope Angle:</span>
            <span>${feature.properties.slope_deg}°</span>
          </div>
          <div class="popup-metric-row">
            <span>24h Rainfall:</span>
            <span>${dynamicRisk.effectiveRain24h} mm</span>
          </div>
          <div class="popup-metric-row">
            <span>Soil Saturation:</span>
            <span>${dynamicRisk.effectiveSoilMoisture}%</span>
          </div>
          <button class="popup-btn" onclick="window.openTelemetry('${feature.id}')">
            📊 View Full Telemetry
          </button>
        </div>
      `;

      marker.bindPopup(popupHtml, { maxWidth: 280 });

      // Click opens Telemetry Drawer directly
      marker.on("click", () => {
        openTelemetryDrawer(feature, dynamicRisk);
      });

      markersLayer.addLayer(marker);
    });

    // Update risk counters in header
    document.getElementById("countCritical").textContent = counts.Critical;
    document.getElementById("countHigh").textContent = counts.High;
    document.getElementById("countMedium").textContent = counts.Medium;
    document.getElementById("countLow").textContent = counts.Low;
  }

  // 4. Render Critical Hazard Corridor Polygons
  function renderHazardZones() {
    hazardZonesLayer.clearLayers();
    if (!NER_LANDSLIDE_DATA.highRiskZones) return;

    NER_LANDSLIDE_DATA.highRiskZones.forEach(zone => {
      // Check region filter if specified
      if (activeRegionFilter !== "ALL" && zone.region && zone.region !== activeRegionFilter) {
        return;
      }
      if (activeStateFilter !== "ALL" && zone.state !== activeStateFilter) {
        return;
      }

      const polygon = L.polygon(zone.coordinates, {
        color: "#ef4444",
        weight: 2,
        opacity: 0.85,
        fillColor: "#ef4444",
        fillOpacity: 0.18,
        dashArray: "6, 6"
      });

      polygon.bindTooltip(`⚠️ ${zone.name} (${zone.state})`, {
        permanent: false,
        direction: "center",
        className: "polygon-tooltip"
      });

      polygon.on("click", () => {
        // Open drawer with zone details
        document.getElementById("drawerLocationName").textContent = zone.name;
        document.getElementById("drawerDistrictState").textContent = `${zone.state} — Major Danger Corridor`;
        document.getElementById("drawerRiskLevel").textContent = "Critical Danger Belt";
        document.getElementById("drawerRiskScore").textContent = "Corridor";
        document.getElementById("drawerRiskBanner").className = "risk-status-banner Critical";
        document.getElementById("drawerSlope").textContent = "> 40°";
        document.getElementById("drawerElevation").textContent = "Mountain Corridor";
        document.getElementById("drawerRainfall").textContent = "Active Surcharge";
        document.getElementById("drawerSoilMoisture").textContent = "Saturated";
        document.getElementById("drawerAdvisoryText").textContent = `Active structural hazard along ${zone.name}. Multi-agency disaster surveillance active. Avoid non-essential mountain transit.`;
        document.getElementById("drawerGeology").textContent = "High shear zone in fragile sedimentary/metamorphic formations.";

        openDrawer();
      });

      hazardZonesLayer.addLayer(polygon);
    });
  }

  // 5. Susceptibility Heatmap
  function initHeatmap() {
    if (typeof L.heatLayer !== "function") return;

    const heatPoints = NER_LANDSLIDE_DATA.features.map(f => {
      const [lon, lat] = f.geometry.coordinates;
      const dynamic = window.MLConnector.computeDynamicRisk(f);
      return [lat, lon, dynamic.susceptibilityScore * 1.5];
    });

    if (heatmapLayer) {
      map.removeLayer(heatmapLayer);
    }

    heatmapLayer = L.heatLayer(heatPoints, {
      radius: 35,
      blur: 25,
      maxZoom: 12,
      gradient: {
        0.2: "#10b981",
        0.4: "#f59e0b",
        0.6: "#f97316",
        0.8: "#ef4444",
        1.0: "#7f1d1d"
      }
    }).addTo(map);
  }

  // 6. Open Telemetry Drawer with Details & Chart
  async function openTelemetryDrawer(feature, dynamicRisk) {
    activeSelectedFeature = feature;
    const props = feature.properties;
    const [lon, lat] = feature.geometry.coordinates;

    if (!dynamicRisk) {
      dynamicRisk = window.MLConnector.computeDynamicRisk(feature);
    }

    // Set Text Values
    document.getElementById("drawerLocationName").textContent = props.name;
    document.getElementById("drawerDistrictState").textContent = `${props.district}, ${props.state} • ID: ${props.id}`;
    
    document.getElementById("drawerRiskLevel").textContent = `${dynamicRisk.riskLevel} Risk`;
    document.getElementById("drawerRiskScore").textContent = `LSI: ${dynamicRisk.susceptibilityScore}`;
    document.getElementById("drawerRiskBanner").className = `risk-status-banner ${dynamicRisk.riskLevel}`;

    document.getElementById("drawerSlope").textContent = `${props.slope_deg}°`;
    document.getElementById("drawerSlopeCat").textContent = props.slope_deg > 40 ? "Steep Escarpment" : (props.slope_deg > 25 ? "Moderate Slope" : "Gentle Gradient");
    
    document.getElementById("drawerElevation").textContent = `${props.elevation_m.toLocaleString()} m`;
    document.getElementById("drawerRainfall").textContent = `${dynamicRisk.effectiveRain24h} mm`;
    document.getElementById("drawerRainStatus").textContent = dynamicRisk.effectiveRain24h > 120 ? "Critical Threshold Exceeded" : (dynamicRisk.effectiveRain24h > 60 ? "Heavy Monsoon Rain" : "Normal Precipitation");
    
    document.getElementById("drawerSoilMoisture").textContent = `${dynamicRisk.effectiveSoilMoisture}%`;
    document.getElementById("drawerAdvisoryText").textContent = props.evacuation_advisory || "Monitor local conditions.";
    document.getElementById("drawerGeology").textContent = `${props.geology} — Soil: ${props.soil_type}`;

    openDrawer();

    // Default Chart Data
    renderRainfallChart(
      ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "Now"],
      [
        Math.round(dynamicRisk.effectiveRain24h * 0.08),
        Math.round(dynamicRisk.effectiveRain24h * 0.12),
        Math.round(dynamicRisk.effectiveRain24h * 0.18),
        Math.round(dynamicRisk.effectiveRain24h * 0.25),
        Math.round(dynamicRisk.effectiveRain24h * 0.35),
        Math.round(dynamicRisk.effectiveRain24h * 0.45),
        Math.round(dynamicRisk.effectiveRain24h * 0.58),
        Math.round(dynamicRisk.effectiveRain24h * 0.72),
        Math.round(dynamicRisk.effectiveRain24h * 0.85),
        Math.round(dynamicRisk.effectiveRain24h * 0.92),
        Math.round(dynamicRisk.effectiveRain24h * 0.98),
        dynamicRisk.effectiveRain24h
      ],
      dynamicRisk.color
    );

    // Asynchronously fetch live telemetry from Open-Meteo (Free & Keyless)
    const liveBadge = document.getElementById("liveApiBadge");
    liveBadge.textContent = "Fetching Live Weather...";
    
    try {
      const liveData = await window.WeatherService.getLiveTelemetry(lat, lon);
      if (liveData && liveData.hourlyRain && liveData.hourlyRain.length > 0) {
        liveBadge.textContent = `Live: ${liveData.temperature}°C • ${liveData.humidity}% RH`;
      } else {
        liveBadge.textContent = "Offline Model Telemetry";
      }
    } catch {
      liveBadge.textContent = "Model Telemetry Active";
    }
  }

  // Window helper so popup buttons can call it
  window.openTelemetry = (featureId) => {
    const f = NER_LANDSLIDE_DATA.features.find(item => item.id === featureId);
    if (f) {
      openTelemetryDrawer(f);
      map.closePopup();
    }
  };

  function openDrawer() {
    const drawer = document.getElementById("telemetryDrawer");
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
  }

  function closeDrawer() {
    const drawer = document.getElementById("telemetryDrawer");
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  }

  // 7. Render Chart.js Rainfall Profile
  function renderRainfallChart(labels, values, themeColor) {
    const ctx = document.getElementById("rainfallChart").getContext("2d");

    if (rainfallChartInstance) {
      rainfallChartInstance.destroy();
    }

    rainfallChartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
          label: "Cumulative Rain (mm)",
          data: values,
          borderColor: themeColor || "#38bdf8",
          backgroundColor: (themeColor || "#38bdf8") + "22",
          borderWidth: 2.5,
          tension: 0.35,
          fill: true,
          pointRadius: 2.5,
          pointHoverRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#0f172a",
            titleColor: "#ffffff",
            bodyColor: "#94a3b8",
            borderColor: "rgba(255,255,255,0.1)",
            borderWidth: 1,
            callbacks: {
              label: (context) => ` ${context.parsed.y} mm`
            }
          }
        },
        scales: {
          x: {
            grid: { color: "rgba(255,255,255,0.05)" },
            ticks: { color: "#64748b", font: { size: 9 } }
          },
          y: {
            grid: { color: "rgba(255,255,255,0.05)" },
            ticks: { color: "#64748b", font: { size: 9 } }
          }
        }
      }
    });
  }

  // 8. Event Listeners & UI Controls

  // Close Drawer
  document.getElementById("btnCloseDrawer").addEventListener("click", closeDrawer);

  // Layer toggles
  document.getElementById("btnLayerTopo").addEventListener("click", () => switchBaseLayer("topo", "btnLayerTopo"));
  document.getElementById("btnLayerSat").addEventListener("click", () => switchBaseLayer("satellite", "btnLayerSat"));
  document.getElementById("btnLayerDark").addEventListener("click", () => switchBaseLayer("dark", "btnLayerDark"));

  function switchBaseLayer(layerKey, btnId) {
    if (currentBaseLayer) map.removeLayer(currentBaseLayer);
    currentBaseLayer = tileProviders[layerKey];
    currentBaseLayer.addTo(map);

    document.querySelectorAll(".layer-btn").forEach(b => b.classList.remove("active"));
    document.getElementById(btnId).classList.add("active");
  }

  // Overlay Toggles
  const toggleHeatmapBtn = document.getElementById("toggleHeatmap");
  toggleHeatmapBtn.addEventListener("click", () => {
    if (map.hasLayer(heatmapLayer)) {
      map.removeLayer(heatmapLayer);
      toggleHeatmapBtn.classList.remove("active");
    } else {
      map.addLayer(heatmapLayer);
      toggleHeatmapBtn.classList.add("active");
    }
  });

  const toggleZonesBtn = document.getElementById("toggleHazardZones");
  toggleZonesBtn.addEventListener("click", () => {
    if (map.hasLayer(hazardZonesLayer)) {
      map.removeLayer(hazardZonesLayer);
      toggleZonesBtn.classList.remove("active");
    } else {
      map.addLayer(hazardZonesLayer);
      toggleZonesBtn.classList.add("active");
    }
  });

  // Region Filter Tabs
  document.querySelectorAll(".region-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".region-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      activeRegionFilter = tab.dataset.region;
      activeStateFilter = "ALL";

      // Sync state pills & dropdown
      document.querySelectorAll(".state-pill").forEach(p => p.classList.remove("active"));
      const allPill = document.querySelector('.state-pill[data-state="ALL"]');
      if (allPill) allPill.classList.add("active");
      document.getElementById("stateSelectDropdown").value = "ALL";

      const target = stateBounds[activeRegionFilter] || stateBounds.ALL;
      map.flyTo(target.center, target.zoom, { duration: 1.2 });

      renderHazardZones();
      renderHotspots();
    });
  });

  // State Dropdown Selector
  const stateDropdown = document.getElementById("stateSelectDropdown");
  stateDropdown.addEventListener("change", (e) => {
    const selectedState = e.target.value;
    selectState(selectedState);
  });

  // State Filter Pills
  document.querySelectorAll(".state-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const stateName = pill.dataset.state;
      selectState(stateName);
    });
  });

  function selectState(stateName) {
    activeStateFilter = stateName;
    activeRegionFilter = "ALL";

    // Update region tabs to ALL if specific state is chosen
    if (stateName !== "ALL") {
      document.querySelectorAll(".region-tab").forEach(t => t.classList.remove("active"));
    }

    // Sync pills
    document.querySelectorAll(".state-pill").forEach(p => {
      if (p.dataset.state === stateName) p.classList.add("active");
      else p.classList.remove("active");
    });

    // Sync dropdown
    stateDropdown.value = stateName;

    const target = stateBounds[activeStateFilter] || stateBounds.ALL;
    map.flyTo(target.center, target.zoom, { duration: 1.2 });

    renderHazardZones();
    renderHotspots();
  }

  // Risk Counter Pills (Filter by Risk Level)
  const riskFilterMap = {
    filterCritical: "Critical",
    filterHigh: "High",
    filterMedium: "Medium",
    filterLow: "Low"
  };

  Object.entries(riskFilterMap).forEach(([elemId, riskLevel]) => {
    const el = document.getElementById(elemId);
    el.addEventListener("click", () => {
      if (activeRiskFilter === riskLevel) {
        activeRiskFilter = "ALL";
        el.classList.remove("active");
      } else {
        document.querySelectorAll(".counter-pill").forEach(p => p.classList.remove("active"));
        activeRiskFilter = riskLevel;
        el.classList.add("active");
      }
      renderHotspots();
    });
  });

  // Reset Button
  document.getElementById("btnResetView").addEventListener("click", () => {
    activeRegionFilter = "ALL";
    activeStateFilter = "ALL";
    activeRiskFilter = "ALL";

    document.querySelectorAll(".region-tab").forEach(t => t.classList.remove("active"));
    const allRegion = document.querySelector('.region-tab[data-region="ALL"]');
    if (allRegion) allRegion.classList.add("active");

    document.querySelectorAll(".state-pill").forEach(p => p.classList.remove("active"));
    const allPill = document.querySelector('.state-pill[data-state="ALL"]');
    if (allPill) allPill.classList.add("active");
    stateDropdown.value = "ALL";

    document.querySelectorAll(".counter-pill").forEach(p => p.classList.remove("active"));
    map.flyTo(stateBounds.ALL.center, stateBounds.ALL.zoom, { duration: 1.0 });

    renderHazardZones();
    renderHotspots();
    closeDrawer();
  });

  // Search Box with Autocomplete FlyTo
  const searchInput = document.getElementById("locationSearch");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) return;

    const matched = NER_LANDSLIDE_DATA.features.find(f => 
      f.properties.name.toLowerCase().includes(query) ||
      f.properties.district.toLowerCase().includes(query) ||
      f.properties.state.toLowerCase().includes(query) ||
      (f.properties.region && f.properties.region.toLowerCase().includes(query))
    );

    if (matched) {
      const [lon, lat] = matched.geometry.coordinates;
      map.flyTo([lat, lon], 12, { duration: 1.2 });
      openTelemetryDrawer(matched);
    }
  });

  // AI/ML Rainfall Simulation Slider
  const slider = document.getElementById("rainMultiplierSlider");
  const sliderDisplay = document.getElementById("rainMultiplierDisplay");

  slider.addEventListener("input", (e) => {
    const mult = parseFloat(e.target.value);
    let label = "1.0x (Normal)";
    if (mult < 0.6) label = `${mult}x (Drought/Dry)`;
    else if (mult > 1.8) label = `${mult}x (Severe Cloudburst)`;
    else if (mult > 1.0) label = `${mult}x (Heavy Monsoon)`;
    
    sliderDisplay.textContent = label;
    window.MLConnector.setRainfallMultiplier(mult);
  });

  // When MLConnector updates risk, re-render map & open drawer
  window.MLConnector.onRiskUpdate(() => {
    renderHotspots();
    initHeatmap();

    if (activeSelectedFeature && document.getElementById("telemetryDrawer").classList.contains("open")) {
      const updatedRisk = window.MLConnector.computeDynamicRisk(activeSelectedFeature);
      openTelemetryDrawer(activeSelectedFeature, updatedRisk);
    }
  });

  // Embed Modal
  const modal = document.getElementById("embedModal");
  document.getElementById("btnOpenEmbedModal").addEventListener("click", () => {
    modal.classList.add("open");
  });
  document.getElementById("btnCloseModal").addEventListener("click", () => {
    modal.classList.remove("open");
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });

  document.getElementById("btnCopySnippet").addEventListener("click", () => {
    const code = document.getElementById("snippetCode").innerText;
    navigator.clipboard.writeText(code).then(() => {
      const btn = document.getElementById("btnCopySnippet");
      btn.textContent = "Copied! ✓";
      btn.style.background = "#10b981";
      setTimeout(() => {
        btn.textContent = "Copy Code";
        btn.style.background = "#1e293b";
      }, 2000);
    });
  });

  // Run initial map setup
  initMap();
});
