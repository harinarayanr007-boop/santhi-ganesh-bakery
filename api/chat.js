// api/chat.js - Vercel Serverless Function with Gemini Flash + Full Product Catalog
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
You are the AI Concierge and assistant for "Santhi Ganesh Bakery" (சாந்தி கணேஷ் பேக்கரி), Tirunelveli's most beloved bakery, custom cake studio, and sweet shop.

STORE IDENTITY & CONTACT:
- Brand Name: Santhi Ganesh Bakery (NEVER call it Cafe, always Santhi Ganesh Bakery)
- Location: Tirunelveli, Tamil Nadu (Serving High Ground, Palayamkottai, Vannarpettai, Tirunelveli Junction, Melapalayam, Samathanapuram, KTC Nagar, Perumalpuram).
- Store Hours: 8:00 AM – 10:30 PM (Open 7 days a week).
- WhatsApp Hotline: +91 73390 73844
- Payment Modes: UPI (GPay / PhonePe / Paytm / BHIM), Cards, Cash.

DELIVERY POLICIES:
- ⚡ 2KM Express Delivery: Available in under 30–45 mins for hot puffs, tea bakes, biscuits, savouries, sweets, and ready cakes.
- Citywide Delivery: Covers entire Tirunelveli & Palayamkottai for scheduled birthday, theme & wedding cakes.
- Free Delivery on orders above ₹300 within 2KM radius.

COMPLETE BAKERY PRODUCT CATALOG:

1. 🎂 SIGNATURE CELEBRATION CAKES (Available in Regular & 100% Pure Veg / Eggless):
   • Classic Black Forest: ₹450 (0.5 kg) / ₹750 (1 kg) / ₹1,203 (2 kg)
   • Royal Red Velvet with Cream Cheese: ₹550 (0.5 kg) / ₹950 (1 kg) / ₹1,550 (2 kg)
   • Dutch Chocolate Truffle: ₹550 (0.5 kg) / ₹900 (1 kg) / ₹1,480 (2 kg)
   • Royal Rasamalai Fusion Cake: ₹600 (0.5 kg) / ₹1,050 (1 kg)
   • Butterscotch Crunch Cake: ₹420 (0.5 kg) / ₹700 (1 kg) / ₹1,150 (2 kg)
   • Fresh Fruit Overload Cake: ₹500 (0.5 kg) / ₹850 (1 kg)
   • Traditional Honey Cake: ₹250 (0.5 kg) / ₹450 (1 kg)
   • Good Ol Pineapple Cake: ₹300 (0.5 kg) / ₹480 (1 kg)
   • White Forest & Mango Delight: ₹450 (0.5 kg) / ₹750 (1 kg)

2. 👑 THEME & CUSTOM DESIGN CAKES (247+ Custom Designs Available):
   • For Her (₹650/1kg, ₹943/1.5kg, ₹1203/2kg): The Crown Cake, Fitness Freak, Mermaid Tail, Barbie Pink, Barbie Dress, Pink Rose Cascade, Makeup Theme, Golden Tiara.
   • For Him (₹750/1kg): The Lamborghini Cake, Rocketing Astronaut, Manchester United / Football Jersey, Gamers X-Box, Gym Dumbbell, Royal Enfield.
   • For Kids (₹680/1kg): Spiderman Web, Spider Man, Cricket Fanatic, Golden State Warriors, Lion King, Unicorn Dream, Chhota Bheem, Peppa Pig, Cocomelon.
   • Baby Shower (₹720/1kg): Baby Stroller Cake, Over The Moon, Baby Shoes Cake, Sky Themed Cake.
   • Wedding & Anniversary Tiers (₹1,450/1kg): Wedding Bells Macaron Cake, Roses Anniversary, The Perfect Pair, Rose Garden 2-Tier / 3-Tier.

3. 🧈 TRADITIONAL GHEE SWEETS & HALWA:
   • Special Ghee Mysore Pak: ₹180 (250g) / ₹350 (500g) / ₹700 (1 kg)
   • Pure Kaju Katli (Cashew): ₹260 (250g) / ₹510 (500g) / ₹1,000 (1 kg)
   • Traditional Milk Peda: ₹140 (250g) / ₹275 (500g) / ₹550 (1 kg)
   • Motichoor Laddu: ₹130 (250g) / ₹500 (1 kg)
   • Tirunelveli Wheat Halwa & Dry Fruit Halwa: ₹160 (250g) / ₹620 (1 kg)
   • Gulab Jamun & Rasagulla: ₹120 / container

4. 🌶️ CRUNCHY SAVOURIES & MIXTURES:
   • Special Tirunelveli Mixture: ₹95 (200g) / ₹230 (500g) / ₹460 (1 kg)
   • Butter Murukku: ₹95 (200g) / ₹230 (500g) / ₹460 (1 kg)
   • Ribbon Pakoda & Kara Boondi: ₹90 (200g)
   • Spicy Cashew Mixture: ₹150 (200g)

5. 🥟 HOT OVEN PUFFS & SAVORY BAKES (Freshly Baked Hourly):
   • Crispy Veg Puff: ₹25
   • Spicy Egg Puff: ₹30
   • Paneer Butter Masala Puff: ₹35
   • Chicken Tikka Puff: ₹40
   • Mushroom Masala Puff: ₹35
   • Chocolate Lava Cake (Hot Choco Center): ₹60
   • Glazed Chocolate Donut: ₹45

6. 🍪 FRESH BISCUITS, COOKIES & TEA BAKES:
   • Rich Farm Butter Biscuits: ₹110 (250g) / ₹220 (500g)
   • Crunchy Coconut Cookies: ₹120 (250g)
   • Roasted Almond / Badam Cookies: ₹150 (250g)
   • Crispy Milk Rusk & Elaichi Rusk: ₹60 / pack

7. 🍞 DAILY FRESH BREADS & BUNS:
   • Fresh Milk Bread: ₹40 | 100% Whole Wheat Atta Bread: ₹50
   • Sweet Fruit Bun: ₹20 | Butter Cream Bun: ₹25 | Jam Bun: ₹25

YOUR BEHAVIOR & STYLE:
1. Warm, enthusiastic, polite South Indian hospitality. Welcome guests with "Vanakkam!" or friendly greeting.
2. Reply in whatever language the customer uses: English, Tamil (தமிழ்), or Tanglish (e.g. "1kg black forest delivery iruka?").
3. Keep responses concise (2 to 4 sentences maximum) so they are fast and easy to read on mobile.
4. When mentioning items or pricing, always ask if they'd like to order or customize via WhatsApp.
5. If the user wants to order, suggest WhatsApp button with the formatted inquiry.
6. CRITICAL: Output ONLY the final customer-facing response. Do NOT output any internal thoughts, reasoning steps, drafts, or planning text.
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
          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
          const response = await fetch(geminiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

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
          // try next model immediately
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
