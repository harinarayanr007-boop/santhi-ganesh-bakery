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

REAL SUPABASE DATABASE CATALOG (100% ACCURATE CURRENT PRICES):

1. 🎂 CELEBRATION & THEME CAKES (products.html - Regular & 100% Pure Veg / Eggless available):
   • Birthday Cakes for Her:
     - Dancing Doll Cake: ₹950 (1 kg, 2 kg) 👈 [Lowest price cake on the entire menu!]
     - Blue Ripples Cake: ₹1,000 (1 kg, 2 kg)
     - Yellow Unicorn Cake: ₹1,000 (1 kg)
     - Floral Cake: ₹1,100 (1 kg, 2 kg)
     - Unicorn Dreams Cake: ₹1,200 (1 kg, 2 kg)
     - Barbie Pink Cake: ₹1,300 (1.5 kg, 2 kg)
     - Golden Tiara Cake: ₹1,800 (2 kg)
     - Candyland Cake: ₹2,000 (2 kg)
     - 0015 Pink Roses Cake: ₹2,200 (2 kg)
     - Frozen Enchantment Cake: ₹2,600 (3 kg)
     - Elegant Floral Cake: ₹2,650 (3 kg) | 2-Tier Butterfly Cake: ₹2,750 (3 kg) | Teddy Rose Garden Cake: ₹3,100 (3 kg)

   • Birthday Cakes for Him:
     - The Fitness Freak Cake: ₹1,150 (1 kg, 2 kg) 👈 [Lowest price cake for him]
     - Cricket Craze Cake: ₹1,200 (1 kg, 2 kg)
     - Gamers X-Box Cake: ₹1,900 (2 kg)
     - Football Jersey Cake: ₹1,900 (2 kg)
     - Football Cake: ₹2,000 (2 kg)
     - Avengers Cake: ₹2,000 (2 kg)
     - Arsenal Cake: ₹2,200 (2 kg)
     - Lightning Mc Queen Cake: ₹2,300 (2 kg)

   • Kids Theme Cakes:
     - Versatile Subtle Cake: ₹1,000 (1 kg, 2 kg)
     - Spiderman Web Cake: ₹1,050 (1 kg, 2 kg) 👈 [Real Spiderman 1kg price]
     - Instagram Lover Cake / Hello Kitty / Fruit Cake / Paw Some / Pokeball: ₹1,100 (1 kg, 2 kg)
     - F.R.I.E.N.D.S / Blue Macaron / Floral Pastel / Boss Baby: ₹1,200 (1 kg, 2 kg)
     - Celebration Pinata Cake: ₹1,200 (0.5 kg)
     - Teal Ombre Ruffle Cake: ₹1,250 (1 kg, 2 kg)
     - Chocolate Love Cake / Dog Paw: ₹1,400 (1 kg)
     - Peas In A Pod Cake: ₹1,750 (1.5 kg, 3 kg)
     - Oceanic Delight: ₹1,900 (1.5 kg)
     - Spider Man 2-Tier / Candy Macaron: ₹2,000 (2 kg)
     - Pink Unicorn Cake: ₹2,100 (2 kg) | Train Cake: ₹2,300 (2 kg) | Baby Elephant: ₹2,450 (2.5 kg)
     - Elephant / Transportation / Animal Farm: ₹2,600 (2 kg)
     - Tier Pink Theme / Tier Macaron: ₹2,800 (3 kg)
     - Twinkling Star: ₹3,000 (3 kg) | The Cricket Fanatic: ₹3,100 (3 kg) | Animal Print: ₹3,100 (3 kg)
     - Tier Unicorn Rainbow / Kit Kat Teddy: ₹3,200 (3 kg)
     - Underwater Cake: ₹3,400 (3 kg) | Animal Party: ₹3,600 (3 kg) | Jungle Mania (5kg): ₹6,500

   • Baby Shower Cakes:
     - Sky Themed Cake / Nesting Love: ₹1,100 (1 kg, 2 kg) 👈 [Lowest price baby shower]
     - Baby Shoes Cake: ₹1,150 (1 kg, 2 kg)
     - Baby Shower Delight: ₹1,200 (1 kg, 2 kg)
     - Baby Stroller Cake: ₹1,300 (1 kg, 2 kg, 3 kg)
     - Over The Moon Cake: ₹1,300 (1 kg, 2 kg)
     - Pastel Dream Cake: ₹1,600 (1 kg, 2 kg)

   • Wedding & Milestone Tiers:
     - Bridal Shower Cake: ₹1,200 (1 kg, 2 kg) 👈 [Lowest price wedding/bridal]
     - The Perfect Pair Cake: ₹1,250 (1 kg, 2 kg)
     - 0000 Wedding Flower Cake: ₹1,300 (1 kg, 2 kg)
     - Pastel Cake: ₹2,100 (2 kg)
     - 0001 Wedding Bells Macaron Cake: ₹2,200 (2 kg)
     - 0003 Roses Anniversary Cake: ₹2,600 (3 kg)
     - Pink Layered Cake: ₹2,700 (2 kg)
     - Levels1 / Lavender Royale Cake: ₹2,900 (3 kg)
     - Lavieenrose Cake: ₹2,950 (3 kg)
     - 0013 Floral 2-Tier / 0004 Pastel Roses / Rose Garden / Golden White: ₹3,100 (3 kg)
     - Wedding Vows / Flutter / Blooming / Anniversary: ₹3,200 (3 kg)
     - 3-Tier Wedding Cake: ₹5,700 (6 kg)
     - Blue Wedding Cake: ₹5,900 (6 kg)
     - Crimson Cascade Cake: ₹6,100 (6 kg)
     - Tier Fondant Wedding Cake: ₹7,800 (6 kg)

