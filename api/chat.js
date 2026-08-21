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
You are the AI Concierge for Santhi Ganesh Bakery (சாந்தி கணேஷ் பேக்கரி), 92 Cheranmahadevi Rd, Thirunagar, Tirunelveli.

CORE CATALOG & PRICES:
1. 🎂 CELEBRATION CAKES (products.html - Regular & 100% Eggless):
   - Her: Pineapple ₹480/1kg | Black Forest ₹550/1kg | The Crown Cake ₹650/1kg | Mermaid Tail ₹650/1kg | Fitness Freak ₹650/1kg | Royal Crown Princess ₹850/1.5kg | Dancing Doll ₹950/1kg | Unicorn ₹1000/1kg | Barbie Pink ₹1300/1.5kg | Tiara ₹1800/2kg | Candyland ₹2000/2kg | 0015 Pink Roses ₹2200/2kg | Frozen Enchantment ₹2600/3kg
   - Him (₹750/1kg): Lamborghini | Astronaut | Manchester United | Gamers X-Box
   - Kids (₹650-750/1kg): Spiderman Web | Lion King | Cricket | Unicorn
   - Tiers & Baby Shower: Baby Stroller ₹720/1kg | Wedding Bells Macaron ₹1450/1kg
2. 🛵 IN-STORE QUICK MENU (menu.html - 30-min 2KM delivery, free above ₹300):
   - Juices: Elaneer Payasam ₹80 | Orange/Pom/Apple/Sathukudi ₹80 | Watermelon ₹50 | Pineapple/Kirni ₹60
   - Shakes: Cold Coffee/Oreo/Kitkat ₹90 | Red Banana/Strawberry/Choco ₹80
   - Chaat: Pani Puri (6pcs) ₹40 | Dahi Puri ₹60 | Sev/Bhel Puri ₹50 | Masala Puri ₹60
   - Pav Bhaji: Butter Pav Bhaji ₹60 | Paneer/Cheese Pav Bhaji ₹90
   - Burgers & Pizza: Veg Burger ₹80 | Chicken Burger ₹120 | Veg Pizza ₹110 | Margherita ₹140 | Chicken Pizza ₹140
   - Desserts & Hot: Royal Falooda ₹140 | Sizzling Brownie ₹140 | Choco Lava ₹50 | Filter Coffee ₹25 | Ginger Tea ₹20 | Veg Puff ₹25 | Egg Puff ₹30

STRICT RULES:
1. MAX LENGTH: Exactly 1 to 2 short sentences. Never exceed 2 sentences.
2. ZERO HALLUCINATION: Only state real items and exact prices listed above.
3. If broad query, ask: "Are you looking for our 🎂 Celebration Cakes or our 🛵 In-Store Quick Menu?"
4. Reply in customer's language (English, Tamil, or Tanglish).
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

  const webLink = getRelevantWebLink(message);

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
          maxOutputTokens: 150, // Strict 2-sentence token cap
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

  // Delivery queries
  if (lower.includes('delivery') || lower.includes('2km') || lower.includes('distance') || lower.includes('area')) {
    return {
      reply: "⚡ We offer 30-min express delivery within 2KM in Tirunelveli (FREE delivery above ₹300, ₹30 fee below ₹300). For custom celebration cakes, we deliver citywide!",
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
      reply: "🎂 Barbie Pink Cake is priced at ₹1,300 (1.5 kg / 2 kg). Crafted fresh in both Regular & 100% Pure Veg (Eggless). 24h pre-order recommended!",
      actions: [{ label: '🟢 Order Barbie Cake', query: 'Book Barbie Pink Cake for birthday' }]
    };
  }

  if (lower.includes('crown')) {
    return {
      reply: "👑 The Crown Cake is priced at ₹650 (1 kg) / ₹943 (1.5 kg) / ₹1,203 (2 kg). Available in 100% Pure Veg (Eggless)!",
      actions: [{ label: '🟢 Order Crown Cake', query: 'Book The Crown Cake' }]
    };
  }

  if (lower.includes('lamborghini') || lower.includes('astronaut') || lower.includes('football') || lower.includes('xbox')) {
    return {
      reply: "🎂 Birthday Cakes for Him (₹750 for 1 kg):\n• The Lamborghini Cake: ₹750\n• Rocketing Astronaut Cake: ₹750\n• Manchester United / Football Jersey: ₹750\n• Gamers X-Box Cake: ₹750",
      actions: [{ label: '🟢 Order Cake for Him', query: 'Book Birthday Cake for Him' }]
    };
  }

  if (lower.includes('spiderman') || lower.includes('kids')) {
    return {
      reply: "🧒 Kids Theme Cakes (from ₹650–₹750 for 1 kg):\n• Spiderman Web Cake, Lion King, Cricket Fanatic, Unicorn Dream, Chhota Bheem. Pure Veg/Eggless available!",
      actions: [{ label: '🟢 Order Kids Theme Cake', query: 'Book Kids Theme Cake' }]
    };
  }

  if (lower.includes('black forest') || lower.includes('blackforest')) {
    return {
      reply: "🎂 Signature Black Forest Cake is ₹550 (1 kg). Pure fresh cream and imported cherries. Available in Eggless too!",
      actions: [{ label: '🟢 Order 1kg Black Forest (₹550)', query: 'Order 1kg Black Forest Cake' }]
    };
  }

  if (lower.includes('red velvet') || lower.includes('redvelvet')) {
    return {
      reply: "❤️ Royal Red Velvet with Cream Cheese: ₹550 (0.5 kg) / ₹950 (1 kg) / ₹1,550 (2 kg). Pure Veg / Eggless available!",
      actions: [{ label: '🟢 Order 1kg Red Velvet (₹950)', query: 'Order 1kg Red Velvet Cake' }]
    };
  }

  if (lower.includes('wedding') || lower.includes('anniversary') || lower.includes('tier')) {
    return {
      reply: "💍 Wedding & Anniversary Tiers (₹1,450 for 1 kg):\n• Wedding Bells Macaron Cake, Roses Anniversary Cake, Rose Garden 2-Tier / 3-Tier.",
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

  // Celebration Cakes
  if (
    combined.includes('cake') ||
    combined.includes('birthday') ||
    combined.includes('barbie') ||
    combined.includes('crown') ||
    combined.includes('spiderman') ||
    combined.includes('celebration') ||
    combined.includes('wedding') ||
    combined.includes('anniversary') ||
    combined.includes('lamborghini') ||
    combined.includes('astronaut') ||
    combined.includes('black forest') ||
    combined.includes('red velvet')
  ) {
    return {
      label: '🎂 View Celebration Cakes Catalog',
      url: './products.html'
    };
  }

  // In-Store Live Menu
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
    combined.includes('2km') ||
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
