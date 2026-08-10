/* ==========================================================================
   SANTHI GANESH BAKERY - APP INTERACTIVITY & STATE MANAGEMENT
   ========================================================================== */

// DEFAULT CATALOG DATA
const DEFAULT_PRODUCTS_DATA = [
  {
    id: 'prod-1',
    title: 'Signature Black Forest Cake',
    category: 'birthday-her',
    price: 550,
    weight: '1 kg',
    variants: [
      { weight: '1 kg', price: 550 },
      { weight: '1.5 kg', price: 800 },
      { weight: '2 kg', price: 1050 }
    ],
    isVeg: true,
    image: './Birthday cakes for her/Choco_Truffle_500_gms.jpg',
    gallery: [
      './Birthday cakes for her/Choco_Truffle_500_gms.jpg',
      './Birthday cakes for her/0015_PinkRosesCake_2_360x.jpg',
      './Birthday cakes for her/0000_cake_0014_TheCrownCake_360x.jpg'
    ],
    description: 'Rich dark chocolate layers with fresh whipped cream and juicy cherries. Tirunelveli’s favorite!'
  },
  {
    id: 'prod-2',
    title: 'Royal Crown Princess Cake',
    category: 'birthday-her',
    price: 850,
    weight: '1.5 kg',
    variants: [
      { weight: '1 kg', price: 600 },
      { weight: '1.5 kg', price: 850 },
      { weight: '2 kg', price: 1100 }
    ],
    isVeg: true,
    image: './Birthday cakes for her/0000_cake_0014_TheCrownCake_360x.jpg',
    gallery: [
      './Birthday cakes for her/0000_cake_0014_TheCrownCake_360x.jpg',
      './Birthday cakes for her/0015_PinkRosesCake_2_360x.jpg'
    ],
    description: 'Golden tiara custom birthday cake crafted with pastel buttercream flowers.'
  },
  {
    id: 'prod-3',
    title: 'Pink Rose Cascade Cake',
    category: 'birthday-her',
    price: 650,
    weight: '1 kg',
    variants: [
      { weight: '1 kg', price: 650 },
      { weight: '1.5 kg', price: 950 },
      { weight: '2 kg', price: 1200 }
    ],
    isVeg: true,
    image: './Birthday cakes for her/0015_PinkRosesCake_2_360x.jpg',
    gallery: [
      './Birthday cakes for her/0015_PinkRosesCake_2_360x.jpg',
      './Birthday cakes for her/Choco_Truffle_500_gms.jpg'
    ],
    description: 'Elegant pink buttercream rose piping with rich vanilla truffle sponge.'
  },
  {
    id: 'prod-4',
    title: 'Good Ol Pineapple Delight',
    category: 'birthday-her',
    price: 480,
    weight: '1 kg',
    variants: [
      { weight: '1 kg', price: 480 },
      { weight: '1.5 kg', price: 700 },
      { weight: '2 kg', price: 900 }
    ],
    isVeg: true,
    image: './Birthday cakes for her/Good-Ol-Pineapple-Cake1.jpg',
    gallery: [
      './Birthday cakes for her/Good-Ol-Pineapple-Cake1.jpg',
      './Birthday cakes for her/Choco_Truffle_500_gms.jpg'
    ],
    description: 'Fresh pineapple bits layered with fluffy vanilla sponge and whipped cream.'
  },
  {
    id: 'prod-5',
    title: 'Lamborghini Speedster Cake',
    category: 'birthday-him',
    price: 950,
    weight: '1.5 kg',
    variants: [
      { weight: '1 kg', price: 700 },
      { weight: '1.5 kg', price: 950 },
      { weight: '2 kg', price: 1250 }
    ],
    isVeg: true,
    image: './Birthday cakes for him/0001_cake_0013_TheLamborghiniCake_360x.jpg',
    gallery: [
      './Birthday cakes for him/0001_cake_0013_TheLamborghiniCake_360x.jpg',
      './Birthday cakes for him/0001s_0010_GamersX-BoxCake_360x.jpg'
    ],
    description: 'Custom sports car themed birthday cake with rich chocolate fudge fill.'
  },
  {
    id: 'prod-6',
    title: 'Gamers X-Box Edition Cake',
    category: 'birthday-him',
    price: 890,
    weight: '1.5 kg',
    variants: [
      { weight: '1 kg', price: 650 },
      { weight: '1.5 kg', price: 890 },
      { weight: '2 kg', price: 1150 }
    ],
    isVeg: true,
    image: './Birthday cakes for him/0001s_0010_GamersX-BoxCake_360x.jpg',
    gallery: [
      './Birthday cakes for him/0001s_0010_GamersX-BoxCake_360x.jpg',
      './Birthday cakes for him/0001_cake_0013_TheLamborghiniCake_360x.jpg'
    ],
    description: 'Hand-sculpted controller & console design for video game enthusiasts.'
  },
  {
    id: 'prod-7',
    title: '3-Tier Floral Wedding Cake',
    category: 'wedding',
    price: 2400,
    weight: '3 kg',
    variants: [
      { weight: '2 kg', price: 1800 },
      { weight: '3 kg', price: 2400 },
      { weight: '5 kg', price: 3800 }
    ],
    isVeg: true,
    image: './Engagement, wedding cakes/0012_Floral3TierCake_360x.jpg',
    gallery: [
      './Engagement, wedding cakes/0012_Floral3TierCake_360x.jpg',
      './Engagement, wedding cakes/0013_Floral2TierWeddingCake_360x.jpg',
      './Engagement, wedding cakes/0000_WeddingFlowerCake_360x.jpg'
    ],
    description: 'Grand 3-tiered wedding cake adorned with handcrafted sugar orchids and golden accents.'
  },
  {
    id: 'prod-8',
    title: 'Engagement Diamond Ring Cake',
    category: 'wedding',
    price: 1350,
    weight: '2 kg',
    variants: [
      { weight: '1.5 kg', price: 1050 },
      { weight: '2 kg', price: 1350 },
      { weight: '3 kg', price: 1950 }
    ],
    isVeg: true,
    image: './Engagement, wedding cakes/Engagement_Ring_Cake_-_Smoor-4708887_360x.jpg',
    gallery: [
      './Engagement, wedding cakes/Engagement_Ring_Cake_-_Smoor-4708887_360x.jpg',
      './Engagement, wedding cakes/0012_Floral3TierCake_360x.jpg'
    ],
    description: 'Luxurious engagement ring box theme cake in white and royal velvet.'
  },
  {
    id: 'prod-9',
    title: 'Baby Stroller Celebration Cake',
    category: 'baby-shower',
    price: 780,
    weight: '1 kg',
    variants: [
      { weight: '1 kg', price: 780 },
      { weight: '1.5 kg', price: 1050 },
      { weight: '2 kg', price: 1350 }
    ],
    isVeg: true,
    image: './Baby Shower cakes/0001_BabyStrollerCake_360x.jpg',
    gallery: [
      './Baby Shower cakes/0001_BabyStrollerCake_360x.jpg',
      './Baby Shower cakes/0005_SkyThemedCake_360x.jpg'
    ],
    description: 'Adorable baby stroller fondant cake in sweet pastel blue and yellow.'
  },
  {
    id: 'prod-10',
    title: 'Sky Theme Baby Shower Cake',
    category: 'baby-shower',
    price: 820,
    weight: '1.2 kg',
    variants: [
      { weight: '1 kg', price: 700 },
      { weight: '1.2 kg', price: 820 },
      { weight: '2 kg', price: 1300 }
    ],
    isVeg: true,
    image: './Baby Shower cakes/0005_SkyThemedCake_360x.jpg',
    gallery: [
      './Baby Shower cakes/0005_SkyThemedCake_360x.jpg',
      './Baby Shower cakes/0001_BabyStrollerCake_360x.jpg'
    ],
    description: 'Fluffy clouds and star fondant decorations on soft vanilla bean cake.'
  },
  {
    id: 'prod-11',
    title: 'Crispy Almond Snaps (Pack of 12)',
    category: 'specialty',
    price: 220,
    weight: '250g',
    variants: [
      { weight: '250g', price: 220 },
      { weight: '500g', price: 400 },
      { weight: '1 kg', price: 750 }
    ],
    isVeg: true,
    image: './Birthday cakes for her/almond-snaps-12pc.jpg',
    gallery: [
      './Birthday cakes for her/almond-snaps-12pc.jpg',
      './Birthday cakes for her/Kunafa-Bites_jpg.jpg'
    ],
    description: 'Handcrafted roasted almond thin cookies baked to golden perfection.'
  },
  {
    id: 'prod-12',
    title: 'Authentic Kunafa Bites Box',
    category: 'specialty',
    price: 340,
    weight: '300g',
    variants: [
      { weight: '300g', price: 340 },
      { weight: '500g', price: 550 },
      { weight: '1 kg', price: 1000 }
    ],
    isVeg: true,
    image: './Birthday cakes for her/Kunafa-Bites_jpg.jpg',
    gallery: [
      './Birthday cakes for her/Kunafa-Bites_jpg.jpg',
      './Birthday cakes for her/almond-snaps-12pc.jpg'
    ],
    description: 'Middle-Eastern dessert crisp filled with sweet cheese and pistachios.'
  }
];

