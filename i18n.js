// i18n.js - Santhi Ganesh Bakery English & Tamil (தமிழ்) Dual-Language Engine

const TRANSLATIONS = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_cakes: "Cakes & Bakes",
    nav_careers: "Careers",
    nav_contact: "Contact",
    nav_explore: "Explore Cakes",
    
    // Hero Section
    hero_tagline: "Tirunelveli's Favorite Bakery",
    hero_title: "Handcrafted Cakes & Fresh Daily Bakes",
    hero_sub: "Baked fresh before dawn across our local Tirunelveli branches using pure butter, rich chocolate, and natural ingredients.",
    hero_btn_explore: "Browse Cake Catalog",
    hero_btn_whatsapp: "Order via WhatsApp",

    // Featured Products
    featured_tagline: "Fresh From Our Oven",
    featured_title: "Signature Bakes",
    featured_sub: "Our most loved cakes, crafted daily for birthdays, weddings, and everyday celebrations in Tirunelveli.",
    view_full_catalog: "View Full Catalog →",

    // Heritage Section
    heritage_tagline: "Pure Ingredients & Tradition",
    heritage_title: "Crafting Sweet Memories in Tirunelveli",
    heritage_desc: "Since day one, Santhi Ganesh Bakery has been synonymous with warmth, freshness, and rich flavor. From our classic Black Forest to multi-tiered wedding cakes, every slice is baked with love.",

    // Catalog Page
    catalog_browse: "Browse",
    catalog_title: "Cakes & Confectionery",
    catalog_sub: "Browse our most loved bakes made fresh every morning in Tirunelveli.",
    search_placeholder: "Search cakes...",
    
    // Categories
    cat_all: "All Bakes",
    cat_birthday_her: "Birthday (Her)",
    cat_birthday_him: "Birthday (Him)",
    cat_wedding: "Wedding & Tiers",
    cat_baby_shower: "Baby Shower",
    cat_kids: "Kids Cakes",

    // Contact Page
    contact_tagline: "Reach Out to Us",
    contact_title: "CONTACT US",
    contact_sub: "Hear from the people who eat our cakes in Tirunelveli. Drop by our store or order online.",
    email_label: "Email",
    email_sub: "Home baker, Tirunelveli",
    phone_label: "Phone",
    phone_sub: "Santhi Ganesh Bakery",
    chat_whatsapp: "Chat on WhatsApp",
    location_label: "Location",
    open_in_maps: "Open in Maps",

    // Careers Page
    careers_tagline: "Signature Openings",
    careers_title: "Open Positions",
    careers_sub: "Join the team behind Tirunelveli's favorite bakery. Baked fresh before dawn across our local branches.",
    btn_apply_now: "Apply Now",

    // Cart Drawer
    cart_title: "Your Order Cart",
    subtotal: "Subtotal Amount",
    cart_empty_title: "Your cart is empty.",
    cart_empty_sub: "Add your favorite bakes to begin!",

    // Footer
    footer_desc: "Crafting Tirunelveli's favorite custom cakes, pastries, and artisanal chocolates with passion and pure ingredients.",
    quick_links: "Quick Links",
    categories: "Categories",
    store_contact: "Store & Contact",
    hours_daily: "Open Daily: 8:00 AM – 10:00 PM",
    copyright: "© 2026 Santhi Ganesh Bakery, Tirunelveli. All rights reserved.",
    footer_home: "Home",
    footer_catalog: "Cakes Catalog",
    footer_careers: "Careers & Hiring",
    footer_about: "About Our Bakery",
    footer_contact: "Contact Us",
    cat_birthday: "Birthday Cakes",
    cat_wedding_tier: "Wedding Tiers",
    cat_baby: "Baby Shower Cakes",
    cat_cookies: "Almond Cookies & Bakes",

    // Product Detail Page
    shop_all: "Shop all",
    select_weight: "Select Weight / Variant:",
    freshness_guarantee: "Freshness guaranteed • Doorstep delivery across Tirunelveli",
    btn_add_to_cart: "Add to Cart",
    btn_order_whatsapp: "Order via WhatsApp",
    acc_details: "Details",
    acc_shipping: "Shipping & Delivery",
    acc_returns: "Quality & Guarantee",
    star_rating_text: "4.3★ Swiggy Store Rating (500+ reviews)",
    swiggy_badge: "★ 4.3 Swiggy"
  },

  ta: {
    // Navigation
    nav_home: "முகப்பு",
    nav_about: "எங்களைப் பற்றி",
    nav_cakes: "கேக்குகள்",
    nav_careers: "வேலைவாய்ப்புகள்",
    nav_contact: "தொடர்புகொள்ள",
    nav_explore: "கேக்குகளை பார்க்க",
    
    // Hero Section
    hero_tagline: "திருநெல்வேலியின் அன்பான பேக்கரி",
    hero_title: "கைவினை கேக்குகள் மற்றும் புதிய பேக்கரி சுவைகள்",
    hero_sub: "தூய வெண்ணெய், சுவையான சாக்லேட் மற்றும் இயற்கை பொருட்களுடன் தினமும் அதிகாலையில் புதிதாக சுடப்படும் கேக்குகள்.",
    hero_btn_explore: "கேக்குகள் பட்டியல்",
    hero_btn_whatsapp: "வாட்ஸ்அப் மூலம் ஆர்டர் செய்ய",

    // Featured Products
    featured_tagline: "எங்கள் ஓவனில் இருந்து புதிதாக",
    featured_title: "சிறப்பு கேக்குகள்",
    featured_sub: "திருநெல்வேலியில் பிறந்தநாள், திருமணம் மற்றும் விழா கொண்டாட்டங்களுக்கு தினமும் தயாரிக்கப்படும் கேக்குகள்.",
    view_full_catalog: "முழு பட்டியலை பார்க்க →",

    // Heritage Section
    heritage_tagline: "தூய்மையான பொருட்கள் & பாரம்பரியம்",
    heritage_title: "திருநெல்வேலியில் இனிப்பான நினைவுகளை உருவாக்குகிறது",
    heritage_desc: "முதல் நாளில் இருந்தே, சாந்தி கணேஷ் பேக்கரி புதிய சுவைக்கும் தரம் சார்ந்த தயாரிப்புகளுக்கும் பெயர் பெற்றது. பிளாக் ஃபாரஸ்ட் முதல் திருமண கேக்குகள் வரை அன்புடன் சுடப்படுகிறது.",

    // Catalog Page
    catalog_browse: "தேடுங்கள்",
    catalog_title: "கேக்குகள் & இனிப்புகள்",
    catalog_sub: "திருநெல்வேலியில் தினமும் காலை புதிதாக சுடப்படும் சுவையான கேக்குகளை பார்க்கவும்.",
    search_placeholder: "கேக்குகளை தேடுங்கள்...",
    
    // Categories
    cat_all: "அனைத்து வகை",
    cat_birthday_her: "பிறந்தநாள் (பெண்கள்)",
    cat_birthday_him: "பிறந்தநாள் (ஆண்கள்)",
    cat_wedding: "திருமண கேக்குகள்",
    cat_baby_shower: "வளைகாப்பு கேக்குகள்",
    cat_kids: "குழந்தைகள் கேக்குகள்",

    // Contact Page
    contact_tagline: "எங்களை தொடர்பு கொள்ளுங்கள்",
    contact_title: "தொடர்புகொள்ள",
    contact_sub: "எங்கள் கடையில் நேரில் வரலாம் அல்லது ஆன்லைனில் வாட்ஸ்அப் மூலம் ஆர்டர் செய்யலாம்.",
    email_label: "மின்னஞ்சல்",
    email_sub: "ஹோம் பேக்கர், திருநெல்வேலி",
    phone_label: "தொலைபேசி",
    phone_sub: "சாந்தி கணேஷ் பேக்கரி",
    chat_whatsapp: "வாட்ஸ்அப்பில் பேச",
    location_label: "முகவரி",
    open_in_maps: "மேப்பில் பார்க்க",

    // Careers Page
    careers_tagline: "வேலை வாய்ப்புகள்",
    careers_title: "காலிப் பணியிடங்கள்",
    careers_sub: "திருநெல்வேலியின் விருப்பமான பேக்கரி குழுவில் இணையுங்கள்.",
    btn_apply_now: "இப்போதே விண்ணப்பிக்க",

    // Cart Drawer
    cart_title: "உங்கள் ஆர்டர் கூடை",
    subtotal: "மொத்த தொகை",
    cart_empty_title: "உங்கள் கூடை காலியாக உள்ளது.",
    cart_empty_sub: "உங்களுக்கு பிடித்த கேக்குகளை சேர்க்கவும்!",

    // Footer
    footer_desc: "திருநெல்வேலியின் விருப்பமான கேக்குகள், பேஸ்ட்ரிகள் மற்றும் சாக்லேட்டுகளை தரமான பொருட்களுடன் அன்போடு தயாரிக்கிறோம்.",
    quick_links: "முக்கிய இணைப்புகள்",
    categories: "வகைகள்",
    store_contact: "கடை & தொடர்பு",
    hours_daily: "தினமும் திறந்திருக்கும்: காலை 8:00 – இரவு 10:00",
    copyright: "© 2026 சாந்தி கணேஷ் பேக்கரி, திருநெல்வேலி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    footer_home: "முகப்பு",
    footer_catalog: "கேக்குகள் பட்டியல்",
    footer_careers: "வேலைவாய்ப்புகள்",
    footer_about: "எங்களைப் பற்றி",
    footer_contact: "தொடர்புகொள்ள",
    cat_birthday: "பிறந்தநாள் கேக்குகள்",
    cat_wedding_tier: "திருமண கேக்குகள்",
    cat_baby: "வளைகாப்பு கேக்குகள்",
    cat_cookies: "பிஸ்கட் & பேக்கரி சுவைகள்",

    // Product Detail Page
    shop_all: "அனைத்தும்",
    select_weight: "எடை / அளவைத் தேர்ந்தெடுக்கவும்:",
    freshness_guarantee: "புதிய சுவை உத்தரவாதம் • திருநெல்வேலி முழுவதும் டோர் டெலிவரி",
    btn_add_to_cart: "கூடையில் சேர்",
    btn_order_whatsapp: "வாட்ஸ்அப் மூலம் ஆர்டர் செய்ய",
    acc_details: "விவரங்கள்",
    acc_shipping: "டெலிவரி விவரங்கள்",
    acc_returns: "தரமான உத்தரவாதம்",
    star_rating_text: "4.3★ ஸ்விக்கி ஸ்டோர் ரேட்டிங் (500+ விமர்சனங்கள்)",
    swiggy_badge: "★ 4.3 ஸ்விக்கி"
  }
};