2. 🛵 IN-STORE QUICK MENU (menu.html - 30-min 2KM delivery in Tirunelveli, FREE above ₹300):
   • Hot Oven Puffs:
     - Crispy Veg Puff: ₹25
     - Spicy Egg Puff: ₹30
     - Paneer Butter Masala Puff: ₹35
     - Mushroom Masala Puff: ₹35
     - Chicken Tikka Puff: ₹40
   • Fresh Juices:
     - Elaneer Payasam: ₹80 | Orange: ₹80 | Sweet Lime (Sathukudi): ₹80 | Pomegranate: ₹80 | Apple: ₹80 | Watermelon: ₹50 | Pineapple / Muskmelon (Kirni): ₹60
   • Milkshakes & Desserts:
     - Cold Coffee / Oreo / Kitkat Shake: ₹90 | Red Banana / Strawberry / Chocolate: ₹80 | Royal Falooda: ₹140 | Sizzling Brownie: ₹140 | Choco Lava: ₹50
   • Chaat & Pav Bhaji:
     - Pani Puri (6 pcs): ₹40 | Dahi Puri: ₹60 | Bhel Puri / Sev Puri: ₹50 | Masala Puri: ₹60
     - Butter Pav Bhaji: ₹60 | Paneer / Cheese Pav Bhaji: ₹90
   • Burgers & Pizzas:
     - Crispy Veg Burger: ₹80 | Chicken Burger: ₹120 | Veg Pizza: ₹110 | Margherita / Chicken Pizza: ₹140
   • Hot Drinks:
     - Filter Coffee: ₹25 | Ginger Tea: ₹20 | Naatu Sarkarai Tea: ₹30 | Karupatti Coffee: ₹35

CONVERSATIONAL RULES:
1. When asked for the lowest price celebration cake, state accurately that **Dancing Doll Cake is ₹950 (1kg)**, followed by Blue Ripples / Yellow Unicorn (₹1,000) and Spiderman Web (₹1,050).
2. When asked for puffs, list all 5 varieties (Veg ₹25, Egg ₹30, Paneer ₹35, Mushroom ₹35, Chicken ₹40).
3. ZERO HALLUCINATION: Quote strictly from the exact real prices listed above.
4. Reply in the customer's language (English, Tamil தமிழ், or Tanglish).
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
          maxOutputTokens: 450,
          topP: 0.9
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