const DEFAULT_JOBS_DATA = [
  {
    id: 'job-1',
    title: 'Cleaner',
    type: 'Full Time',
    pay: '₹350 per day',
    location: 'Onsite',
    schedule: 'Daily Shift',
    description: 'Maintain immaculate hygienic standards for our baking hall, equipment, and store counters.'
  },
  {
    id: 'job-2',
    title: 'Supplier',
    type: 'Logistics & Stock',
    pay: '₹350 - ₹450 per day',
    location: 'Onsite',
    schedule: 'Delivery',
    description: 'Manage fresh stock delivery and ingredient supply chain across our Tirunelveli bakery branches.'
  },
  {
    id: 'job-3',
    title: 'Waiter / Server',
    type: 'Front Counter & Service',
    pay: '₹350 - ₹450 per day',
    location: 'Onsite',
    schedule: 'Hospitality',
    description: 'Deliver warm, friendly service to guests, manage cake display counters, and handle customer seating.'
  },
  {
    id: 'job-4',
    title: 'Social Media Manager',
    type: 'Marketing & Content',
    pay: '₹5k - ₹7k per month',
    location: 'Hybrid / Onsite',
    schedule: 'Content Creation',
    description: 'Create engaging video reels, cake showcase photos, and grow our Instagram & Facebook presence in Tirunelveli.'
  },
  {
    id: 'job-5',
    title: 'Social Media Intern',
    type: 'Internship',
    pay: 'Incentives Included',
    location: 'Hybrid / Remote',
    schedule: 'Photography',
    description: 'Assist our media team with daily bakery photography, event coverage, and creative story updates.'
  }
];

