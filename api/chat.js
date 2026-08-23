// api/chat.js - Real-Time Zero-Hallucination AI Concierge with Live Database Pricing
const GEMINI_API_KEY = (
  process.env.GEMINI_API_KEY ||
  process.env.GEMINI_KEY ||
  process.env['Gemini key'] ||
  process.env['gemini key'] ||
  process.env.gemini_api_key ||
  process.env.GOOGLE_API_KEY ||
  ''
).trim();

const BAKERY_PHONE = '917339073844';
const SUPABASE_URL = 'https://hkkdeowfoyejfifeftme.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhra2Rlb3dmb3llamZpZmVmdG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1MjQ1NzYsImV4cCI6MjA5OTEwMDU3Nn0.EBw0t2IZoM8koDaV2AOFj6rQbyQINSo_mkrvhhhd0nU';

// Lightweight in-memory cache to keep serverless responses ultra-fast (<2ms)
let cachedProducts = null;
let lastProductsFetchTime = 0;
const PRODUCTS_CACHE_TTL = 30 * 1000; // 30 seconds cache for instant price reflection

async function getLiveProducts() {
  const now = Date.now();
  if (cachedProducts && (now - lastProductsFetchTime < PRODUCTS_CACHE_TTL)) {
    return cachedProducts;
  }
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(`${SUPABASE_URL}/rest/v1/products?select=id,title,category,price,weight,is_available`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        cachedProducts = data;
        lastProductsFetchTime = now;
        return data;
      }
    }
  } catch (err) {
    console.warn('Supabase fetch in chat error:', err.message);
  }
  return cachedProducts || [];
}

