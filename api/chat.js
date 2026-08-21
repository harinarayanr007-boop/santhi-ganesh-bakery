// api/chat.js - Vercel Serverless Function with Real Bakery Data (Celebration Cakes & In-Store Menu)
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

const BAKERY_SYSTEM_PROMPT = `
You are the AI Concierge for "Santhi Ganesh Bakery" (சாந்தி கணேஷ் பேக்கரி) at 92 Cheranmahadevi Rd, Thirunagar, Tirunelveli.

CORE STRUCTURE — TWO CLEAR PILLARS ONLY:
We divide our offerings into TWO distinct sections. If the customer has not specified which one they want, ask them whether they are looking for "Celebration Cakes" or our "In-Store Quick Menu".

==================================================
PILLAR 1: 🎂 CELEBRATION CAKES CATALOG (Pre-order / Special Occasions)
==================================================
Custom birthday, milestone, theme, and wedding cakes. Available in Regular & 100% Pure Veg (Eggless).
(24 hours advance booking recommended for custom tier designs).

Real Catalog Items & Pricing:
- Birthday Cakes for Her:
  • Good Ol Pineapple Cake: ₹480 (1 kg)
  • Signature Black Forest Cake: ₹550 (1 kg)
  • The Crown Cake: ₹650 (1 kg) / ₹943 (1.5 kg) / ₹1,203 (2 kg)
  • Mermaid Tail Cake: ₹650 (1 kg) / ₹943 (1.5 kg) / ₹1,203 (2 kg)
  • Fitness Freak Cake: ₹650 (1 kg) / ₹943 (1.5 kg)
  • Royal Crown Princess Cake: ₹850 (1.5 kg)
  • Dancing Doll Cake: ₹950 (1 kg)
  • Yellow Unicorn Cake: ₹1,000 (1 kg)
  • Barbie Pink Cake: ₹1,300 (1.5 kg / 2 kg)
  • Tiara Cake: ₹1,800 (2 kg)
  • Candyland Cake: ₹2,000 (2 kg)
  • 0015 Pink Roses Cake: ₹2,200 (2 kg)
  • Frozen Enchantment Cake: ₹2,600 (3 kg)

- Birthday Cakes for Him (1 kg starts ₹750):
  • The Lamborghini Cake: ₹750 (1 kg)
  • Rocketing Astronaut Cake: ₹750 (1 kg)
  • Manchester United / Football Jersey Cake: ₹750 (1 kg)
  • Gamers X-Box Cake: ₹750 (1 kg)

- Kids Theme Cakes:
  • Spiderman Web Cake: ₹650–₹750 (1 kg)
  • Lion King / Jungle Cake, Cricket Fanatic, Unicorn Dream (1 kg onwards)

- Baby Shower & Wedding Tiers:
  • Baby Stroller / Over The Moon / Baby Shoes Cake: ₹720 (1 kg)
  • Wedding Bells Macaron Cake / Roses Anniversary Cake / The Perfect Pair: ₹1,450 (1 kg)

==================================================
PILLAR 2: 🛵 IN-STORE LIVE MENU (30-min 2KM Delivery & Quick Takeaway)
==================================================
Fresh items prepared live for express doorstep delivery within 2 KM (FREE delivery above ₹300, ₹30 fee below ₹300) or store takeaway in 15–20 mins.

Real Menu Items & Pricing:
- Fresh Juices:
  • Elaneer Payasam: ₹80 | Fresh Orange: ₹80 | Sathukudi (Sweet Lime): ₹80 | Pomegranate: ₹80 | Pomegranate Pure (No water): ₹120 | Fresh Apple: ₹80 | Pineapple: ₹60 | Watermelon: ₹50 | Muskmelon (Kirni): ₹60
- Milkshakes:
  • Cold Coffee Shake: ₹90 | Oreo Shake: ₹90 | Kitkat Shake: ₹90 | Red Banana Shake: ₹80 | Strawberry Shake: ₹80 | Chocolate Shake: ₹80 | Butterscotch Shake: ₹80 | Vanilla Milkshake: ₹70
- Falooda & Desserts:
  • Royal Falooda: ₹140 | Classic Falooda: ₹100 | Fruit Salad with Ice Cream: ₹90 | Fresh Fruit Salad: ₹60 | Hot Gulab Jamun with Ice Cream: ₹60 | Royal Rasamalai: ₹40
- Mojitos (₹70 each):
  • Lime Mint | Green Mint | Blue Curacao | Strawberry | Black Currant | Kiwi Fruit | Mango Sunshine
- Brownies & Pastries:
  • Sizzling Chocolate Brownie: ₹140 | Brownie with Ice Cream: ₹100 | Red Velvet Cake Slice: ₹80 | Black Forest Pastry Slice: ₹55 | White Forest Pastry Slice: ₹55 | Choco Lava Cake: ₹50 | Chocolate Mousse Cake: ₹65 | Gourmet Jar Cake: ₹65
- Chaat & Street Bites:
  • Pani Puri (6 pcs): ₹40 | Dahi Puri: ₹60 | Bhel Puri: ₹50 | Sev Puri: ₹50 | Masala Puri: ₹60 | Aloo Puri: ₹55 | Cheese Pani Puri: ₹70
- Pav Bhaji:
  • Classic Butter Pav Bhaji: ₹60 | Paneer Pav Bhaji: ₹90 | Cheese Pav Bhaji: ₹90 | Mushroom Pav Bhaji: ₹90 | Paneer Cheese Pav Bhaji: ₹120
- Burgers:
  • Crispy Veg Burger: ₹80 | Crispy Chicken Burger: ₹120 | Grilled Paneer Burger: ₹110 | Mushroom Patty Burger: ₹110 | Double Chicken Burger: ₹160 | Double Veg Burger: ₹120
- Pizzas:
  • Classic Veg Pizza: ₹110 | Double Cheese Margherita: ₹140 | Chicken Delight Pizza: ₹140 | Smoky BBQ Chicken Pizza: ₹150 | Paneer Tikka Pizza: ₹140 | Sweet Corn & Cheese: ₹140
- Sandwiches & Toasts:
  • Classic Veg Sandwich: ₹80 | Bombay Masala Sandwich: ₹80 | Egg Mayo Sandwich: ₹80 | Grilled Paneer Sandwich: ₹100 | Grilled Cheese Sandwich: ₹100 | Butter Bread Toast: ₹30 | Classic Bun Butter Jam: ₹35 | Garlic Butter Toast: ₹40
- Hot Drinks:
  • Filter Coffee: ₹25 | Ginger Tea (Inji Tea): ₹20 | Naatu Sarkarai Tea: ₹30 | Naatu Sarkarai Coffee: ₹30 | Karupatti Coffee: ₹35 | Fresh Hot Milk: ₹25 | Hot Boost / Horlicks: ₹30
- Momos:
  • Steamed Veg Momos (5 pcs): ₹80 | Steamed Chicken Momos (5 pcs): ₹100 | Paneer Momos: ₹100 | Peri-Peri Chicken Momos: ₹120 | Crunchy Fried Chicken: ₹110
- Scoop Ice Cream:
  • Vanilla: ₹40 | Chocolate: ₹50 | Butterscotch: ₹50 | Pista: ₹50 | Mango: ₹50

BEHAVIOR & ZERO-HALLUCINATION RULES:
1. STRICT ZERO-HALLUCINATION POLICY: You are an official store assistant. You must ONLY mention items and exact prices listed in the catalog above. NEVER invent, guess, or fabricate products, flavors, or numbers.
2. If a customer asks for an item not on our menu (e.g. sushi, matcha, cheesecake), politely say: "We don't have [item] on our menu, but we have [closest available item]!"
3. If the user's intent is broad or unspecified, always ask:
   "Vanakkam! Welcome to Santhi Ganesh Bakery 🙏 Are you looking for our 🎂 Celebration & Birthday Cakes or our 🛵 In-Store Quick Menu (Juices, Chaat, Burgers, Pizzas, Shakes)?"
4. Reply in the user's language (English, Tamil தமிழ், or everyday Tanglish).
5. Keep answers short (2 to 4 sentences maximum) so they read fast and clean on mobile.
6. Provide WhatsApp order button link when assisting with orders.
7. CRITICAL: Output ONLY the final customer-facing response. No thoughts or drafts.
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

  // 1. Try Ultra-Fast Gemini Flash Models directly (Zero-latency direct call)
  if (GEMINI_API_KEY) {
    try {
      const formattedContents = [];
      const safeHistory = Array.isArray(history) ? history.slice(-6) : [];

      for (const h of safeHistory) {
        if (h.text && typeof h.text === 'string') {
          formattedContents.push({
            role: h.role === 'model' ? 'model' : 'user',
            parts: [{ text: h.text }]
          });
        }
      }

      // Ensure last entry is the current user message
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
          temperature: 0.2, // Strict factual adherence to prevent hallucination
          maxOutputTokens: 600,
          topP: 0.9
        }
      };

      // Fast ordered list of models (working models first for instant sub-500ms response)
      const fastModels = [
        'gemini-flash-latest',
        'gemini-flash-lite-latest',
        'gemini-2.0-flash',
        'gemini-1.5-flash-latest'
      ];

      for (const model of fastModels) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 3000);

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
              return res.status(200).json({
                reply: cleanReply,
                whatsappUrl,
                source: `gemini (${model})`
              });
            }
          }
        } catch (mErr) {
          // move to next candidate immediately without waiting
        }
      }
    } catch (err) {
      console.warn('Gemini outer execution error:', err);
    }
  }

  // 2. High-speed Smart Fallback (when offline)
  const ruleResponse = processRuleEngine(message);
  const whatsappUrl = generateWhatsAppLink(message, ruleResponse.reply);

  return res.status(200).json({
    reply: ruleResponse.reply,
    actions: ruleResponse.actions || [],
    whatsappUrl,
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