// SUPABASE CLOUD DATABASE CONFIGURATION
const SUPABASE_URL = 'https://hkkdeowfoyejfifeftme.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhra2Rlb3dmb3llamZpZmVmdG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1MjQ1NzYsImV4cCI6MjA5OTEwMDU3Nn0.EBw0t2IZoM8koDaV2AOFj6rQbyQINSo_mkrvhhhd0nU';

// Global jobs reference
let JOBS_DATA = DEFAULT_JOBS_DATA;

// Get stored products or defaults
function getStoredProducts() {
  return PRODUCTS_DATA;
}

// Get stored jobs or defaults
function getStoredJobs() {
  return JOBS_DATA;
}

// Fetch live products from Supabase Cloud
async function loadProductsFromSupabase() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/products?select=*&order=created_at.asc`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        PRODUCTS_DATA = data;
      }
    }
  } catch(e) {
    console.log('Supabase products unavailable, using defaults:', e.message);
  }
}

// Fetch live jobs from Supabase Cloud
async function loadJobsFromSupabase() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/jobs?select=*&order=created_at.asc`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        JOBS_DATA = data;
      }
    }
  } catch(e) {
    console.log('Supabase jobs unavailable, using defaults:', e.message);
  }
}

// Save a single product to Supabase (upsert)
async function saveProductToSupabase(product) {
  try {
    // Only send columns that exist in the Supabase table
    const clean = {
      id: product.id,
      title: product.title,
      category: product.category,
      price: product.price,
      weight: product.weight,
      variants: product.variants || [],
      image: product.image || '',
      gallery: product.gallery || [],
      description: product.description || '',
      is_available: product.is_available !== false,
      updated_at: new Date().toISOString()
    };
    const res = await fetch(`${SUPABASE_URL}/rest/v1/products`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(clean)
    });
    if (!res.ok) {
      const err = await res.text();
      console.error('Supabase product save failed:', res.status, err);
    }
  } catch(err) {
    console.error('Supabase product sync error:', err.message);
  }
}

