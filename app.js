/* ==========================================================================
   SANTHI GANESH BAKERY - APP INTERACTIVITY & STATE MANAGEMENT
   ========================================================================== */

// SUPABASE CLOUD DATABASE CONFIGURATION
const SUPABASE_URL = 'https://hkkdeowfoyejfifeftme.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhra2Rlb3dmb3llamZpZmVmdG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1MjQ1NzYsImV4cCI6MjA5OTEwMDU3Nn0.EBw0t2IZoM8koDaV2AOFj6rQbyQINSo_mkrvhhhd0nU';

if (typeof window !== 'undefined') {
  window.SUPABASE_URL = SUPABASE_URL;
  window.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;
}

// Global products & jobs references (safely fallback to empty array if data script not loaded)
let PRODUCTS_DATA = (typeof DEFAULT_PRODUCTS_DATA !== 'undefined') ? DEFAULT_PRODUCTS_DATA : ((typeof window !== 'undefined' && window.DEFAULT_PRODUCTS_DATA) ? window.DEFAULT_PRODUCTS_DATA : []);
let JOBS_DATA = (typeof DEFAULT_JOBS_DATA !== 'undefined') ? DEFAULT_JOBS_DATA : ((typeof window !== 'undefined' && window.DEFAULT_JOBS_DATA) ? window.DEFAULT_JOBS_DATA : []);

if (typeof window !== 'undefined') {
  window.PRODUCTS_DATA = PRODUCTS_DATA;
  window.JOBS_DATA = JOBS_DATA;
}

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
        const supabaseIds = new Set(data.map(p => p.id));
        const defaultList = (typeof DEFAULT_PRODUCTS_DATA !== 'undefined' ? DEFAULT_PRODUCTS_DATA : []);
        const missingDefaults = defaultList.filter(p => !supabaseIds.has(p.id));
        PRODUCTS_DATA = [...data, ...missingDefaults];

        // Sync new default products to Supabase cloud
        if (missingDefaults.length > 0) {
          missingDefaults.forEach(p => saveProductToSupabase(p));
        }
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

// Global Event Tracking Helper (100% Pure Production Domain Analytics)
async function trackEvent(eventType, eventData = {}) {
  try {
    if (typeof window === 'undefined') return;

    const hostname = window.location.hostname;
    const pathname = window.location.pathname;

    // Exclude localhost & dev testing from polluting analytics
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.')) {
      return;
    }

    // Exclude Admin dashboard pages from polluting customer analytics
    if (pathname.includes('admin')) {
      return;
    }

    const payload = {
      event_type: eventType,
      event_data: {
        ...eventData,
        host: hostname,
        page: pathname.split('/').pop() || 'index.html',
        timestamp: new Date().toISOString()
      }
    };

    if (window.localStorage) {
      const history = JSON.parse(localStorage.getItem('sg_tracking_events') || '[]');
      history.unshift(payload);
      if (history.length > 200) history.pop();
      localStorage.setItem('sg_tracking_events', JSON.stringify(history));
    }

    fetch(`${SUPABASE_URL}/rest/v1/tracking_events`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).catch(() => {});
  } catch(e) {}
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
// PRODUCTS_DATA initialized at top

// 2. SHOPPING CART STATE
let cartItems = (typeof window !== 'undefined' && window.localStorage)
  ? JSON.parse(localStorage.getItem('sg_bakery_cart') || '[]')
  : [];
let activeCategoryFilter = 'all';
let activeSearchQuery = '';
let activeBudgetFilter = 'all';
let activeWeightFilter = 'all';
let activeSortOption = 'default';

// DOM Initialization
document.addEventListener('DOMContentLoaded', async () => {
  // Sync active category from DOM or URL params
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  const qParam = urlParams.get('q');
  const sortParam = urlParams.get('sort');
  const budgetParam = urlParams.get('budget') || urlParams.get('price');
  const weightParam = urlParams.get('weight');

  if (catParam) {
    activeCategoryFilter = catParam;
    document.querySelectorAll('.category-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.category === catParam);
    });
  } else {
    const initialActiveTab = document.querySelector('.category-tab.active');
    if (initialActiveTab && initialActiveTab.dataset.category) {
      activeCategoryFilter = initialActiveTab.dataset.category;
    }
  }

  if (qParam) {
    activeSearchQuery = qParam;
    const searchInput = document.getElementById('product-search-input');
    if (searchInput) searchInput.value = qParam;
  }

  if (sortParam) {
    activeSortOption = sortParam;
    const sortSelect = document.getElementById('product-sort-select');
    if (sortSelect) sortSelect.value = sortParam;
  }

  if (budgetParam) {
    activeBudgetFilter = budgetParam;
    const priceSelect = document.getElementById('filter-price-select');
    if (priceSelect) priceSelect.value = budgetParam;
  }

  if (weightParam) {
    activeWeightFilter = weightParam;
    const weightSelect = document.getElementById('filter-weight-select');
    if (weightSelect) weightSelect.value = weightParam;
  }

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

// 4. RENDER FULL PRODUCTS PAGE GRID (With Category, Price, Weight & Sort)
function renderFullProductsGrid() {
  const container = document.getElementById('full-products-grid');
  if (!container) return;

  // Filter only active/available items for the store
  let filtered = PRODUCTS_DATA.filter(p => p.is_available !== false);

  // 1. Apply Category Filter
  if (activeCategoryFilter !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategoryFilter);
  }

  // 2. Apply Search Query Filter
  if (activeSearchQuery.trim() !== '') {
    const q = activeSearchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) ||
      p.weight.toLowerCase().includes(q)
    );
  }

  // 3. Apply Price / Budget Filter
  if (activeBudgetFilter === 'under-1000') {
    filtered = filtered.filter(p => Number(p.price) < 1000);
  } else if (activeBudgetFilter === '1000-2000') {
    filtered = filtered.filter(p => Number(p.price) >= 1000 && Number(p.price) <= 2000);
  } else if (activeBudgetFilter === '2000-3000') {
    filtered = filtered.filter(p => Number(p.price) > 2000 && Number(p.price) <= 3000);
  } else if (activeBudgetFilter === '3000-plus') {
    filtered = filtered.filter(p => Number(p.price) > 3000);
  }

  // 4. Apply Weight Filter
  if (activeWeightFilter !== 'all') {
    filtered = filtered.filter(p => {
      const allWeights = [
        p.weight || '',
        ...(p.variants || []).map(v => v.weight || '')
      ].join(' ').toLowerCase();

      if (activeWeightFilter === '0.5kg') {
        return allWeights.includes('0.5') || allWeights.includes('500');
      } else if (activeWeightFilter === '1kg') {
        return allWeights.includes('1 kg') || allWeights.includes('1kg') || (p.variants && p.variants.some(v => v.weight && v.weight.includes('1 kg')));
      } else if (activeWeightFilter === '1.5-2kg' || activeWeightFilter === '1.5kg') {
        return allWeights.includes('1.5') || allWeights.includes('2 kg') || allWeights.includes('2kg') || (p.variants && p.variants.some(v => v.weight && (v.weight.includes('1.5') || v.weight.includes('2'))));
      } else if (activeWeightFilter === '3kg-plus') {
        return allWeights.includes('3') || allWeights.includes('4') || allWeights.includes('tier') || allWeights.includes('grand') || p.category === 'wedding';
      }
      return true;
    });
  }

  // 5. Apply Sort Option
  if (activeSortOption === 'price-low') {
    filtered.sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
  } else if (activeSortOption === 'price-high') {
    filtered.sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
  } else if (activeSortOption === 'title-asc') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Update UI visual states for dropdown pills
  updateFilterBarUIState();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 56px 20px;">
        <p style="font-size: 3rem; margin-bottom: 12px;">🔍</p>
        <h3 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 8px; color: #26160F;">No cakes found with selected filters</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 20px;">Try adjusting your Price, Weight or Category filters!</p>
        <button type="button" onclick="resetAllProductsFilters()" style="background: var(--color-desert); color: #FFF; border: none; padding: 11px 24px; border-radius: 14px; font-weight: 700; font-size: 0.92rem; cursor: pointer; box-shadow: 0 4px 14px rgba(201, 138, 76, 0.35);">
          Reset All Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => createProductCardHTML(product)).join('');
}

