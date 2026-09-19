/**
 * Pan-India & North Eastern Region (NER) Landslide GIS Hotspot Dataset
 * Covers 18 High-Hazard States & Union Territories:
 * - North Eastern Region: Sikkim, Meghalaya, Assam, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura
 * - Northern Himalayas & Shivaliks: Uttarakhand, Himachal Pradesh, Jammu & Kashmir, Punjab, Haryana, West Bengal (Darjeeling/Kalimpong)
 * - Western Ghats & Southern Hills: Kerala, Maharashtra, Karnataka, Tamil Nadu
 * 
 * In accordance with Geological Survey of India (GSI) National Landslide Susceptibility Mapping (NLSM)
 * and National Disaster Management Authority (NDMA) guidelines.
 */

const NER_LANDSLIDE_DATA = {
  type: "FeatureCollection",
  metadata: {
    region: "India — Landslide Susceptibility & Early Warning Observatory",
    total_locations: 64,
    generated_at: "2026-09-07T22:40:00Z",
    risk_legend: {
      Low: { color: "#10B981", bg: "rgba(16, 185, 129, 0.15)", label: "Low Risk (< 0.30)", desc: "Stable terrain, routine monitoring" },
      Medium: { color: "#F59E0B", bg: "rgba(245, 158, 11, 0.15)", label: "Medium Risk (0.30 - 0.60)", desc: "Caution during persistent rainfall" },
      High: { color: "#F97316", bg: "rgba(249, 115, 22, 0.15)", label: "High Risk (0.60 - 0.80)", desc: "Active slope, traffic disruptions likely" },
      Critical: { color: "#EF4444", bg: "rgba(239, 68, 68, 0.2)", label: "Critical Risk (> 0.80)", desc: "Imminent danger, evacuation alert" }
    }
  },
  features: [
    // ==========================================
    // 1. SIKKIM
    // ==========================================
    {
      type: "Feature",
      id: "SK-01",
      geometry: { type: "Point", coordinates: [88.5082, 27.1523] },
      properties: {
        id: "SK-01",
        name: "NH-10 Teesta - Rangpo Corridor",
        district: "Pakyong / Kalimpong border",
        state: "Sikkim",
        region: "North East",
        elevation_m: 680,
        slope_deg: 44.2,
        geology: "Daling Group (Pelitic Schists & Phyllites)",
        soil_type: "Sandy Loam & Debris Colluvium",
        historical_events: 18,
        rainfall_24h_mm: 142.5,
        rainfall_72h_mm: 295.0,
        soil_moisture_pct: 88.5,
        susceptibility_score: 0.89,
        risk_level: "Critical",
        ml_confidence: 94.2,
        trigger_mechanism: "Pore water pressure spike & river toe erosion",
        evacuation_advisory: "Traffic diverted to Alternate Melli-Jorethang route. NDRF on standby.",
        sensor_id: "SK-EWS-104"
      }
    },
    {
      type: "Feature",
      id: "SK-02",
      geometry: { type: "Point", coordinates: [88.5678, 27.3892] },
      properties: {
        id: "SK-02",
        name: "Dikchu - North Sikkim Highway",
        district: "Mangan",
        state: "Sikkim",
        region: "North East",
        elevation_m: 1150,
        slope_deg: 39.8,
        geology: "Central Crystalline Gneisses",
        soil_type: "Gravelly Silt Loam",
        historical_events: 11,
        rainfall_24h_mm: 98.4,
        rainfall_72h_mm: 194.0,
        soil_moisture_pct: 76.0,
        susceptibility_score: 0.74,
        risk_level: "High",
        ml_confidence: 91.5,
        trigger_mechanism: "Joint plane slide along cleavage fractures",
        evacuation_advisory: "Restricted heavy vehicle movement from 18:00 to 06:00.",
        sensor_id: "SK-EWS-109"
      }
    },
    {
      type: "Feature",
      id: "SK-03",
      geometry: { type: "Point", coordinates: [88.6065, 27.3389] },
      properties: {
        id: "SK-03",
        name: "Tathangchen - Gangtok Ridge",
        district: "Gangtok",
        state: "Sikkim",
        region: "North East",
        elevation_m: 1720,
        slope_deg: 29.5,
        geology: "Biotite Schist & Gneiss",
        soil_type: "Residual Silty Clay",
        historical_events: 6,
        rainfall_24h_mm: 62.0,
        rainfall_72h_mm: 120.0,
        soil_moisture_pct: 62.4,
        susceptibility_score: 0.48,
        risk_level: "Medium",
        ml_confidence: 88.0,
        trigger_mechanism: "Urban surcharge & overburden drainage overflow",
        evacuation_advisory: "Clear roadside stormwater channels.",
        sensor_id: "SK-EWS-115"
      }
    },
    {
      type: "Feature",
      id: "SK-04",
      geometry: { type: "Point", coordinates: [88.3639, 27.3075] },
      properties: {
        id: "SK-04",
        name: "Ravangla Foothills",
        district: "Namchi",
        state: "Sikkim",
        region: "North East",
        elevation_m: 2100,
        slope_deg: 18.2,
        geology: "Gondwana Sandstone",
        soil_type: "Loamy Forest Soil",
        historical_events: 2,
        rainfall_24h_mm: 24.0,
        rainfall_72h_mm: 52.0,
        soil_moisture_pct: 38.0,
        susceptibility_score: 0.21,
        risk_level: "Low",
        ml_confidence: 95.0,
        trigger_mechanism: "None identified under current threshold",
        evacuation_advisory: "Normal conditions. Routine tourist passage open.",
        sensor_id: "SK-EWS-120"
      }
    },

    // ==========================================
    // 2. MEGHALAYA
    // ==========================================
    {
      type: "Feature",
      id: "MG-01",
      geometry: { type: "Point", coordinates: [91.7323, 25.2986] },
      properties: {
        id: "MG-01",
        name: "Cherrapunji (Sohra) Escarpment",
        district: "East Khasi Hills",
        state: "Meghalaya",
        region: "North East",
        elevation_m: 1430,
        slope_deg: 47.6,
        geology: "Therria & Lakadong Limestone/Sandstone",
        soil_type: "Thin Lithic Leptosols",
        historical_events: 22,
        rainfall_24h_mm: 215.8,
        rainfall_72h_mm: 440.0,
        soil_moisture_pct: 94.2,
        susceptibility_score: 0.96,
        risk_level: "Critical",
        ml_confidence: 97.4,
        trigger_mechanism: "Extreme precipitation saturation & limestone canyon rockfall",
        evacuation_advisory: "Immediate RED alert for downstream gorge settlements; flash flood risk.",
        sensor_id: "MG-SOH-001"
      }
    },
    {
      type: "Feature",
      id: "MG-02",
      geometry: { type: "Point", coordinates: [91.5826, 25.2970] },
      properties: {
        id: "MG-02",
        name: "Mawsynram - Balat Road Slopes",
        district: "South West Khasi Hills",
        state: "Meghalaya",
        region: "North East",
        elevation_m: 1380,
        slope_deg: 41.5,
        geology: "Sylhet Traps & Cretaceous Sediments",
        soil_type: "Coarse Sandy Loam",
        historical_events: 19,
        rainfall_24h_mm: 190.2,
        rainfall_72h_mm: 385.0,
        soil_moisture_pct: 91.0,
        susceptibility_score: 0.91,
        risk_level: "Critical",
        ml_confidence: 96.0,
        trigger_mechanism: "Intense monsoonal downpour causing rotational debris slide",
        evacuation_advisory: "Road blocked between km 32 and 37; PWD clearing crews mobilized.",
        sensor_id: "MG-MAW-004"
      }
    },
    {
      type: "Feature",
      id: "MG-03",
      geometry: { type: "Point", coordinates: [91.9056, 25.6705] },
      properties: {
        id: "MG-03",
        name: "Umiam Lake - Shillong Bypass",
        district: "Ri-Bhoi",
        state: "Meghalaya",
        region: "North East",
        elevation_m: 1020,
        slope_deg: 34.0,
        geology: "Shillong Group Quartzites & Phyllites",
        soil_type: "Lateritic Red Soil",
        historical_events: 8,
        rainfall_24h_mm: 78.5,
        rainfall_72h_mm: 165.0,
        soil_moisture_pct: 71.3,
        susceptibility_score: 0.68,
        risk_level: "High",
        ml_confidence: 89.2,
        trigger_mechanism: "Deep roadside cut slope failure due to waterlogging",
        evacuation_advisory: "Single lane traffic allowed with cautious driving signs.",
        sensor_id: "MG-SHL-012"
      }
    },
    {
      type: "Feature",
      id: "MG-04",
      geometry: { type: "Point", coordinates: [90.2201, 25.5138] },
      properties: {
        id: "MG-04",
        name: "Tura Peak Slopes",
        district: "West Garo Hills",
        state: "Meghalaya",
        region: "North East",
        elevation_m: 872,
        slope_deg: 26.5,
        geology: "Archaean Gneissic Complex",
        soil_type: "Ferruginous Red Loam",
        historical_events: 5,
        rainfall_24h_mm: 42.0,
        rainfall_72h_mm: 88.0,
        soil_moisture_pct: 54.0,
        susceptibility_score: 0.44,
        risk_level: "Medium",
        ml_confidence: 87.5,
        trigger_mechanism: "Minor surface sloughing during heavy spells",
        evacuation_advisory: "Advise residents on lower slope to inspect retaining walls.",
        sensor_id: "MG-WGH-021"
      }
    },

    // ==========================================
    // 3. ASSAM
    // ==========================================
    {
      type: "Feature",
      id: "AS-01",
      geometry: { type: "Point", coordinates: [93.0238, 25.1764] },
      properties: {
        id: "AS-01",
        name: "Dima Hasao (Haflong - Jatinga Hill Corridor)",
        district: "Dima Hasao",
        state: "Assam",
        region: "North East",
        elevation_m: 910,
        slope_deg: 42.0,
        geology: "Disang & Barail Shales/Sandstones",
        soil_type: "Highly Weathered Fractured Mudstone",
        historical_events: 25,
        rainfall_24h_mm: 165.0,
        rainfall_72h_mm: 310.0,
        soil_moisture_pct: 92.5,
        susceptibility_score: 0.94,
        risk_level: "Critical",
        ml_confidence: 98.1,
        trigger_mechanism: "Shale liquefaction & track-bed subsidence across railway line",
        evacuation_advisory: "Lumding-Badarpur railway section suspended. Disaster team deployed.",
        sensor_id: "AS-HAF-001"
      }
    },
    {
      type: "Feature",
      id: "AS-02",
      geometry: { type: "Point", coordinates: [91.7051, 26.1664] },
      properties: {
        id: "AS-02",
        name: "Kamakhya & Nilachal Hills (Guwahati)",
        district: "Kamrup Metropolitan",
        state: "Assam",
        region: "North East",
        elevation_m: 230,
        slope_deg: 36.8,
        geology: "Porphyritic Granitic Gneiss",
        soil_type: "Unconsolidated Red Residual Silt",
        historical_events: 12,
        rainfall_24h_mm: 82.0,
        rainfall_72h_mm: 155.0,
        soil_moisture_pct: 74.0,
        susceptibility_score: 0.71,
        risk_level: "High",
        ml_confidence: 90.4,
        trigger_mechanism: "Unregulated hill-cutting & intense storm runoff",
        evacuation_advisory: "Evacuation orders served for vulnerable households on southern face.",
        sensor_id: "AS-GHY-008"
      }
    },
    {
      type: "Feature",
      id: "AS-03",
      geometry: { type: "Point", coordinates: [92.7789, 24.8333] },
      properties: {
        id: "AS-03",
        name: "Silchar - Harangajao Valley Link",
        district: "Cachar",
        state: "Assam",
        region: "North East",
        elevation_m: 350,
        slope_deg: 28.0,
        geology: "Surma Series Siltstone",
        soil_type: "Clayey Alluvium Overburden",
        historical_events: 7,
        rainfall_24h_mm: 55.0,
        rainfall_72h_mm: 110.0,
        soil_moisture_pct: 59.2,
        susceptibility_score: 0.52,
        risk_level: "Medium",
        ml_confidence: 86.8,
        trigger_mechanism: "Stream incision undermining road shoulder",
        evacuation_advisory: "Watch for subsidence cracks on asphalt.",
        sensor_id: "AS-CCH-014"
      }
    },
    {
      type: "Feature",
      id: "AS-04",
      geometry: { type: "Point", coordinates: [93.1711, 26.5775] },
      properties: {
        id: "AS-04",
        name: "Kaziranga - Karbi Anglong Foothills",
        district: "Karbi Anglong",
        state: "Assam",
        region: "North East",
        elevation_m: 180,
        slope_deg: 14.5,
        geology: "Granite Gneiss Core",
        soil_type: "Alluvial Loamy Sand",
        historical_events: 1,
        rainfall_24h_mm: 18.0,
        rainfall_72h_mm: 40.0,
        soil_moisture_pct: 32.0,
        susceptibility_score: 0.16,
        risk_level: "Low",
        ml_confidence: 96.0,
        trigger_mechanism: "Stable bedrock, minimal movement",
        evacuation_advisory: "Normal highway traffic operating without restriction.",
        sensor_id: "AS-KBA-029"
      }
    },
    {
      type: "Feature",
      id: "AS-05",
      geometry: { type: "Point", coordinates: [94.9125, 27.4728] },
      properties: {
        id: "AS-05",
        name: "Dibrugarh - Brahmaputra Bankslopes",
        district: "Dibrugarh",
        state: "Assam",
        region: "North East",
        elevation_m: 108,
        slope_deg: 21.0,
        geology: "Quaternary Alluvial Sands & Silts",
        soil_type: "Riparian Silt Loam",
        historical_events: 8,
        rainfall_24h_mm: 68.0,
        rainfall_72h_mm: 140.0,
        soil_moisture_pct: 68.0,
        susceptibility_score: 0.55,
        risk_level: "Medium",
        ml_confidence: 89.0,
        trigger_mechanism: "River toe scouring causing rotational riverbank failure",
        evacuation_advisory: "Geo-bag revetment inspection ongoing.",
        sensor_id: "AS-DBG-032"
      }
    },

    // ==========================================
    // 4. ARUNACHAL PRADESH
    // ==========================================
    {
      type: "Feature",
      id: "AR-01",
      geometry: { type: "Point", coordinates: [92.1124, 27.5021] },
      properties: {
        id: "AR-01",
        name: "Sela Pass - Tawang Military Highway",
        district: "Tawang / West Kameng",
        state: "Arunachal Pradesh",
        region: "North East",
        elevation_m: 3840,
        slope_deg: 48.0,
        geology: "Higher Himalayan Crystalline (Migmatites)",
        soil_type: "Morainic Scree & Glacial Till",
        historical_events: 28,
        rainfall_24h_mm: 135.0,
        rainfall_72h_mm: 270.0,
        soil_moisture_pct: 87.0,
        susceptibility_score: 0.93,
        risk_level: "Critical",
        ml_confidence: 95.8,
        trigger_mechanism: "Permafrost freeze-thaw cycles combined with high antecedent rain",
        evacuation_advisory: "BRO snow-cutter and bulldozer teams deployed on round-the-clock patrol.",
        sensor_id: "AR-TWG-001"
      }
    },
    {
      type: "Feature",
      id: "AR-02",
      geometry: { type: "Point", coordinates: [93.8294, 27.5369] },
      properties: {
        id: "AR-02",
        name: "Yazali - Lower Subansiri Gorge (Ziro Road)",
        district: "Lower Subansiri",
        state: "Arunachal Pradesh",
        region: "North East",
        elevation_m: 850,
        slope_deg: 40.2,
        geology: "Siwalik Sandstone & Gondwana Thrust Zone",
        soil_type: "Loose Unconsolidated Scree",
        historical_events: 14,
        rainfall_24h_mm: 105.0,
        rainfall_72h_mm: 210.0,
        soil_moisture_pct: 79.5,
        susceptibility_score: 0.79,
        risk_level: "High",
        ml_confidence: 91.0,
        trigger_mechanism: "Riverbed toe scouring and steep cliff debris avalanches",
        evacuation_advisory: "Commuters warned of rockfall hazards near km 45.",
        sensor_id: "AR-LSB-015"
      }
    },
    {
      type: "Feature",
      id: "AR-03",
      geometry: { type: "Point", coordinates: [95.3265, 28.0664] },
      properties: {
        id: "AR-03",
        name: "Pasighat - Pangin Siang Valley",
        district: "East Siang",
        state: "Arunachal Pradesh",
        region: "North East",
        elevation_m: 420,
        slope_deg: 32.5,
        geology: "Abor Volcanics & Quartzites",
        soil_type: "Gravelly Sandy Silt",
        historical_events: 9,
        rainfall_24h_mm: 72.0,
        rainfall_72h_mm: 148.0,
        soil_moisture_pct: 66.8,
        susceptibility_score: 0.61,
        risk_level: "High",
        ml_confidence: 88.5,
        trigger_mechanism: "Siang River hydraulic gradient undermining slope toe",
        evacuation_advisory: "Ferry and low road crossings put on high alert.",
        sensor_id: "AR-ESG-022"
      }
    },
    {
      type: "Feature",
      id: "AR-04",
      geometry: { type: "Point", coordinates: [93.6053, 27.0844] },
      properties: {
        id: "AR-04",
        name: "Itanagar - Doimukh Hill Bypass",
        district: "Papum Pare",
        state: "Arunachal Pradesh",
        region: "North East",
        elevation_m: 380,
        slope_deg: 22.0,
        geology: "Upper Siwalik Conglomerates",
        soil_type: "Sandy Clay with Pebbles",
        historical_events: 4,
        rainfall_24h_mm: 35.0,
        rainfall_72h_mm: 70.0,
        soil_moisture_pct: 46.0,
        susceptibility_score: 0.35,
        risk_level: "Medium",
        ml_confidence: 89.0,
        trigger_mechanism: "Urban slope cut excavation without retaining wall",
        evacuation_advisory: "Municipal council mandated temporary tarpaulin slope covering.",
        sensor_id: "AR-PPR-031"
      }
    },

    // ==========================================
    // 5. NAGALAND
    // ==========================================
    {
      type: "Feature",
      id: "NL-01",
      geometry: { type: "Point", coordinates: [94.1077, 25.6701] },
      properties: {
        id: "NL-01",
        name: "NH-29 Kohima - Dimapur (Zubza Sinking Zone)",
        district: "Kohima",
        state: "Nagaland",
        region: "North East",
        elevation_m: 1280,
        slope_deg: 43.5,
        geology: "Disang Group (Crushed Black Shale & Clay)",
        soil_type: "Expansive Smectite Clay Matrix",
        historical_events: 31,
        rainfall_24h_mm: 155.0,
        rainfall_72h_mm: 298.0,
        soil_moisture_pct: 93.0,
        susceptibility_score: 0.95,
        risk_level: "Critical",
        ml_confidence: 98.6,
        trigger_mechanism: "Continuous deep-seated creep and tectonic shear activation",
        evacuation_advisory: "Heavy transit halted. Essential supplies rerouted via Peducha-Tsiesema road.",
        sensor_id: "NL-KOH-002"
      }
    },
    {
      type: "Feature",
      id: "NL-02",
      geometry: { type: "Point", coordinates: [93.8115, 25.8214] },
      properties: {
        id: "NL-02",
        name: "Paglapahar Slide Zone (Chümoukedima)",
        district: "Chümoukedima",
        state: "Nagaland",
        region: "North East",
        elevation_m: 480,
        slope_deg: 38.0,
        geology: "Barail Sandstone Interbedded with Siltstone",
        soil_type: "Loose Boulder Talus",
        historical_events: 17,
        rainfall_24h_mm: 88.0,
        rainfall_72h_mm: 172.0,
        soil_moisture_pct: 75.0,
        susceptibility_score: 0.77,
        risk_level: "High",
        ml_confidence: 92.4,
        trigger_mechanism: "Rockfall and sudden boulder slides onto 4-lane highway",
        evacuation_advisory: "Speed limit strictly capped at 20 km/h; watchmen stationed.",
        sensor_id: "NL-CHK-011"
      }
    },
    {
      type: "Feature",
      id: "NL-03",
      geometry: { type: "Point", coordinates: [94.5165, 26.3255] },
      properties: {
        id: "NL-03",
        name: "Mokokchung - Mariani Road",
        district: "Mokokchung",
        state: "Nagaland",
        region: "North East",
        elevation_m: 1325,
        slope_deg: 27.5,
        geology: "Barail Series Silty Sandstone",
        soil_type: "Red Residual Silt",
        historical_events: 6,
        rainfall_24h_mm: 45.0,
        rainfall_72h_mm: 92.0,
        soil_moisture_pct: 56.5,
        susceptibility_score: 0.46,
        risk_level: "Medium",
        ml_confidence: 88.0,
        trigger_mechanism: "Surface wash out on steep terraced farms",
        evacuation_advisory: "Routine maintenance in progress.",
        sensor_id: "NL-MKG-024"
      }
    },

    // ==========================================
    // 6. MANIPUR
    // ==========================================
    {
      type: "Feature",
      id: "MN-01",
      geometry: { type: "Point", coordinates: [93.6389, 24.7892] },
      properties: {
        id: "MN-01",
        name: "Tupul (Noney Railway Station Debris Basin)",
        district: "Noney",
        state: "Manipur",
        region: "North East",
        elevation_m: 640,
        slope_deg: 46.8,
        geology: "Fractured Disang Shales & Sandstone",
        soil_type: "Debris flow deposits & colluvial fill",
        historical_events: 20,
        rainfall_24h_mm: 175.4,
        rainfall_72h_mm: 330.0,
        soil_moisture_pct: 95.0,
        susceptibility_score: 0.97,
        risk_level: "Critical",
        ml_confidence: 99.0,
        trigger_mechanism: "Ijei river damming risk & high rainfall liquefaction of railway slope cut",
        evacuation_advisory: "CRITICAL ALERT: Downstream river bank evacuation mandatory.",
        sensor_id: "MN-TUP-001"
      }
    },
    {
      type: "Feature",
      id: "MN-02",
      geometry: { type: "Point", coordinates: [93.4560, 24.8170] },
      properties: {
        id: "MN-02",
        name: "NH-37 Imphal - Jiribam Highway",
        district: "Tamenglong",
        state: "Manipur",
        region: "North East",
        elevation_m: 890,
        slope_deg: 37.2,
        geology: "Barail Sandstone / Shale alternations",
        soil_type: "Clayey Debris Soil",
        historical_events: 13,
        rainfall_24h_mm: 92.0,
        rainfall_72h_mm: 185.0,
        soil_moisture_pct: 78.0,
        susceptibility_score: 0.75,
        risk_level: "High",
        ml_confidence: 90.8,
        trigger_mechanism: "Slope instability triggered by heavy freight traffic vibration",
        evacuation_advisory: "Night convoy operations temporarily restricted.",
        sensor_id: "MN-JRB-010"
      }
    },
    {
      type: "Feature",
      id: "MN-03",
      geometry: { type: "Point", coordinates: [94.0189, 25.2671] },
      properties: {
        id: "MN-03",
        name: "Senapati Ridge Road",
        district: "Senapati",
        state: "Manipur",
        region: "North East",
        elevation_m: 1420,
        slope_deg: 28.5,
        geology: "Tertiary Sedimentary Formations",
        soil_type: "Loamy Forest Soil",
        historical_events: 5,
        rainfall_24h_mm: 48.0,
        rainfall_72h_mm: 95.0,
        soil_moisture_pct: 57.0,
        susceptibility_score: 0.47,
        risk_level: "Medium",
        ml_confidence: 88.0,
        trigger_mechanism: "Side-slope drainage siltation",
        evacuation_advisory: "Monitor culvert blockages regularly.",
        sensor_id: "MN-SNP-019"
      }
    },

    // ==========================================
    // 7. MIZORAM
    // ==========================================
    {
      type: "Feature",
      id: "MZ-01",
      geometry: { type: "Point", coordinates: [92.7176, 23.7271] },
      properties: {
        id: "MZ-01",
        name: "Aizawl (Ramhlun - Laipuitlang Slopes)",
        district: "Aizawl",
        state: "Mizoram",
        region: "North East",
        elevation_m: 1130,
        slope_deg: 45.0,
        geology: "Bhuban Formation (Siltstone-Shale Dip Slope)",
        soil_type: "Fragile Silty Sandstone Weathered Layer",
        historical_events: 27,
        rainfall_24h_mm: 160.0,
        rainfall_72h_mm: 315.0,
        soil_moisture_pct: 92.0,
        susceptibility_score: 0.92,
        risk_level: "Critical",
        ml_confidence: 96.8,
        trigger_mechanism: "Steep structural dip parallel to hillside slope; high human load",
        evacuation_advisory: "Red flags placed on 12 multi-story buildings; relocation active.",
        sensor_id: "MZ-AZL-003"
      }
    },
    {
      type: "Feature",
      id: "MZ-02",
      geometry: { type: "Point", coordinates: [92.7350, 22.8872] },
      properties: {
        id: "MZ-02",
        name: "Lunglei Southern Escarpment",
        district: "Lunglei",
        state: "Mizoram",
        region: "North East",
        elevation_m: 1220,
        slope_deg: 35.8,
        geology: "Surma Group Sandstone",
        soil_type: "Lateritic Red Sandy Silt",
        historical_events: 10,
        rainfall_24h_mm: 85.0,
        rainfall_72h_mm: 168.0,
        soil_moisture_pct: 73.0,
        susceptibility_score: 0.72,
        risk_level: "High",
        ml_confidence: 90.0,
        trigger_mechanism: "Downslope infiltration lubricating underlying clay horizons",
        evacuation_advisory: "Retaining walls undergoing structural stress monitoring.",
        sensor_id: "MZ-LNG-017"
      }
    },
    {
      type: "Feature",
      id: "MZ-03",
      geometry: { type: "Point", coordinates: [93.3283, 23.4750] },
      properties: {
        id: "MZ-03",
        name: "Champhai Valley Edge",
        district: "Champhai",
        state: "Mizoram",
        region: "North East",
        elevation_m: 1350,
        slope_deg: 16.0,
        geology: "Massive Hard Sandstone",
        soil_type: "Alluvial Loam",
        historical_events: 2,
        rainfall_24h_mm: 22.0,
        rainfall_72h_mm: 48.0,
        soil_moisture_pct: 35.0,
        susceptibility_score: 0.18,
        risk_level: "Low",
        ml_confidence: 94.5,
        trigger_mechanism: "Gentle valley topography, low hazard",
        evacuation_advisory: "Safe. Standard operational status.",
        sensor_id: "MZ-CMP-028"
      }
    },

    // ==========================================
    // 8. TRIPURA
    // ==========================================
    {
      type: "Feature",
      id: "TR-01",
      geometry: { type: "Point", coordinates: [92.2667, 23.8167] },
      properties: {
        id: "TR-01",
        name: "Jampui Hills (Betlingchhip Ridge)",
        district: "North Tripura",
        state: "Tripura",
        region: "North East",
        elevation_m: 930,
        slope_deg: 29.0,
        geology: "Surma Group Siltstones & Shales",
        soil_type: "Red Yellow Podzolic Soil",
        historical_events: 6,
        rainfall_24h_mm: 58.0,
        rainfall_72h_mm: 118.0,
        soil_moisture_pct: 61.0,
        susceptibility_score: 0.54,
        risk_level: "Medium",
        ml_confidence: 88.0,
        trigger_mechanism: "Seasonal road shoulder slips on orange plantation hill tracts",
        evacuation_advisory: "Check drainage along ridge road.",
        sensor_id: "TR-JAM-005"
      }
    },
    {
      type: "Feature",
      id: "TR-02",
      geometry: { type: "Point", coordinates: [91.5500, 23.8500] },
      properties: {
        id: "TR-02",
        name: "Baramura Range Highway",
        district: "Khowai / West Tripura",
        state: "Tripura",
        region: "North East",
        elevation_m: 260,
        slope_deg: 17.5,
        geology: "Tipam Sandstone Formation",
        soil_type: "Sandy Clay",
        historical_events: 2,
        rainfall_24h_mm: 28.0,
        rainfall_72h_mm: 55.0,
        soil_moisture_pct: 39.0,
        susceptibility_score: 0.23,
        risk_level: "Low",
        ml_confidence: 93.0,
        trigger_mechanism: "Low gradient, negligible active failures",
        evacuation_advisory: "No warnings active.",
        sensor_id: "TR-BAR-018"
      }
    },

    // ==========================================
    // 9. UTTARAKHAND (Northern Himalayas)
    // ==========================================
    {
      type: "Feature",
      id: "UK-01",
      geometry: { type: "Point", coordinates: [79.5638, 30.5564] },
      properties: {
        id: "UK-01",
        name: "Joshimath Subsidising Slopes (Chamoli)",
        district: "Chamoli",
        state: "Uttarakhand",
        region: "North India",
        elevation_m: 1890,
        slope_deg: 46.5,
        geology: "Main Central Thrust (MCT) Pelitic Gneiss & Mica Schist Overburden",
        soil_type: "Glacial Moraine & Colluvial Boulders",
        historical_events: 34,
        rainfall_24h_mm: 148.0,
        rainfall_72h_mm: 280.0,
        soil_moisture_pct: 91.0,
        susceptibility_score: 0.96,
        risk_level: "Critical",
        ml_confidence: 98.4,
        trigger_mechanism: "Underground seepage, glacial moraine shear failure & structural toe erosion",
        evacuation_advisory: "RED ZONE: 9 wards under mandatory relocation. Constant DInSAR satellite monitoring active.",
        sensor_id: "UK-JSH-001"
      }
    },
    {
      type: "Feature",
      id: "UK-02",
      geometry: { type: "Point", coordinates: [79.0669, 30.7352] },
      properties: {
        id: "UK-02",
        name: "Kedarnath Valley & Mandakini Slopes (Rudraprayag)",
        district: "Rudraprayag",
        state: "Uttarakhand",
        region: "North India",
        elevation_m: 3584,
        slope_deg: 49.0,
        geology: "Higher Himalayan Crystalline Biotite Gneiss",
        soil_type: "Glacial Till & Unconsolidated Scree",
        historical_events: 26,
        rainfall_24h_mm: 162.0,
        rainfall_72h_mm: 310.0,
        soil_moisture_pct: 93.5,
        susceptibility_score: 0.97,
        risk_level: "Critical",
        ml_confidence: 99.1,
        trigger_mechanism: "Chorabari moraine reactivation, cloudburst debris flow",
        evacuation_advisory: "Yatra foot-track halted between Lincholi and Kedarnath. Helipad emergency stand-by.",
        sensor_id: "UK-KDR-003"
      }
    },
    {
      type: "Feature",
      id: "UK-03",
      geometry: { type: "Point", coordinates: [79.4591, 29.3919] },
      properties: {
        id: "UK-03",
        name: "Nainital (Mallital Balia Nala Fault)",
        district: "Nainital",
        state: "Uttarakhand",
        region: "North India",
        elevation_m: 2084,
        slope_deg: 38.4,
        geology: "Krol-Infra Krol Limestone & Carbonaceous Slates",
        soil_type: "Limestone Scree & Plastic Silt",
        historical_events: 19,
        rainfall_24h_mm: 92.0,
        rainfall_72h_mm: 185.0,
        soil_moisture_pct: 78.0,
        susceptibility_score: 0.78,
        risk_level: "High",
        ml_confidence: 91.5,
        trigger_mechanism: "Deep-seated rotational slip along lake-bounding fault zone",
        evacuation_advisory: "Lower Balia Nala toe stabilization in progress; 35 dwellings evacuated.",
        sensor_id: "UK-NTL-012"
      }
    },
    {
      type: "Feature",
      id: "UK-04",
      geometry: { type: "Point", coordinates: [78.0756, 30.4598] },
      properties: {
        id: "UK-04",
        name: "Mussoorie - Kempty Falls Bypass (Dehradun)",
        district: "Dehradun",
        state: "Uttarakhand",
        region: "North India",
        elevation_m: 2005,
        slope_deg: 33.0,
        geology: "Blaini Boulder Bed & Nagthat Quartzite",
        soil_type: "Residual Loamy Gravel",
        historical_events: 9,
        rainfall_24h_mm: 64.0,
        rainfall_72h_mm: 130.0,
        soil_moisture_pct: 64.0,
        susceptibility_score: 0.58,
        risk_level: "Medium",
        ml_confidence: 88.0,
        trigger_mechanism: "Roadside cut face slumping during monsoon",
        evacuation_advisory: "Advisory to keep vehicle speeds under 30 km/h.",
        sensor_id: "UK-MSR-020"
      }
    },
    {
      type: "Feature",
      id: "UK-05",
      geometry: { type: "Point", coordinates: [80.2182, 29.5828] },
      properties: {
        id: "UK-05",
        name: "Pithoragarh - Dharchula Border Highway",
        district: "Pithoragarh",
        state: "Uttarakhand",
        region: "North India",
        elevation_m: 1627,
        slope_deg: 42.0,
        geology: "Garhwal Group Dolomite & Phyllite",
        soil_type: "Fragile Calcareous Colluvium",
        historical_events: 16,
        rainfall_24h_mm: 110.0,
        rainfall_72h_mm: 225.0,
        soil_moisture_pct: 82.0,
        susceptibility_score: 0.81,
        risk_level: "Critical",
        ml_confidence: 93.0,
        trigger_mechanism: "Kali river toe undermining & steep dip-slope failure",
        evacuation_advisory: "Dharchula-Tawaghat road blocked at multiple stretches. BRO clearing teams deployed.",
        sensor_id: "UK-PTG-008"
      }
    },

    // ==========================================
    // 10. HIMACHAL PRADESH (Northern Himalayas)
    // ==========================================
    {
      type: "Feature",
      id: "HP-01",
      geometry: { type: "Point", coordinates: [77.1734, 31.1048] },
      properties: {
        id: "HP-01",
        name: "Shimla (Summer Hill - Shiv Bawdi Slopes)",
        district: "Shimla",
        state: "Himachal Pradesh",
        region: "North India",
        elevation_m: 2206,
        slope_deg: 44.0,
        geology: "Jutogh Group (Carbonaceous Mica Schist & Quartzite)",
        soil_type: "Weathered Silt Loam & High Overburden Fill",
        historical_events: 24,
        rainfall_24h_mm: 152.0,
        rainfall_72h_mm: 295.0,
        soil_moisture_pct: 93.0,
        susceptibility_score: 0.95,
        risk_level: "Critical",
        ml_confidence: 98.0,
        trigger_mechanism: "High slope urbanization overburden collapse triggered by intense rainfall",
        evacuation_advisory: "Critical red alert. Heavy structures on slip circle cordoned off by SDRF.",
        sensor_id: "HP-SHM-001"
      }
    },
    {
      type: "Feature",
      id: "HP-02",
      geometry: { type: "Point", coordinates: [78.0289, 31.5372] },
      properties: {
        id: "HP-02",
        name: "Kinnaur (Nigulsari - Reckong Peo Highway NH-5)",
        district: "Kinnaur",
        state: "Himachal Pradesh",
        region: "North India",
        elevation_m: 2290,
        slope_deg: 48.5,
        geology: "Vaikrita Crystalline Gneiss & Granitoids",
        soil_type: "Loose Angular Boulder Scree",
        historical_events: 29,
        rainfall_24h_mm: 120.0,
        rainfall_72h_mm: 240.0,
        soil_moisture_pct: 86.0,
        susceptibility_score: 0.94,
        risk_level: "Critical",
        ml_confidence: 97.2,
        trigger_mechanism: "Catastrophic rockfall along vertical joint planes into Sutlej canyon",
        evacuation_advisory: "NH-5 closed for passenger buses after sunset. Spotters stationed on hillsides.",
        sensor_id: "HP-KIN-004"
      }
    },
    {
      type: "Feature",
      id: "HP-03",
      geometry: { type: "Point", coordinates: [76.9318, 31.7082] },
      properties: {
        id: "HP-03",
        name: "Mandi - Pandoh Dam Highway Corridor (NH-21)",
        district: "Mandi",
        state: "Himachal Pradesh",
        region: "North India",
        elevation_m: 850,
        slope_deg: 41.0,
        geology: "Chail Formation (Sheared Phyllites & Quartzites)",
        soil_type: "Clayey Debris Soil",
        historical_events: 18,
        rainfall_24h_mm: 114.0,
        rainfall_72h_mm: 220.0,
        soil_moisture_pct: 81.0,
        susceptibility_score: 0.83,
        risk_level: "Critical",
        ml_confidence: 93.8,
        trigger_mechanism: "Beas River flood level surge scouring highway support pillars",
        evacuation_advisory: "Heavy commercial freight diverted to Bilaspur-Sundernagar route.",
        sensor_id: "HP-MND-009"
      }
    },
    {
      type: "Feature",
      id: "HP-04",
      geometry: { type: "Point", coordinates: [77.1887, 32.2396] },
      properties: {
        id: "HP-04",
        name: "Manali - Solang Valley Axis (Kullu)",
        district: "Kullu",
        state: "Himachal Pradesh",
        region: "North India",
        elevation_m: 2050,
        slope_deg: 35.0,
        geology: "Rohtang Gneissic Complex",
        soil_type: "Glacial Gravel & Scree",
        historical_events: 12,
        rainfall_24h_mm: 78.0,
        rainfall_72h_mm: 155.0,
        soil_moisture_pct: 70.0,
        susceptibility_score: 0.69,
        risk_level: "High",
        ml_confidence: 90.0,
        trigger_mechanism: "Snowmelt runoff combined with flash rainfall cutting slope toe",
        evacuation_advisory: "Caution advised near river bends; camping prohibited near river bed.",
        sensor_id: "HP-KLU-016"
      }
    },
    {
      type: "Feature",
      id: "HP-05",
      geometry: { type: "Point", coordinates: [76.3197, 32.2190] },
      properties: {
        id: "HP-05",
        name: "Dharamshala - McLeod Ganj Ridge (Kangra)",
        district: "Kangra",
        state: "Himachal Pradesh",
        region: "North India",
        elevation_m: 1750,
        slope_deg: 31.0,
        geology: "Dharamshala Sandstone & Subathu Shales",
        soil_type: "Loose Red Silt Loam",
        historical_events: 8,
        rainfall_24h_mm: 85.0,
        rainfall_72h_mm: 170.0,
        soil_moisture_pct: 73.0,
        susceptibility_score: 0.65,
        risk_level: "High",
        ml_confidence: 89.5,
        trigger_mechanism: "Urban hillside seepage lubricating slip surface",
        evacuation_advisory: "Monitor storm drain discharges on northern slope.",
        sensor_id: "HP-KNG-022"
      }
    },

    // ==========================================
    // 11. KERALA (Western Ghats)
    // ==========================================
    {
      type: "Feature",
      id: "KL-01",
      geometry: { type: "Point", coordinates: [76.1789, 11.5278] },
      properties: {
        id: "KL-01",
        name: "Wayanad (Chooralmala & Meppadi Debris Basin)",
        district: "Wayanad",
        state: "Kerala",
        region: "South India",
        elevation_m: 860,
        slope_deg: 46.2,
        geology: "Archaean Charnockite / Hornblende-Biotite Gneiss",
        soil_type: "Thick Weathered Lateritic Soil Over Solid Bedrock",
        historical_events: 35,
        rainfall_24h_mm: 240.0,
        rainfall_72h_mm: 520.0,
        soil_moisture_pct: 98.0,
        susceptibility_score: 0.99,
        risk_level: "Critical",
        ml_confidence: 99.5,
        trigger_mechanism: "Extreme cloudburst causing sudden liquefaction & massive debris flow of tea plantation slopes",
        evacuation_advisory: "CRITICAL EVACUATION ZONE: Downstream Iruvanjippuzha riverbanks cleared. Bailey bridge watch active.",
        sensor_id: "KL-WYD-001"
      }
    },
    {
      type: "Feature",
      id: "KL-02",
      geometry: { type: "Point", coordinates: [77.0194, 10.1583] },
      properties: {
        id: "KL-02",
        name: "Idukki (Munnar - Pettimudi Tea Slopes)",
        district: "Idukki",
        state: "Kerala",
        region: "South India",
        elevation_m: 1600,
        slope_deg: 43.0,
        geology: "High Grade Granulite & Khondalite Facies",
        soil_type: "Laterite with Gravelly Overburden",
        historical_events: 21,
        rainfall_24h_mm: 172.0,
        rainfall_72h_mm: 340.0,
        soil_moisture_pct: 94.0,
        susceptibility_score: 0.94,
        risk_level: "Critical",
        ml_confidence: 97.8,
        trigger_mechanism: "Deep rotational landslide triggered by continuous 72h monsoon downpour",
        evacuation_advisory: "Tea estate worker quarters on steep gradients relocated to safe shelters.",
        sensor_id: "KL-IDK-005"
      }
    },
    {
      type: "Feature",
      id: "KL-03",
      geometry: { type: "Point", coordinates: [76.3245, 11.4589] },
      properties: {
        id: "KL-03",
        name: "Nilambur - Kavalappara Slopes (Malappuram)",
        district: "Malappuram",
        state: "Kerala",
        region: "South India",
        elevation_m: 420,
        slope_deg: 37.5,
        geology: "Charnockite & Migmatite Complex",
        soil_type: "Residual Lateritic Clay Loam",
        historical_events: 15,
        rainfall_24h_mm: 130.0,
        rainfall_72h_mm: 260.0,
        soil_moisture_pct: 87.0,
        susceptibility_score: 0.82,
        risk_level: "Critical",
        ml_confidence: 94.0,
        trigger_mechanism: "Hill cutting and blocked natural drainage leading to sudden slope collapse",
        evacuation_advisory: "High risk warning issued for settlements in lower valley zone.",
        sensor_id: "KL-MLP-011"
      }
    },
    {
      type: "Feature",
      id: "KL-04",
      geometry: { type: "Point", coordinates: [76.8400, 9.6100] },
      properties: {
        id: "KL-04",
        name: "Koottickal - Kokkayar Foothills (Kottayam)",
        district: "Kottayam",
        state: "Kerala",
        region: "South India",
        elevation_m: 620,
        slope_deg: 29.0,
        geology: "Hornblende Biotite Gneiss",
        soil_type: "Reddish Lateritic Soil",
        historical_events: 7,
        rainfall_24h_mm: 72.0,
        rainfall_72h_mm: 145.0,
        soil_moisture_pct: 68.0,
        susceptibility_score: 0.59,
        risk_level: "Medium",
        ml_confidence: 89.0,
        trigger_mechanism: "Surface runoff erosion along stream gullies",
        evacuation_advisory: "Village panchayat alerted to inspect retention check-dams.",
        sensor_id: "KL-KTM-023"
      }
    },

    // ==========================================
    // 12. MAHARASHTRA (Western Ghats)
    // ==========================================
    {
      type: "Feature",
      id: "MH-01",
      geometry: { type: "Point", coordinates: [73.2083, 18.9167] },
      properties: {
        id: "MH-01",
        name: "Irshalwadi - Khalapur Slopes (Raigad)",
        district: "Raigad",
        state: "Maharashtra",
        region: "West India",
        elevation_m: 540,
        slope_deg: 45.0,
        geology: "Deccan Trap Basalt Flows (Weathered Amygdaloidal Layers)",
        soil_type: "Clayey Colluvium over Bedrock Steps",
        historical_events: 22,
        rainfall_24h_mm: 185.0,
        rainfall_72h_mm: 360.0,
        soil_moisture_pct: 95.0,
        susceptibility_score: 0.96,
        risk_level: "Critical",
        ml_confidence: 98.8,
        trigger_mechanism: "Water saturation of interface between massive basalt and red bole/clay layer",
        evacuation_advisory: "RED ALERT: Steep hillside tribal hamlets evacuated to community centers.",
        sensor_id: "MH-RGD-001"
      }
    },
    {
      type: "Feature",
      id: "MH-02",
      geometry: { type: "Point", coordinates: [73.6833, 19.1667] },
      properties: {
        id: "MH-02",
        name: "Malin - Ambegaon Foothills (Pune)",
        district: "Pune",
        state: "Maharashtra",
        region: "West India",
        elevation_m: 780,
        slope_deg: 40.0,
        geology: "Deccan Continental Basalts with Lithomargic Clay",
        soil_type: "Black Cotton & Clayey Colluvium",
        historical_events: 17,
        rainfall_24h_mm: 125.0,
        rainfall_72h_mm: 250.0,
        soil_moisture_pct: 85.0,
        susceptibility_score: 0.85,
        risk_level: "Critical",
        ml_confidence: 95.0,
        trigger_mechanism: "Terraced farming slope failure and excessive percolation",
        evacuation_advisory: "Preventative evacuation advisory for 18 villages in Ambegaon taluka.",
        sensor_id: "MH-PUN-006"
      }
    },
    {
      type: "Feature",
      id: "MH-03",
      geometry: { type: "Point", coordinates: [73.5283, 17.8283] },
      properties: {
        id: "MH-03",
        name: "Kashedi Ghat - Mahad Highway (Ratnagiri)",
        district: "Ratnagiri",
        state: "Maharashtra",
        region: "West India",
        elevation_m: 320,
        slope_deg: 34.0,
        geology: "Vesicular Basalt & Laterite Caps",
        soil_type: "Gravelly Lateritic Scree",
        historical_events: 11,
        rainfall_24h_mm: 88.0,
        rainfall_72h_mm: 175.0,
        soil_moisture_pct: 75.0,
        susceptibility_score: 0.73,
        risk_level: "High",
        ml_confidence: 91.0,
        trigger_mechanism: "Highway rockfall and boulder roll downs during heavy Konkan spells",
        evacuation_advisory: "Kashedi tunnel lane operated with speed monitors.",
        sensor_id: "MH-RTG-014"
      }
    },
    {
      type: "Feature",
      id: "MH-04",
      geometry: { type: "Point", coordinates: [72.9100, 19.0800] },
      properties: {
        id: "MH-04",
        name: "Ghatkopar & Kurla Hillslopes (Mumbai)",
        district: "Mumbai Suburban",
        state: "Maharashtra",
        region: "West India",
        elevation_m: 85,
        slope_deg: 36.0,
        geology: "Spilitic Basalt & Volcanic Breccia",
        soil_type: "Artificial Fill & Unstabilized Slum Overburden",
        historical_events: 14,
        rainfall_24h_mm: 98.0,
        rainfall_72h_mm: 190.0,
        soil_moisture_pct: 79.0,
        susceptibility_score: 0.76,
        risk_level: "High",
        ml_confidence: 92.5,
        trigger_mechanism: "Retaining wall collapse due to drainage overflow in congested hill settlements",
        evacuation_advisory: "BMC issued notices for 72 informal dwellings on slope edge.",
        sensor_id: "MH-MUM-019"
      }
    },

    // ==========================================
    // 13. WEST BENGAL (Darjeeling / Kalimpong)
    // ==========================================
    {
      type: "Feature",
      id: "WB-01",
      geometry: { type: "Point", coordinates: [88.2627, 27.0410] },
      properties: {
        id: "WB-01",
        name: "Paglajhora Sinking Zone (Darjeeling - Kurseong Road)",
        district: "Darjeeling",
        state: "West Bengal",
        region: "East India",
        elevation_m: 1850,
        slope_deg: 44.5,
        geology: "Darjeeling Gneiss & Pelitic Schist",
        soil_type: "Thick Weathered Colluvium with Subterranean Springs",
        historical_events: 32,
        rainfall_24h_mm: 168.0,
        rainfall_72h_mm: 325.0,
        soil_moisture_pct: 94.0,
        susceptibility_score: 0.96,
        risk_level: "Critical",
        ml_confidence: 98.2,
        trigger_mechanism: "Toy Train track-bed sinkage & chronic active landslide reactivation",
        evacuation_advisory: "DHR Toy train service suspended. Road transit restricted to light vehicles.",
        sensor_id: "WB-DAR-001"
      }
    },
    {
      type: "Feature",
      id: "WB-02",
      geometry: { type: "Point", coordinates: [88.4760, 27.0600] },
      properties: {
        id: "WB-02",
        name: "Teesta Bazar & 27th Mile (Kalimpong)",
        district: "Kalimpong",
        state: "West Bengal",
        region: "East India",
        elevation_m: 240,
        slope_deg: 42.0,
        geology: "Daling Phyllites & Crushed Quartzites",
        soil_type: "River Debris & Scree",
        historical_events: 21,
        rainfall_24h_mm: 135.0,
        rainfall_72h_mm: 270.0,
        soil_moisture_pct: 88.0,
        susceptibility_score: 0.88,
        risk_level: "Critical",
        ml_confidence: 95.0,
        trigger_mechanism: "Teesta river swelling undermining mountain road foundation",
        evacuation_advisory: "Teesta riverside bazaar shops ordered to move inventory to upper elevations.",
        sensor_id: "WB-KLP-007"
      }
    },
    {
      type: "Feature",
      id: "WB-03",
      geometry: { type: "Point", coordinates: [88.1889, 26.8872] },
      properties: {
        id: "WB-03",
        name: "Mirik Lake Slopes & Soureni Tea Estate",
        district: "Darjeeling",
        state: "West Bengal",
        region: "East India",
        elevation_m: 1495,
        slope_deg: 32.0,
        geology: "Golden Mica Schist & Gneiss",
        soil_type: "Sandy Clay Loam",
        historical_events: 8,
        rainfall_24h_mm: 65.0,
        rainfall_72h_mm: 135.0,
        soil_moisture_pct: 65.0,
        susceptibility_score: 0.61,
        risk_level: "High",
        ml_confidence: 89.0,
        trigger_mechanism: "High tea slope saturation and surface waterlogging",
        evacuation_advisory: "Monitor tea terrace drainage outlets.",
        sensor_id: "WB-MRK-015"
      }
    },

    // ==========================================
    // 14. JAMMU & KASHMIR
    // ==========================================
    {
      type: "Feature",
      id: "JK-01",
      geometry: { type: "Point", coordinates: [75.2410, 33.2420] },
      properties: {
        id: "JK-01",
        name: "Panthyal & Khooni Nallah (NH-44 Ramban Corridor)",
        district: "Ramban",
        state: "Jammu & Kashmir",
        region: "North India",
        elevation_m: 1150,
        slope_deg: 47.0,
        geology: "Murree Formation & Salkhala Slate / Schist Series",
        soil_type: "Unconsolidated Rock Debris & Boulders",
        historical_events: 38,
        rainfall_24h_mm: 140.0,
        rainfall_72h_mm: 275.0,
        soil_moisture_pct: 90.0,
        susceptibility_score: 0.95,
        risk_level: "Critical",
        ml_confidence: 98.7,
        trigger_mechanism: "Continuous shooting stones and deep-seated shear movement cutting vital national highway",
        evacuation_advisory: "Traffic police halt vehicular movement during rain spells; T-5 tunnel diversion active.",
        sensor_id: "JK-RMB-001"
      }
    },
    {
      type: "Feature",
      id: "JK-02",
      geometry: { type: "Point", coordinates: [75.3333, 33.0833] },
      properties: {
        id: "JK-02",
        name: "Patnitop - Kud Bypass (Udhampur)",
        district: "Udhampur",
        state: "Jammu & Kashmir",
        region: "North India",
        elevation_m: 2024,
        slope_deg: 32.5,
        geology: "Upper Murree Sandstone & Red Claystone",
        soil_type: "Residual Silty Clay",
        historical_events: 10,
        rainfall_24h_mm: 68.0,
        rainfall_72h_mm: 140.0,
        soil_moisture_pct: 67.0,
        susceptibility_score: 0.63,
        risk_level: "High",
        ml_confidence: 90.0,
        trigger_mechanism: "Water absorption into claystone causing slope subsidence",
        evacuation_advisory: "Cautious transit on winding curves.",
        sensor_id: "JK-PTN-010"
      }
    },
    {
      type: "Feature",
      id: "JK-03",
      geometry: { type: "Point", coordinates: [75.7667, 33.3167] },
      properties: {
        id: "JK-03",
        name: "Kishtwar - Paddar Chenab Canyon Road",
        district: "Kishtwar",
        state: "Jammu & Kashmir",
        region: "North India",
        elevation_m: 1638,
        slope_deg: 43.0,
        geology: "High Grade Schists & Quartzites",
        soil_type: "Loose Angular Talus",
        historical_events: 14,
        rainfall_24h_mm: 88.0,
        rainfall_72h_mm: 175.0,
        soil_moisture_pct: 76.0,
        susceptibility_score: 0.79,
        risk_level: "High",
        ml_confidence: 91.5,
        trigger_mechanism: "Deep Chenab canyon vertical rockfall and debris slips",
        evacuation_advisory: "BRO road clearance teams deployed at sensitive gorge turns.",
        sensor_id: "JK-KST-018"
      }
    },

    // ==========================================
    // 15. KARNATAKA (Western Ghats)
    // ==========================================
    {
      type: "Feature",
      id: "KA-01",
      geometry: { type: "Point", coordinates: [74.3417, 14.6583] },
      properties: {
        id: "KA-01",
        name: "Shirur - Ankola Coastal Hill Corridor (NH-66)",
        district: "Uttara Kannada",
        state: "Karnataka",
        region: "South India",
        elevation_m: 95,
        slope_deg: 46.0,
        geology: "Laterite Cap over Archean Granitic Gneiss",
        soil_type: "Porous Lateritic Soil prone to mudflows",
        historical_events: 18,
        rainfall_24h_mm: 180.0,
        rainfall_72h_mm: 370.0,
        soil_moisture_pct: 95.0,
        susceptibility_score: 0.95,
        risk_level: "Critical",
        ml_confidence: 98.0,
        trigger_mechanism: "Gangavali river toe erosion + massive hill cutting collapse onto 4-lane highway",
        evacuation_advisory: "Gangavali river edge cordon established. Marine police and SDRF stationed.",
        sensor_id: "KA-UKN-001"
      }
    },
    {
      type: "Feature",
      id: "KA-02",
      geometry: { type: "Point", coordinates: [75.7382, 12.4244] },
      properties: {
        id: "KA-02",
        name: "Madikeri - Thora Slopes (Kodagu)",
        district: "Kodagu",
        state: "Karnataka",
        region: "South India",
        elevation_m: 1150,
        slope_deg: 38.0,
        geology: "Mercara Granulite Terrain",
        soil_type: "Deep Red Laterite Loam",
        historical_events: 20,
        rainfall_24h_mm: 135.0,
        rainfall_72h_mm: 275.0,
        soil_moisture_pct: 88.0,
        susceptibility_score: 0.88,
        risk_level: "Critical",
        ml_confidence: 94.5,
        trigger_mechanism: "Heavy coffee plantation slope saturation causing rotational mass movements",
        evacuation_advisory: "District administration issued orange alert for vulnerable coffee estate hamlets.",
        sensor_id: "KA-KDG-008"
      }
    },
    {
      type: "Feature",
      id: "KA-03",
      geometry: { type: "Point", coordinates: [75.4167, 13.0833] },
      properties: {
        id: "KA-03",
        name: "Charmadi Ghat Corridor (Chikmagalur)",
        district: "Chikmagalur",
        state: "Karnataka",
        region: "South India",
        elevation_m: 890,
        slope_deg: 36.5,
        geology: "Dharwar Craton Metasediments",
        soil_type: "Laterite Gravel with Clay Matrix",
        historical_events: 13,
        rainfall_24h_mm: 92.0,
        rainfall_72h_mm: 180.0,
        soil_moisture_pct: 78.0,
        susceptibility_score: 0.74,
        risk_level: "High",
        ml_confidence: 91.0,
        trigger_mechanism: "Sharp hair-pin bend retaining wall collapse",
        evacuation_advisory: "Heavy multi-axle freight vehicles prohibited during monsoon.",
        sensor_id: "KA-CKM-014"
      }
    },

    // ==========================================
    // 16. TAMIL NADU (Nilgiris & Western Ghats)
    // ==========================================
    {
      type: "Feature",
      id: "TN-01",
      geometry: { type: "Point", coordinates: [76.7959, 11.3530] },
      properties: {
        id: "TN-01",
        name: "Coonoor - Ooty Mountain Railway Slopes (Nilgiris)",
        district: "Nilgiris",
        state: "Tamil Nadu",
        region: "South India",
        elevation_m: 1850,
        slope_deg: 42.0,
        geology: "Nilgiri Charnockite Massif",
        soil_type: "Thick Weathered Laterite Soil (Lithomarge)",
        historical_events: 23,
        rainfall_24h_mm: 145.0,
        rainfall_72h_mm: 290.0,
        soil_moisture_pct: 91.0,
        susceptibility_score: 0.92,
        risk_level: "Critical",
        ml_confidence: 96.5,
        trigger_mechanism: "Extreme rainfall causing soil piping and rotational debris slide across NMR mountain track",
        evacuation_advisory: "Mountain toy train service suspended. Highways department 24x7 control room active.",
        sensor_id: "TN-NLG-001"
      }
    },
    {
      type: "Feature",
      id: "TN-02",
      geometry: { type: "Point", coordinates: [77.4892, 10.2381] },
      properties: {
        id: "TN-02",
        name: "Kodaikanal Ghat Road (Dindigul)",
        district: "Dindigul",
        state: "Tamil Nadu",
        region: "South India",
        elevation_m: 1980,
        slope_deg: 33.5,
        geology: "Khondalite & Charnockite Facies",
        soil_type: "Ferruginous Red Soil",
        historical_events: 9,
        rainfall_24h_mm: 75.0,
        rainfall_72h_mm: 150.0,
        soil_moisture_pct: 71.0,
        susceptibility_score: 0.66,
        risk_level: "High",
        ml_confidence: 90.0,
        trigger_mechanism: "Road shoulder washouts on steep hairpin curves",
        evacuation_advisory: "Speed limits enforced; caution boards at km 18-24.",
        sensor_id: "TN-DND-009"
      }
    },
    {
      type: "Feature",
      id: "TN-03",
      geometry: { type: "Point", coordinates: [76.9558, 10.3274] },
      properties: {
        id: "TN-03",
        name: "Valparai - Pollachi Ghat Road",
        district: "Coimbatore",
        state: "Tamil Nadu",
        region: "South India",
        elevation_m: 1190,
        slope_deg: 31.0,
        geology: "Anamalai Charnockite Complex",
        soil_type: "Forest Laterite Loam",
        historical_events: 6,
        rainfall_24h_mm: 52.0,
        rainfall_72h_mm: 105.0,
        soil_moisture_pct: 58.0,
        susceptibility_score: 0.49,
        risk_level: "Medium",
        ml_confidence: 88.0,
        trigger_mechanism: "Minor soil slumps during torrential cloudbursts",
        evacuation_advisory: "Clear road culverts of tree fall debris.",
        sensor_id: "TN-CBE-017"
      }
    },

    // ==========================================
    // 17. PUNJAB (Shivalik & Kandi Foothill Belt)
    // ==========================================
    {
      type: "Feature",
      id: "PB-01",
      geometry: { type: "Point", coordinates: [75.8820, 32.3860] },
      properties: {
        id: "PB-01",
        name: "Dhar Kalan - Dunera Shivalik Ridge",
        district: "Pathankot",
        state: "Punjab",
        region: "North India",
        elevation_m: 720,
        slope_deg: 36.5,
        geology: "Upper Shivalik Boulder Conglomerates & Friable Sandstones",
        soil_type: "Sandy Gravel & Friable Colluvium",
        historical_events: 9,
        rainfall_24h_mm: 88.0,
        rainfall_72h_mm: 175.0,
        soil_moisture_pct: 74.0,
        susceptibility_score: 0.72,
        risk_level: "High",
        ml_confidence: 91.2,
        trigger_mechanism: "Road-cutting toe instability & high runoff along NH-154A",
        evacuation_advisory: "Single-lane traffic caution; avoid heavy vehicles during monsoon cloudbursts.",
        sensor_id: "PB-PTH-001"
      }
    },
    {
      type: "Feature",
      id: "PB-02",
      geometry: { type: "Point", coordinates: [76.5450, 31.2420] },
      properties: {
        id: "PB-02",
        name: "Anandpur Sahib - Kiratpur Shivalik Escarpment",
        district: "Rupnagar (Ropar)",
        state: "Punjab",
        region: "North India",
        elevation_m: 395,
        slope_deg: 28.4,
        geology: "Lower & Middle Shivalik Sandstones & Mudstones",
        soil_type: "Silty Clay & Alluvial Overburden",
        historical_events: 5,
        rainfall_24h_mm: 62.0,
        rainfall_72h_mm: 120.0,
        soil_moisture_pct: 66.0,
        susceptibility_score: 0.58,
        risk_level: "Medium",
        ml_confidence: 88.5,
        trigger_mechanism: "Gully erosion and river cutting along Sutlej drainage",
        evacuation_advisory: "Monitor slope retaining structures along Anandpur bypass.",
        sensor_id: "PB-ROP-002"
      }
    },
    {
      type: "Feature",
      id: "PB-03",
      geometry: { type: "Point", coordinates: [75.9250, 31.7380] },
      properties: {
        id: "PB-03",
        name: "Dholbaha Dam - Kandi Catchment Slopes",
        district: "Hoshiarpur",
        state: "Punjab",
        region: "North India",
        elevation_m: 450,
        slope_deg: 26.2,
        geology: "Shivalik Soft Friable Sandstones",
        soil_type: "Sandy Loam prone to piping",
        historical_events: 4,
        rainfall_24h_mm: 46.0,
        rainfall_72h_mm: 92.0,
        soil_moisture_pct: 59.0,
        susceptibility_score: 0.48,
        risk_level: "Medium",
        ml_confidence: 87.0,
        trigger_mechanism: "Severe rainwater gullying and seasonal choe embankment failures",
        evacuation_advisory: "Desilt drainage channels and reinforce earthen bunds.",
        sensor_id: "PB-HSP-003"
      }
    },

    // ==========================================
    // 18. HARYANA (Shivalik & Morni Hills Belt)
    // ==========================================
    {
      type: "Feature",
      id: "HR-01",
      geometry: { type: "Point", coordinates: [77.0180, 30.6920] },
      properties: {
        id: "HR-01",
        name: "Morni Hills - Tikkar Taal Ridge",
        district: "Panchkula",
        state: "Haryana",
        region: "North India",
        elevation_m: 1220,
        slope_deg: 38.2,
        geology: "Lower Shivalik Subathu Formations (Shales & Calc-Sandstones)",
        soil_type: "Weathered Silt Loam & Debris Mantle",
        historical_events: 12,
        rainfall_24h_mm: 96.5,
        rainfall_72h_mm: 198.0,
        soil_moisture_pct: 79.0,
        susceptibility_score: 0.76,
        risk_level: "High",
        ml_confidence: 92.4,
        trigger_mechanism: "Heavy monsoon saturation on steep dips causing road slips along Panchkula-Morni Highway",
        evacuation_advisory: "Deploy clearing machinery near Sherla and Tikkar Taal road junctions.",
        sensor_id: "HR-PKL-001"
      }
    },
    {
      type: "Feature",
      id: "HR-02",
      geometry: { type: "Point", coordinates: [76.9420, 30.8410] },
      properties: {
        id: "HR-02",
        name: "Kalka - Pinjore Shivalik Bypass Corridor",
        district: "Panchkula",
        state: "Haryana",
        region: "North India",
        elevation_m: 670,
        slope_deg: 32.0,
        geology: "Pinjore Boulder Conglomerates & Loose Sandstones",
        soil_type: "Gravelly Sandy Loam",
        historical_events: 7,
        rainfall_24h_mm: 72.0,
        rainfall_72h_mm: 145.0,
        soil_moisture_pct: 69.0,
        susceptibility_score: 0.64,
        risk_level: "High",
        ml_confidence: 89.8,
        trigger_mechanism: "Cut-slope failures and rock slides along NH-5 Himalayan expressway foothills",
        evacuation_advisory: "Inspect rockfall netting and roadside catch barriers.",
        sensor_id: "HR-KLK-002"
      }
    },
    {
      type: "Feature",
      id: "HR-03",
      geometry: { type: "Point", coordinates: [77.0250, 30.5850] },
      properties: {
        id: "HR-03",
        name: "Raipur Rani - Ghaggar River Bluffs",
        district: "Panchkula",
        state: "Haryana",
        region: "North India",
        elevation_m: 380,
        slope_deg: 24.5,
        geology: "Sub-Recent Alluvial & Shivalik Terrace Deposits",
        soil_type: "Friable Silty Sand",
        historical_events: 3,
        rainfall_24h_mm: 38.0,
        rainfall_72h_mm: 80.0,
        soil_moisture_pct: 52.0,
        susceptibility_score: 0.42,
        risk_level: "Medium",
        ml_confidence: 86.5,
        trigger_mechanism: "Riverbank scouring and toe undercutting during flash floods",
        evacuation_advisory: "Reinforce geo-textile embankments along river terraces.",
        sensor_id: "HR-RPR-003"
      }
    }
  ],

  // High Hazard Corridor Polygons across India
  highRiskZones: [
    {
      name: "NH-10 Teesta River Canyon Danger Belt",
      state: "Sikkim",
      region: "North East",
      risk_level: "Critical",
      coordinates: [
        [27.0800, 88.4600],
        [27.2200, 88.5400],
        [27.1800, 88.5800],
        [27.0500, 88.4900]
      ]
    },
    {
      name: "Sohra-Mawsynram Monsoonal Escarpment Belt",
      state: "Meghalaya",
      region: "North East",
      risk_level: "Critical",
      coordinates: [
        [25.2400, 91.5200],
        [25.3500, 91.5600],
        [25.3400, 91.7900],
        [25.2200, 91.7500]
      ]
    },
    {
      name: "Dima Hasao Railway Fragile Shale Corridor",
      state: "Assam",
      region: "North East",
      risk_level: "Critical",
      coordinates: [
        [25.1000, 92.9500],
        [25.2600, 93.1000],
        [25.2100, 93.1800],
        [25.0700, 93.0200]
      ]
    },
    {
      name: "NH-29 Zubza-Kohima Tectonic Shear Corridor",
      state: "Nagaland",
      region: "North East",
      risk_level: "Critical",
      coordinates: [
        [25.6200, 94.0200],
        [25.7400, 94.0800],
        [25.7100, 94.1800],
        [25.5900, 94.1200]
      ]
    },
    {
      name: "Tupul-Ijei Basin Slide Zone",
      state: "Manipur",
      region: "North East",
      risk_level: "Critical",
      coordinates: [
        [24.7400, 93.5800],
        [24.8400, 93.6200],
        [24.8200, 93.7000],
        [24.7100, 93.6600]
      ]
    },
    {
      name: "Aizawl Urban Dip-Slope Vulnerability Zone",
      state: "Mizoram",
      region: "North East",
      risk_level: "Critical",
      coordinates: [
        [23.6800, 92.6800],
        [23.7700, 92.7000],
        [23.7600, 92.7600],
        [23.6700, 92.7400]
      ]
    },
    {
      name: "Joshimath-Chamoli Active Subsidence Zone",
      state: "Uttarakhand",
      region: "North India",
      risk_level: "Critical",
      coordinates: [
        [30.5200, 79.5200],
        [30.5900, 79.5500],
        [30.5800, 79.6100],
        [30.5000, 79.5800]
      ]
    },
    {
      name: "Kinnaur Nigulsari-Sutlej Canyon Shear Belt",
      state: "Himachal Pradesh",
      region: "North India",
      risk_level: "Critical",
      coordinates: [
        [31.4800, 77.9500],
        [31.5800, 78.0200],
        [31.5500, 78.1000],
        [31.4500, 78.0400]
      ]
    },
    {
      name: "Wayanad Chooralmala-Meppadi Debris Flow Belt",
      state: "Kerala",
      region: "South India",
      risk_level: "Critical",
      coordinates: [
        [11.4800, 76.1200],
        [11.5800, 76.1500],
        [11.5600, 76.2400],
        [11.4500, 76.2000]
      ]
    },
    {
      name: "NH-44 Ramban-Khooni Nallah Corridor",
      state: "Jammu & Kashmir",
      region: "North India",
      risk_level: "Critical",
      coordinates: [
        [33.2000, 75.1800],
        [33.3000, 75.2200],
        [33.2800, 75.3000],
        [33.1800, 75.2600]
      ]
    },
    {
      name: "Panchkula Morni Hills Shivalik Slide Belt",
      state: "Haryana",
      region: "North India",
      risk_level: "High",
      coordinates: [
        [30.6400, 76.9600],
        [30.7400, 77.0100],
        [30.7100, 77.0900],
        [30.6200, 77.0400]
      ]
    },
    {
      name: "Pathankot Dhar Kalan Shivalik Escarpment",
      state: "Punjab",
      region: "North India",
      risk_level: "High",
      coordinates: [
        [32.3200, 75.8200],
        [32.4200, 75.8700],
        [32.4000, 75.9500],
        [32.3000, 75.9000]
      ]
    }
  ]
};

// Export for Node/CommonJS environments if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NER_LANDSLIDE_DATA;
}
