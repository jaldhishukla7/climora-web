export interface ProductSpec {
  label: string
  value: string
}

export interface ProductData {
  slug: string
  title: string
  tagline: string
  description: string
  longDescription: string
  image: string
  features: string[]
  specifications: ProductSpec[]
  applications: string[]
  benefits: { title: string; description: string }[]
}

export const allProducts: ProductData[] = [
  {
    slug: "air-handling-units",
    title: "Air Handling Units",
    tagline: "Precision-engineered airflow for demanding environments",
    description:
      "Precision-engineered AHUs designed for optimal air quality, temperature control, and energy efficiency in demanding industrial environments.",
    longDescription:
      "Climora's Air Handling Units (AHUs) are the cornerstone of modern HVAC systems. Designed for industrial and commercial facilities that demand reliable, high-performance air management, our AHUs integrate seamlessly with building management systems to deliver consistent temperature, humidity, and air quality control. Built from galvanized steel with double-skin panels and thermal breaks, they minimize energy loss while maximizing airflow efficiency.",
    image: "/images/products/ahu.jpg",
    features: [
      "Double-skin insulated panels with thermal break construction",
      "EC (Electronically Commutated) fan motors for energy savings",
      "HEPA, bag, and panel filter options up to F9 grade",
      "Integrated heating and cooling coils",
      "Variable Air Volume (VAV) control compatibility",
      "BMS / SCADA integration ready",
      "Modular design for easy on-site assembly",
      "Corrosion-resistant casing for harsh environments",
    ],
    specifications: [
      { label: "Airflow Capacity", value: "500 – 200,000 CFM" },
      { label: "Static Pressure", value: "Up to 150 mmWC" },
      { label: "Casing Material", value: "Galvanized Steel / Stainless Steel" },
      { label: "Panel Insulation", value: "50 mm PUF / Mineral Wool" },
      { label: "Filter Efficiency", value: "G4 to H14 (HEPA)" },
      { label: "Drive Type", value: "Direct / Belt Drive" },
      { label: "Power Supply", value: "415V, 3-Phase, 50 Hz" },
      { label: "Compliance", value: "ISO 16890, ASHRAE 52.2" },
    ],
    applications: [
      "Pharmaceutical & Biotech cleanrooms",
      "Hospitals & Healthcare facilities",
      "Data centers & Server rooms",
      "Food & Beverage processing plants",
      "Textile & Garment manufacturing",
      "Commercial offices & Malls",
    ],
    benefits: [
      {
        title: "Energy Efficient",
        description: "EC fans and VFD controls reduce energy consumption by up to 50% compared to conventional units.",
      },
      {
        title: "Superior Air Quality",
        description: "Multi-stage filtration ensures clean, healthy indoor air conforming to international standards.",
      },
      {
        title: "Low Maintenance",
        description: "Easy-access panels and modular components reduce downtime and service costs significantly.",
      },
    ],
  },
  {
    slug: "air-washer-units",
    title: "Air Washer Units",
    tagline: "Clean, humidified air for comfort and productivity",
    description:
      "Advanced air washing systems that combine humidification and air cleaning for improved indoor air quality and comfort.",
    longDescription:
      "Climora Air Washer Units use water-spray technology to simultaneously cool, humidify, and clean incoming air. Ideal for textile mills, printing presses, and large commercial spaces, they remove dust, pollen, and soluble gases while maintaining precise humidity levels. Our air washers are designed for high efficiency and low operating costs, making them the preferred choice for process industries where humidity control is critical.",
    image: "/images/products/air-washer.jpg",
    features: [
      "Spray nozzle array for uniform water distribution",
      "SS 304 water tank with automatic level control",
      "Eliminators to prevent water carry-over",
      "Pre-filter and after-filter sections",
      "Automatic humidity control with sensors",
      "High-efficiency centrifugal / axial fans",
      "Corrosion-resistant casing",
      "Easy drain and clean-out access",
    ],
    specifications: [
      { label: "Airflow Capacity", value: "2,000 – 100,000 CFM" },
      { label: "Humidity Control Range", value: "40% – 95% RH" },
      { label: "Water Consumption", value: "0.5 – 5 L/min per unit" },
      { label: "Casing Material", value: "MS Powder Coated / SS 304" },
      { label: "Nozzle Material", value: "Brass / Stainless Steel" },
      { label: "Fan Type", value: "Centrifugal / Axial" },
      { label: "Power Supply", value: "415V, 3-Phase, 50 Hz" },
      { label: "Pump Head", value: "Up to 30 m" },
    ],
    applications: [
      "Textile spinning & weaving mills",
      "Printing & packaging industries",
      "Foundries & metal processing",
      "Commercial warehouses",
      "Agricultural storage facilities",
      "Paper & pulp manufacturing",
    ],
    benefits: [
      {
        title: "Dual Action: Cool & Humidify",
        description: "Simultaneously cools and humidifies incoming air, reducing load on refrigeration systems.",
      },
      {
        title: "Natural Air Purification",
        description: "Water spray scrubs dust, pollen, and soluble gases out of the air stream naturally.",
      },
      {
        title: "Cost-Effective Operation",
        description: "Low energy consumption compared to refrigerant-based systems with minimal running costs.",
      },
    ],
  },
  {
    slug: "dehumidifiers",
    title: "Dehumidifiers",
    tagline: "Precise humidity control for sensitive processes",
    description:
      "Industrial-grade dehumidification systems ensuring precise humidity control for sensitive manufacturing processes.",
    longDescription:
      "Climora industrial dehumidifiers are engineered to maintain optimal humidity levels in environments where excess moisture causes product defects, equipment corrosion, or health hazards. Available in refrigerant-based and desiccant-based configurations, our dehumidifiers serve pharmaceutical storage, food processing, electronics manufacturing, and more. With intelligent controls and remote monitoring capability, they ensure 24/7 stable conditions.",
    image: "/images/products/dehumidifier.jpg",
    features: [
      "Refrigerant-based and desiccant wheel options",
      "Digital humidity controller with ±2% RH accuracy",
      "Auto-defrost cycle for low-temperature operation",
      "Continuous drainage or internal tank options",
      "Washable pre-filter for extended life",
      "Remote monitoring via BMS / RS485 Modbus",
      "Compact and portable or ducted configurations",
      "Stainless steel internals for food-grade use",
    ],
    specifications: [
      { label: "Dehumidification Capacity", value: "20 – 5,000 L/day" },
      { label: "Humidity Control", value: "30% – 90% RH" },
      { label: "Operating Temperature", value: "-20°C to +50°C" },
      { label: "Refrigerant", value: "R-410A / R-134a (eco-friendly)" },
      { label: "Airflow", value: "200 – 10,000 m³/hr" },
      { label: "Casing", value: "Powder-Coated Steel / SS 304" },
      { label: "Power Supply", value: "230V Single / 415V Three Phase" },
      { label: "Compliance", value: "ISO 13793, ASHRAE 62.1" },
    ],
    applications: [
      "Pharmaceutical storage & manufacturing",
      "Food & Beverage processing",
      "Electronics & PCB assembly",
      "Museums & archival storage",
      "Swimming pools & indoor water parks",
      "Construction & restoration sites",
    ],
    benefits: [
      {
        title: "Prevent Corrosion & Mold",
        description: "Maintains safe humidity levels to protect equipment, products, and building structures.",
      },
      {
        title: "Precise Digital Control",
        description: "Accurate ±2% RH control ensures stable conditions for sensitive manufacturing processes.",
      },
      {
        title: "Year-Round Reliability",
        description: "Auto-defrost and wide operating temperature range ensure performance in all climates.",
      },
    ],
  },
  {
    slug: "evaporative-cooling",
    title: "Evaporative Cooling",
    tagline: "Eco-friendly cooling powered by nature",
    description:
      "Eco-friendly cooling solutions utilizing natural evaporation processes for sustainable temperature management.",
    longDescription:
      "Climora's Evaporative Cooling systems harness the natural power of water evaporation to deliver effective, energy-efficient cooling without harmful refrigerants. Up to 80% more energy-efficient than conventional air conditioning, our evaporative coolers are ideal for large open or semi-open industrial spaces like factories, warehouses, and sports arenas. They provide fresh, filtered air continuously — making the environment healthier and more comfortable.",
    image: "/images/products/evaporative.jpg",
    features: [
      "Cellulose or rigid media cooling pads",
      "Water distribution system with anti-scaling nozzles",
      "Variable speed fan motor (VFD controlled)",
      "Automatic water level float valve",
      "Built-in drain valve for easy maintenance",
      "Optional evaporative pre-cooling for chillers",
      "Louver-controlled airflow direction",
      "Eco-friendly — no refrigerants used",
    ],
    specifications: [
      { label: "Cooling Capacity", value: "1,000 – 50,000 CFM" },
      { label: "Pad Thickness", value: "100 mm / 150 mm" },
      { label: "Water Flow Rate", value: "5 – 50 L/min" },
      { label: "Temperature Drop", value: "Up to 12°C (dry conditions)" },
      { label: "Media Type", value: "Cellulose / Rigid Corrugated PVC" },
      { label: "Power Consumption", value: "0.5 – 5 kW (typical)" },
      { label: "Casing Material", value: "UV-Stabilised Plastic / GI Steel" },
      { label: "Warranty", value: "2 Years Comprehensive" },
    ],
    applications: [
      "Factories & manufacturing plants",
      "Warehouses & logistics centers",
      "Poultry farms & greenhouses",
      "Sports arenas & event venues",
      "Outdoor industrial workspaces",
      "Pre-cooling for condensers & chillers",
    ],
    benefits: [
      {
        title: "Up to 80% Energy Savings",
        description: "Uses only water and a fan — dramatically lower running costs vs. refrigerant-based AC.",
      },
      {
        title: "100% Fresh Air Supply",
        description: "Continuously draws in and cools fresh outdoor air rather than recirculating stale air.",
      },
      {
        title: "Zero Refrigerants",
        description: "Environmentally friendly — no F-gases, no ozone depletion, no carbon penalties.",
      },
    ],
  },
  {
    slug: "fresh-air-units",
    title: "Fresh Air Units",
    tagline: "Continuous fresh air with energy recovery",
    description:
      "High-performance fresh air handling systems providing continuous ventilation with energy recovery capabilities.",
    longDescription:
      "Climora Fresh Air Units (FAUs) are designed to continuously introduce pre-conditioned outdoor air into occupied spaces, ensuring healthy indoor environments without compromising energy efficiency. Equipped with heat recovery wheels or plate heat exchangers, they recover up to 80% of the thermal energy from exhaust air, significantly reducing the energy cost of ventilation. Ideal for offices, hospitals, malls, and hotels.",
    image: "/images/products/fresh-air.jpg",
    features: [
      "Rotary heat recovery wheel (up to 80% efficiency)",
      "Plate heat exchanger option for cross-flow recovery",
      "Pre-filter + fine filter multi-stage filtration",
      "Cooling and heating coil sections",
      "Variable speed supply and exhaust fans",
      "Frost protection control for cold climates",
      "Bypass damper for free cooling",
      "CO₂ / IAQ demand-controlled ventilation",
    ],
    specifications: [
      { label: "Fresh Air Capacity", value: "500 – 50,000 CFM" },
      { label: "Heat Recovery Efficiency", value: "Up to 80%" },
      { label: "Filter Class", value: "G4 + F7 (standard)" },
      { label: "Casing Insulation", value: "50 mm PUF panels" },
      { label: "Fan Type", value: "Backward Curved EC Fan" },
      { label: "Controls", value: "Modbus RTU / BACnet compatible" },
      { label: "Power Supply", value: "415V, 3-Phase, 50 Hz" },
      { label: "Compliance", value: "ASHRAE 62.1, EN 308" },
    ],
    applications: [
      "Corporate offices & IT parks",
      "Hospitals & healthcare facilities",
      "Hotels & luxury resorts",
      "Shopping malls & retail outlets",
      "Schools & educational institutions",
      "Residential apartments (MVHR systems)",
    ],
    benefits: [
      {
        title: "Healthier Indoor Air",
        description: "Continuous fresh air supply dilutes CO₂, VOCs, and pollutants for better occupant health.",
      },
      {
        title: "Energy Recovery",
        description: "Recovers up to 80% heat from exhaust air, drastically reducing cooling and heating loads.",
      },
      {
        title: "Smart Demand Control",
        description: "CO₂ sensors adjust ventilation rates automatically, saving energy when spaces are unoccupied.",
      },
    ],
  },
  {
    slug: "fan-coil-units",
    title: "Fan Coil Units",
    tagline: "Zone-level comfort control for modern buildings",
    description:
      "Compact and efficient FCUs delivering precise zone-level heating and cooling for commercial spaces.",
    longDescription:
      "Climora Fan Coil Units (FCUs) provide flexible, zone-by-zone climate control for modern commercial and residential buildings. Available in horizontal concealed, vertical floor-standing, cassette, and ducted configurations, they work with both 2-pipe and 4-pipe chilled/hot water systems. Low-noise EC motors ensure quiet operation while smart thermostats enable occupant comfort control and energy savings.",
    image: "/images/products/fcu.jpg",
    features: [
      "Available in 2-pipe and 4-pipe configurations",
      "Cassette, concealed, console, and vertical types",
      "Low-noise EC fan motors (≤35 dB(A))",
      "Copper tube, aluminium fin coil",
      "Washable anti-bacterial filters",
      "3-speed fan with auto mode",
      "Compatible with smart thermostats & BMS",
      "Drain pan with overflow protection",
    ],
    specifications: [
      { label: "Cooling Capacity", value: "0.5 – 15 kW per unit" },
      { label: "Airflow", value: "150 – 2,500 m³/hr" },
      { label: "Noise Level", value: "25 – 45 dB(A)" },
      { label: "Water Pipe Size", value: "DN15 – DN25" },
      { label: "Chilled Water Temp", value: "7°C / 12°C" },
      { label: "Hot Water Temp", value: "45°C / 40°C" },
      { label: "Power Supply", value: "230V, Single Phase, 50 Hz" },
      { label: "Control", value: "0-10V / On-Off / Modulating valve" },
    ],
    applications: [
      "Corporate offices & co-working spaces",
      "Hotels & serviced apartments",
      "Hospitals & patient rooms",
      "Retail shops & showrooms",
      "Residential apartments",
      "Server rooms (supplemental cooling)",
    ],
    benefits: [
      {
        title: "Zone-Level Control",
        description: "Individual control per room or zone maximizes comfort and avoids energy waste in unoccupied areas.",
      },
      {
        title: "Ultra-Quiet Operation",
        description: "EC motors and optimised blade design deliver near-silent performance ideal for offices and hotels.",
      },
      {
        title: "Easy Installation",
        description: "Compact, lightweight units fit into ceilings and walls with minimal structural modifications.",
      },
    ],
  },
  {
    slug: "industrial-scrubbers",
    title: "Industrial Scrubbers",
    tagline: "Advanced pollution control for cleaner operations",
    description:
      "Advanced pollution control systems removing harmful particles and gases from industrial exhaust streams.",
    longDescription:
      "Climora Industrial Scrubbers are robust air pollution control systems designed to remove harmful dust, fumes, mists, and gaseous pollutants from industrial exhaust streams before discharge to atmosphere. Available as wet scrubbers, dry scrubbers, and venturi scrubbers, they meet CPCB / PCB emission norms for industries like chemical, pharma, metal processing, and waste treatment. Our scrubbers protect both workers and the environment.",
    image: "/images/products/scrubber.jpg",
    features: [
      "Wet, dry, and venturi scrubber configurations",
      "High-efficiency mist eliminators",
      "PP, FRP, or SS construction for corrosive environments",
      "Automatic pH control for wet scrubbers",
      "Variable throat venturi for variable flow",
      "Packed tower for gas absorption",
      "Integrated fan and stack assembly",
      "CPCB-compliant design and documentation",
    ],
    specifications: [
      { label: "Airflow Capacity", value: "1,000 – 200,000 m³/hr" },
      { label: "Collection Efficiency", value: "Up to 99.5% for PM2.5" },
      { label: "Material of Construction", value: "PP / FRP / SS 316L" },
      { label: "Operating Temperature", value: "Up to 200°C" },
      { label: "Inlet Dust Load", value: "Up to 50 g/Nm³" },
      { label: "Pressure Drop", value: "50 – 500 mmWC" },
      { label: "pH Control Range", value: "2 – 12" },
      { label: "Compliance", value: "CPCB / GPCB / MoEF Norms" },
    ],
    applications: [
      "Chemical & petrochemical plants",
      "Pharmaceutical API manufacturing",
      "Fertilizer & pesticide production",
      "Metal plating & surface treatment",
      "Incineration & waste treatment",
      "Cement & ceramic manufacturing",
    ],
    benefits: [
      {
        title: "Regulatory Compliance",
        description: "CPCB-compliant systems ensure your plant avoids fines, shutdowns, and legal liability.",
      },
      {
        title: "Worker Safety",
        description: "Removes toxic fumes and fine particles at source, protecting workers and surrounding communities.",
      },
      {
        title: "Corrosion-Resistant Build",
        description: "FRP/PP/SS construction handles aggressive acids, alkalis, and high-temperature exhaust.",
      },
    ],
  },
  {
    slug: "clean-room-systems",
    title: "Clean Room Systems",
    tagline: "ISO-certified environments for contamination-free production",
    description:
      "Complete cleanroom HVAC solutions meeting ISO standards for pharmaceutical and semiconductor facilities.",
    longDescription:
      "Climora delivers end-to-end cleanroom HVAC systems — from design and engineering to installation, validation, and commissioning. Our cleanrooms achieve ISO Class 3 to ISO Class 8 classifications with precisely controlled temperature, humidity, pressure differentials, and particulate counts. We serve pharmaceutical, biotech, semiconductor, and medical device manufacturers who demand zero-compromise environmental control.",
    image: "/images/products/cleanroom.jpg",
    features: [
      "HEPA / ULPA terminal filter units (H13–U16)",
      "Laminar flow supply air distribution",
      "Pressure cascade control (positive / negative)",
      "Temperature ±0.5°C and RH ±2% control accuracy",
      "GMP-compliant construction materials",
      "Stainless steel flush panels and coved corners",
      "Continuous particle monitoring integration",
      "IQ/OQ/PQ validation documentation",
    ],
    specifications: [
      { label: "ISO Classification", value: "ISO Class 3 – Class 8" },
      { label: "Filter Type", value: "HEPA H13 / ULPA U15-U16" },
      { label: "Air Changes per Hour", value: "20 – 600 ACH" },
      { label: "Temperature Control", value: "18°C – 25°C ± 0.5°C" },
      { label: "Humidity Control", value: "30% – 60% RH ± 2%" },
      { label: "Pressure Differential", value: "5 – 20 Pa between zones" },
      { label: "Particle Count", value: "Per ISO 14644-1 Table 1" },
      { label: "Compliance", value: "WHO GMP, EU GMP, 21 CFR Part 11" },
    ],
    applications: [
      "Pharmaceutical tablet & sterile manufacturing",
      "Biotech & vaccine production",
      "Semiconductor & microelectronics fabrication",
      "Medical device assembly",
      "Aerospace component manufacturing",
      "Research laboratories & BSL facilities",
    ],
    benefits: [
      {
        title: "Regulatory-Ready",
        description: "Full IQ/OQ/PQ documentation and WHO/EU GMP compliance for smooth regulatory audits.",
      },
      {
        title: "Zero Contamination",
        description: "ULPA filters and laminar flow achieve sub-micron particulate control for critical environments.",
      },
      {
        title: "Turnkey Delivery",
        description: "From concept design to validated handover — Climora manages the entire cleanroom project.",
      },
    ],
  },
  {
    slug: "ventilation-systems",
    title: "Ventilation Systems",
    tagline: "Engineered airflow for factories and commercial buildings",
    description:
      "Comprehensive ventilation engineering for factories, warehouses, and commercial buildings.",
    longDescription:
      "Climora provides complete mechanical ventilation solutions covering supply air, exhaust air, and make-up air systems for industrial and commercial facilities. Our ventilation designs address thermal comfort, fume dilution, smoke extraction, and regulatory compliance. Whether it's a high-bay factory requiring destratification fans or a basement car park needing jet fans, Climora engineers the right solution for every application.",
    image: "/images/products/ventilation.jpg",
    features: [
      "Axial, centrifugal, and mixed-flow fan options",
      "Duct design and pressure drop optimisation",
      "Smoke extraction and fire-rated duct systems",
      "Car park jet fan ventilation systems",
      "Roof-mounted extract and supply units",
      "Louvre and damper systems for airflow control",
      "Natural and hybrid ventilation integration",
      "Energy recovery from exhaust streams",
    ],
    specifications: [
      { label: "Airflow Range", value: "500 – 500,000 m³/hr" },
      { label: "Fan Types", value: "Axial / Centrifugal / Mixed Flow" },
      { label: "Static Pressure", value: "Up to 200 mmWC" },
      { label: "Duct Material", value: "GI / SS / FRP / Spiral" },
      { label: "Fire Rating", value: "120 min rated (F/S class)" },
      { label: "Noise Control", value: "Silencers & vibration isolators" },
      { label: "Drive", value: "Direct / Belt / VFD" },
      { label: "Compliance", value: "NBC 2016, NFPA 92, EN 12101" },
    ],
    applications: [
      "Industrial factories & manufacturing plants",
      "Underground car parks",
      "Warehouses & cold storage",
      "Commercial kitchens",
      "Tunnel & metro ventilation",
      "Atrium & high-rise smoke control",
    ],
    benefits: [
      {
        title: "Code Compliant",
        description: "Designs meet NBC 2016, NFPA 92, and local fire safety codes for safe, legal operation.",
      },
      {
        title: "Energy Optimised",
        description: "VFD-controlled fans and demand-based controls cut energy consumption significantly.",
      },
      {
        title: "Custom Engineered",
        description: "Every system is CFD-modelled and engineered to the specific layout and load of your facility.",
      },
    ],
  },
  {
    slug: "exhaust-units",
    title: "Exhaust Units",
    tagline: "Powerful extraction to keep your space clean and safe",
    description:
      "High-performance exhaust units designed to efficiently remove stale air, heat, fumes, and contaminants from industrial and commercial spaces.",
    longDescription:
      "Climora Exhaust Units are purpose-built to remove heat, moisture, odours, and airborne contaminants from industrial and commercial environments. Available as inline, roof-mounted, wall-mounted, and ducted configurations, they work as standalone extract systems or as part of a complete supply-and-extract ventilation strategy. With robust motor options and weather-resistant casings, Climora exhaust units are built for continuous, reliable operation even in harsh conditions.",
    image: "/images/products/exhaust-unit.jpg",
    features: [
      "Roof, wall, and inline mounting configurations",
      "Backward-curved and axial impeller designs",
      "Variable frequency drive (VFD) speed control",
      "Weather-resistant aluminium / GI / FRP casing",
      "Integrated backdraft damper",
      "Low-noise operation with vibration-isolated mounts",
      "High-temperature rated models (up to 200°C)",
      "ATEX-rated options for hazardous zones",
    ],
    specifications: [
      { label: "Airflow Capacity", value: "200 – 100,000 m³/hr" },
      { label: "Static Pressure", value: "Up to 100 mmWC" },
      { label: "Casing Material", value: "GI / Aluminium / FRP / SS" },
      { label: "Motor Type", value: "IE3 / EC Motor" },
      { label: "Max Operating Temp", value: "Up to 200°C (special models)" },
      { label: "Noise Level", value: "45 – 75 dB(A) at 1m" },
      { label: "Power Supply", value: "230V / 415V, 50 Hz" },
      { label: "Compliance", value: "IS 4894, EN 14604, ATEX (optional)" },
    ],
    applications: [
      "Commercial kitchens & restaurants",
      "Industrial workshops & factories",
      "Parking structures & basements",
      "Chemical storage & handling areas",
      "Toilet & locker room extraction",
      "Paint booths & spray areas",
    ],
    benefits: [
      {
        title: "Reliable Extraction",
        description: "Robust motors and weather-resistant casings ensure continuous, maintenance-free operation.",
      },
      {
        title: "Safe Environments",
        description: "Removes fumes, heat, and contaminants at source — protecting workers and equipment.",
      },
      {
        title: "Flexible Configurations",
        description: "Roof, wall, or inline options adapt to any building layout with minimal structural changes.",
      },
    ],
  },
]

export function getProductBySlug(slug: string): ProductData | undefined {
  return allProducts.find((p) => p.slug === slug)
}