// Global Filter Dropdown Change Handler
function handleFilterDropdownChange(type, value) {
  if (type === 'price') activeBudgetFilter = value;
  if (type === 'weight') activeWeightFilter = value;
  if (type === 'sort') activeSortOption = value;

  const priceSelect = document.getElementById('filter-price-select');
  const weightSelect = document.getElementById('filter-weight-select');
  const sortSelect = document.getElementById('product-sort-select');

  if (priceSelect && type === 'price') priceSelect.value = value;
  if (weightSelect && type === 'weight') weightSelect.value = value;
  if (sortSelect && type === 'sort') sortSelect.value = value;

  renderFullProductsGrid();
}
window.handleFilterDropdownChange = handleFilterDropdownChange;

// Update dropdown wrapper highlight styling & Reset button visibility
function updateFilterBarUIState() {
  const wrapPrice = document.getElementById('wrapper-price-filter');
  const wrapWeight = document.getElementById('wrapper-weight-filter');
  const wrapSort = document.getElementById('wrapper-sort-filter');
  const btnReset = document.getElementById('btn-reset-filters');

  if (wrapPrice) wrapPrice.classList.toggle('has-filter', activeBudgetFilter !== 'all');
  if (wrapWeight) wrapWeight.classList.toggle('has-filter', activeWeightFilter !== 'all');
  if (wrapSort) wrapSort.classList.toggle('has-filter', activeSortOption !== 'default');

  const hasAnyFilter = (activeBudgetFilter !== 'all' || activeWeightFilter !== 'all' || activeSortOption !== 'default' || activeSearchQuery.trim() !== '');
  if (btnReset) {
    btnReset.style.display = hasAnyFilter ? 'inline-flex' : 'none';
  }
}

// Global reset helper function
function resetAllProductsFilters() {
  activeBudgetFilter = 'all';
  activeWeightFilter = 'all';
  activeSortOption = 'default';
  activeSearchQuery = '';

  const priceSelect = document.getElementById('filter-price-select');
  const weightSelect = document.getElementById('filter-weight-select');
  const sortSelect = document.getElementById('product-sort-select');
  const searchInput = document.getElementById('product-search-input');

  if (priceSelect) priceSelect.value = 'all';
  if (weightSelect) weightSelect.value = 'all';
  if (sortSelect) sortSelect.value = 'default';
  if (searchInput) searchInput.value = '';

  renderFullProductsGrid();
}
window.resetAllProductsFilters = resetAllProductsFilters;

