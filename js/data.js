// ============================================================
// VELORIDE INDIA — BIKE RENTAL CATALOG DATA (Prices in ₹ INR)
// ============================================================

const BIKES_DATA = [

  // ==================== MOTORCYCLES & SUPERBIKES ====================
  {
    id: "bike-m1",
    name: "Royal Enfield Classic 350",
    category: "motorcycle",
    categoryLabel: "Cruiser Motorcycle",
    typeTag: "Motorbike",
    tagline: "The legendary retro thumper with effortless highway cruising and timeless styling.",
    hourlyRate: 200,
    dailyRate: 900,
    deposit: 5000,
    rating: 4.95,
    reviewsCount: 312,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80",
    specs: {
      engine: "349cc J-Series Single-Cyl",
      power: "20.2 BHP @ 6100 RPM",
      fuel: "Petrol (38 km/L)",
      topSpeed: "115 km/h",
      transmission: "5-Speed Manual",
      brakes: "Dual-Channel ABS"
    },
    features: ["ISI Approved Full-Face Helmet", "Saddle Bags Included", "USB Mobile Charging Port", "Crash Guard Installed"],
    popular: true,
    available: true,
    locationHub: "Connaught Place Hub"
  },
  {
    id: "bike-m2",
    name: "KTM Duke 390 Naked Sport",
    category: "motorcycle",
    categoryLabel: "Sports Motorcycle",
    typeTag: "Superbike",
    tagline: "Aggressive streetfighter with class-leading 44 BHP and razor-sharp handling.",
    hourlyRate: 350,
    dailyRate: 1400,
    deposit: 8000,
    rating: 4.92,
    reviewsCount: 264,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80",
    specs: {
      engine: "398.7cc Liquid-Cooled",
      power: "44.3 BHP / 39 Nm",
      fuel: "Petrol (28 km/L)",
      topSpeed: "168 km/h",
      transmission: "6-Speed + Quickshifter",
      brakes: "Brembo Radial Calipers"
    },
    features: ["TFT Colour Display + BT", "Cornering ABS & Traction Control", "Riding Gloves Included", "LED Lighting"],
    popular: true,
    available: true,
    locationHub: "Banjara Hills Garage"
  },
  {
    id: "bike-m3",
    name: "Royal Enfield Himalayan 450",
    category: "motorcycle",
    categoryLabel: "Adventure Tourer",
    typeTag: "Motorbike",
    tagline: "Purpose-built adventure tourer designed for mountain passes, dirt trails, and highways.",
    hourlyRate: 300,
    dailyRate: 1200,
    deposit: 7000,
    rating: 4.90,
    reviewsCount: 198,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80",
    specs: {
      engine: "452cc Sherpa Liquid-Cooled",
      power: "40 BHP @ 8000 RPM",
      fuel: "Petrol (32 km/L)",
      topSpeed: "150 km/h",
      transmission: "6-Speed Slipper Clutch",
      brakes: "Switchable Off-Road ABS"
    },
    features: ["Google Maps Tripper Navigator", "Aluminium Panniers Option", "200mm Long-Travel Suspension", "High Windscreen"],
    popular: false,
    available: true,
    locationHub: "Indiranagar Cycle Hub"
  },
  {
    id: "bike-m4",
    name: "Yamaha YZF-R15 V4 Racing",
    category: "motorcycle",
    categoryLabel: "Sports Motorcycle",
    typeTag: "Superbike",
    tagline: "Aerodynamic supersport machine with VVA engine and upside-down golden forks.",
    hourlyRate: 280,
    dailyRate: 1100,
    deposit: 6500,
    rating: 4.88,
    reviewsCount: 220,
    image: "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=900&q=80",
    specs: {
      engine: "155cc Liquid-Cooled VVA",
      power: "18.4 BHP @ 10,000 RPM",
      fuel: "Petrol (45 km/L)",
      topSpeed: "142 km/h",
      transmission: "6-Speed + Quickshifter",
      brakes: "Dual Channel ABS"
    },
    features: ["Track & Street Ride Modes", "Traction Control System", "USD Golden Telescopic Fork", "Aerodynamic Winglets"],
    popular: true,
    available: true,
    locationHub: "Marine Drive Depot"
  },
  {
    id: "bike-m5",
    name: "Bajaj Dominar 400 Tourer",
    category: "motorcycle",
    categoryLabel: "Sport Tourer",
    typeTag: "Motorbike",
    tagline: "Commanding power cruiser with twin exhaust and fully digital instrument cluster.",
    hourlyRate: 250,
    dailyRate: 999,
    deposit: 6000,
    rating: 4.85,
    reviewsCount: 186,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
    specs: {
      engine: "373.3cc DOHC Liquid-Cooled",
      power: "40 BHP / 35 Nm Torque",
      fuel: "Petrol (27 km/L)",
      topSpeed: "160 km/h",
      transmission: "6-Speed Slipper Clutch",
      brakes: "Dual Channel ABS"
    },
    features: ["Full Digital Instrument Display", "LED DRL Headlight Stack", "Slipper Assist Clutch", "USB Charging Port"],
    popular: false,
    available: true,
    locationHub: "Connaught Place Hub"
  },

  // ==================== SCOOTERS & MOPEDS ====================
  {
    id: "bike-s1",
    name: "Vespa SXL 150 Italian Classic",
    category: "scooter",
    categoryLabel: "Retro Scooter",
    typeTag: "Scooter",
    tagline: "Elegant Italian design with premium chrome highlights and automatic twist-and-go riding.",
    hourlyRate: 150,
    dailyRate: 650,
    deposit: 3000,
    rating: 4.86,
    reviewsCount: 194,
    image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=900&q=80",
    specs: {
      engine: "154.8cc 3-Valve i-Get",
      power: "12.7 BHP @ 7750 RPM",
      fuel: "Petrol (42 km/L)",
      topSpeed: "98 km/h",
      transmission: "Automatic CVT",
      brakes: "Front 200mm Disc ABS"
    },
    features: ["Matching Retro Chrome Mirrors", "Under-Seat Helmet Storage", "USB Charging Port", "Rear Chrome Rack"],
    popular: true,
    available: true,
    locationHub: "Marine Drive Depot"
  },
  {
    id: "bike-s2",
    name: "Honda Activa 6G Premium",
    category: "scooter",
    categoryLabel: "City Scooter",
    typeTag: "Scooter",
    tagline: "India's most trusted automatic scooter with exceptional fuel economy and comfort.",
    hourlyRate: 100,
    dailyRate: 450,
    deposit: 2000,
    rating: 4.80,
    reviewsCount: 520,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=80",
    specs: {
      engine: "109.51cc OHC Single-Cyl",
      power: "7.91 BHP @ 8000 RPM",
      fuel: "Petrol (55 km/L)",
      topSpeed: "95 km/h",
      transmission: "Automatic Twist & Go",
      brakes: "Combi Brake System"
    },
    features: ["External Fuel Lid", "35L Boot Space", "Alloy Wheels", "Two Helmets Included"],
    popular: true,
    available: true,
    locationHub: "Indiranagar Cycle Hub"
  },
  {
    id: "bike-s3",
    name: "Ather 450X Gen 3 Electric",
    category: "scooter",
    categoryLabel: "Electric Scooter",
    typeTag: "E-Scooter",
    tagline: "Warp Mode 0-40 in 3.3 sec with a 7-inch touchscreen and built-in Google Maps.",
    hourlyRate: 180,
    dailyRate: 750,
    deposit: 3500,
    rating: 4.93,
    reviewsCount: 285,
    image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?auto=format&fit=crop&w=900&q=80",
    specs: {
      motor: "6.2 kW PMS Motor",
      battery: "3.7 kWh IP67 Lithium",
      range: "105 km Real-World",
      topSpeed: "90 km/h",
      transmission: "Direct Belt Drive",
      brakes: "Regenerative Disc Brakes"
    },
    features: ["7-inch Smart Touchscreen", "Warp & Eco Ride Modes", "Park Assist (Reverse)", "Fast Charge 0-80% in 45min"],
    popular: true,
    available: true,
    locationHub: "Connaught Place Hub"
  },

  // ==================== ELECTRIC E-BIKES ====================
  {
    id: "bike-e1",
    name: "Hero Lectro CargoMax E-Cycle",
    category: "electric",
    categoryLabel: "Electric Bicycle",
    typeTag: "E-Bike",
    tagline: "Lightweight pedal-assisted e-cycle with 70 km range — perfect for city commuting.",
    hourlyRate: 120,
    dailyRate: 499,
    deposit: 2500,
    rating: 4.88,
    reviewsCount: 188,
    image: "https://images.unsplash.com/photo-1558981852-426c099ec5c6?auto=format&fit=crop&w=900&q=80",
    specs: {
      motor: "250W BLDC Rear Hub",
      battery: "36V 7.8Ah Li-ion",
      range: "70 km Pedal Assist",
      topSpeed: "25 km/h Assisted",
      gears: "7-Speed Shimano",
      weight: "19.5 kg"
    },
    features: ["LCD Display with USB Charging", "Integrated LED Headlight", "Anti-theft Lock Included", "Puncture-Proof Tires"],
    popular: true,
    available: true,
    locationHub: "Banjara Hills Garage"
  },
  {
    id: "bike-e2",
    name: "Revolt RV400 Electric Moto",
    category: "electric",
    categoryLabel: "Electric Motorcycle",
    typeTag: "E-Motorcycle",
    tagline: "AI-enabled electric motorbike with 150 km range and swappable battery tech.",
    hourlyRate: 220,
    dailyRate: 899,
    deposit: 5000,
    rating: 4.88,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80",
    specs: {
      motor: "3.0 kW Mid-Drive Motor",
      battery: "3.24 kWh Swappable Li-ion",
      range: "150 km Eco Mode",
      topSpeed: "85 km/h",
      transmission: "Single-Speed Belt Drive",
      brakes: "Combined Braking System"
    },
    features: ["Mobile App Keyless Ignition", "Custom Exhaust Sound Generator", "Geo-Fencing & Anti-Theft", "Fast Charging Adapter"],
    popular: false,
    available: true,
    locationHub: "Marine Drive Depot"
  },
  {
    id: "bike-e3",
    name: "Tata-Stryder Zeeta Plus E-MTB",
    category: "electric",
    categoryLabel: "Electric Mountain Bike",
    typeTag: "E-MTB",
    tagline: "Powerful 36V electric mountain bike perfect for Indian hill terrains and forest trails.",
    hourlyRate: 200,
    dailyRate: 849,
    deposit: 4500,
    rating: 4.82,
    reviewsCount: 96,
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=900&q=80",
    specs: {
      motor: "250W Rear Hub Motor",
      battery: "36V 10.4Ah Li-ion",
      range: "65 km Assisted",
      topSpeed: "25 km/h Assist",
      gears: "21-Speed Shimano",
      weight: "22 kg"
    },
    features: ["Shimano Acera Groupset", "Mechanical Disc Brakes", "Front Suspension Fork", "Helmet & Lock Included"],
    popular: false,
    available: true,
    locationHub: "Indiranagar Cycle Hub"
  },

  // ==================== MOUNTAIN BIKES (MTB) ====================
  {
    id: "bike-mtb1",
    name: "Firefox Target Pro 27.5T MTB",
    category: "mountain",
    categoryLabel: "Mountain Bike",
    typeTag: "Bicycle",
    tagline: "Indian-terrain MTB with 21-speed Shimano gears and strong hydraulic disc brakes.",
    hourlyRate: 80,
    dailyRate: 349,
    deposit: 2000,
    rating: 4.88,
    reviewsCount: 148,
    image: "https://images.unsplash.com/photo-1520197444539-fd17a813f2c7?auto=format&fit=crop&w=900&q=80",
    specs: {
      gears: "21-Speed Shimano Tourney",
      brakes: "Mechanical Disc Brakes",
      suspension: "80mm SR Suntour XCT Fork",
      wheelSize: "27.5 x 2.1 inch",
      frame: "6061 Alloy Hydroformed",
      weight: "12.8 kg"
    },
    features: ["Wide 740mm Handlebars", "Helmet & Lock Included", "Bottle Cage & Toolkit", "Trail Mudguards"],
    popular: true,
    available: true,
    locationHub: "Connaught Place Hub"
  },
  {
    id: "bike-mtb2",
    name: "Btwin Rockrider 520 Pro",
    category: "mountain",
    categoryLabel: "Performance MTB",
    typeTag: "Bicycle",
    tagline: "French engineering for single-track dominance with hydraulic disc brakes and 29-inch wheels.",
    hourlyRate: 130,
    dailyRate: 550,
    deposit: 3000,
    rating: 4.92,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=900&q=80",
    specs: {
      gears: "27-Speed Shimano Deore",
      brakes: "Hydraulic Disc Brakes",
      suspension: "100mm SR Suntour XCR",
      wheelSize: "29 x 2.25 Tubeless",
      frame: "6061 Double-Butted Alloy",
      weight: "13.2 kg"
    },
    features: ["Remote Dropper Seatpost", "Tubeless Ready Wheels", "Wide 780mm Rise Bar", "Gloves & Knee Guard Included"],
    popular: true,
    available: true,
    locationHub: "Banjara Hills Garage"
  },

  // ==================== ROAD & SPEED BIKES ====================
  {
    id: "bike-rd1",
    name: "Fuji Sportif 2.1 Road Racer",
    category: "road",
    categoryLabel: "Road & Racing",
    typeTag: "Bicycle",
    tagline: "Aluminium aero road bike with 14-speed 105 groupset for pure tarmac speed.",
    hourlyRate: 110,
    dailyRate: 450,
    deposit: 3000,
    rating: 4.85,
    reviewsCount: 92,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80",
    specs: {
      gears: "14-Speed Shimano Tiagra",
      brakes: "Shimano Dual Pivot Caliper",
      frame: "A2-SL Custom Alloy",
      wheelSize: "700 x 28c Road Slicks",
      weight: "9.1 kg",
      suspension: "Carbon Fork Vibration Damp"
    },
    features: ["Aero Drop Handlebars", "Clip-less SPD Pedal Option", "Dual Bottle Cages", "Speedometer Mount"],
    popular: false,
    available: true,
    locationHub: "Marine Drive Depot"
  },
  {
    id: "bike-rd2",
    name: "Leader Optimus Pro Single Speed",
    category: "road",
    categoryLabel: "Urban Fixie",
    typeTag: "Bicycle",
    tagline: "Minimalist urban speed machine with flip-flop hub and chromoly steel frame.",
    hourlyRate: 70,
    dailyRate: 299,
    deposit: 1500,
    rating: 4.68,
    reviewsCount: 78,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    specs: {
      gears: "Single Speed 46T / 16T",
      brakes: "Front & Rear Caliper",
      frame: "Chromoly Steel Frame",
      wheelSize: "700 x 25c Slick",
      weight: "9.8 kg",
      suspension: "Rigid Steel Fork"
    },
    features: ["Flip-Flop Rear Hub", "Bullhorn Handlebars", "Classic Steel Aesthetics", "Very Low Maintenance"],
    popular: false,
    available: true,
    locationHub: "Indiranagar Cycle Hub"
  },

  // ==================== CITY CRUISERS ====================
  {
    id: "bike-cr1",
    name: "Firefox Beach Cruiser Classic",
    category: "cruiser",
    categoryLabel: "City Cruiser",
    typeTag: "Bicycle",
    tagline: "Comfortable upright-geometry cruiser with balloon tires and integrated basket.",
    hourlyRate: 60,
    dailyRate: 250,
    deposit: 1500,
    rating: 4.76,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80",
    specs: {
      gears: "3-Speed Shimano Nexus",
      brakes: "Coaster Foot Brake + V-Brake",
      frame: "Classic Steel Cruiser",
      wheelSize: "26 x 2.125 Balloon",
      weight: "15.2 kg",
      suspension: "Dual Spring Saddle"
    },
    features: ["Front Wicker Basket", "Vintage Ding-Dong Bell", "Full Mudguards & Chain Guard", "Rear Cargo Rack"],
    popular: true,
    available: true,
    locationHub: "Marine Drive Depot"
  },
  {
    id: "bike-cr2",
    name: "Urban Trail Commuter 7-Speed",
    category: "cruiser",
    categoryLabel: "Urban Commuter",
    typeTag: "Bicycle",
    tagline: "Sleek city commuter with anti-puncture tires and rear pannier rack.",
    hourlyRate: 75,
    dailyRate: 320,
    deposit: 1800,
    rating: 4.72,
    reviewsCount: 128,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=80",
    specs: {
      gears: "7-Speed Shimano Tourney",
      brakes: "Linear Pull V-Brakes",
      frame: "Lightweight 6061 Alloy",
      wheelSize: "700 x 35c Commuter",
      weight: "12.6 kg",
      suspension: "Rigid Alloy Fork"
    },
    features: ["Rear Pannier Rack", "Front & Rear Reflectors", "Anti-Rust KMC Chain", "Integrated Kickstand"],
    popular: false,
    available: true,
    locationHub: "Banjara Hills Garage"
  },

  // ==================== FAT TIRE & GRAVEL ====================
  {
    id: "bike-ft1",
    name: "Trek Farley Fat Monster Bike",
    category: "fattire",
    categoryLabel: "Fat Tire Bike",
    typeTag: "Fat Bike",
    tagline: "Massive 4-inch tires that roll over sand beaches, mud, snow, and rocky terrain.",
    hourlyRate: 150,
    dailyRate: 649,
    deposit: 3500,
    rating: 4.91,
    reviewsCount: 108,
    image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=900&q=80",
    specs: {
      gears: "9-Speed SRAM X5",
      brakes: "Hydraulic Disc 180mm",
      wheelSize: "26 x 4.0 Fat Super-Wide",
      frame: "Alpha Gold Alloy",
      weight: "16.5 kg",
      suspension: "Fat Pneumatic Cushioning"
    },
    features: ["Beach & Dune Ready", "Aggressive Knobby Tread", "Heavy-Duty Crankset", "Gloves & Helmet Included"],
    popular: true,
    available: true,
    locationHub: "Connaught Place Hub"
  },
  {
    id: "bike-ft2",
    name: "Cannondale Topstone Gravel 4",
    category: "fattire",
    categoryLabel: "Gravel Explorer",
    typeTag: "Gravel Bike",
    tagline: "All-terrain gravel bike with a smooth flat-mount hydraulic brakes and 40c tires.",
    hourlyRate: 140,
    dailyRate: 599,
    deposit: 3200,
    rating: 4.87,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=900&q=80",
    specs: {
      gears: "2x10 Shimano GRX",
      brakes: "Flat-Mount Hydraulic Disc",
      wheelSize: "700 x 40c WTB Riddler",
      frame: "SmartForm C3 Alloy",
      weight: "10.8 kg",
      suspension: "SAVE Vibration Damping"
    },
    features: ["Flared Drop Handlebars", "Multiple Bikepacking Mounts", "Tubeless Compatible Rims", "Gloves Included"],
    popular: false,
    available: true,
    locationHub: "Indiranagar Cycle Hub"
  }
];