// Global Current Language State
let currentLang = 'en';

// Detect Device Language or Saved Preference
function initI18n() {
  const savedLang = (typeof window !== 'undefined' && window.localStorage)
    ? localStorage.getItem('sg_bakery_lang')
    : null;
  
  if (savedLang) {
    currentLang = savedLang;
  } else if (typeof navigator !== 'undefined') {
    // Detect Device Language
    const deviceLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (deviceLang.startsWith('ta')) {
      currentLang = 'ta';
    } else {
      currentLang = 'en';
    }
  }

  applyLanguage(currentLang);
}

// Toggle Language between English and Tamil
function toggleLanguage() {
  currentLang = (currentLang === 'en') ? 'ta' : 'en';
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('sg_bakery_lang', currentLang);
  }
  applyLanguage(currentLang);
}

// Apply Selected Language across DOM
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;
  const dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];

  // Update elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update input placeholders
  const searchInput = document.getElementById('product-search-input');
  if (searchInput && dict['search_placeholder']) {
    searchInput.placeholder = dict['search_placeholder'];
  }

  // Update Language Toggle Button Label
  const langLabel = document.getElementById('current-lang-label');
  if (langLabel) {
    langLabel.textContent = lang === 'en' ? 'தமிழ்' : 'English';
  }

  // Dispatch custom event if other components need to re-render
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Run on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
});