// Helper: Product Card HTML Template
function createProductCardHTML(product) {
  const displayWeight = (product.variants && product.variants.length > 0)
    ? product.variants.map(v => (typeof escapeHTML === 'function' ? escapeHTML(v.weight) : v.weight)).join(', ')
    : (typeof escapeHTML === 'function' ? escapeHTML(product.weight || '1 kg') : (product.weight || '1 kg'));

  const safeTitle = typeof escapeHTML === 'function' ? escapeHTML(product.title) : product.title;
  const safeId = typeof escapeHTML === 'function' ? escapeHTML(product.id) : product.id;
  const safePrice = Number(product.price) || 0;

  return `
    <article class="product-card">
      <a href="./product-detail.html?id=${safeId}" class="product-image-box" style="display: block; text-decoration: none;">
        <img src="${product.image}" alt="${safeTitle}" loading="lazy" onerror="this.onerror=null; this.src='./sg-bakery-logo.png';" />
      </a>
      <div class="product-info">
        <h3 class="product-title">
          <a href="./product-detail.html?id=${safeId}" style="color: inherit; text-decoration: none;">${safeTitle}</a>
        </h3>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 4px;">
          <p class="product-weight">Weight: ${displayWeight}</p>
        </div>
      </div>
      <div class="product-footer">
        <span class="product-price">₹${safePrice}</span>
        <button class="btn-add-cart" onclick="addToCart('${safeId}', null, null, this)" title="Add to order cart">
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
      const target = e.currentTarget || e.target.closest('.category-tab');
      if (!target) return;
      categoryTabs.forEach(t => t.classList.remove('active'));
      target.classList.add('active');
      activeCategoryFilter = target.getAttribute('data-category');
      renderFullProductsGrid();

      // If user has already scrolled down, scroll smoothly back to the top of products grid
      const gridContainer = document.getElementById('full-products-grid') || document.querySelector('.products-page-tabs');
      if (gridContainer) {
        const headerOffset = 100;
        const targetScrollY = gridContainer.offsetTop - headerOffset;
        if (window.scrollY > targetScrollY) {
          window.scrollTo({
            top: targetScrollY,
            behavior: 'smooth'
          });
        }
      }
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

  // Price Filter Dropdown
  const priceSelect = document.getElementById('filter-price-select');
  if (priceSelect) {
    priceSelect.addEventListener('change', (e) => {
      activeBudgetFilter = e.target.value;
      renderFullProductsGrid();
    });
  }

  // Weight Filter Dropdown
  const weightSelect = document.getElementById('filter-weight-select');
  if (weightSelect) {
    weightSelect.addEventListener('change', (e) => {
      activeWeightFilter = e.target.value;
      renderFullProductsGrid();
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById('product-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSortOption = e.target.value;
      renderFullProductsGrid();
    });
  }

  // Reset Filters Button
  const btnReset = document.getElementById('btn-reset-filters');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      resetAllProductsFilters();
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

  // Cart Drawer & Backdrop Overlay Toggle
  const cartBtns = document.querySelectorAll('#cart-btn, .open-cart-btn');
  const closeCartBtns = document.querySelectorAll('#close-cart-btn, .close-cart-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  let cartOverlay = document.getElementById('cart-drawer-overlay');

  if (!cartOverlay && cartDrawer) {
    cartOverlay = document.createElement('div');
    cartOverlay.id = 'cart-drawer-overlay';
    cartOverlay.className = 'cart-drawer-overlay';
    document.body.appendChild(cartOverlay);
  }

  const openCart = () => {
    if (cartDrawer) cartDrawer.classList.add('open');
    if (cartOverlay) cartOverlay.classList.add('open');
  };

  const closeCart = () => {
    if (cartDrawer) cartDrawer.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('open');
  };

  cartBtns.forEach(btn => btn.addEventListener('click', openCart));
  closeCartBtns.forEach(btn => btn.addEventListener('click', closeCart));
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });
}

// 6. SHOPPING CART OPERATIONS
function addToCart(productId, customWeight = null, customPrice = null, btnElement = null) {
  const product = PRODUCTS_DATA.find(p => p.id === productId || String(p.id) === String(productId));
  if (!product) return;

  const itemWeight = customWeight || product.weight || '1 kg';
  const itemPrice = (customPrice !== null && !isNaN(customPrice) && Number(customPrice) > 0) ? Number(customPrice) : Number(product.price || 450);
  
  // Unique cart item key based on product ID and weight variant
  const cartItemKey = `${product.id}_${itemWeight}`;

  const existing = cartItems.find(item => item.cartKey === cartItemKey || (item.id === productId && (!item.weight || item.weight === itemWeight)));
  if (existing) {
    existing.quantity += 1;
    if (customPrice && !isNaN(customPrice)) existing.price = itemPrice;
  } else {
    cartItems.push({
      id: product.id,
      cartKey: cartItemKey,
      title: product.title || product.name || 'Celebration Cake',
      weight: itemWeight,
      price: itemPrice,
      image: product.image || product.image_url || './sg-bakery-logo.png',
      category: product.category,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();

  // Button micro-interaction feedback
  if (btnElement) {
    const origHTML = btnElement.innerHTML;
    btnElement.innerHTML = '✓ Added!';
    btnElement.style.backgroundColor = '#2e7d32';
    btnElement.style.borderColor = '#2e7d32';
    btnElement.style.color = '#FFFFFF';
    setTimeout(() => {
      btnElement.innerHTML = origHTML;
      btnElement.style.backgroundColor = '';
      btnElement.style.borderColor = '';
      btnElement.style.color = '';
    }, 1200);
  }

  trackEvent('add_to_cart', { product_id: productId, title: product.title, price: itemPrice, weight: itemWeight });

  // Open cart slide drawer automatically
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  if (cartDrawer) cartDrawer.classList.add('open');
  if (cartOverlay) cartOverlay.classList.add('open');
}

function updateQuantity(itemKey, delta) {
  const item = cartItems.find(i => (i.cartKey === itemKey || i.id === itemKey));
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cartItems = cartItems.filter(i => (i.cartKey !== itemKey && i.id !== itemKey));
  }

  saveCart();
  updateCartUI();
}

function removeCartItem(itemKey) {
  cartItems = cartItems.filter(i => (i.cartKey !== itemKey && i.id !== itemKey));
  saveCart();
  updateCartUI();
}

function saveCart() {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('sg_bakery_cart', JSON.stringify(cartItems));
  }
}

function updateCartUI() {
  // Update Badges across all pages
  const totalCount = cartItems.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);
  const badges = document.querySelectorAll('.cart-badge, .cart-badge-count, #cart-count-badge');
  badges.forEach(b => {
    b.textContent = totalCount;
    if (totalCount > 0) {
      b.style.display = 'flex';
      b.classList.remove('badge-pop');
      void b.offsetWidth;
      b.classList.add('badge-pop');
    } else {
      b.style.display = 'none';
    }
  });

  // Update Cart Drawer Body
  const cartBody = document.getElementById('cart-items-container');
  const cartTotalEl = document.getElementById('cart-total-amount');

  if (!cartBody) return;

  if (cartItems.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-state">
        <p style="margin-bottom: 12px;"><i class="ph ph-shopping-bag-open" style="font-size: 3rem; color: var(--color-desert);"></i></p>
        <p class="text-regular" style="font-weight: 600;">Your cart is empty.</p>
        <p class="text-small" style="margin-top: 4px; color: var(--color-text-muted);">Add your favorite celebration cakes to begin!</p>
      </div>
    `;
    if (cartTotalEl) cartTotalEl.textContent = '₹0';
    return;
  }

  let totalAmount = 0;
  cartBody.innerHTML = cartItems.map(item => {
    const itemTotal = Number(item.price) * Number(item.quantity);
    totalAmount += itemTotal;
    const itemKey = item.cartKey || item.id;
    const safeTitle = typeof escapeHTML === 'function' ? escapeHTML(item.title) : item.title;
    const safeWeight = typeof escapeHTML === 'function' ? escapeHTML(item.weight || '1 kg') : (item.weight || '1 kg');
    const safeKey = typeof escapeHTML === 'function' ? escapeHTML(itemKey) : itemKey;

    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.image}" alt="${safeTitle}" onerror="this.onerror=null; this.src='./sg-bakery-logo.png';">
        <div class="cart-item-details">
          <div class="cart-item-title">${safeTitle}</div>
          <div style="font-size: 0.78rem; color: var(--color-desert); font-weight: 600; margin-bottom: 2px;">Weight: ${safeWeight}</div>
          <div class="cart-item-price">₹${item.price} × ${item.quantity} = ₹${itemTotal}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateQuantity('${safeKey}', -1)" aria-label="Decrease quantity">-</button>
            <span style="font-weight: 700; min-width: 20px; text-align: center;">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity('${safeKey}', 1)" aria-label="Increase quantity">+</button>
            <button onclick="removeCartItem('${safeKey}')" style="margin-left: auto; background: none; border: none; color: #d32f2f; cursor: pointer; font-size: 0.85rem; padding: 4px 6px;" title="Remove item"><i class="ph ph-trash"></i></button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (cartTotalEl) cartTotalEl.textContent = `₹${totalAmount}`;
}