// Toggle product availability status (ON / OFF)
async function toggleProductAvailability(id) {
  const product = PRODUCTS_DATA.find(p => p.id === id);
  if (!product) return;
  product.is_available = (product.is_available === false) ? true : false;
  await saveProductToSupabase(product);
}

// Delete a product from Supabase
async function deleteProductFromSupabase(id) {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.${id}`, {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
  } catch(err) {
    console.log('Supabase product delete error:', err.message);
  }
}

// Save a single job to Supabase (upsert)
async function saveJobToSupabase(job) {
  try {
    // Only send columns that exist in the Supabase table
    const clean = {
      id: job.id,
      title: job.title,
      type: job.type,
      pay: job.pay,
      location: job.location,
      schedule: job.schedule || 'Standard',
      description: job.description || '',
      updated_at: new Date().toISOString()
    };
    const res = await fetch(`${SUPABASE_URL}/rest/v1/jobs`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(clean)
    });
    if (!res.ok) {
      const err = await res.text();
      console.error('Supabase job save failed:', res.status, err);
    }
  } catch(err) {
    console.error('Supabase job sync error:', err.message);
  }
}

// Delete a job from Supabase
async function deleteJobFromSupabase(id) {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/jobs?id=eq.${id}`, {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
  } catch(err) {
    console.log('Supabase job delete error:', err.message);
  }
}

// Legacy compatibility wrappers used by admin.html
function saveStoredProducts(products) {
  PRODUCTS_DATA = products;
  // Upsert all products to Supabase
  products.forEach(p => saveProductToSupabase(p));
}

function saveStoredJobs(jobs) {
  JOBS_DATA = jobs;
  // Upsert all jobs to Supabase
  jobs.forEach(j => saveJobToSupabase(j));
}

// Dynamic Products Reference
let PRODUCTS_DATA = DEFAULT_PRODUCTS_DATA;

// 2. SHOPPING CART STATE
let cartItems = (typeof window !== 'undefined' && window.localStorage)
  ? JSON.parse(localStorage.getItem('sg_bakery_cart') || '[]')
  : [];
let activeCategoryFilter = 'all';
let activeSearchQuery = '';

// DOM Initialization
document.addEventListener('DOMContentLoaded', async () => {
  // Load from Supabase first, then render
  await Promise.all([
    loadProductsFromSupabase(),
    loadJobsFromSupabase()
  ]);

  renderHomePreviewGrid();
  renderFullProductsGrid();
  updateCartUI();
  setupEventListeners();
});

// 3. RENDER HOME PAGE PREVIEW GRID (First 8 Items)
function renderHomePreviewGrid() {
  const container = document.getElementById('products-grid-container');
  if (!container) return;

  const availableItems = PRODUCTS_DATA.filter(p => p.is_available !== false);
  const previewItems = availableItems.slice(0, 8);
  container.innerHTML = previewItems.map(product => createProductCardHTML(product)).join('');
}

// 4. RENDER FULL PRODUCTS PAGE GRID (With Filter & Search)
function renderFullProductsGrid() {
  const container = document.getElementById('full-products-grid');
  if (!container) return;

  // Filter only active/available items for the store
  let filtered = PRODUCTS_DATA.filter(p => p.is_available !== false);

  // Apply Category Filter
  if (activeCategoryFilter !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategoryFilter);
  }

  // Apply Search Query Filter
  if (activeSearchQuery.trim() !== '') {
    const q = activeSearchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) ||
      p.weight.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 64px 20px;">
        <p style="font-size: 3rem; margin-bottom: 12px;">🔍</p>
        <h3 style="font-size: 1.4rem; font-weight: 600; margin-bottom: 8px;">No cakes found</h3>
        <p style="color: var(--color-text-muted);">Try searching for another flavor or category!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => createProductCardHTML(product)).join('');
}

