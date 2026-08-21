// api/chat.js - Ultra-Lean Zero-Hallucination AI Concierge with Web Links
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

// Ultra-compressed prompt (~250 tokens) to minimize token consumption
const BAKERY_SYSTEM_PROMPT = `
You are the helpful AI Concierge for Santhi Ganesh Bakery (சாந்தி கணேஷ் பேக்கரி) at 92 Cheranmahadevi Rd, Thirunagar, Tirunelveli.

STRICT BEHAVIOR & LENGTH CONSTRAINTS:
1. LOCATION & DELIVERY QUERIES: Whenever ANY location or area is asked (e.g., "do you deliver to Maharaja Nagar / Palayamkottai / Junction / any area?"):
   - NEVER say "Yes" or "No".
   - State strictly: "We deliver within a 2 km radius around Santhi Ganesh Bakery (92 Cheranmahadevi Rd, Thirunagar). For deliveries beyond 2 km or custom cake orders, please check with us directly on WhatsApp (+91 73390 73844)."
2. NO "YES" OR "NO" FOR UNLISTED ITEMS: If an item or query is not explicitly listed in the catalog below, DO NOT say "Yes" or "No". State what is available or direct to WhatsApp (+91 73390 73844).
3. STRICT LENGTH: Maximum 3 to 4 short sentences. Keep it clean, direct, and helpful.
4. Reply in the customer's language (Tamil தமிழ், English, or Tanglish).

STORE LOCATION & ACTIVE CATALOG (100% ACCURATE REAL PRICES):
• Store Address: 92 Cheranmahadevi Rd, Thirunagar, Tirunelveli.
• Jobs Hiring (careers.html): Cleaner (₹350/day) | Delivery Partner / Server (₹350–₹450/day) | Social Media Manager (₹5K–₹7K/mo).

1. 🎂 CELEBRATION CAKES (products.html - Regular & 100% Pure Veg / Eggless):
   - Her: Dancing Doll Cake ₹950 (1kg) [Lowest price cake!] | Blue Ripples / Yellow Unicorn ₹1,000 (1kg) | Floral Cake ₹1,100 (1kg) | Unicorn Dreams ₹1,200 (1kg) | Barbie Pink ₹1,300 (1.5kg) | Tiara Cake ₹1,800 (2kg) | Candyland ₹2,000 (2kg) | 0015 Pink Roses ₹2,200 (2kg) | Frozen Enchantment ₹2,600 (3kg)
   - Him: The Fitness Freak ₹1,150 (1kg) [Lowest price him] | Cricket Craze ₹1,200 (1kg) | Gamers X-Box / Football Jersey ₹1,900 (2kg) | Avengers / Football ₹2,000 (2kg) | Arsenal ₹2,200 (2kg) | Lightning McQueen ₹2,300 (2kg)
   - Kids: Versatile Subtle ₹1,000 (1kg) | Spiderman Web ₹1,050 (1kg) | Hello Kitty / Fruit / Pokeball ₹1,100 (1kg) | F.R.I.E.N.D.S / Boss Baby ₹1,200 (1kg) | Spider Man 2-Tier ₹2,000 (2kg) | Jungle Mania ₹6,500 (5kg)
   - Baby Shower: Sky Themed / Nesting Love ₹1,100 (1kg) | Baby Shoes ₹1,150 (1kg) | Baby Stroller / Over The Moon ₹1,300 (1kg)
   - Wedding Tiers: Bridal Shower ₹1,200 (1kg) | The Perfect Pair ₹1,250 (1kg) | Wedding Bells Macaron ₹2,200 (2kg) | Roses Anniversary ₹2,600 (3kg) | 3-Tier Wedding ₹5,700 (6kg) | Tier Fondant ₹7,800 (6kg)

2. 🛵 IN-STORE QUICK MENU (menu.html - 30-min 2KM delivery, FREE above ₹300):
   - Puffs: Veg ₹25 | Egg ₹30 | Paneer ₹35 | Mushroom ₹35 | Chicken Tikka ₹40
   - Juices & Shakes: Elaneer Payasam ₹80 | Orange / Pom / Apple ₹80 | Watermelon ₹50 | Cold Coffee / Oreo / Kitkat Shake ₹90 | Royal Falooda ₹140
   - Chaat & Snacks: Pani Puri ₹40 | Dahi Puri ₹60 | Sev / Bhel Puri ₹50 | Butter Pav Bhaji ₹60 | Veg Burger ₹80 | Chicken Burger ₹120 | Pizzas ₹110–₹140 | Filter Coffee ₹25
`;

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

      const payload = {
        systemInstruction: {
          parts: [{ text: BAKERY_SYSTEM_PROMPT }]
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

  // 2. High-speed Offline Rule Engine
  const ruleResponse = processRuleEngine(message);
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

function processRuleEngine(msg) {
  const lower = msg.toLowerCase().trim();

  // Delivery / Location queries
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

  // Specific Celebration Cakes
  if (lower.includes('barbie')) {
    return {
      reply: "🎂 Barbie Pink Cake is priced at ₹1,300 (1.5 kg, 2 kg). Crafted fresh in both Regular & 100% Pure Veg (Eggless).",
      actions: [{ label: '🟢 Order Barbie Cake', query: 'Book Barbie Pink Cake for birthday' }]
    };
  }

  if (lower.includes('lowest') || lower.includes('cheap') || lower.includes('budget') || lower.includes('kammi')) {
    return {
      reply: "🎂 Our lowest price celebration cake in the catalog is the **Dancing Doll Cake at ₹950 (1 kg)**, followed by Blue Ripples Cake / Yellow Unicorn (₹1,000) and Spiderman Web Cake (₹1,050)!",
      actions: [
        { label: '🎂 Order Dancing Doll (₹950)', query: 'Book Dancing Doll Cake' },
        { label: '🎂 Order Spiderman (₹1050)', query: 'Book Spiderman Web Cake' }
      ]
    };
  }

  if (lower.includes('fitness freak') || lower.includes('cricket') || lower.includes('xbox') || lower.includes('him')) {
    return {
      reply: "🎂 Birthday Cakes for Him:\n• The Fitness Freak Cake: ₹1,150 (1 kg)\n• Cricket Craze Cake: ₹1,200 (1 kg)\n• Gamers X-Box Cake: ₹1,900 (2 kg)\n• Football Jersey Cake: ₹1,900 (2 kg)",
      actions: [{ label: '🟢 Order Cake for Him', query: 'Book Birthday Cake for Him' }]
    };
  }

  if (lower.includes('spiderman') || lower.includes('kids')) {
    return {
      reply: "🧒 Kids Theme Cakes:\n• Spiderman Web Cake: ₹1,050 (1 kg)\n• Hello Kitty / Fruit / Pokeball Cake: ₹1,100 (1 kg)\n• F.R.I.E.N.D.S / Boss Baby: ₹1,200 (1 kg)\n• Spider Man 2-Tier: ₹2,000 (2 kg)",
      actions: [{ label: '🟢 Order Kids Theme Cake', query: 'Book Kids Theme Cake' }]
    };
  }

  if (lower.includes('wedding') || lower.includes('anniversary') || lower.includes('tier') || lower.includes('bridal')) {
    return {
      reply: "💍 Wedding & Milestone Tiers:\n• Bridal Shower Cake: ₹1,200 (1 kg)\n• The Perfect Pair Cake: ₹1,250 (1 kg)\n• 0001 Wedding Bells Macaron Cake: ₹2,200 (2 kg)\n• 0003 Roses Anniversary Cake: ₹2,600 (3 kg)",
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

  // 1. Jobs & Careers
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

  // 3. Kids Theme Cakes
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
      url: './products.html?cat=kids'
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
      url: './products.html?cat=birthday-her'
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
      url: './products.html?cat=birthday-him'
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
      url: './products.html?cat=baby-shower'
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
      url: './products.html?cat=wedding'
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
      url: './products.html'
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