// ====================== STATION HUBS ======================
const STATIONS_DATA = [
  {
    id: "hub-1",
    name: "Connaught Place Hub",
    address: "A-Block, CP Inner Circle, New Delhi",
    hours: "6:00 AM - 10:00 PM",
    availableBikes: 32,
    hasCharging: true,
    typesAvailable: "Motorcycles, E-Scooters, E-Bikes",
    city: "New Delhi"
  },
  {
    id: "hub-2",
    name: "Marine Drive Depot",
    address: "Nariman Point, Marine Drive, Mumbai",
    hours: "5:00 AM - 11:30 PM",
    availableBikes: 28,
    hasCharging: true,
    typesAvailable: "Cruisers, Scooters, Road Bikes",
    city: "Mumbai"
  },
  {
    id: "hub-3",
    name: "Indiranagar Cycle Hub",
    address: "100 Feet Road, Indiranagar, Bengaluru",
    hours: "7:00 AM - 10:00 PM",
    availableBikes: 22,
    hasCharging: false,
    typesAvailable: "E-Bikes, MTBs, City Cruisers",
    city: "Bengaluru"
  },
  {
    id: "hub-4",
    name: "Banjara Hills Garage",
    address: "Road No. 12, Banjara Hills, Hyderabad",
    hours: "24/7 Smart Lockers",
    availableBikes: 38,
    hasCharging: true,
    typesAvailable: "Superbikes, Scooters, Fat Bikes",
    city: "Hyderabad"
  }
];