// Helper: Product Card HTML Template
function createProductCardHTML(product) {
  return `
    <article class="product-card">
      <a href="./product-detail.html?id=${product.id}" class="product-image-box" style="display: block; text-decoration: none;">
        <img src="${product.image}" alt="${product.title}" loading="lazy" />
      </a>
      <div class="product-info">
        <h3 class="product-title">
          <a href="./product-detail.html?id=${product.id}" style="color: inherit; text-decoration: none;">${product.title}</a>
        </h3>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 4px;">
          <p class="product-weight">Weight: ${product.weight}</p>
          <span style="font-size: 0.8rem; font-weight: 600; color: #FC8019; background: rgba(252, 128, 25, 0.1); padding: 2px 8px; border-radius: 12px;" data-i18n="swiggy_badge">★ 4.3 Swiggy</span>
        </div>
      </div>
      <div class="product-footer">
        <span class="product-price">₹${product.price}</span>
        <button class="btn-add-cart" onclick="addToCart('${product.id}')">
          + Add
        </button>
      </div>
    </article>
  `;
}

// 5. EVENT LISTENERS & FILTER HANDLERS
function setupEventListeners() {
  // Category Pills Filter on Products Page
  const categoryTabs = document.querySelectorAll('.category-tab');
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      activeCategoryFilter = e.target.getAttribute('data-category');
      renderFullProductsGrid();
    });
  });

  // Search Input Listener on Products Page
  const searchInput = document.getElementById('product-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearchQuery = e.target.value;
      renderFullProductsGrid();
    });
  }

  // Mobile Drawer Toggle
  const menuToggleBtn = document.getElementById('mobile-menu-toggle-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');

  if (menuToggleBtn && drawer && overlay) {
    menuToggleBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      overlay.classList.add('open');
    });

    const closeMobileNav = () => {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
    };

    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileNav);
    overlay.addEventListener('click', closeMobileNav);
  }

  // Cart Drawer Toggle
  const cartBtn = document.getElementById('cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartDrawer = document.getElementById('cart-drawer');

  if (cartBtn && cartDrawer) {
    cartBtn.addEventListener('click', () => cartDrawer.classList.add('open'));
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => cartDrawer.classList.remove('open'));
  }
}

// 6. SHOPPING CART OPERATIONS
function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cartItems.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartUI();

  // Open cart slide drawer automatically
  const cartDrawer = document.getElementById('cart-drawer');
  if (cartDrawer) cartDrawer.classList.add('open');
}

function updateQuantity(productId, delta) {
  const item = cartItems.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cartItems = cartItems.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
}

function saveCart() {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('sg_bakery_cart', JSON.stringify(cartItems));
  }
}

function updateCartUI() {
  // Update Badges
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(b => b.textContent = totalCount);

  // Update Cart Drawer Body
  const cartBody = document.getElementById('cart-items-container');
  const cartTotalEl = document.getElementById('cart-total-amount');

  if (!cartBody) return;

  if (cartItems.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-state">
        <p style="margin-bottom: 12px;"><i class="ph ph-shopping-bag-open" style="font-size: 3rem; color: var(--color-desert);"></i></p>
        <p class="text-regular">Your cart is empty.</p>
        <p class="text-small" style="margin-top: 4px;">Add your favorite bakes to begin!</p>
      </div>
    `;
    if (cartTotalEl) cartTotalEl.textContent = '₹0';
    return;
  }

  let totalAmount = 0;
  cartBody.innerHTML = cartItems.map(item => {
    const itemTotal = item.price * item.quantity;
    totalAmount += itemTotal;

    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.image}" alt="${item.title}">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">₹${item.price} x ${item.quantity} = ₹${itemTotal}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (cartTotalEl) cartTotalEl.textContent = `₹${totalAmount}`;
}

// 7. DIRECT WHATSAPP ORDER GENERATOR
function sendWhatsAppOrder() {
  if (cartItems.length === 0) {
    alert('Please add at least one cake to your cart before ordering!');
    return;
  }

  const bakeryPhone = '917339073844';
  let text = `Hello Santhi Ganesh Bakery! 🧁\nI would like to place an order for delivery in Tirunelveli:\n\n`;

  let total = 0;
  cartItems.forEach((item, idx) => {
    const sub = item.price * item.quantity;
    total += sub;
    text += `${idx + 1}. *${item.title}* (${item.weight}) x ${item.quantity} = ₹${sub}\n`;
  });

  text += `\n*Total Amount:* ₹${total}`;
  text += `\n\nPlease confirm availability and delivery time. Thank you!`;

  const encodedUrl = `https://wa.me/${bakeryPhone}?text=${encodeURIComponent(text)}`;
  window.open(encodedUrl, '_blank');
}