function buildDynamicSystemPrompt(products = []) {
  let catalogSection = '';
  if (Array.isArray(products) && products.length > 0) {
    const categoryNames = {
      'signature-cakes': 'Signature Cakes (cakes?cat=signature-cakes)',
      'birthday-her': 'Birthday (Her) (cakes?cat=birthday-her)',
      'birthday-him': 'Birthday (Him) (cakes?cat=birthday-him)',
      'kids': 'Kids Cakes (cakes?cat=kids)',
      'baby-shower': 'Baby Shower (cakes?cat=baby-shower)',
      'wedding': 'Wedding & Tiers (cakes?cat=wedding)'
    };
    const grouped = {};
    for (const p of products) {
      if (p.is_available === false) continue;
      const cat = p.category || 'other';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(`${p.title} ₹${p.price}${p.weight ? ` (${p.weight})` : ''}`);
    }

    catalogSection = Object.entries(categoryNames).map(([catKey, label]) => {
      const items = grouped[catKey] || [];
      if (items.length === 0) return '';
      return `   - ${label}: ${items.slice(0, 12).join(' | ')}`;
    }).filter(Boolean).join('\n');
  }

  return `
You are the helpful AI Concierge for Santhi Ganesh Bakery (சாந்தி கணேஷ் பேக்கரி) at 92 Cheranmahadevi Rd, Thirunagar, Tirunelveli.

STORE LOCATION, ADDRESS & HOURS:
• Address: 92 Cheranmahadevi Rd, Thirunagar, Tirunelveli, Tamil Nadu 627006.
• Timings: Open Daily from 8:00 AM to 10:00 PM (Monday to Sunday).
• Hotline: +91 73390 73844
• When asked about store location, address, map, timings, or hours:
  State directly: "Santhi Ganesh Bakery is located at 92 Cheranmahadevi Rd, Thirunagar, Tirunelveli. We are open daily from 8:00 AM to 10:00 PM. You can visit us in person or order online!"

STRICT BEHAVIOR & LENGTH CONSTRAINTS:
1. DELIVERY AREA QUERIES: If asked whether we deliver to a specific distant area (e.g. Maharaja Nagar, Palayamkottai, etc.):
   - NEVER say "Yes" or "No".
   - State strictly: "We deliver within a 2 km radius around Santhi Ganesh Bakery (92 Cheranmahadevi Rd, Thirunagar). For deliveries beyond 2 km or custom cake orders, please check with us directly on WhatsApp (+91 73390 73844)."
2. NO "YES" OR "NO" FOR UNLISTED ITEMS: If an item is not in the catalog, do not say Yes or No; suggest available alternatives or WhatsApp.
3. ALWAYS USE THE EXACT CURRENT LIVE DATABASE PRICES LISTED BELOW. NEVER INVENT OR GUESS PRICES.
4. STRICT LENGTH: Maximum 3 to 4 short sentences. Keep it direct and helpful.
5. Reply in customer's language (Tamil தமிழ், English, or Tanglish).

ACTIVE CATALOG & REAL-TIME DATABASE PRICES:
• Jobs Hiring (careers.html): Cleaner (₹350/day) | Delivery Partner / Server (₹350–₹450/day) | Social Media Manager (₹5K–₹7K/mo).

1. 🎂 CELEBRATION CAKES (products.html - Regular & 100% Pure Veg / Eggless):
${catalogSection || `   - Signature Cakes: Fresh Pineapple ₹600 (1kg) | White Forest / Black Forest ₹650 (1kg) | Strawberry Glaze Red Berry ₹700 (1kg) | Red Velvet ₹750 (1kg) | Truffle ₹800 (1kg)
   - Her: Dancing Doll Cake ₹950 (1kg) | Blue Ripples ₹1,000 (1kg) | Barbie Pink ₹1,300 (1.5kg) | Tiara Cake ₹1,800 (2kg)
   - Him: The Fitness Freak ₹1,150 (1kg) | Cricket Craze ₹1,200 (1kg) | Gamers X-Box ₹1,900 (2kg)
   - Kids: Spiderman Web ₹1,050 (1kg) | Hello Kitty ₹1,100 (1kg) | F.R.I.E.N.D.S ₹1,200 (1kg)
   - Baby Shower: Sky Themed ₹1,100 (1kg) | Baby Shoes ₹1,150 (1kg) | Baby Stroller ₹1,300 (1kg)
   - Wedding Tiers: Bridal Shower ₹1,200 (1kg) | The Perfect Pair ₹1,250 (1kg) | Wedding Bells ₹2,200 (2kg)`}

2. 🛵 IN-STORE QUICK MENU (menu.html - 30-min 2KM delivery, FREE above ₹300):
   - Puffs: Veg ₹25 | Egg ₹30 | Paneer ₹35 | Mushroom ₹35 | Chicken Tikka ₹40
   - Juices & Shakes: Elaneer Payasam ₹80 | Orange / Pom / Apple ₹80 | Watermelon ₹50 | Cold Coffee / Oreo / Kitkat Shake ₹90 | Royal Falooda ₹140
   - Chaat & Snacks: Pani Puri ₹40 | Dahi Puri ₹60 | Sev / Bhel Puri ₹50 | Butter Pav Bhaji ₹60 | Veg Burger ₹80 | Chicken Burger ₹120 | Pizzas ₹110–₹140 | Filter Coffee ₹25
`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history = [] } = req.body || {};
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Fetch live products from Supabase database (cached 30s)
  const liveProducts = await getLiveProducts();

  // 1. Try Cheapest & Fastest Flash-Lite Models directly
  if (GEMINI_API_KEY) {
    try {
      const formattedContents = [];
      // Keep only last 2 messages to save 60%+ input tokens
      const safeHistory = Array.isArray(history) ? history.slice(-2) : [];

      for (const h of safeHistory) {
        if (h.text && typeof h.text === 'string') {
          formattedContents.push({
            role: h.role === 'model' ? 'model' : 'user',
            parts: [{ text: h.text }]
          });
        }
      }

      formattedContents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const dynamicSystemPrompt = buildDynamicSystemPrompt(liveProducts);

      const payload = {
        systemInstruction: {
          parts: [{ text: dynamicSystemPrompt }]
        },
        contents: formattedContents,
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 200, // Strict cap to prevent paragraph essays
          topP: 0.85
        }
      };

      // Cheapest and lightest models first
      const fastModels = [
        'gemini-flash-lite-latest',
        'gemini-3.5-flash-lite',
        'gemini-flash-latest',
        'gemini-2.0-flash'
      ];

      for (const model of fastModels) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2500);

          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
          const response = await fetch(geminiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            signal: controller.signal
          });
          clearTimeout(timeoutId);

          if (response.ok) {
            const data = await response.json();
            const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
            if (rawText.trim()) {
              let cleanReply = rawText.replace(/<thought>[\s\S]*?<\/thought>/gi, '');
              cleanReply = cleanReply.replace(/(?:^|\n)(?:User Input|Meaning|Goal|Constraint|Draft \d|Thought|Reasoning):[\s\S]*?\n\n/gi, '');
              cleanReply = cleanReply.replace(/[*_#`]/g, '').trim();
              
              if (!cleanReply) cleanReply = rawText.replace(/[*_#`]/g, '').trim();
              
              const whatsappUrl = generateWhatsAppLink(message, cleanReply);
              const dynamicWebLink = getRelevantWebLink(message, cleanReply);

              return res.status(200).json({
                reply: cleanReply,
                whatsappUrl,
                webLink: dynamicWebLink,
                source: `gemini (${model})`
              });
            }
          }
        } catch (mErr) {
          // move to next candidate immediately
        }
      }
    } catch (err) {
      console.warn('Gemini execution error:', err);
    }
  }

  // 2. High-speed Live Database Rule Engine
  const ruleResponse = processRuleEngine(message, liveProducts);
  const whatsappUrl = generateWhatsAppLink(message, ruleResponse.reply);
  const dynamicWebLink = getRelevantWebLink(message, ruleResponse.reply);

  return res.status(200).json({
    reply: ruleResponse.reply,
    actions: ruleResponse.actions || [],
    whatsappUrl,
    webLink: dynamicWebLink,
    source: 'rule_engine'
  });
}