// 7. DIRECT WHATSAPP ORDER GENERATOR WITH ABUSE PREVENTION & NAME MODAL
let lastWhatsAppOrderTime = 0;

function promptWhatsAppCustomerName(onComplete) {
  const activeLang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : (localStorage.getItem('sg_bakery_lang') || 'en');
  const isTa = (activeLang === 'ta');

  const titleText = isTa ? "உங்கள் பெயர் (விருப்பத்திற்குரியது)" : "Your Name (Optional)";
  const subText = isTa ? "ஆர்டர் செய்பவர் யார் என்று சாந்தி கணேஷ் பேக்கரி குழுவிற்கு தெரிய உங்கள் பெயரை உள்ளிடவும்." : "Enter your name so Santhi Ganesh Bakery team knows who is placing the order.";
  const labelText = isTa ? "வாடிக்கையாளர் பெயர்:" : "Customer Name:";
  const placeholderText = isTa ? "உங்கள் பெயர்" : "Your Full Name";
  const skipLabel = isTa ? "தவிர்" : "Skip";
  const continueText = isTa ? "தொடரவும் ➔" : "Continue ➔";

  let modalOverlay = document.getElementById('whatsapp-name-modal-overlay');
  
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.id = 'whatsapp-name-modal-overlay';
    modalOverlay.className = 'whatsapp-name-modal-overlay';
    document.body.appendChild(modalOverlay);
  }

  modalOverlay.innerHTML = `
    <div class="whatsapp-name-modal-card">
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
        <i class="ph ph-user-circle" style="font-size: 2.2rem; color: var(--color-desert);"></i>
        <h3 style="font-size: 1.3rem; font-weight: 700; margin: 0; color: var(--color-text-main);">${titleText}</h3>
      </div>
      <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 20px; line-height: 1.4;">
        ${subText}
      </p>

      <form id="whatsapp-name-form" onsubmit="event.preventDefault(); submitWhatsAppNameModal();">
        <!-- Invisible Honeypot Trap Field (Catches automated spam bots) -->
        <input type="text" id="sg-honeypot-trap" name="website_url_check" tabindex="-1" autocomplete="off" style="position: absolute !important; opacity: 0 !important; left: -9999px !important; width: 0 !important; height: 0 !important; pointer-events: none !important;">

        <div style="margin-bottom: 20px;">
          <label style="display: block; font-size: 0.85rem; font-weight: 700; margin-bottom: 6px; color: var(--color-text-main);">${labelText}</label>
          <input type="text" id="whatsapp-cust-name-input" placeholder="${placeholderText}" style="width: 100%; box-sizing: border-box; font-size: 1rem; padding: 12px 16px;">
        </div>

        <div style="display: flex; gap: 10px;">
          <button type="button" id="whatsapp-skip-btn" onclick="closeWhatsAppNameModal(true)" class="btn btn-secondary" style="flex: 1; justify-content: center; padding: 10px;">${skipLabel} (30s)</button>
          <button type="submit" class="btn btn-primary" style="flex: 2; justify-content: center; padding: 10px;">${continueText}</button>
        </div>
      </form>
    </div>
  `;

  // Pre-fill existing saved name
  const savedName = localStorage.getItem('sg_customer_name') || '';
  const inputEl = document.getElementById('whatsapp-cust-name-input');
  const skipBtn = document.getElementById('whatsapp-skip-btn');
  if (inputEl) inputEl.value = savedName;

  window._pendingWhatsAppCallback = onComplete;
  modalOverlay.classList.add('active');

  // Start 30-Second Auto-Skip Timer
  if (window._autoSkipInterval) clearInterval(window._autoSkipInterval);
  let remainingSecs = 30;
  if (skipBtn) skipBtn.textContent = `${skipLabel} (${remainingSecs}s)`;

  window._autoSkipInterval = setInterval(() => {
    remainingSecs--;
    if (skipBtn && !inputEl.value.trim()) {
      skipBtn.textContent = `${skipLabel} (${remainingSecs}s)`;
    }
    if (remainingSecs <= 0) {
      clearInterval(window._autoSkipInterval);
      window._autoSkipInterval = null;
      closeWhatsAppNameModal(true);
    }
  }, 1000);

  // Pause/stop timer when user types
  if (inputEl) {
    inputEl.oninput = () => {
      if (window._autoSkipInterval) {
        clearInterval(window._autoSkipInterval);
        window._autoSkipInterval = null;
        if (skipBtn) skipBtn.textContent = skipLabel;
      }
    };
  }

  setTimeout(() => {
    if (inputEl) inputEl.focus();
  }, 100);
}

