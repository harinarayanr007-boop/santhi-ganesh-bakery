/**
 * Santhi Ganesh Bakery - Mobile Order Application Logic
 * Replicates the complete customer ordering journey with native-like mobile UX.
 */

// Global Application State
const MobileApp = {
  activeScreen: 'home',
  diningMode: 'delivery', // 'delivery', 'takeaway', 'dinein'
  activeCategory: 'all',
  activeDiet: 'all', // 'all', 'veg', 'nonveg', 'special'
  searchQuery: '',
  cart: [],
  appliedCoupon: null,
  activeOrder: null,
  allProducts: []
};

// Available Promo Coupons
const COUPONS = [
  { code: 'WELCOME50', discount: 50, minOrder: 250, desc: '₹50 OFF on your first order above ₹250' },
  { code: 'FREEDELIVERY', discount: 30, minOrder: 300, desc: 'Free Delivery on orders above ₹300' },
  { code: 'BAKERY100', discount: 100, minOrder: 600, desc: '₹100 FLAT OFF on party orders above ₹600' }
];

// Product image lookup helper
function resolveImage(item) {
  if (item.image && item.image.trim()) return item.image;
  const name = (item.name || item.title || '').toLowerCase();
  if (name.includes('burger')) return '../posters/sg_epic_burger.jpg';
  if (name.includes('boba') || name.includes('juice') || name.includes('shake')) return '../posters/sg_clean_poster_juices_boba.jpg';
  if (name.includes('pizza')) return '../posters/sg_clean_poster_pizza.jpg';
  if (name.includes('sandwich')) return '../posters/sg_clean_poster_sandwich.jpg';
  if (name.includes('pav') || name.includes('bhaji')) return '../posters/sg_clean_poster_pavbhaji.jpg';
  if (name.includes('omelette') || name.includes('egg')) return '../posters/sg_clean_poster_omelette.jpg';
  if (name.includes('cake') || name.includes('pastry') || name.includes('truffle')) return '../posters/sg_clean_poster_cakes.jpg';
  return '../assets/banner1.jpg';
}

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initCatalogData();
  initCartFromStorage();
  initActiveOrderFromStorage();
  setupEventListeners();
  renderApp();
});

// Load and unify items from cafe menu and cake products
function initCatalogData() {
  let combined = [];

  // 1. In-Store Cafe Items (from cafe-menu-data.js)
  if (typeof IN_STORE_MENU !== 'undefined' && Array.isArray(IN_STORE_MENU)) {
    combined = combined.concat(IN_STORE_MENU.map(item => ({
      id: item.id || 'cafe-' + Math.random().toString(36).substr(2, 9),
      name: item.name,
      desc: item.desc || '',
      price: Number(item.price) || 80,
      category: item.category || 'cafe',
      category_name: item.category_name || 'Cafe Specialties',
      is_veg: item.is_veg !== false,
      badge: item.badge || (item.price > 100 ? 'Popular 🔥' : ''),
      icon: item.icon || '🍽️',
      image: resolveImage(item),
      type: 'cafe'
    })));
  }

  // 2. Signature Cakes (from products-data.js)
  if (typeof DEFAULT_PRODUCTS_DATA !== 'undefined' && Array.isArray(DEFAULT_PRODUCTS_DATA)) {
    combined = combined.concat(DEFAULT_PRODUCTS_DATA.slice(0, 30).map(cake => ({
      id: cake.id || 'cake-' + Math.random().toString(36).substr(2, 9),
      name: cake.title,
      desc: cake.description || 'Delicious handcrafted cake baked fresh in Tirunelveli.',
      price: Number(cake.price) || 650,
      category: 'cakes',
      category_name: 'Celebration Cakes',
      is_veg: true,
      badge: 'Bestseller 👑',
      icon: '🎂',
      image: cake.image ? '../' + cake.image.replace(/^\.\//, '') : '../posters/sg_clean_poster_cakes.jpg',
      type: 'cake'
    })));
  }

  MobileApp.allProducts = combined;
}

// LocalStorage helpers
function initCartFromStorage() {
  try {
    const saved = localStorage.getItem('sg_mobile_cart');
    if (saved) MobileApp.cart = JSON.parse(saved);
  } catch (e) {
    MobileApp.cart = [];
  }
  updateCartBadge();
}

function saveCartToStorage() {
  try {
    localStorage.setItem('sg_mobile_cart', JSON.stringify(MobileApp.cart));
  } catch (e) {}
  updateCartBadge();
  updateFloatingCartBar();
}

function initActiveOrderFromStorage() {
  try {
    const saved = localStorage.getItem('sg_mobile_active_order');
    if (saved) MobileApp.activeOrder = JSON.parse(saved);
  } catch (e) {}
}

// Screen Navigation
function switchScreen(screenId) {
  MobileApp.activeScreen = screenId;
  document.querySelectorAll('.app-screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('screen-' + screenId);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-screen') === screenId);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (screenId === 'cart') renderCartScreen();
  if (screenId === 'track') renderTrackScreen();
  if (screenId === 'offers') renderOffersScreen();
  if (screenId === 'menu') renderMenuCatalog();
}