function findCakeInfo(products, keyword, fallbackPrice, defaultWeight = '1 kg') {
  if (Array.isArray(products) && products.length > 0) {
    const match = products.find(p => p.title && p.title.toLowerCase().includes(keyword.toLowerCase()));
    if (match && match.price) {
      return { price: match.price, weight: match.weight || defaultWeight, title: match.title };
    }
  }
  return { price: fallbackPrice, weight: defaultWeight, title: keyword };
}

function processRuleEngine(msg, liveProducts = []) {
  const lower = msg.toLowerCase().trim();

  // 1. Store Location, Address, Hours & Timings
  if (lower.includes('timing') || lower.includes('hours') || lower.includes('located') || lower.includes('address') || lower.includes('where is') || lower.includes('location') || lower.includes('map') || lower.includes('open') || lower.includes('close') || lower.includes('thirunagar') || lower.includes('cheranmahadevi')) {
    return {
      reply: "📍 Santhi Ganesh Bakery is located at 92 Cheranmahadevi Rd, Thirunagar, Tirunelveli.\n🕒 Store Timings: Open Daily 8:00 AM – 10:00 PM (Monday to Sunday).\n📞 Phone: +91 73390 73844",
      actions: [
        { label: '🎂 Celebration Cakes', query: 'Tell me about Celebration & Custom Birthday Cakes' },
        { label: '🛵 In-Store Quick Menu', query: 'Show me In-Store Menu (Juices, Chaat, Burgers, Pizzas, Shakes)' }
      ]
    };
  }

  // 2. Delivery queries
  if (lower.includes('delivery') || lower.includes('2km') || lower.includes('distance') || lower.includes('area') || lower.includes('maharaja') || lower.includes('palayamkottai') || lower.includes('junction')) {
    return {
      reply: "We deliver within a 2 km radius around Santhi Ganesh Bakery (92 Cheranmahadevi Rd, Thirunagar). For deliveries beyond 2 km or custom cake orders, please check with us directly on WhatsApp (+91 73390 73844).",
      actions: [
        { label: '🛵 In-Store Quick Menu', query: 'Show me In-Store Menu (Juices, Chaat, Burgers, Pizzas, Shakes)' },
        { label: '🎂 Celebration Cakes', query: 'Tell me about Celebration & Custom Birthday Cakes' }
      ]
    };
  }

  // Juices / Shakes / Beverages
  if (lower.includes('juice') || lower.includes('elaneer') || lower.includes('shake') || lower.includes('coffee') || lower.includes('tea') || lower.includes('falooda') || lower.includes('mojito')) {
    return {
      reply: "🥤 In-Store Beverages & Desserts:\n• Elaneer Payasam: ₹80 | Orange / Pomegranate: ₹80 | Watermelon: ₹50\n• Cold Coffee / Oreo / Kitkat Shake: ₹90 | Royal Falooda: ₹140\n• Filter Coffee: ₹25 | Ginger Tea: ₹20 | Mojitos: ₹70",
      actions: [
        { label: '🛵 Order on WhatsApp', query: 'Order in-store beverages for 2KM delivery' }
      ]
    };
  }

  // Chaat / Pav Bhaji / Burger / Pizza / Snacks
  if (lower.includes('chaat') || lower.includes('chat') || lower.includes('pani puri') || lower.includes('puri') || lower.includes('pav bhaji') || lower.includes('burger') || lower.includes('pizza') || lower.includes('sandwich') || lower.includes('momo') || lower.includes('toast') || lower.includes('brownie')) {
    return {
      reply: "🍔 In-Store Quick Bites:\n• Pani Puri (6 pcs): ₹40 | Dahi Puri: ₹60 | Sev Puri: ₹50\n• Butter Pav Bhaji: ₹60 | Paneer / Cheese Pav Bhaji: ₹90\n• Crispy Veg Burger: ₹80 | Chicken Burger: ₹120 | Pizzas: ₹110–₹150\n• Sizzling Brownie with Ice Cream: ₹140 | Choco Lava: ₹50",
      actions: [
        { label: '🛵 Order on WhatsApp', query: 'Order in-store snacks for 2KM delivery' }
      ]
    };
  }

  // Specific Celebration Cakes using live database prices
  if (lower.includes('barbie')) {
    const barbie = findCakeInfo(liveProducts, 'barbie', 1300, '1.5 kg');
    return {
      reply: `🎂 ${barbie.title} is currently priced at ₹${barbie.price} (${barbie.weight}). Crafted fresh in both Regular & 100% Pure Veg (Eggless).`,
      actions: [{ label: '🟢 Order Barbie Cake', query: 'Book Barbie Pink Cake for birthday' }]
    };
  }

  if (lower.includes('lowest') || lower.includes('cheap') || lower.includes('budget') || lower.includes('kammi')) {
    if (Array.isArray(liveProducts) && liveProducts.length > 0) {
      const sorted = liveProducts.filter(p => p.is_available !== false && p.price > 0).sort((a, b) => a.price - b.price);
      if (sorted.length >= 3) {
        return {
          reply: `🎂 Our lowest price celebration cake in the catalog is the **${sorted[0].title} at ₹${sorted[0].price} (${sorted[0].weight || '1 kg'})**, followed by ${sorted[1].title} (₹${sorted[1].price}) and ${sorted[2].title} (₹${sorted[2].price})!`,
          actions: [
            { label: `🎂 Order ${sorted[0].title} (₹${sorted[0].price})`, query: `Book ${sorted[0].title}` },
            { label: `🎂 Order ${sorted[1].title} (₹${sorted[1].price})`, query: `Book ${sorted[1].title}` }
          ]
        };
      }
    }
    return {
      reply: "🎂 Our lowest price celebration cake in the catalog is the **Dancing Doll Cake at ₹950 (1 kg)**, followed by Blue Ripples Cake / Yellow Unicorn (₹1,000) and Spiderman Web Cake (₹1,050)!",
      actions: [
        { label: '🎂 Order Dancing Doll (₹950)', query: 'Book Dancing Doll Cake' },
        { label: '🎂 Order Spiderman (₹1050)', query: 'Book Spiderman Web Cake' }
      ]
    };
  }

  if (lower.includes('fitness freak') || lower.includes('cricket') || lower.includes('xbox') || lower.includes('him')) {
    const ff = findCakeInfo(liveProducts, 'fitness freak', 1150, '1 kg');
    const cc = findCakeInfo(liveProducts, 'cricket', 1200, '1 kg');
    const xb = findCakeInfo(liveProducts, 'x-box', 1900, '2 kg');
    return {
      reply: `🎂 Birthday Cakes for Him:\n• ${ff.title}: ₹${ff.price} (${ff.weight})\n• ${cc.title}: ₹${cc.price} (${cc.weight})\n• ${xb.title}: ₹${xb.price} (${xb.weight})`,
      actions: [{ label: '🟢 Order Cake for Him', query: 'Book Birthday Cake for Him' }]
    };
  }

  if (lower.includes('spiderman') || lower.includes('kids')) {
    const sm = findCakeInfo(liveProducts, 'spiderman web', 1050, '1 kg');
    const hk = findCakeInfo(liveProducts, 'hello kitty', 1100, '1 kg');
    return {
      reply: `🧒 Kids Theme Cakes:\n• ${sm.title}: ₹${sm.price} (${sm.weight})\n• ${hk.title}: ₹${hk.price} (${hk.weight})`,
      actions: [{ label: '🟢 Order Kids Theme Cake', query: 'Book Kids Theme Cake' }]
    };
  }

  if (lower.includes('wedding') || lower.includes('anniversary') || lower.includes('tier') || lower.includes('bridal')) {
    const bs = findCakeInfo(liveProducts, 'bridal shower', 1200, '1 kg');
    const pp = findCakeInfo(liveProducts, 'perfect pair', 1250, '1 kg');
    return {
      reply: `💍 Wedding & Milestone Tiers:\n• ${bs.title}: ₹${bs.price} (${bs.weight})\n• ${pp.title}: ₹${pp.price} (${pp.weight})`,
      actions: [{ label: '🟢 Order Wedding Tier', query: 'Inquire Wedding Tier Cake' }]
    };
  }

  // General default: Ask to divide into Celebration Cakes vs In-Store Menu
  return {
    reply: "Vanakkam! Welcome to Santhi Ganesh Bakery 🙏\n\nWe have two main sections for you:\n1. 🎂 **Celebration Cakes** (Custom Birthday, Kids Theme, Baby Shower & Wedding Cakes)\n2. 🛵 **In-Store Quick Menu** (Fresh Juices, Chaat, Pav Bhaji, Burgers, Pizzas, Shakes with 30-min 2KM delivery)\n\nWhich one would you like to explore?",
    actions: [
      { label: '🎂 Celebration Cakes', query: 'Tell me about Celebration & Custom Birthday Cakes' },
      { label: '🛵 In-Store Quick Menu', query: 'Show me In-Store Menu (Juices, Chaat, Burgers, Pizzas, Shakes)' },
      { label: '⚡ 2KM Delivery Info', query: 'What are the rules for 2KM Express Delivery?' },
      { label: '📍 Store Location & Hours', query: 'Where is your store located and what are the timings?' }
    ]
  };
}