function submitWhatsAppNameModal() {
  // Honeypot Anti-Bot Verification
  const honeypot = document.getElementById('sg-honeypot-trap');
  if (honeypot && honeypot.value.trim() !== '') {
    console.warn('⚠️ Spam bot submission detected via Honeypot trap. Silently dropping request.');
    if (window._autoSkipInterval) clearInterval(window._autoSkipInterval);
    const modalOverlay = document.getElementById('whatsapp-name-modal-overlay');
    if (modalOverlay) modalOverlay.classList.remove('active');
    window._pendingWhatsAppCallback = null;
    return; // Block bot submission!
  }

  const inputEl = document.getElementById('whatsapp-cust-name-input');
  const name = inputEl ? inputEl.value.trim() : '';
  if (name) {
    localStorage.setItem('sg_customer_name', name);
  }
  closeWhatsAppNameModal(false, name);
}

function closeWhatsAppNameModal(skip = false, namePassed = '') {
  if (window._autoSkipInterval) {
    clearInterval(window._autoSkipInterval);
    window._autoSkipInterval = null;
  }

  const modalOverlay = document.getElementById('whatsapp-name-modal-overlay');
  if (modalOverlay) modalOverlay.classList.remove('active');

  let name = namePassed;
  if (!skip && !name) {
    const inputEl = document.getElementById('whatsapp-cust-name-input');
    name = inputEl ? inputEl.value.trim() : '';
  }

  if (typeof window._pendingWhatsAppCallback === 'function') {
    const cb = window._pendingWhatsAppCallback;
    window._pendingWhatsAppCallback = null;
    cb(name);
  }
}

function sendWhatsAppOrder() {
  if (cartItems.length === 0) {
    alert('Please add at least one cake to your cart before ordering!');
    return;
  }

  // Rate Limiting Cooldown (15 seconds)
  const now = Date.now();
  const cooldownMs = 15000;
  if (now - lastWhatsAppOrderTime < cooldownMs) {
    const remainingSecs = Math.ceil((cooldownMs - (now - lastWhatsAppOrderTime)) / 1000);
    alert(`⏳ Please wait ${remainingSecs} second${remainingSecs > 1 ? 's' : ''} before launching another WhatsApp order!`);
    return;
  }

  // Open Name Prompt Modal
  promptWhatsAppCustomerName((customerName) => {
    lastWhatsAppOrderTime = Date.now();

    // Generate Unique Order Reference Code (#SG-XXXXXX)
    const orderRef = 'SG-' + Math.floor(100000 + Math.random() * 900000);
    const bakeryPhone = '917339073844';

    const activeLang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : (localStorage.getItem('sg_bakery_lang') || 'en');
    const isTa = (activeLang === 'ta');
    const nameHeader = isTa ? "*வாடிக்கையாளர் பெயர்:*" : "*Customer Name:*";

    let text = `Hello Santhi Ganesh Bakery! 🧁\n*Order Ref:* #${orderRef}\n`;
    if (customerName) {
      text += `${nameHeader} ${customerName}\n`;
    }
    text += `\nI would like to place an order for delivery in Tirunelveli:\n\n`;

    let total = 0;
    cartItems.forEach((item, idx) => {
      const sub = item.price * item.quantity;
      total += sub;
      text += `${idx + 1}. *${item.title}* (${item.weight}) x ${item.quantity} = ₹${sub}\n`;
    });

    text += `\n*Total Amount:* ₹${total}`;
    text += `\n\nPlease confirm availability and delivery time. Thank you!`;

    trackEvent('whatsapp_order', { 
      order_ref: `#${orderRef}`, 
      customer_name: customerName || 'Anonymous',
      count: cartItems.length, 
      items: cartItems.map(i => i.title).join(', '), 
      title: cartItems.map(i => i.title).join(', '), 
      total: total 
    });

    const encodedUrl = `https://wa.me/${bakeryPhone}?text=${encodeURIComponent(text)}`;
    window.open(encodedUrl, '_blank');
  });
}

// 8. B2B WHOLESALE & FREE SAMPLE REQUEST HANDLER
let lastB2BInquiryTime = 0;

function sendWhatsAppB2BInquiry(isSampleRequest = false) {
  // Honeypot Bot Check
  const honeypot = document.getElementById('b2b-honeypot-trap');
  if (honeypot && honeypot.value.trim() !== '') {
    console.warn('⚠️ Spam bot submission detected via B2B Honeypot trap. Dropping request.');
    return;
  }

  // Rate Limiting Cooldown (15 seconds)
  const now = Date.now();
  const cooldownMs = 15000;
  if (now - lastB2BInquiryTime < cooldownMs) {
    const remainingSecs = Math.ceil((cooldownMs - (now - lastB2BInquiryTime)) / 1000);
    alert(`⏳ Please wait ${remainingSecs} second${remainingSecs > 1 ? 's' : ''} before launching another B2B inquiry!`);
    return;
  }

  const bizName = (document.getElementById('b2b-biz-name')?.value || '').trim();
  const contactPerson = (document.getElementById('b2b-contact-person')?.value || '').trim();
  const phone = (document.getElementById('b2b-phone')?.value || '').trim();
  const bizType = (document.getElementById('b2b-biz-type')?.value || 'Grocery / Kirana Store');
  const requirement = (document.getElementById('b2b-requirement')?.value || '').trim();

  if (!bizName || !phone) {
    alert('Please enter your Business / Shop Name and Contact Phone Number to proceed!');
    return;
  }

  lastB2BInquiryTime = Date.now();
  const refId = 'B2B-' + Math.floor(100000 + Math.random() * 900000);
  const bakeryPhone = '917339073844';

  let text = `Hello Santhi Ganesh Bakery Wholesale Team! 🏢\n`;
  text += `*B2B Ref:* #${refId}\n`;
  if (isSampleRequest) {
    text += `*Type:* 📦 FREE B2B SAMPLE BOX REQUEST\n\n`;
  } else {
    text += `*Type:* 💼 WHOLESALE BAKERY INQUIRY\n\n`;
  }

  text += `*Business Name:* ${bizName}\n`;
  if (contactPerson) text += `*Contact Person:* ${contactPerson}\n`;
  text += `*Phone:* ${phone}\n`;
  text += `*Category:* ${bizType}\n`;
  if (requirement) text += `*Daily Requirement:* ${requirement}\n`;

  if (isSampleRequest) {
    text += `\nPlease send a free sample box to our business address for testing. Thank you!`;
  } else {
    text += `\nPlease provide wholesale price catalog and daily morning delivery details. Thank you!`;
  }

  trackEvent('b2b_inquiry', {
    ref_id: `#${refId}`,
    biz_name: bizName,
    contact_person: contactPerson || 'N/A',
    phone: phone,
    biz_type: bizType,
    is_sample: isSampleRequest,
    requirement: requirement || 'General Inquiry'
  });

  const encodedUrl = `https://wa.me/${bakeryPhone}?text=${encodeURIComponent(text)}`;
  window.open(encodedUrl, '_blank');
}

