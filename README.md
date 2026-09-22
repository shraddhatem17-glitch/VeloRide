# 🏍️ VeloRide - Multi-Category Bike Rental Web Application

A modern, responsive, full-featured Bike Rental single-page web application featuring **18+ distinct two-wheeler models**: **Motorcycles**, **Superbikes & Sports**, **Automatic Scooters**, **Electric E-Bikes & E-Motorcycles**, **Mountain Bikes (MTBs)**, **Aero Road Racers**, **City Cruisers**, and **Monster Fat Tire Bikes**. Built using clean **HTML5**, **modern CSS3**, and **Vanilla JavaScript**.

![VeloRide Preview](https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Fleet of Different Bike Types (18+ Models)

### 1. 🏍️ Motorcycles & Superbikes
- **Royal Enfield Classic 350**: 349cc J-Series retro cruiser with dual-channel ABS, thumping exhaust, and saddlebags.
- **KTM Duke 390 Naked Sport**: 44.3 BHP liquid-cooled streetfighter with quickshifter+ and cornering ABS.
- **Royal Enfield Himalayan 450**: 40 BHP all-terrain adventure tourer with 200mm long-travel suspension and Tripper navigation.
- **Yamaha YZF-R15 V4 Racing**: 155cc supersport aerodynamic track machine with upside-down gold forks.
- **Harley-Davidson Iron 883**: 883cc American V-Twin custom cruiser with authentic low-slung stance.

### 2. 🛵 Scooters & Mopeds
- **Vespa Primavera 150 Classic**: Chic Italian retro automatic scooter with chrome mirrors and helmet boot storage.
- **Honda Activa 6G / PCX 160**: Highly reliable, comfortable automatic twist-and-go commuter with 48 km/L fuel efficiency.
- **Ather 450X Gen 3 Electric Scooter**: High-performance smart electric scooter with Warp Mode (0-40 in 3.3s), reverse gear, and touchscreen GPS.

### 3. ⚡ Electric E-Bikes & E-Motorcycles
- **VoltGlide Urban Step-Through**: 250W silent hub motor bicycle with 75 km battery assist and low step-through frame.
- **ThunderPeak Full-Suspension E-MTB**: 85Nm Bosch motor with 160mm plush Fox suspension and 110 km battery range.
- **Revolt RV400 Electric Motorcycle**: 3.0 kW electric street motorcycle with swappable lithium battery and custom engine sounds.

### 4. 🏔️ Mountain Bikes (MTB)
- **Apex Trail Pro 29 MTB**: 12-speed Shimano Deore 1x12 drivetrain, RockShox air fork, and remote dropper post.
- **Junior Trailblazer 24 Youth MTB**: Lightweight aluminum trail bicycle for young adventurers.

### 5. 🚴 Road & Racing Bicycles
- **Velocita Carbon Aero 7 Racer**: 8.1 kg Toray T700 carbon fiber aero racer with 22-speed Shimano 105 groupset.
- **Strada Sprint Track Fixie**: Lightweight 4130 chromoly urban single-speed with flip-flop rear hub.

### 6. 🏖️ City & Vintage Cruisers
- **RetroCoast Breeze Cruiser**: Classic balloon tire bicycle with woven front basket, ding-dong bell, and spring saddle.
- **Skyline Commuter City 7**: 7-speed urban city commuter with rear cargo rack and anti-puncture reflective tires.

### 7. 🚜 Fat Tire & Gravel
- **BeastMaster 4.0 Monster Fat Bike**: 4-inch wide high-floatation tires capable of riding over sand, snow, mud, and rocks.
- **TerraGravel Expedition X**: All-terrain bikepacking bicycle with flared drop handlebars and gravel tires.

---

## 🚀 Key Features

1. **Instant Search & Multi-Criteria Filtering**:
   - Filter by bike category pills (*All Fleet*, *Motorcycles*, *Scooters*, *Electric*, *Mountain*, *Road*, *Cruisers*, *Fat Tire*).
   - Search by brand or model (*Royal Enfield*, *Duke*, *Vespa*, *Ather*, *Bosch*, *Shimano*).
   - Dynamic maximum hourly price slider ($5/hr to $40/hr).
   - Sort by *Most Popular*, *Price: Low to High*, *Price: High to Low*, and *Top Rated*.

2. **Smart Interactive Booking & Live Fare Calculator**:
   - Pickup & return date/time pickers.
   - Dynamic duration math with automatic hourly or daily billing optimization.
   - Gear Add-ons: *DOT Certified Helmet*, *Heavy-Duty Disc Brake Lock*, *Zero-Deductible Damage Waiver*, *Mobile Mount + USB Charger*, *Armored Riding Jacket & Gloves*, *Action Camera Mount*.
   - Live price breakdown (Base Rate + Add-ons + Security Deposit - Discount = Total).

3. **Promo Code Discount Engine**:
   - `VELO20` — 20% discount on entire rental
   - `RIDEFREE` — $10 flat discount
   - `SUMMERBIKE` — 15% discount
   - `GREENRIDE` — 10% eco commute discount

4. **Digital Rental Pass (Receipt)**:
   - Instant boarding pass modal with booking reference (`VLR-XXXXXX`), pickup station, schedule, and simulated scan barcode.
   - Print or save pass feature (`window.print()`).

5. **My Rentals Management (`localStorage` Persistence)**:
   - Tracks all active, upcoming, and completed reservations.
   - Re-open digital passes anytime or cancel reservations with instant local state updates and badge counter.

6. **Interactive Standalone Fare Estimator**:
   - Trip fare estimator with category selectors and duration slider.

7. **Express Station Hubs**:
   - Central Park Hub, Downtown Waterfront, Pier Promenade, and University Campus with live available bike counts and charging capability.

---

## 📁 Project Structure

```
interivew/
├── index.html           # Main semantic HTML structure
├── README.md            # Project documentation and guide
├── css/
│   └── styles.css       # Custom design system, type badges, responsive layouts, animations
└── js/
    ├── data.js          # Catalog of 18+ bikes, stations, add-ons, promo codes, FAQs
    └── app.js           # Live filtering, dynamic math, modal lifecycle, localStorage
```

---

## 💻 How to Run the Project

No build tools, package managers, or backend servers are required!

### Option 1: Direct File Open
Double-click `index.html` or right-click `index.html` and choose **Open with** -> **Google Chrome** / **Microsoft Edge** / **Firefox**.

### Option 2: Local Web Server (Python)
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.
