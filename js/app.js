// ==========================================================================
// VELORIDE INDIA — APP.JS  |  INR Prices, Login System, Full UI Logic
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {

  // ============================================================
  // APP STATE
  // ============================================================
  const state = {
    bikes: [...BIKES_DATA],
    stations: [...STATIONS_DATA],
    addons: [...ADDONS_DATA],
    activeCategory: "all",
    searchQuery: "",
    maxPrice: 400,
    sortBy: "popular",
    bookings: JSON.parse(localStorage.getItem("veloride_bookings") || "[]"),
    currentUser: JSON.parse(localStorage.getItem("veloride_user") || "null"),
    activeBookingBike: null,
    activeDraft: {
      pickupDate: "",
      pickupTime: "09:00",
      returnDate: "",
      returnTime: "18:00",
      selectedAddonIds: ["addon-helmet", "addon-lock"],
      appliedPromo: null,
      stationId: "hub-1"
    }
  };

  // ============================================================
  // DOM ELEMENT REFERENCES
  // ============================================================
  const bikesGrid            = document.getElementById("bikes-grid");
  const bikesCountEl         = document.getElementById("bikes-count");
  const categoryTabs         = document.querySelectorAll(".category-tab");
  const searchInput          = document.getElementById("search-bikes");
  const priceSlider          = document.getElementById("price-slider");
  const priceValueDisplay    = document.getElementById("price-slider-val");
  const sortSelect           = document.getElementById("sort-bikes");
  const rentalsBadgeCount    = document.getElementById("rentals-badge-count");
  const myBookingsGrid       = document.getElementById("my-bookings-grid");
  const emptyBookingsNotice  = document.getElementById("empty-bookings-notice");
  const stationsGrid         = document.getElementById("stations-grid");
  const faqList              = document.getElementById("faq-accordion");
  const toastContainer       = document.getElementById("toast-container");

  // Auth UI
  const authModal          = document.getElementById("auth-modal");
  const authModalClose     = document.getElementById("auth-modal-close");
  const loginTab           = document.getElementById("login-tab");
  const signupTab          = document.getElementById("signup-tab");
  const loginForm          = document.getElementById("login-form");
  const signupForm         = document.getElementById("signup-form");
  const loginFormEl        = document.getElementById("login-form-el");
  const signupFormEl       = document.getElementById("signup-form-el");
  const navLoginBtn        = document.getElementById("nav-login-btn");
  const navUserMenu        = document.getElementById("nav-user-menu");
  const userDisplayName    = document.getElementById("user-display-name");
  const userAvatarText     = document.getElementById("user-avatar-text");
  const navLogoutBtn       = document.getElementById("nav-logout-btn");
  const mobileLoginBtn     = document.getElementById("mobile-login-btn");

  // Booking Modal Elements
  const bookingModal        = document.getElementById("booking-modal");
  const bookingModalClose   = document.getElementById("booking-modal-close");
  const modalBikeThumb      = document.getElementById("modal-bike-thumb");
  const modalBikeName       = document.getElementById("modal-bike-name");
  const modalBikeTagline    = document.getElementById("modal-bike-tagline");
  const modalBikeHourly     = document.getElementById("modal-bike-hourly");
  const modalBikeDaily      = document.getElementById("modal-bike-daily");
  const modalStationSelect  = document.getElementById("modal-station-select");
  const inputPickupDate     = document.getElementById("pickup-date");
  const inputPickupTime     = document.getElementById("pickup-time");
  const inputReturnDate     = document.getElementById("return-date");
  const inputReturnTime     = document.getElementById("return-time");
  const addonsContainer     = document.getElementById("addons-container");
  const promoInput          = document.getElementById("promo-input");
  const btnApplyPromo       = document.getElementById("btn-apply-promo");
  const promoFeedback       = document.getElementById("promo-feedback");
  const bookingForm         = document.getElementById("booking-form");

  // Order Summary
  const summaryDurationText = document.getElementById("sum-duration-text");
  const summaryBaseRate     = document.getElementById("sum-base-rate");
  const summaryAddonsRate   = document.getElementById("sum-addons-rate");
  const summaryDiscountRow  = document.getElementById("sum-discount-row");
  const summaryDiscountRate = document.getElementById("sum-discount-rate");
  const summaryDeposit      = document.getElementById("sum-deposit");
  const summaryTotal        = document.getElementById("sum-total");

  // Pass Modal
  const passModal              = document.getElementById("pass-modal");
  const passModalClose         = document.getElementById("pass-modal-close");
  const passRefCode            = document.getElementById("pass-ref-code");
  const passRiderName          = document.getElementById("pass-rider-name");
  const passBikeName           = document.getElementById("pass-bike-name");
  const passPickupStation      = document.getElementById("pass-pickup-station");
  const passPickupTimeDisplay  = document.getElementById("pass-pickup-time");
  const passReturnTimeDisplay  = document.getElementById("pass-return-time");
  const passTotalDisplay       = document.getElementById("pass-total-amount");
  const btnPrintPass           = document.getElementById("btn-print-pass");

  // Quick Finder
  const finderLocation  = document.getElementById("finder-location");
  const finderCategory  = document.getElementById("finder-category");
  const finderDate      = document.getElementById("finder-date");
  const btnQuickFind    = document.getElementById("btn-quick-find");

  // Estimator
  const estCategory      = document.getElementById("est-category");
  const estHours         = document.getElementById("est-hours");
  const estHoursDisplay  = document.getElementById("est-hours-val");
  const estInsurance     = document.getElementById("est-insurance");
  const estResultPrice   = document.getElementById("est-result-price");
  const estResultNotes   = document.getElementById("est-result-notes");

  // Mobile Nav
  const hamburgerBtn    = document.getElementById("hamburger-btn");
  const mobileDrawer    = document.getElementById("mobile-drawer");
  const drawerCloseBtn  = document.getElementById("drawer-close-btn");
  const mobileNavLinks  = document.querySelectorAll(".mobile-nav-link");

  // ============================================================
  // CURRENCY HELPER (INR)
  // ============================================================
  function formatINR(amount) {
    return "₹" + Number(amount).toLocaleString("en-IN");
  }

  // ============================================================
  // AUTH SYSTEM
  // ============================================================
  function updateAuthUI() {
    if (state.currentUser) {
      if (navLoginBtn)    navLoginBtn.style.display    = "none";
      if (navUserMenu)    navUserMenu.style.display    = "flex";
      if (userDisplayName)  userDisplayName.textContent = state.currentUser.name.split(" ")[0];
      if (userAvatarText)   userAvatarText.textContent  = state.currentUser.name.charAt(0).toUpperCase();
    } else {
      if (navLoginBtn)    navLoginBtn.style.display    = "flex";
      if (navUserMenu)    navUserMenu.style.display    = "none";
    }
  }

  function openAuthModal(mode = "login") {
    if (!authModal) return;
    authModal.classList.add("active");
    document.body.style.overflow = "hidden";
    switchAuthTab(mode);
  }

  function closeAuthModal() {
    if (!authModal) return;
    authModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function switchAuthTab(mode) {
    if (mode === "login") {
      loginTab.classList.add("auth-tab-active");
      signupTab.classList.remove("auth-tab-active");
      loginForm.style.display  = "block";
      signupForm.style.display = "none";
    } else {
      signupTab.classList.add("auth-tab-active");
      loginTab.classList.remove("auth-tab-active");
      loginForm.style.display  = "none";
      signupForm.style.display = "block";
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    const email    = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("veloride_users") || "[]");
    const user  = users.find(u => u.email === email && u.password === password);

    if (!user) {
      showToast("Invalid email or password. Please try again.", "error");
      return;
    }

    state.currentUser = { name: user.name, email: user.email };
    localStorage.setItem("veloride_user", JSON.stringify(state.currentUser));
    closeAuthModal();
    updateAuthUI();
    renderMyBookings();
    loginFormEl.reset();
    showToast(`Welcome back, ${user.name.split(" ")[0]}! 🎉`, "success");
  }

  function handleSignup(e) {
    e.preventDefault();
    const name      = document.getElementById("signup-name").value.trim();
    const email     = document.getElementById("signup-email").value.trim();
    const phone     = document.getElementById("signup-phone").value.trim();
    const password  = document.getElementById("signup-password").value;
    const password2 = document.getElementById("signup-password2").value;

    if (password !== password2) {
      showToast("Passwords do not match!", "error");
      return;
    }
    if (password.length < 6) {
      showToast("Password must be at least 6 characters.", "error");
      return;
    }

    const users = JSON.parse(localStorage.getItem("veloride_users") || "[]");
    if (users.some(u => u.email === email)) {
      showToast("An account with this email already exists. Please log in.", "error");
      return;
    }

    const newUser = { name, email, phone, password };
    users.push(newUser);
    localStorage.setItem("veloride_users", JSON.stringify(users));

    state.currentUser = { name, email };
    localStorage.setItem("veloride_user", JSON.stringify(state.currentUser));

    closeAuthModal();
    updateAuthUI();
    renderMyBookings();
    signupFormEl.reset();
    showToast(`Account created! Welcome to VeloRide, ${name.split(" ")[0]}! 🏍️`, "success");
  }

  function handleLogout() {
    state.currentUser = null;
    localStorage.removeItem("veloride_user");
    updateAuthUI();
    renderMyBookings();
    showToast("Logged out successfully. Ride safe! 👋", "info");
  }

  // ============================================================
  // INITIALISATION
  // ============================================================
  function init() {
    setupDatesDefaults();
    populateStationDropdowns();
    renderBikes();
    renderStations();
    renderAddonsOptions();
    renderFaqs();
    renderMyBookings();
    updateBadgeCount();
    updateEstimator();
    updateAuthUI();
    bindEvents();
  }

  function setupDatesDefaults() {
    const today    = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const fmt = d => d.toISOString().split("T")[0];

    state.activeDraft.pickupDate = fmt(today);
    state.activeDraft.returnDate = fmt(tomorrow);

    if (inputPickupDate) { inputPickupDate.value = fmt(today); inputPickupDate.min = fmt(today); }
    if (inputReturnDate) { inputReturnDate.value = fmt(tomorrow); inputReturnDate.min = fmt(today); }
    if (finderDate)      { finderDate.value = fmt(today); }
  }

  function populateStationDropdowns() {
    if (modalStationSelect) {
      modalStationSelect.innerHTML = state.stations
        .map(s => `<option value="${s.id}">${s.name}, ${s.city} (${s.availableBikes} bikes)</option>`)
        .join("");
    }
    if (finderLocation) {
      finderLocation.innerHTML = `<option value="all">Any City Hub</option>` +
        state.stations.map(s => `<option value="${s.name}">${s.name} — ${s.city}</option>`).join("");
    }
  }

  // ============================================================
  // CATALOG FILTERING
  // ============================================================
  function getFilteredBikes() {
    return state.bikes.filter(bike => {
      const matchCat    = state.activeCategory === "all" || bike.category === state.activeCategory;
      const query       = state.searchQuery.toLowerCase().trim();
      const matchSearch = !query ||
        bike.name.toLowerCase().includes(query) ||
        bike.categoryLabel.toLowerCase().includes(query) ||
        bike.tagline.toLowerCase().includes(query) ||
        bike.features.some(f => f.toLowerCase().includes(query));
      const matchPrice  = bike.hourlyRate <= state.maxPrice;
      return matchCat && matchSearch && matchPrice;
    }).sort((a, b) => {
      if (state.sortBy === "price-low")  return a.hourlyRate - b.hourlyRate;
      if (state.sortBy === "price-high") return b.hourlyRate - a.hourlyRate;
      if (state.sortBy === "rating")     return b.rating - a.rating;
      return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    });
  }

  function getTypeIcon(cat) {
    const icons = { motorcycle:"fa-motorcycle", scooter:"fa-moped", electric:"fa-bolt",
      mountain:"fa-mountain", road:"fa-road", cruiser:"fa-umbrella-beach", fattire:"fa-compass" };
    return icons[cat] || "fa-bicycle";
  }

  function renderBikes() {
    const filtered = getFilteredBikes();
    if (bikesCountEl) bikesCountEl.textContent = `${filtered.length} bike${filtered.length === 1 ? "" : "s"} available`;

    if (filtered.length === 0) {
      bikesGrid.innerHTML = `
        <div class="empty-state">
          <i class="fa-solid fa-bicycle"></i>
          <h3>No bikes match your filters</h3>
          <p>Try clearing search, increasing price range, or changing category.</p>
          <button class="btn btn-outline btn-sm" id="btn-reset-filters" style="margin-top:16px;">
            <i class="fa-solid fa-rotate-left"></i> Reset All Filters
          </button>
        </div>`;
      document.getElementById("btn-reset-filters")?.addEventListener("click", resetFilters);
      return;
    }

    bikesGrid.innerHTML = filtered.map(bike => {
      const specsHtml = Object.entries(bike.specs).slice(0, 4)
        .map(([k, v]) => `<div class="spec-pill"><i class="fa-solid fa-check"></i><span>${v}</span></div>`).join("");

      return `
        <div class="bike-card" data-id="${bike.id}">
          <div class="bike-card-img-wrap">
            <img src="${bike.image}" alt="${bike.name}" class="bike-card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80'" />
            <span class="badge-category">${bike.categoryLabel}</span>
            ${bike.popular ? `<span class="badge-popular"><i class="fa-solid fa-fire"></i> Popular</span>` : ""}
          </div>
          <div class="bike-card-body">
            <span class="bike-type-tag ${bike.category}">
              <i class="fa-solid ${getTypeIcon(bike.category)}"></i> ${bike.typeTag || bike.categoryLabel}
            </span>
            <div class="bike-rating-row">
              <div class="bike-rating">
                <i class="fa-solid fa-star"></i>
                <span>${bike.rating.toFixed(1)}</span>
                <span class="bike-reviews">(${bike.reviewsCount})</span>
              </div>
              <div class="bike-location">
                <i class="fa-solid fa-location-dot"></i>
                <span>${bike.locationHub.replace(" Hub","").replace(" Garage","").replace(" Depot","")}</span>
              </div>
            </div>
            <h3 class="bike-title">${bike.name}</h3>
            <p class="bike-tagline">${bike.tagline}</p>
            <div class="bike-specs-preview">${specsHtml}</div>
            <div class="bike-card-footer">
              <div class="bike-pricing">
                <div class="price-main">${formatINR(bike.hourlyRate)}<span class="price-period">/ hr</span></div>
                <div class="price-daily">${formatINR(bike.dailyRate)} / day</div>
              </div>
              <button class="btn btn-primary btn-sm btn-rent-now" data-id="${bike.id}">
                <i class="fa-solid fa-calendar-check"></i> Rent Now
              </button>
            </div>
          </div>
        </div>`;
    }).join("");

    document.querySelectorAll(".btn-rent-now").forEach(btn => {
      btn.addEventListener("click", e => {
        if (!state.currentUser) {
          showToast("Please log in to book a bike!", "info");
          openAuthModal("login");
          return;
        }
        openBookingModal(e.currentTarget.dataset.id);
      });
    });
  }

  function resetFilters() {
    state.activeCategory = "all";
    state.searchQuery    = "";
    state.maxPrice       = 400;
    state.sortBy         = "popular";
    categoryTabs.forEach(t => t.classList.toggle("active", t.dataset.category === "all"));
    if (searchInput)         searchInput.value         = "";
    if (priceSlider)         priceSlider.value         = 400;
    if (priceValueDisplay)   priceValueDisplay.textContent = "₹400/hr";
    if (sortSelect)          sortSelect.value          = "popular";
    renderBikes();
    showToast("Filters reset to default", "info");
  }

  // ============================================================
  // ADD-ONS
  // ============================================================
  function renderAddonsOptions() {
    if (!addonsContainer) return;
    addonsContainer.innerHTML = state.addons.map(addon => {
      const sel = state.activeDraft.selectedAddonIds.includes(addon.id);
      return `
        <label class="addon-item ${sel ? "selected" : ""}" data-addon-id="${addon.id}">
          <input type="checkbox" class="addon-checkbox" value="${addon.id}" ${sel ? "checked" : ""} />
          <div class="addon-details">
            <div class="addon-name-row">
              <span><i class="fa-solid ${addon.icon}" style="margin-right:6px;color:var(--primary);"></i>${addon.name}</span>
              <span class="addon-price-tag">+${formatINR(addon.price)}${addon.priceType === "per_day" ? "/day" : " flat"}</span>
            </div>
            <p class="addon-desc">${addon.description}</p>
          </div>
        </label>`;
    }).join("");

    addonsContainer.querySelectorAll(".addon-checkbox").forEach(cb => {
      cb.addEventListener("change", e => {
        const id = e.target.value;
        const lbl = e.target.closest(".addon-item");
        if (e.target.checked) {
          if (!state.activeDraft.selectedAddonIds.includes(id)) state.activeDraft.selectedAddonIds.push(id);
          lbl.classList.add("selected");
        } else {
          state.activeDraft.selectedAddonIds = state.activeDraft.selectedAddonIds.filter(x => x !== id);
          lbl.classList.remove("selected");
        }
        recalculateBookingTotal();
      });
    });
  }

  // ============================================================
  // BOOKING MODAL
  // ============================================================
  function openBookingModal(bikeId) {
    const bike = state.bikes.find(b => b.id === bikeId);
    if (!bike) return;
    state.activeBookingBike = bike;

    if (modalBikeThumb)    modalBikeThumb.src = bike.image;
    if (modalBikeName)     modalBikeName.textContent = bike.name;
    if (modalBikeTagline)  modalBikeTagline.textContent = `${bike.categoryLabel} • ${bike.tagline}`;
    if (modalBikeHourly)   modalBikeHourly.textContent  = `${formatINR(bike.hourlyRate)}/hr`;
    if (modalBikeDaily)    modalBikeDaily.textContent   = `${formatINR(bike.dailyRate)}/day`;

    // Pre-fill rider info from logged-in user
    if (state.currentUser) {
      const nameEl  = document.getElementById("rider-name");
      const emailEl = document.getElementById("rider-email");
      if (nameEl)  nameEl.value  = state.currentUser.name;
      if (emailEl) emailEl.value = state.currentUser.email;

      const users = JSON.parse(localStorage.getItem("veloride_users") || "[]");
      const userData = users.find(u => u.email === state.currentUser.email);
      const phoneEl  = document.getElementById("rider-phone");
      if (phoneEl && userData?.phone) phoneEl.value = userData.phone;
    }

    state.activeDraft.appliedPromo = null;
    if (promoInput)    promoInput.value = "";
    if (promoFeedback) { promoFeedback.textContent = ""; promoFeedback.className = "promo-feedback"; }

    renderAddonsOptions();
    recalculateBookingTotal();
    bookingModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeBookingModal() {
    bookingModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  // ============================================================
  // FARE CALCULATION
  // ============================================================
  function calculateRentalMath() {
    if (!state.activeBookingBike) return null;
    const bike  = state.activeBookingBike;
    const pDate = inputPickupDate?.value || state.activeDraft.pickupDate;
    const pTime = inputPickupTime?.value || state.activeDraft.pickupTime;
    const rDate = inputReturnDate?.value || state.activeDraft.returnDate;
    const rTime = inputReturnTime?.value || state.activeDraft.returnTime;

    const startDT = new Date(`${pDate}T${pTime}`);
    const endDT   = new Date(`${rDate}T${rTime}`);
    let diffMs    = endDT - startDT;
    if (isNaN(diffMs) || diffMs < 3600000) diffMs = 3600000 * 2;

    const totalHours = Math.ceil(diffMs / 3600000);
    const totalDays  = Math.max(1, Math.ceil(totalHours / 24));

    let basePrice, durationLabel;
    if (totalHours < 8) {
      basePrice     = totalHours * bike.hourlyRate;
      durationLabel = `${totalHours} Hour${totalHours > 1 ? "s" : ""}`;
    } else {
      const hourCost = totalHours * bike.hourlyRate;
      const dayCost  = totalDays  * bike.dailyRate;
      basePrice     = Math.min(hourCost, dayCost);
      durationLabel = `${totalDays} Day${totalDays > 1 ? "s" : ""} (${totalHours} hrs)`;
    }

    let addonsPrice = 0;
    state.activeDraft.selectedAddonIds.forEach(id => {
      const a = state.addons.find(x => x.id === id);
      if (a) addonsPrice += a.priceType === "per_day" ? a.price * totalDays : a.price;
    });

    const subtotal = basePrice + addonsPrice;
    let discount   = 0;
    if (state.activeDraft.appliedPromo) {
      const p = state.activeDraft.appliedPromo;
      discount = p.discountPercent ? (subtotal * p.discountPercent / 100) : Math.min(subtotal, p.flatDiscount || 0);
    }

    const deposit    = bike.deposit;
    const finalTotal = Math.max(0, subtotal - discount) + deposit;

    return { totalHours, totalDays, durationLabel, basePrice, addonsPrice, subtotal, discount, deposit, finalTotal, pDate, pTime, rDate, rTime };
  }

  function recalculateBookingTotal() {
    const math = calculateRentalMath();
    if (!math) return;
    if (summaryDurationText) summaryDurationText.textContent = math.durationLabel;
    if (summaryBaseRate)     summaryBaseRate.textContent     = formatINR(math.basePrice);
    if (summaryAddonsRate)   summaryAddonsRate.textContent   = formatINR(math.addonsPrice);
    if (summaryDeposit)      summaryDeposit.textContent      = formatINR(math.deposit);
    if (summaryTotal)        summaryTotal.textContent        = formatINR(math.finalTotal);
    if (summaryDiscountRow)  summaryDiscountRow.style.display = math.discount > 0 ? "flex" : "none";
    if (summaryDiscountRate) summaryDiscountRate.textContent = `-${formatINR(math.discount)}`;
  }

  function handleApplyPromo() {
    const code = (promoInput?.value || "").trim().toUpperCase();
    if (!code) return;
    if (PROMO_CODES[code]) {
      state.activeDraft.appliedPromo = PROMO_CODES[code];
      promoFeedback.innerHTML = `<span style="color:var(--primary);"><i class="fa-solid fa-circle-check"></i> ${PROMO_CODES[code].description} applied!</span>`;
      recalculateBookingTotal();
      showToast(`Promo code '${code}' applied!`);
    } else {
      state.activeDraft.appliedPromo = null;
      promoFeedback.innerHTML = `<span style="color:var(--danger);"><i class="fa-solid fa-triangle-exclamation"></i> Invalid code. Try VELO20</span>`;
      recalculateBookingTotal();
      showToast("Invalid promo code", "error");
    }
  }

  // ============================================================
  // BOOKING SUBMIT & STORAGE
  // ============================================================
  function handleBookingSubmit(e) {
    e.preventDefault();
    const math = calculateRentalMath();
    if (!math || !state.activeBookingBike) return;

    const riderName  = document.getElementById("rider-name").value.trim();
    const riderEmail = document.getElementById("rider-email").value.trim();
    const riderPhone = document.getElementById("rider-phone").value.trim();
    const stationId  = modalStationSelect?.value;
    const station    = state.stations.find(s => s.id === stationId) || state.stations[0];
    const code       = "VLR-" + Math.floor(100000 + Math.random() * 900000);

    const booking = {
      id:            "bk-" + Date.now(),
      code,
      userEmail:     state.currentUser?.email || "",
      bikeId:        state.activeBookingBike.id,
      bikeName:      state.activeBookingBike.name,
      bikeImage:     state.activeBookingBike.image,
      categoryLabel: state.activeBookingBike.categoryLabel,
      riderName, riderEmail, riderPhone,
      stationName:   station.name,
      stationCity:   station.city,
      pickup:        `${math.pDate} at ${math.pTime}`,
      returnTime:    `${math.rDate} at ${math.rTime}`,
      duration:      math.durationLabel,
      totalPaid:     math.finalTotal,
      deposit:       math.deposit,
      createdAt:     new Date().toISOString(),
      status:        "Confirmed"
    };

    state.bookings.unshift(booking);
    localStorage.setItem("veloride_bookings", JSON.stringify(state.bookings));
    bookingForm.reset();
    closeBookingModal();
    displayRentalPass(booking);
    renderMyBookings();
    updateBadgeCount();
    showToast("Booking confirmed! Your Digital Pass is ready. 🎉");
  }

  // ============================================================
  // DIGITAL RENTAL PASS
  // ============================================================
  function displayRentalPass(booking) {
    if (!passModal) return;
    passRefCode.textContent           = booking.code;
    passRiderName.textContent         = booking.riderName;
    passBikeName.textContent          = booking.bikeName;
    passPickupStation.textContent     = `${booking.stationName}, ${booking.stationCity}`;
    passPickupTimeDisplay.textContent = booking.pickup;
    passReturnTimeDisplay.textContent = booking.returnTime;
    passTotalDisplay.textContent      = `${formatINR(booking.totalPaid)} (incl. ${formatINR(booking.deposit)} deposit)`;
    passModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closePassModal() {
    passModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  // ============================================================
  // MY BOOKINGS
  // ============================================================
  function renderMyBookings() {
    if (!myBookingsGrid) return;
    const userBookings = state.currentUser
      ? state.bookings.filter(b => b.userEmail === state.currentUser.email)
      : [];

    if (!state.currentUser) {
      emptyBookingsNotice.style.display = "none";
      myBookingsGrid.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1; background:var(--white); border:1px solid var(--gray-200); border-radius:var(--radius-md);">
          <i class="fa-solid fa-user-lock"></i>
          <h3>Please Log In to View Your Rentals</h3>
          <p>Create an account or log in to manage your bike bookings.</p>
          <button class="btn btn-primary btn-sm" onclick="document.getElementById('nav-login-btn').click()" style="margin-top:16px;">
            <i class="fa-solid fa-right-to-bracket"></i> Log In / Sign Up
          </button>
        </div>`;
      updateBadgeCount();
      return;
    }

    if (userBookings.length === 0) {
      emptyBookingsNotice.style.display = "block";
      myBookingsGrid.innerHTML = "";
      updateBadgeCount();
      return;
    }

    emptyBookingsNotice.style.display = "none";
    myBookingsGrid.innerHTML = userBookings.map(bk => {
      const isCancelled = bk.status === "Cancelled";
      return `
        <div class="booking-card">
          <div class="booking-card-head">
            <span class="booking-ref"><i class="fa-solid fa-ticket"></i> ${bk.code}</span>
            <span class="status-badge ${isCancelled ? "cancelled" : "confirmed"}">${bk.status}</span>
          </div>
          <div class="booking-card-body">
            <h4 class="booking-bike-name">${bk.bikeName}</h4>
            <div class="booking-info-row"><i class="fa-solid fa-user"></i><span>${bk.riderName}</span></div>
            <div class="booking-info-row"><i class="fa-solid fa-location-dot"></i><span>${bk.stationName}</span></div>
            <div class="booking-info-row"><i class="fa-solid fa-calendar-check"></i><span>${bk.pickup}</span></div>
            <div class="booking-info-row"><i class="fa-solid fa-clock"></i><span>Duration: ${bk.duration}</span></div>
          </div>
          <div class="booking-card-footer">
            <div class="booking-total-paid">${formatINR(bk.totalPaid)}</div>
            <div class="booking-actions">
              ${!isCancelled ? `
                <button class="btn btn-outline btn-sm btn-view-pass" data-code="${bk.code}">
                  <i class="fa-solid fa-receipt"></i> Pass
                </button>
                <button class="btn btn-outline btn-sm btn-cancel-booking" data-id="${bk.id}" style="color:var(--danger);border-color:var(--danger-light);">
                  <i class="fa-solid fa-xmark"></i> Cancel
                </button>` :
                `<button class="btn btn-outline btn-sm btn-delete-booking" data-id="${bk.id}">
                  <i class="fa-regular fa-trash-can"></i> Remove
                </button>`}
            </div>
          </div>
        </div>`;
    }).join("");

    myBookingsGrid.querySelectorAll(".btn-view-pass").forEach(btn =>
      btn.addEventListener("click", e => {
        const found = state.bookings.find(b => b.code === e.currentTarget.dataset.code);
        if (found) displayRentalPass(found);
      })
    );
    myBookingsGrid.querySelectorAll(".btn-cancel-booking").forEach(btn =>
      btn.addEventListener("click", e => {
        if (confirm("Cancel this booking? Your security deposit will be refunded.")) cancelBooking(e.currentTarget.dataset.id);
      })
    );
    myBookingsGrid.querySelectorAll(".btn-delete-booking").forEach(btn =>
      btn.addEventListener("click", e => deleteBooking(e.currentTarget.dataset.id))
    );
    updateBadgeCount();
  }

  function cancelBooking(id) {
    const bk = state.bookings.find(b => b.id === id);
    if (bk) {
      bk.status = "Cancelled";
      localStorage.setItem("veloride_bookings", JSON.stringify(state.bookings));
      renderMyBookings();
      showToast(`Booking ${bk.code} cancelled.`, "info");
    }
  }
  function deleteBooking(id) {
    state.bookings = state.bookings.filter(b => b.id !== id);
    localStorage.setItem("veloride_bookings", JSON.stringify(state.bookings));
    renderMyBookings();
    showToast("Booking removed.", "info");
  }
  function updateBadgeCount() {
    const userActive = state.currentUser
      ? state.bookings.filter(b => b.userEmail === state.currentUser.email && b.status === "Confirmed").length
      : 0;
    if (rentalsBadgeCount) rentalsBadgeCount.textContent = userActive;
  }

  // ============================================================
  // STATIONS
  // ============================================================
  function renderStations() {
    if (!stationsGrid) return;
    stationsGrid.innerHTML = state.stations.map(st => `
      <div class="station-card">
        <div class="station-header">
          <h4 class="station-name">${st.name}</h4>
          <span class="station-available"><i class="fa-solid fa-bicycle"></i> ${st.availableBikes} Bikes</span>
        </div>
        <div class="station-details">
          <div><i class="fa-solid fa-city"></i> ${st.city}</div>
          <div><i class="fa-solid fa-map-pin"></i> ${st.address}</div>
          <div><i class="fa-solid fa-clock"></i> ${st.hours}</div>
          <div><i class="fa-solid ${st.hasCharging ? "fa-bolt" : "fa-bicycle"}"></i> ${st.hasCharging ? "EV Fast Charging Available" : "Standard Docking Station"}</div>
          <div><i class="fa-solid fa-check-circle"></i> ${st.typesAvailable}</div>
        </div>
        <button class="btn btn-outline btn-sm btn-choose-station" data-station="${st.id}" style="margin-top:auto;">
          <i class="fa-solid fa-arrow-right"></i> Select Station
        </button>
      </div>`).join("");

    stationsGrid.querySelectorAll(".btn-choose-station").forEach(btn =>
      btn.addEventListener("click", e => {
        state.activeDraft.stationId = e.currentTarget.dataset.station;
        document.getElementById("bikes-catalog")?.scrollIntoView({ behavior: "smooth" });
        showToast("Station selected! Browse bikes below.", "info");
      })
    );
  }

  // ============================================================
  // FARE ESTIMATOR
  // ============================================================
  function updateEstimator() {
    if (!estHours || !estResultPrice) return;
    const cat  = estCategory?.value || "motorcycle";
    const hrs  = parseInt(estHours.value, 10);
    const ins  = estInsurance?.checked || false;

    if (estHoursDisplay) estHoursDisplay.textContent = `${hrs} hr${hrs === 1 ? "" : "s"}`;

    const rates = {
      motorcycle: { hourly: 280, daily: 1100 },
      scooter:    { hourly: 140, daily:  600 },
      electric:   { hourly: 200, daily:  800 },
      mountain:   { hourly: 110, daily:  450 },
      road:       { hourly: 110, daily:  450 },
      cruiser:    { hourly:  70, daily:  280 },
      fattire:    { hourly: 140, daily:  600 }
    };

    const rate = rates[cat] || rates.motorcycle;
    let cost = hrs < 8 ? hrs * rate.hourly : Math.ceil(hrs / 24) * rate.daily;
    if (ins) cost += Math.max(1, Math.ceil(hrs / 24)) * 100;

    estResultPrice.textContent = formatINR(cost);
    if (estResultNotes) estResultNotes.textContent = `Estimated for ${hrs}h ride with standard equipment.`;
  }

  // ============================================================
  // FAQ ACCORDION
  // ============================================================
  function renderFaqs() {
    if (!faqList) return;
    faqList.innerHTML = FAQS_DATA.map((item, idx) => `
      <div class="faq-item ${idx === 0 ? "active" : ""}">
        <button class="faq-question">
          <span>${item.q}</span>
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="faq-answer" ${idx === 0 ? 'style="max-height:300px;"' : ""}>
          <p>${item.a}</p>
        </div>
      </div>`).join("");

    faqList.querySelectorAll(".faq-question").forEach(btn => {
      btn.addEventListener("click", () => {
        const item   = btn.closest(".faq-item");
        const ans    = item.querySelector(".faq-answer");
        const active = item.classList.contains("active");
        faqList.querySelectorAll(".faq-item").forEach(fi => {
          fi.classList.remove("active");
          fi.querySelector(".faq-answer").style.maxHeight = null;
        });
        if (!active) { item.classList.add("active"); ans.style.maxHeight = ans.scrollHeight + "px"; }
      });
    });
  }

  // ============================================================
  // TOAST NOTIFICATIONS
  // ============================================================
  function showToast(message, type = "success") {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = `toast${type === "error" ? " toast-error" : type === "info" ? " toast-info" : ""}`;
    const icon = type === "error" ? "fa-circle-exclamation" : type === "info" ? "fa-circle-info" : "fa-circle-check";
    toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0"; toast.style.transform = "translateX(40px)";
      toast.style.transition = "all .3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // ============================================================
  // EVENT BINDING
  // ============================================================
  function bindEvents() {
    // Auth events
    navLoginBtn?.addEventListener("click", () => openAuthModal("login"));
    mobileLoginBtn?.addEventListener("click", () => { mobileDrawer?.classList.remove("active"); openAuthModal("login"); });
    navLogoutBtn?.addEventListener("click", handleLogout);
    authModalClose?.addEventListener("click", closeAuthModal);
    authModal?.addEventListener("click", e => { if (e.target === authModal) closeAuthModal(); });
    loginTab?.addEventListener("click", () => switchAuthTab("login"));
    signupTab?.addEventListener("click", () => switchAuthTab("signup"));
    loginFormEl?.addEventListener("submit", handleLogin);
    signupFormEl?.addEventListener("submit", handleSignup);
    document.getElementById("goto-signup")?.addEventListener("click", e => { e.preventDefault(); switchAuthTab("signup"); });
    document.getElementById("goto-login")?.addEventListener("click",  e => { e.preventDefault(); switchAuthTab("login"); });

    // Category tabs
    categoryTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        categoryTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        state.activeCategory = tab.dataset.category;
        renderBikes();
      });
    });

    // Search
    searchInput?.addEventListener("input", e => { state.searchQuery = e.target.value; renderBikes(); });

    // Price slider
    priceSlider?.addEventListener("input", e => {
      state.maxPrice = Number(e.target.value);
      if (priceValueDisplay) priceValueDisplay.textContent = `₹${state.maxPrice}/hr`;
      renderBikes();
    });

    // Sort
    sortSelect?.addEventListener("change", e => { state.sortBy = e.target.value; renderBikes(); });

    // Quick finder
    btnQuickFind?.addEventListener("click", () => {
      const cat = finderCategory?.value || "all";
      state.activeCategory = cat;
      categoryTabs.forEach(t => t.classList.toggle("active", t.dataset.category === cat));
      renderBikes();
      document.getElementById("bikes-catalog")?.scrollIntoView({ behavior: "smooth" });
    });

    // Date & Time changes
    [inputPickupDate, inputPickupTime, inputReturnDate, inputReturnTime].forEach(el =>
      el?.addEventListener("change", recalculateBookingTotal)
    );

    // Promo
    btnApplyPromo?.addEventListener("click", handleApplyPromo);
    document.querySelectorAll(".promo-code-pill").forEach(pill =>
      pill.addEventListener("click", e => { if (promoInput) { promoInput.value = e.currentTarget.textContent.trim(); handleApplyPromo(); } })
    );

    // Booking modal
    bookingModalClose?.addEventListener("click", closeBookingModal);
    bookingModal?.addEventListener("click", e => { if (e.target === bookingModal) closeBookingModal(); });
    bookingForm?.addEventListener("submit", handleBookingSubmit);

    // Pass modal
    passModalClose?.addEventListener("click", closePassModal);
    passModal?.addEventListener("click", e => { if (e.target === passModal) closePassModal(); });
    btnPrintPass?.addEventListener("click", () => window.print());

    // Estimator
    estCategory?.addEventListener("change", updateEstimator);
    estHours?.addEventListener("input", updateEstimator);
    estInsurance?.addEventListener("change", updateEstimator);

    // Mobile drawer
    hamburgerBtn?.addEventListener("click", () => mobileDrawer?.classList.add("active"));
    drawerCloseBtn?.addEventListener("click", () => mobileDrawer?.classList.remove("active"));
    mobileNavLinks.forEach(link => link.addEventListener("click", () => mobileDrawer?.classList.remove("active")));
  }

  // ============================================================
  // START
  // ============================================================
  init();
});