function requestB2BSampleBox() {
  sendWhatsAppB2BInquiry(true);
}

// 9. FIGMA INTERACTIVE B2B PROTOTYPE STATE ENGINE
const FIGMA_PROTO_SPECS = {
  kirana: {
    title: "🏪 Kirana & Local Grocery Shops",
    subtitle: "High-Margin Daily Bread & Bun Distribution",
    volume: "15 to 30 Bread Packets Daily",
    products: ["Milk Bread (350g)", "Sandwich Bread (400g)", "Wheat Loaf", "Butter Rusks", "Tea Buns"],
    dispatch: "5:30 AM Morning Dispatch (Doorstep before shop opens)",
    margin: "High Profit Margin per Packet for Retailers",
    cta: "Request Kirana Free Sample Box 📦"
  },
  supermarket: {
    title: "🛒 Supermarkets & Retail Outlets",
    subtitle: "Premium Barcoded Packaged Breads & Savories",
    volume: "50+ Packets Daily (Multiple Varieties)",
    products: ["Soft Sandwich Loaf", "Multigrain Wheat Bread", "Almond Cookies", "Packaged Savories"],
    dispatch: "6:00 AM Direct Shelf Stocking",
    margin: "Tiered Volume Discount Rates",
    cta: "Request Supermarket Price List 📦"
  },
  university: {
    title: "🏫 University & College Canteens",
    subtitle: "Bulk Hot Snacks & Break-Time Tea Buns",
    volume: "100+ Daily Puffs & Snacks",
    products: ["Crispy Veg Puffs", "Egg Puffs", "Chicken Puffs", "Samosas & Cutlets", "Dry Cake Slices"],
    dispatch: "Dual Dispatch: 7:30 AM & 1:00 PM Break Times",
    margin: "Institutional Bulk Canteen Margins",
    cta: "Request University Sample Box 📦"
  },
  hotel: {
    title: "🏨 Hotels, Restaurants & Cafes",
    subtitle: "Fresh Burger Buns, Pav & Gourmet Slices",
    volume: "Daily Custom Order Batches",
    products: ["Soft Burger Buns", "Hot Dog Rolls", "Pav Buns", "Red Velvet Slices", "Black Forest Slices"],
    dispatch: "Daily 6:00 AM & 3:00 PM Kitchen Delivery",
    margin: "Chef Custom Size & Bulk Rates",
    cta: "Request Cafe Sample Box 📦"
  },
  caterer: {
    title: "🍱 Event Caterers & Convention Halls",
    subtitle: "Large Scale Event Snack Boxes & Desserts",
    volume: "Bulk Event Orders (500+ Snack Boxes)",
    products: ["Mini Puffs", "Cupcakes", "Savory Trays", "Individual Packed Snack Boxes"],
    dispatch: "Timed Venue Site Delivery",
    margin: "Special Event Volume Pricing",
    cta: "Request Event Catering Quote 📦"
  }
};