// ====================== ADD-ONS ======================
const ADDONS_DATA = [
  {
    id: "addon-helmet",
    name: "ISI Certified Safety Helmet",
    description: "Full-face or open-face ISI/DOT certified helmet, sanitized with fresh liner.",
    price: 50,
    priceType: "flat",
    selectedByDefault: true,
    icon: "fa-shield-halved"
  },
  {
    id: "addon-lock",
    name: "Disc Brake Lock / Heavy-Duty U-Lock",
    description: "Alarm disc lock or double-deadbolt Sold Secure U-lock for added security.",
    price: 30,
    priceType: "flat",
    selectedByDefault: true,
    icon: "fa-lock"
  },
  {
    id: "addon-insurance",
    name: "Zero-Deductible Damage Waiver",
    description: "Full cover for accidental scratches, punctures, and minor mechanical repairs.",
    price: 100,
    priceType: "per_day",
    selectedByDefault: false,
    icon: "fa-file-shield"
  },
  {
    id: "addon-phone-mount",
    name: "Anti-Vibration Mobile Mount + USB Charger",
    description: "360° handlebar phone mount with high-speed Type-C charging cable.",
    price: 50,
    priceType: "flat",
    selectedByDefault: false,
    icon: "fa-mobile-screen"
  },
  {
    id: "addon-riding-jacket",
    name: "CE-Armored Riding Jacket & Gloves",
    description: "Level-2 CE-certified shoulder, elbow & back protection with breathable mesh.",
    price: 150,
    priceType: "per_day",
    selectedByDefault: false,
    icon: "fa-vest"
  },
  {
    id: "addon-action-cam",
    name: "Action Camera Handlebar Mount",
    description: "GoPro & Insta360 compatible vibration-damped 360° pivoting mount.",
    price: 80,
    priceType: "flat",
    selectedByDefault: false,
    icon: "fa-camera"
  }
];