// Dining Mode Toggle (Delivery, Takeaway, Dine-in)
function setDiningMode(mode) {
  MobileApp.diningMode = mode;
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
  });
  if (MobileApp.activeScreen === 'cart') renderCartScreen();
}

// Filter Operations
function setCategory(cat) {
  MobileApp.activeCategory = cat;
  document.querySelectorAll('.cat-bubble-item, .filter-chip').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-cat') === cat);
  });
  renderMenuCatalog();
}

function setDietFilter(diet) {
  MobileApp.activeDiet = (MobileApp.activeDiet === diet) ? 'all' : diet;
  document.querySelectorAll('.diet-pill').forEach(pill => {
    pill.classList.remove('active-veg', 'active-nonveg');
    const pDiet = pill.getAttribute('data-diet');
    if (MobileApp.activeDiet === pDiet) {
      pill.classList.add(pDiet === 'veg' ? 'active-veg' : 'active-nonveg');
    }
  });
  renderMenuCatalog();
}

// Cart Operations
function addToCart(productId, delta = 1) {
  const item = MobileApp.allProducts.find(p => p.id === productId);
  if (!item) return;

  const existing = MobileApp.cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += delta;
    if (existing.qty <= 0) {
      MobileApp.cart = MobileApp.cart.filter(c => c.id !== productId);
    }
  } else if (delta > 0) {
    MobileApp.cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      is_veg: item.is_veg,
      qty: 1
    });
  }

  saveCartToStorage();
  renderItemSteppers();
  if (MobileApp.activeScreen === 'cart') renderCartScreen();
}