function switchProtoTab(key, btnElem) {
  const container = document.getElementById('figma-proto-content');
  if (!container) return;

  const spec = FIGMA_PROTO_SPECS[key] || FIGMA_PROTO_SPECS.kirana;

  // Update Active Tab Button State
  if (btnElem) {
    document.querySelectorAll('.figma-proto-tab').forEach(btn => btn.classList.remove('active'));
    btnElem.classList.add('active');
  }

  container.style.opacity = '0.4';
  container.style.transform = 'translateY(4px)';

  setTimeout(() => {
    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
        <div>
          <h3 style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.35rem; font-weight: 700; color: #000; margin: 0 0 4px 0;">${spec.title}</h3>
          <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem; color: #555; margin: 0;">${spec.subtitle}</p>
        </div>
        <span style="background: #E8F5E9; color: #2E7D32; border: 1px solid rgba(46,125,50,0.2); padding: 6px 14px; border-radius: 20px; font-weight: 700; font-size: 0.85rem;">
          ⚡ ${spec.volume}
        </span>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 20px;">
        <div style="background: #F8F9FA; padding: 16px; border-radius: 12px; border: 1px solid rgba(0,0,0,0.06);">
          <strong style="display: block; font-size: 0.85rem; color: #777; text-transform: uppercase; margin-bottom: 8px;">📦 Core Products Supplied:</strong>
          <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: #000; line-height: 1.6;">
            ${spec.products.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>

        <div style="background: #F8F9FA; padding: 16px; border-radius: 12px; border: 1px solid rgba(0,0,0,0.06);">
          <strong style="display: block; font-size: 0.85rem; color: #777; text-transform: uppercase; margin-bottom: 8px;">🚚 Dispatch & Delivery:</strong>
          <p style="font-size: 0.9rem; color: #000; margin: 0; font-weight: 600; line-height: 1.5;">${spec.dispatch}</p>
          <div style="margin-top: 12px; font-size: 0.85rem; color: var(--color-desert); font-weight: 600;">
            💰 ${spec.margin}
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: flex-end;">
        <a href="#b2b-form" onclick="requestB2BSampleBox()" class="figma-cta-btn" style="padding: 10px 24px; font-size: 0.95rem;">
          ${spec.cta}
        </a>
      </div>
    `;

    container.style.opacity = '1';
    container.style.transform = 'translateY(0)';
  }, 120);
}

// Auto-initialize default prototype tab on load & PWA registration
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('figma-proto-content')) {
      switchProtoTab('kirana', document.querySelector('.figma-proto-tab'));
    }

    // Initialize Responsive AI Chatbot on all public pages
    initBakeryChatWidget();

    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW Registration:', err));
    }
  });
}

/* ==========================================================================
   AI CONCIERGE CHATBOT WIDGET - UNIVERSAL & FULLY RESPONSIVE
   ========================================================================== */
const bakeryChatHistory = [];
let isBakeryChatOpen = false;

function initBakeryChatWidget() {
  if (typeof document === 'undefined') return;

  let widget = document.getElementById('bakery-chat-widget');
  if (!widget) {
    widget = document.createElement('div');
    widget.className = 'bakery-chat-widget';
    widget.id = 'bakery-chat-widget';
    widget.innerHTML = `
      <!-- Floating Trigger Pill -->
      <button class="chat-trigger-btn" id="chat-trigger-btn" onclick="toggleBakeryChat()" aria-label="Open Bakery Assistant">
        <div class="chat-trigger-badge"></div>
        <i class="ph ph-sparkle chat-trigger-icon"></i>
        <span>Ask Bakery AI ✨</span>
      </button>

      <!-- Chat Modal Window -->
      <div class="chat-modal-window" id="chat-modal-window">
        <!-- Header -->
        <div class="chat-modal-header">
          <div class="chat-header-info">
            <img src="./sg-bakery-logo.png" alt="Santhi Ganesh Bakery" class="chat-header-logo">
            <div>
              <div class="chat-header-title">
                Santhi Ganesh AI
                <i class="ph ph-seal-check" style="color: #E3A857; font-size: 1.05rem;" title="Verified Bakery Concierge"></i>
              </div>
              <div class="chat-header-sub">
                <span class="chat-status-pulse"></span>
                <span>Online • Instant Answers</span>
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <a href="https://wa.me/917339073844?text=Hi%20Santhi%20Ganesh%20Bakery!%20Need%20help." target="_blank" class="chat-header-wa-btn" title="Chat on WhatsApp" aria-label="Chat on WhatsApp">
              <i class="ph ph-whatsapp-logo"></i>
            </a>
            <button class="chat-close-btn" onclick="toggleBakeryChat()" aria-label="Close Assistant">
              <i class="ph ph-x"></i>
            </button>
          </div>
        </div>

        <!-- Messages Body -->
        <div class="chat-body-messages" id="chat-body-messages">
          <!-- Initial Welcome Message -->
          <div class="chat-msg chat-msg-bot">
            <div class="chat-bubble">
              <strong style="color: #A6601B;">Vanakkam! 🙏</strong> Welcome to Santhi Ganesh Bakery.<br><br>
              How can I assist your celebration or food order today?
            </div>
            <div class="chat-quick-chips">
              <button type="button" class="chat-quick-chip" onclick="handleQuickChip('Tell me about Celebration & Custom Birthday Cakes')">🎂 Celebration Cakes</button>
              <button type="button" class="chat-quick-chip" onclick="handleQuickChip('Show me In-Store Menu (Juices, Chaat, Burgers, Pizzas, Shakes)')">🛵 30-Min Menu</button>
              <button type="button" class="chat-quick-chip" onclick="handleQuickChip('What are the rules for 2KM Express Delivery?')">⚡ 2KM Express Delivery</button>
              <button type="button" class="chat-quick-chip" onclick="handleQuickChip('Where is your store located and what are the timings?')">📍 Location & Hours</button>
            </div>
          </div>

          <!-- Typing Indicator -->
          <div class="chat-typing-indicator" id="chat-typing-indicator">
            <i class="ph ph-circle-notch" style="animation: spin 1s linear infinite; color: var(--color-desert, #C98A4C);"></i>
            <span>Assistant is thinking...</span>
          </div>
        </div>

        <!-- Footer Input -->
        <form class="chat-footer-input" onsubmit="event.preventDefault(); sendChatMessage();">
          <div class="chat-input-wrapper">
            <input type="text" id="chat-user-input" class="chat-input-field" placeholder="Ask in English or தமிழ்..." autocomplete="off">
            <button type="submit" class="chat-send-btn" aria-label="Send Message">
              <i class="ph ph-paper-plane-right"></i>
            </button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(widget);

    // Setup visual viewport listeners for modern mobile keyboards
    if (window.visualViewport) {
      const updateMobileChatViewport = () => {
        const modal = document.getElementById('chat-modal-window');
        if (modal && isBakeryChatOpen && window.innerWidth <= 768) {
          modal.style.height = `${window.visualViewport.height}px`;
          modal.style.top = `${window.visualViewport.offsetTop}px`;
          scrollChatMessagesToBottom();
        }
      };
      window.visualViewport.addEventListener('resize', updateMobileChatViewport);
      window.visualViewport.addEventListener('scroll', updateMobileChatViewport);
    }
  }
}

window.toggleBakeryChat = function() {
  isBakeryChatOpen = !isBakeryChatOpen;
  const modal = document.getElementById('chat-modal-window');
  if (modal) {
    modal.classList.toggle('active', isBakeryChatOpen);
    document.body.classList.toggle('chat-modal-open', isBakeryChatOpen);

    if (isBakeryChatOpen) {
      if (window.innerWidth <= 768 && window.visualViewport) {
        modal.style.height = `${window.visualViewport.height}px`;
        modal.style.top = `${window.visualViewport.offsetTop}px`;
      } else {
        modal.style.height = '';
        modal.style.top = '';
      }
      scrollChatMessagesToBottom();
      
      // Auto-focus only on desktop screens so mobile keyboard doesn't violently obscure the greeting
      if (window.innerWidth > 768) {
        setTimeout(() => {
          document.getElementById('chat-user-input')?.focus();
        }, 180);
      }
    } else {
      modal.style.height = '';
      modal.style.top = '';
      document.getElementById('chat-user-input')?.blur();
    }
  }
};

window.handleQuickChip = function(queryText) {
  const input = document.getElementById('chat-user-input');
  if (input) {
    input.value = queryText;
    sendChatMessage();
  }
};

window.sendChatMessage = async function() {
  const input = document.getElementById('chat-user-input');
  const text = input ? input.value.trim() : '';
  if (!text) return;

  input.value = '';
  appendUserChatMessage(text);
  bakeryChatHistory.push({ role: 'user', text });

  const typing = document.getElementById('chat-typing-indicator');
  if (typing) typing.classList.add('active');
  scrollChatMessagesToBottom();

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text, history: bakeryChatHistory })
    });

    let data = null;
    if (response.ok) {
      data = await response.json();
    }

    if (!data || !data.reply) {
      data = getLocalChatFallback(text);
    }

    if (typing) typing.classList.remove('active');
    appendBotChatMessage(data.reply, data.actions, data.whatsappUrl, data.webLink);
    bakeryChatHistory.push({ role: 'model', text: data.reply });
  } catch (err) {
    if (typing) typing.classList.remove('active');
    const fallback = getLocalChatFallback(text);
    appendBotChatMessage(fallback.reply, fallback.actions, fallback.whatsappUrl, fallback.webLink);
    bakeryChatHistory.push({ role: 'model', text: fallback.reply });
  }

  scrollChatMessagesToBottom();
};

