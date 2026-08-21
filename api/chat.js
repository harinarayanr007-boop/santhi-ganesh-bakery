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

BEHAVIOR & CONVERSATIONAL RULES:
1. Warm, polite, genuine South Indian hospitality. Welcome guests with "Vanakkam!".
2. Never make up fake categories or fake prices. Quote ONLY the real prices listed above.
3. If the user's intent is broad, ask: "Are you looking for our 🎂 Celebration & Birthday Cakes or our 🛵 In-Store Quick Menu (Juices, Chaat, Burgers, Pizzas, Shakes)?"
4. Reply in whatever language the customer uses (English, Tamil தமிழ், or everyday Tanglish).
5. Keep responses concise (2 to 4 sentences maximum) so they read fast and clean on mobile.
6. Provide the pre-formatted WhatsApp order button when helpful.
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
          temperature: 0.7,
          maxOutputTokens: 1000,
          topP: 0.95
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

  // Delivery / Location queries
  if (lower.includes('delivery') || lower.includes('2km') || lower.includes('area') || lower.includes('location') || lower.includes('distance') || lower.includes('deliv')) {
    return {
      reply: "⚡ We offer 30-min Express Delivery within 2KM (High Ground, Palayamkottai, Samathanapuram). We also deliver celebration cakes across all of Tirunelveli! Free delivery for orders above ₹300.",
      actions: [
        { label: '⚡ Order 2KM Delivery', query: 'I want to place an urgent 2KM delivery order' },
        { label: '🎂 Custom Cake Delivery', query: 'I need a birthday cake delivered' }
      ]
    };
  }

  // Black Forest
  if (lower.includes('black forest') || lower.includes('blackforest')) {
    return {
      reply: "🎂 Our Classic Black Forest Cake is layered with fresh whipped cream and imported cherries. Available in Regular and 100% Eggless: ₹450 (0.5kg) / ₹750 (1kg).",
      actions: [
        { label: '🟢 Order 1kg Black Forest (₹750)', query: 'Order 1kg Eggless Black Forest Cake' },
        { label: '🟢 Order 0.5kg (₹450)', query: 'Order 0.5kg Black Forest Cake' }
      ]
    };
  }

  // Red Velvet
  if (lower.includes('red velvet') || lower.includes('redvelvet')) {
    return {
      reply: "❤️ Our Signature Red Velvet Cake features rich crimson sponge with real cream cheese frosting. ₹550 (0.5kg) / ₹950 (1kg). Available in Eggless too!",
      actions: [
        { label: '🟢 Order 1kg Red Velvet (₹950)', query: 'Order 1kg Red Velvet Cake' }
      ]
    };
  }

  // Rasamalai
  if (lower.includes('rasamalai') || lower.includes('ras malai')) {
    return {
      reply: "👑 Our Royal Rasamalai Fusion Cake is soaked in aromatic saffron-cardamom milk and crowned with juicy rasamalai patties! ₹600 (0.5kg) / ₹1,050 (1kg).",
      actions: [
        { label: '🟢 Order Rasamalai Cake', query: 'Order 1kg Royal Rasamalai Cake' }
      ]
    };
  }

  // Butterscotch / Chocolate / Truffle
  if (lower.includes('butterscotch') || lower.includes('truffle') || lower.includes('chocolate') || lower.includes('choco')) {
    return {
      reply: "🍫 We have Dutch Chocolate Truffle (₹550/0.5kg, ₹900/1kg) and Butterscotch Crunch (₹420/0.5kg, ₹700/1kg). Both baked fresh daily!",
      actions: [
        { label: '🟢 Order Chocolate Truffle', query: 'Order 1kg Chocolate Truffle Cake' },
        { label: '🟢 Order Butterscotch', query: 'Order 1kg Butterscotch Crunch' }
      ]
    };
  }

  // Sweets / Mysore Pak / Snacks / Puffs
  if (lower.includes('sweet') || lower.includes('mysore pak') || lower.includes('ghee') || lower.includes('snack') || lower.includes('puff') || lower.includes('peda')) {
    return {
      reply: "🧈 We have melt-in-mouth Special Ghee Mysore Pak (₹180/250g), Kaju Katli (₹260/250g), Milk Peda, hot Veg/Paneer/Chicken Puffs, and crunchy Murukku!",
      actions: [
        { label: '🟢 Order Ghee Mysore Pak', query: 'Order 500g Special Ghee Mysore Pak' },
        { label: '🥟 Order Hot Puffs & Snacks', query: 'Order fresh hot puffs for delivery' }
      ]
    };
  }

  // Timing / Hours
  if (lower.includes('timing') || lower.includes('time') || lower.includes('open') || lower.includes('close')) {
    return {
      reply: "🕒 Santhi Ganesh Bakery is open every day from 8:00 AM to 10:30 PM. Fresh batches of puffs, cakes, and sweets are baked through the day!",
      actions: []
    };
  }

  // Price / Menu general
  if (lower.includes('price') || lower.includes('menu') || lower.includes('rate') || lower.includes('cost') || lower.includes('list')) {
    return {
      reply: "📋 Fresh cakes start from ₹420 (0.5kg) / ₹700 (1kg). Snacks & puffs start at ₹25. Traditional ghee sweets start at ₹140 (250g). Eggless options available for all cakes!",
      actions: [
        { label: '🍰 See Full Cake Menu', query: 'Show me cake flavors and prices' },
        { label: '⚡ 2KM Delivery Menu', query: 'What snacks can I get in 30 mins?' }
      ]
    };
  }

  // Tamil greeting / queries
  if (lower.includes('vanakkam') || lower.includes('enna') || lower.includes('iruka') || lower.includes('cake') || lower.includes('sweet')) {
    return {
      reply: "வணக்கம்! சாந்தி கணேஷ் பேக்கரியில் பிறந்தநாள் கேக்குகள், நெய் மைசூர் பாக், பஃப்ஸ் மற்றும் ஸ்வீட்ஸ் புதிதாக தயாராக உள்ளன. வாட்ஸ்அப் மூலம் உடனடியாக ஆர்டர் செய்யலாம்!",
      actions: [
        { label: '🎂 கேக் ஆர்டர் செய்ய', query: '1kg Birthday Cake order panren' },
        { label: '⚡ 2KM டெலிவரி', query: 'Urgent 2KM delivery venum' }
      ]
    };
  }

  // General default greeting
  return {
    reply: "Vanakkam! Welcome to Santhi Ganesh Bakery. Looking for fresh birthday cakes, hot oven puffs, traditional ghee sweets, or our 30-min 2KM express delivery?",
    actions: [
      { label: '⚡ 2KM Fast Delivery', query: 'What items are available for 2KM Fast Delivery?' },
      { label: '🎂 Custom Cake Inquiry', query: 'Tell me about birthday and wedding cakes' },
      { label: '📍 Delivery Locations', query: 'Where do you deliver in Tirunelveli?' },
      { label: '💳 Pay via UPI', query: 'How can I pay via UPI?' }
    ]
  };
}

function generateWhatsAppLink(userMsg, botReply) {
  const text = `Hi Santhi Ganesh Bakery! 👋\nI am inquiring from your website:\n"${userMsg.trim()}"\n\nPlease assist me with my order.`;
  return `https://wa.me/${BAKERY_PHONE}?text=${encodeURIComponent(text)}`;
}