function generateWhatsAppLink(userMsg, botReply) {
  const text = `Hi Santhi Ganesh Bakery! 👋\nI am inquiring from your website:\n"${userMsg.trim()}"\n\nPlease assist me with my order.`;
  return `https://wa.me/${BAKERY_PHONE}?text=${encodeURIComponent(text)}`;
}

function getRelevantWebLink(userMsg = '', botReply = '') {
  const combined = (userMsg + ' ' + botReply).toLowerCase();

  // 1. Store Location, Address, Map & Hours
  if (
    combined.includes('where is') ||
    combined.includes('located') ||
    combined.includes('location') ||
    combined.includes('address') ||
    combined.includes('timing') ||
    combined.includes('hours') ||
    combined.includes('open daily') ||
    combined.includes('thirunagar') ||
    combined.includes('cheranmahadevi') ||
    combined.includes('map')
  ) {
    return {
      label: '📍 Open Store in Google Maps',
      url: 'https://maps.app.goo.gl/FGe2HwZbjZGf6ieB8'
    };
  }

  // 2. Jobs & Careers
  if (
    combined.includes('job') ||
    combined.includes('career') ||
    combined.includes('hiring') ||
    combined.includes('vacancy') ||
    combined.includes('velai') ||
    combined.includes('salary') ||
    combined.includes('cleaner') ||
    combined.includes('waiter') ||
    combined.includes('supplier')
  ) {
    return {
      label: '💼 View Job Openings & Apply',
      url: './careers.html'
    };
  }

  // 2. Help, Support & Direct Inquiries
  if (
    combined.includes('support') ||
    combined.includes('help') ||
    combined.includes('contact') ||
    combined.includes('call') ||
    combined.includes('phone') ||
    combined.includes('manager') ||
    combined.includes('owner') ||
    combined.includes('complaint') ||
    combined.includes('custom design')
  ) {
    return {
      label: '💬 Chat on WhatsApp (+91 73390 73844)',
      url: `https://wa.me/${BAKERY_PHONE}?text=${encodeURIComponent('Hi Santhi Ganesh Bakery! I need assistance/support.')}`
    };
  }

  // 3. Signature Cakes
  if (
    combined.includes('signature') ||
    combined.includes('red velvet') ||
    combined.includes('truffle') ||
    combined.includes('dark chocolate') ||
    combined.includes('butterscotch') ||
    combined.includes('praline') ||
    combined.includes('mocha') ||
    combined.includes('choco-chip') ||
    combined.includes('strawberry glaze') ||
    combined.includes('red berry')
  ) {
    return {
      label: '🎂 View Signature Cakes Catalog',
      url: './cakes?cat=signature-cakes'
    };
  }

  // 4. Kids Theme Cakes
  if (
    combined.includes('kid') ||
    combined.includes('spiderman') ||
    combined.includes('hello kitty') ||
    combined.includes('unicorn') ||
    combined.includes('pokeball') ||
    combined.includes('pinata') ||
    combined.includes('boss baby') ||
    combined.includes('chhota bheem') ||
    combined.includes('lion king') ||
    combined.includes('paw')
  ) {
    return {
      label: '🎂 View Kids Cakes Catalog',
      url: './cakes?cat=kids'
    };
  }

  // 4. Birthday Cakes for Her
  if (
    combined.includes('her') ||
    combined.includes('barbie') ||
    combined.includes('tiara') ||
    combined.includes('dancing doll') ||
    combined.includes('candyland') ||
    combined.includes('frozen') ||
    combined.includes('blue ripples') ||
    combined.includes('doll')
  ) {
    return {
      label: '🎂 View Cakes for Her',
      url: './cakes?cat=birthday-her'
    };
  }

  // 5. Birthday Cakes for Him
  if (
    combined.includes('him') ||
    combined.includes('fitness freak') ||
    combined.includes('cricket craze') ||
    combined.includes('lamborghini') ||
    combined.includes('astronaut') ||
    combined.includes('football') ||
    combined.includes('xbox') ||
    combined.includes('arsenal') ||
    combined.includes('avengers') ||
    combined.includes('mcqueen')
  ) {
    return {
      label: '🎂 View Cakes for Him',
      url: './cakes?cat=birthday-him'
    };
  }

  // 6. Baby Shower Cakes
  if (
    combined.includes('baby') ||
    combined.includes('stroller') ||
    combined.includes('baby shower') ||
    combined.includes('nesting love') ||
    combined.includes('sky themed')
  ) {
    return {
      label: '🎂 View Baby Shower Cakes',
      url: './cakes?cat=baby-shower'
    };
  }

  // 7. Wedding & Multi-Tier Cakes
  if (
    combined.includes('wedding') ||
    combined.includes('anniversary') ||
    combined.includes('tier') ||
    combined.includes('bridal') ||
    combined.includes('roses anniversary') ||
    combined.includes('rose garden') ||
    combined.includes('lavieenrose') ||
    combined.includes('fondant') ||
    combined.includes('expensive') ||
    combined.includes('grand')
  ) {
    return {
      label: '🎂 View Wedding Tier Cakes',
      url: './cakes?cat=wedding'
    };
  }

  // 8. General Celebration Cakes
  if (
    combined.includes('cake') ||
    combined.includes('birthday') ||
    combined.includes('celebration') ||
    combined.includes('lowest price') ||
    combined.includes('rate')
  ) {
    return {
      label: '🎂 View Celebration Cakes Catalog',
      url: './cakes'
    };
  }

  // 9. In-Store Live Menu (Juices, Chaat, Burgers, Pizzas, Puffs, Sweets)
  if (
    combined.includes('juice') ||
    combined.includes('elaneer') ||
    combined.includes('shake') ||
    combined.includes('chaat') ||
    combined.includes('chat') ||
    combined.includes('pani puri') ||
    combined.includes('puri') ||
    combined.includes('pav bhaji') ||
    combined.includes('burger') ||
    combined.includes('pizza') ||
    combined.includes('sandwich') ||
    combined.includes('toast') ||
    combined.includes('coffee') ||
    combined.includes('tea') ||
    combined.includes('falooda') ||
    combined.includes('brownie') ||
    combined.includes('momo') ||
    combined.includes('puff') ||
    combined.includes('biscuit') ||
    combined.includes('sweet') ||
    combined.includes('mysore pak') ||
    combined.includes('kaju') ||
    combined.includes('2km') ||
    combined.includes('delivery') ||
    combined.includes('in-store') ||
    combined.includes('quick menu')
  ) {
    return {
      label: '🛵 View In-Store Live Menu',
      url: './menu.html'
    };
  }

  return null;
}