function appendUserChatMessage(text) {
  const body = document.getElementById('chat-body-messages');
  const typing = document.getElementById('chat-typing-indicator');
  if (!body) return;
  const div = document.createElement('div');
  div.className = 'chat-msg chat-msg-user';
  div.innerHTML = `<div class="chat-bubble">${escapeChatHTML(text)}</div>`;
  body.insertBefore(div, typing);
}

function appendBotChatMessage(replyText, actions, whatsappUrl, webLink) {
  const body = document.getElementById('chat-body-messages');
  const typing = document.getElementById('chat-typing-indicator');
  if (!body) return;
  const div = document.createElement('div');
  div.className = 'chat-msg chat-msg-bot';

  let actionsHTML = '';
  if (Array.isArray(actions) && actions.length > 0) {
    actionsHTML = `
      <div class="chat-actions-container">
        ${actions.map(act => `
          <button type="button" class="chat-action-btn" onclick="handleQuickChip('${escapeChatHTML(act.query || act.label)}')">
            <span><i class="ph ph-chat-circle-dots" style="color: var(--color-desert, #C98A4C); margin-right: 6px;"></i> ${escapeChatHTML(act.label)}</span>
            <i class="ph ph-arrow-right" style="font-size: 0.9rem; opacity: 0.7;"></i>
          </button>
        `).join('')}
      </div>
    `;
  }

  let webLinkHTML = '';
  if (webLink && webLink.url && webLink.label) {
    webLinkHTML = `
      <a href="${escapeChatHTML(webLink.url)}" class="chat-action-btn" style="background: linear-gradient(135deg, #A6601B 0%, #8C4E14 100%); color: #FFFFFF; border-color: #8C4E14; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; justify-content: space-between;">
        <span><i class="ph ph-arrow-square-out" style="font-size: 1.05rem; margin-right: 6px;"></i> ${escapeChatHTML(webLink.label)}</span>
        <i class="ph ph-arrow-right" style="font-size: 0.9rem;"></i>
      </a>
    `;
  }

  let waHTML = '';
  if (whatsappUrl) {
    waHTML = `
      <a href="${whatsappUrl}" target="_blank" class="chat-action-btn" style="background: linear-gradient(135deg, #1F9D55 0%, #128C7E 100%); color: #FFFFFF; border-color: #128C7E; font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; justify-content: space-between;">
        <span><i class="ph ph-whatsapp-logo" style="font-size: 1.1rem; margin-right: 6px;"></i> Order via WhatsApp</span>
        <i class="ph ph-arrow-right" style="font-size: 0.9rem;"></i>
      </a>
    `;
  }

  let buttonsRow = '';
  if (webLinkHTML || waHTML) {
    buttonsRow = `
      <div style="display: flex; flex-direction: column; gap: 7px; margin-top: 10px; width: 100%;">
        ${webLinkHTML}
        ${waHTML}
      </div>
    `;
  }

  div.innerHTML = `
    <div class="chat-bubble">${formatChatMessageMarkdown(replyText)}</div>
    ${buttonsRow}
    ${actionsHTML}
  `;

  body.insertBefore(div, typing);
}

function formatChatMessageMarkdown(text) {
  if (!text) return '';
  let formatted = escapeChatHTML(text);
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formatted = formatted.replace(/(?:^|\n)[•\-\*]\s+(.*)/g, '<div style="display:flex;gap:6px;margin:2px 0;"><span>•</span><span>$1</span></div>');
  formatted = formatted.replace(/\n/g, '<br>');
  return formatted;
}

function scrollChatMessagesToBottom() {
  const body = document.getElementById('chat-body-messages');
  if (body) {
    body.scrollTop = body.scrollHeight;
  }
}

function escapeChatHTML(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function getLocalChatFallback(msg) {
  return {
    reply: "We deliver within a 2 km radius around Santhi Ganesh Bakery (92 Cheranmahadevi Rd, Thirunagar). For deliveries beyond 2 km or custom orders, please check with us on WhatsApp (+91 73390 73844).",
    actions: [
      { label: '🎂 Celebration Cakes', query: 'Tell me about Celebration & Custom Birthday Cakes' },
      { label: '🛵 In-Store Quick Menu', query: 'Show me In-Store Menu (Juices, Chaat, Burgers, Pizzas, Shakes)' }
    ],
    whatsappUrl: 'https://wa.me/917339073844?text=Hi%20Santhi%20Ganesh%20Bakery!'
  };
}