function getCartCount() {
  return MobileApp.cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return MobileApp.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function updateCartBadge() {
  const count = getCartCount();
  const badge = document.getElementById('cart-nav-badge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-block' : 'none';
  }
}

function updateFloatingCartBar() {
  const bar = document.getElementById('floating-cart-bar');
  if (!bar) return;

  const count = getCartCount();
  if (count > 0 && MobileApp.activeScreen !== 'cart' && MobileApp.activeScreen !== 'track') {
    bar.style.display = 'flex';
    document.getElementById('floating-cart-count').textContent = `${count} ${count === 1 ? 'Item' : 'Items'}`;
    document.getElementById('floating-cart-total').textContent = `₹${getCartTotal()}`;
  } else {
    bar.style.display = 'none';
  }
}

// Render Food Cards
function createFoodCardHTML(item) {
  const cartItem = MobileApp.cart.find(c => c.id === item.id);
  const qty = cartItem ? cartItem.qty : 0;

  const stepperHTML = qty > 0 ? `
    <div class="btn-add-stepper stepper-active">
      <button class="stepper-btn" onclick="event.stopPropagation(); addToCart('${item.id}', -1)">-</button>
      <span class="stepper-count">${qty}</span>
      <button class="stepper-btn" onclick="event.stopPropagation(); addToCart('${item.id}', 1)">+</button>
    </div>
  ` : `
    <div class="btn-add-stepper" onclick="event.stopPropagation(); addToCart('${item.id}', 1)">
      + ADD
    </div>
  `;

  const badgeHTML = item.badge ? `<span class="food-card-badge">${item.badge}</span>` : '';

  return `
    <div class="food-card" onclick="openProductSheet('${item.id}')">
      <div class="food-card-left">
        <div>
          <div class="food-veg-indicator ${item.is_veg ? 'veg' : 'nonveg'}">
            ${item.is_veg ? '🟢 PURE VEG' : '🔴 NON-VEG'}
          </div>
          <h4 class="food-card-title">${item.name}</h4>
          <p class="food-card-desc">${item.desc}</p>
        </div>
        <div class="food-card-price-row">
          <span class="food-price">₹${item.price}</span>
        </div>
      </div>
      <div class="food-card-right">
        <img src="${item.image}" alt="${item.name}" class="food-card-img" loading="lazy" onerror="this.src='../assets/banner1.jpg'">
        ${badgeHTML}
        ${stepperHTML}
      </div>
    </div>
  `;
}

// Render Menu Catalog with Active Filters
function renderMenuCatalog() {
  const container = document.getElementById('menu-items-container');
  if (!container) return;

  let filtered = MobileApp.allProducts;

  // Category filter
  if (MobileApp.activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === MobileApp.activeCategory);
  }

  // Dietary filter
  if (MobileApp.activeDiet === 'veg') {
    filtered = filtered.filter(p => p.is_veg);
  } else if (MobileApp.activeDiet === 'nonveg') {
    filtered = filtered.filter(p => !p.is_veg);
  }

  // Search filter
  if (MobileApp.searchQuery) {
    const q = MobileApp.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <i class="ph ph-magnifying-glass" style="font-size: 2.5rem; opacity: 0.4;"></i>
        <h4 style="margin-top: 10px; color: var(--text-main);">No delicious items found</h4>
        <p style="font-size: 0.8rem; margin-top: 4px;">Try searching for burger, juice, pizza, or boba.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(createFoodCardHTML).join('');
}

// Render Home Screen Trending Section
function renderHomeScreen() {
  const trendingContainer = document.getElementById('home-trending-container');
  if (trendingContainer) {
    const trending = MobileApp.allProducts.filter(p => p.badge || p.price > 70).slice(0, 8);
    trendingContainer.innerHTML = trending.map(createFoodCardHTML).join('');
  }
}

// Update all button steppers on screen without re-rendering everything
function renderItemSteppers() {
  if (MobileApp.activeScreen === 'home') renderHomeScreen();
  if (MobileApp.activeScreen === 'menu') renderMenuCatalog();
}

// Product Details Bottom Sheet
function openProductSheet(productId) {
  const item = MobileApp.allProducts.find(p => p.id === productId);
  if (!item) return;

  const overlay = document.getElementById('product-sheet-overlay');
  const sheet = document.getElementById('product-sheet-content');

  sheet.innerHTML = `
    <div class="sheet-handle"></div>
    <button class="sheet-close-btn" onclick="closeBottomSheet('product-sheet-overlay')"><i class="ph ph-x"></i></button>
    <div style="height: 190px; border-radius: 14px; overflow: hidden; margin-bottom: 14px; position: relative;">
      <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='../assets/banner1.jpg'">
      <div style="position: absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); color: #FFF; font-size: 0.7rem; font-weight: 800; padding: 3px 8px; border-radius: 99px;">
        ${item.is_veg ? '🟢 100% PURE VEG' : '🔴 NON-VEG'}
      </div>
    </div>
    <h3 style="font-family: var(--font-serif); font-size: 1.25rem; font-weight: 700; color: var(--text-main);">${item.name}</h3>
    <p style="font-size: 0.85rem; color: var(--text-muted); margin: 6px 0 16px 0; line-height: 1.4;">${item.desc || 'Freshly prepared at Santhi Ganesh Bakery Tirunelveli with premium ingredients.'}</p>
    
    <div style="background: var(--surface-alt); padding: 12px; border-radius: 12px; margin-bottom: 20px; border: 1px solid var(--border);">
      <div style="font-size: 0.8rem; font-weight: 700; margin-bottom: 6px; color: var(--text-main);">✨ Chef's Note</div>
      <div style="font-size: 0.78rem; color: var(--text-muted);">Customizations like less sugar, extra cheese, or customized message can be specified during WhatsApp checkout.</div>
    </div>

    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px;">
      <div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">Item Price</div>
        <div style="font-size: 1.35rem; font-weight: 800; color: var(--text-main);">₹${item.price}</div>
      </div>
      <button class="btn-primary" style="width: auto; padding: 12px 28px;" onclick="addToCart('${item.id}', 1); closeBottomSheet('product-sheet-overlay');">
        <i class="ph ph-shopping-bag"></i> Add to Cart
      </button>
    </div>
  `;

  overlay.classList.add('active');
}

function closeBottomSheet(overlayId) {
  const overlay = document.getElementById(overlayId);
  if (overlay) overlay.classList.remove('active');
}

// Render Cart & Checkout Screen
function renderCartScreen() {
  const container = document.getElementById('cart-items-list');
  const summaryContainer = document.getElementById('cart-bill-summary');
  if (!container) return;

  if (MobileApp.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px;">
        <div style="width: 80px; height: 80px; border-radius: 50%; background: var(--surface); border: 2px dashed var(--border); display: inline-flex; align-items: center; justify-content: center; font-size: 2.2rem; color: var(--text-muted); margin-bottom: 14px;">
          🛒
        </div>
        <h3 style="font-size: 1.15rem; font-family: var(--font-serif); color: var(--text-main);">Your Cart is Empty</h3>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin: 6px 0 20px 0;">Add your favorite juices, burgers, pizzas or cakes to get started!</p>
        <button class="btn-primary" style="width: auto; padding: 10px 24px; margin: 0 auto;" onclick="switchScreen('menu')">
          Browse Full Menu
        </button>
      </div>
    `;
    if (summaryContainer) summaryContainer.style.display = 'none';
    return;
  }

  if (summaryContainer) summaryContainer.style.display = 'block';

  // Render Line Items
  container.innerHTML = MobileApp.cart.map(item => `
    <div style="display: flex; align-items: center; gap: 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 10px; margin-bottom: 10px;">
      <img src="${item.image}" alt="${item.name}" style="width: 54px; height: 54px; border-radius: 8px; object-fit: cover; flex-shrink: 0;" onerror="this.src='../assets/banner1.jpg'">
      <div style="flex: 1; min-width: 0;">
        <h4 style="font-size: 0.88rem; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.name}</h4>
        <div style="font-size: 0.85rem; font-weight: 800; color: var(--primary); margin-top: 2px;">₹${item.price * item.qty}</div>
      </div>
      <div class="btn-add-stepper stepper-active" style="position: static; transform: none; width: 84px;">
        <button class="stepper-btn" onclick="addToCart('${item.id}', -1)">-</button>
        <span class="stepper-count">${item.qty}</span>
        <button class="stepper-btn" onclick="addToCart('${item.id}', 1)">+</button>
      </div>
    </div>
  `).join('');

  // Bill Calculations
  const subtotal = getCartTotal();
  const deliveryFee = (MobileApp.diningMode === 'delivery' && subtotal < 300) ? 30 : 0;
  const discount = MobileApp.appliedCoupon ? MobileApp.appliedCoupon.discount : 0;
  const grandTotal = Math.max(0, subtotal + deliveryFee - discount);

  // Update Free Delivery Progress Bar
  const freeDeliveryNeeded = Math.max(0, 300 - subtotal);
  const freeDeliveryPct = Math.min(100, Math.round((subtotal / 300) * 100));
  const deliveryNoticeEl = document.getElementById('free-delivery-notice');
  if (deliveryNoticeEl) {
    if (MobileApp.diningMode === 'delivery') {
      deliveryNoticeEl.innerHTML = `
        <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 12px; margin-bottom: 14px;">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700; margin-bottom: 6px;">
            <span>${freeDeliveryNeeded === 0 ? '🎉 You unlocked FREE Delivery!' : `Add ₹${freeDeliveryNeeded} more for FREE delivery`}</span>
            <span>${freeDeliveryPct}%</span>
          </div>
          <div style="width: 100%; height: 6px; background: rgba(26,18,11,0.08); border-radius: 3px; overflow: hidden;">
            <div style="width: ${freeDeliveryPct}%; height: 100%; background: var(--green);"></div>
          </div>
        </div>
      `;
    } else {
      deliveryNoticeEl.innerHTML = '';
    }
  }

  // Update Bill Card
  const billHTML = `
    <div class="bill-card">
      <div style="font-size: 0.85rem; font-weight: 800; margin-bottom: 10px; color: var(--text-main);">Bill Summary</div>
      <div class="bill-row">
        <span>Item Total (${getCartCount()} items)</span>
        <span>₹${subtotal}</span>
      </div>
      <div class="bill-row">
        <span>Order Mode</span>
        <span style="font-weight: 700; text-transform: capitalize;">${MobileApp.diningMode}</span>
      </div>
      <div class="bill-row">
        <span>Delivery Fee</span>
        <span>${deliveryFee === 0 ? '<strong style="color: var(--green);">FREE</strong>' : '₹' + deliveryFee}</span>
      </div>
      ${discount > 0 ? `
        <div class="bill-row" style="color: var(--green);">
          <span>Promo Discount (${MobileApp.appliedCoupon.code})</span>
          <span>- ₹${discount}</span>
        </div>
      ` : ''}
      <div class="bill-row total">
        <span>To Pay</span>
        <span>₹${grandTotal}</span>
      </div>
    </div>
  `;
  document.getElementById('bill-breakdown-container').innerHTML = billHTML;
}

// Coupon Operations
function applyCouponCode(code) {
  const coupon = COUPONS.find(c => c.code === code);
  if (!coupon) {
    alert('Invalid Coupon Code');
    return;
  }

  const subtotal = getCartTotal();
  if (subtotal < coupon.minOrder) {
    alert(`Coupon requires minimum order of ₹${coupon.minOrder}. Add ₹${coupon.minOrder - subtotal} more!`);
    return;
  }

  MobileApp.appliedCoupon = coupon;
  alert(`Coupon ${code} applied successfully! You saved ₹${coupon.discount}.`);
  renderCartScreen();
  switchScreen('cart');
}

function renderOffersScreen() {
  const container = document.getElementById('offers-container');
  if (!container) return;

  container.innerHTML = COUPONS.map(c => `
    <div class="coupon-card">
      <div>
        <div class="coupon-code">🏷️ ${c.code}</div>
        <div class="coupon-desc">${c.desc}</div>
      </div>
      <button class="btn-apply-coupon" onclick="applyCouponCode('${c.code}')">APPLY</button>
    </div>
  `).join('');
}

// Dispatch Order (via WhatsApp or Online Simulation)
function placeOrder(method = 'whatsapp') {
  if (MobileApp.cart.length === 0) {
    alert('Please add items to your cart first.');
    return;
  }

  const nameInput = document.getElementById('cust-name');
  const phoneInput = document.getElementById('cust-phone');
  const addressInput = document.getElementById('cust-address');
  const notesInput = document.getElementById('cust-notes');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';
  const notes = notesInput ? notesInput.value.trim() : '';

  if (!name || !phone) {
    alert('Please provide your Name and Phone Number to place your order.');
    if (!name && nameInput) nameInput.focus();
    else if (phoneInput) phoneInput.focus();
    return;
  }

  const orderId = 'SG-' + Math.floor(1000 + Math.random() * 9000);
  const subtotal = getCartTotal();
  const deliveryFee = (MobileApp.diningMode === 'delivery' && subtotal < 300) ? 30 : 0;
  const discount = MobileApp.appliedCoupon ? MobileApp.appliedCoupon.discount : 0;
  const grandTotal = Math.max(0, subtotal + deliveryFee - discount);

  const orderData = {
    id: orderId,
    timestamp: new Date().toISOString(),
    customer: { name, phone, address, notes },
    mode: MobileApp.diningMode,
    items: [...MobileApp.cart],
    subtotal,
    deliveryFee,
    discount,
    grandTotal,
    method,
    status: 'Confirmed'
  };

  MobileApp.activeOrder = orderData;
  localStorage.setItem('sg_mobile_active_order', JSON.stringify(orderData));

  // Build WhatsApp Message
  const itemLines = MobileApp.cart.map(c => `• ${c.name} x ${c.qty} = ₹${c.price * c.qty}`).join('\n');
  const message = `*NEW ORDER - SANTHI GANESH BAKERY*\n` +
    `--------------------------------\n` +
    `*Order ID:* ${orderId}\n` +
    `*Customer:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Mode:* ${MobileApp.diningMode.toUpperCase()}\n` +
    (address ? `*Address / Table:* ${address}\n` : '') +
    (notes ? `*Special Notes:* ${notes}\n` : '') +
    `--------------------------------\n` +
    `*ITEMS ORDERED:*\n${itemLines}\n` +
    `--------------------------------\n` +
    `*Grand Total: ₹${grandTotal}*\n\n` +
    `Please confirm my order. Thank you!`;

  // Clear Cart
  MobileApp.cart = [];
  MobileApp.appliedCoupon = null;
  saveCartToStorage();

  // Redirect to WhatsApp
  const waUrl = `https://wa.me/917339073844?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');

  // Switch to Live Tracking Screen
  switchScreen('track');
}

// Render Order Tracking Screen
function renderTrackScreen() {
  const container = document.getElementById('track-screen-content');
  if (!container) return;

  if (!MobileApp.activeOrder) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i class="ph ph-moped" style="font-size: 3rem; opacity: 0.3;"></i>
        <h3 style="margin-top: 12px; color: var(--text-main); font-family: var(--font-serif);">No Active Order Found</h3>
        <p style="font-size: 0.82rem; margin-top: 4px;">Place an order to track real-time bakery status.</p>
        <button class="btn-primary" style="width: auto; padding: 10px 24px; margin: 20px auto 0 auto;" onclick="switchScreen('menu')">
          Order Food Now
        </button>
      </div>
    `;
    return;
  }

  const o = MobileApp.activeOrder;
  const timeFormatted = new Date(o.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  container.innerHTML = `
    <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 18px; margin-bottom: 20px; text-align: center;">
      <div style="font-size: 0.72rem; font-weight: 800; color: var(--primary); text-transform: uppercase; letter-spacing: 1px;">Estimated Arrival</div>
      <div style="font-size: 2rem; font-weight: 800; color: var(--text-main); margin: 4px 0;">25 - 35 mins</div>
      <div style="font-size: 0.8rem; color: var(--text-muted);">Placed at ${timeFormatted} • Order #${o.id}</div>
    </div>

    <!-- Stepper Tracker -->
    <div class="tracking-stepper">
      <div class="step-item completed">
        <div class="step-icon-bubble"><i class="ph ph-check-circle"></i></div>
        <div class="step-content">
          <h4>Order Confirmed</h4>
          <p>Dispatched to WhatsApp & kitchen terminal</p>
        </div>
      </div>

      <div class="step-item active">
        <div class="step-icon-bubble"><i class="ph ph-cooking-pot"></i></div>
        <div class="step-content">
          <h4>Kitchen Preparing</h4>
          <p>Fresh juices pressed & oven baking in progress</p>
        </div>
      </div>

      <div class="step-item">
        <div class="step-icon-bubble"><i class="ph ph-moped"></i></div>
        <div class="step-content">
          <h4>Out for Delivery</h4>
          <p>Rider will arrive at your address soon</p>
        </div>
      </div>

      <div class="step-item">
        <div class="step-icon-bubble"><i class="ph ph-house-line"></i></div>
        <div class="step-content">
          <h4>Delivered & Enjoyed</h4>
          <p>Taste the traditional goodness</p>
        </div>
      </div>
    </div>

    <!-- Store Contact Card -->
    <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between;">
      <div>
        <div style="font-size: 0.9rem; font-weight: 700;">Santhi Ganesh Bakery</div>
        <div style="font-size: 0.75rem; color: var(--text-muted);">Thirunagar, Tirunelveli</div>
      </div>
      <div style="display: flex; gap: 8px;">
        <a href="tel:+917339073844" class="icon-btn" style="color: var(--primary);"><i class="ph ph-phone-call"></i></a>
        <a href="https://wa.me/917339073844" target="_blank" class="icon-btn" style="color: var(--green);"><i class="ph ph-whatsapp-logo"></i></a>
      </div>
    </div>

    <!-- Order Receipt Items -->
    <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 16px;">
      <div style="font-size: 0.88rem; font-weight: 700; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 8px;">Order Details</div>
      ${o.items.map(it => `
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 6px;">
          <span>${it.name} x ${it.qty}</span>
          <span style="font-weight: 700;">₹${it.price * it.qty}</span>
        </div>
      `).join('')}
      <div style="border-top: 1px dashed var(--border); margin-top: 8px; padding-top: 8px; display: flex; justify-content: space-between; font-weight: 800;">
        <span>Total Paid</span>
        <span>₹${o.grandTotal}</span>
      </div>
    </div>
  `;
}

// Setup Event Listeners
function setupEventListeners() {
  const searchInput = document.getElementById('app-search-input');
  const clearBtn = document.getElementById('search-clear-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      MobileApp.searchQuery = e.target.value;
      if (clearBtn) clearBtn.style.display = e.target.value ? 'block' : 'none';
      if (MobileApp.activeScreen !== 'menu') switchScreen('menu');
      renderMenuCatalog();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        MobileApp.searchQuery = '';
        clearBtn.style.display = 'none';
        renderMenuCatalog();
      }
    });
  }
}

// Master Render
function renderApp() {
  renderHomeScreen();
  renderMenuCatalog();
  renderOffersScreen();
  updateFloatingCartBar();
}