// ====================== PROMO CODES ======================
const PROMO_CODES = {
  "VELO20":     { discountPercent: 20, description: "20% off entire rental" },
  "RIDEFREE":   { flatDiscount: 200,   description: "₹200 off your first booking" },
  "SUMMERBIKE": { discountPercent: 15, description: "15% Summer ride discount" },
  "GREENRIDE":  { discountPercent: 10, description: "10% Eco commute discount" }
};

// ====================== FAQs ======================
const FAQS_DATA = [
  {
    q: "What types of bikes are available for rental?",
    a: "We offer motorcycles (Royal Enfield Classic 350, KTM Duke 390, Himalayan, Yamaha R15), automatic scooters (Vespa, Honda Activa, Ather 450X Electric), electric e-bikes & e-motorcycles (Revolt RV400, Hero Lectro), mountain bikes (Firefox, Btwin Rockrider), road & fixie bikes, city cruisers, and fat tire gravel bikes."
  },
  {
    q: "What documents do I need to rent a motorcycle or scooter?",
    a: "For motorised two-wheelers (motorcycles, scooters above 25 km/h), a valid Indian Driving Licence (Two-Wheeler), Aadhaar card or Government Photo ID is required at pickup. For pedal bicycles and slow-speed e-cycles, only a valid photo ID and age proof (18+) is needed."
  },
  {
    q: "Are helmets, riding gear, and locks provided?",
    a: "Yes! Every rental includes an ISI-certified helmet and security lock at minimal cost. Optional CE-armoured riding jackets, gloves, and mobile mounts are also available as paid add-ons."
  },
  {
    q: "Can I pick up at one hub and return to another city hub?",
    a: "Yes! Multi-city returns are supported. You may pick up in Delhi (Connaught Place Hub) and return in Bengaluru or Mumbai at no extra charge if advance intimation is given at the time of booking."
  },
  {
    q: "How does the refundable security deposit work?",
    a: "A refundable deposit ranging from ₹1,500 to ₹8,000 (based on bike value) is collected at pickup. It is returned within 24 hours of vehicle return, after a quick inspection confirming no damage."
  },
  {
    q: "What if I have a breakdown or flat tyre on the road?",
    a: "Our 24/7 roadside assistance helpline number is clearly printed on your digital rental pass. A technician or replacement vehicle is dispatched to your GPS location within 30 minutes of your call."
  }
];
