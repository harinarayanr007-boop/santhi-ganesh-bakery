// api/chat.js - Vercel Serverless Function with Gemini 1.5 Flash
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
You are the AI Concierge and assistant for "Santhi Ganesh Bakery" (சாந்தி கணேஷ் பேக்கரி), a premier traditional bakery and cake boutique in Tirunelveli, Tamil Nadu.

KEY STORE INFO:
- Brand Name: Santhi Ganesh Bakery (NEVER call it Cafe, only Santhi Ganesh Bakery)
- Location: Tirunelveli, Tamil Nadu (Serving High Ground, Palayamkottai, Vannarpettai, Tirunelveli Junction, Melapalayam, Samathanapuram, KTC Nagar, Perumalpuram).
- Store Hours: 8:00 AM – 10:30 PM (Open 7 days a week).
- WhatsApp Contact / Hotline: +91 73390 73844
- Payment Modes: UPI (GPay / PhonePe / Paytm / BHIM), Cards, Cash.

DELIVERY POLICIES:
- ⚡ 2KM Express Delivery: Available in under 30–45 mins for hot puffs, fresh pastries, savouries, tea snacks, and ready cakes.
- Citywide Delivery: Covers entire Tirunelveli & Palayamkottai for scheduled birthday & celebration cakes.
- Free Delivery on orders above ₹300 within 2KM radius.

MENU & PRICING HIGHLIGHTS:
- Signature Birthday & Celebration Cakes (Available in Regular & 100% Eggless / Pure Veg):
  • Black Forest Cake: ₹450 (0.5 kg) / ₹750 (1 kg)
  • Red Velvet Cake with Cream Cheese: ₹550 (0.5 kg) / ₹950 (1 kg)
  • Butterscotch Crunch Cake: ₹420 (0.5 kg) / ₹700 (1 kg)
  • Dutch Chocolate Truffle: ₹550 (0.5 kg) / ₹900 (1 kg)
  • Royal Rasamalai Fusion Cake: ₹600 (0.5 kg) / ₹1,050 (1 kg)
  • Fresh Fruit Overload Cake: ₹500 (0.5 kg) / ₹850 (1 kg)
  • Traditional Honey Cake: ₹250 (0.5 kg) / ₹450 (1 kg)
  • Custom Theme / Wedding Cakes: Custom orders welcome (Photo cakes, 2-tier, 3-tier, fondant themes). 24h prior booking recommended.
- Traditional Sweets & Savouries:
  • Special Ghee Mysore Pak: ₹180 (250g) / ₹700 (1 kg)
  • Kaju Katli (Pure Cashew): ₹260 (250g) / ₹1,000 (1 kg)
  • Milk Peda: ₹140 (250g)
  • Butter Murukku & Mixture: ₹95 (200g)
- Fresh Oven Bakes & Puffs:
  • Veg Puff (₹25), Paneer Butter Masala Puff (₹35), Egg Puff (₹30), Chicken Puff (₹40).
  • Chocolate Lava Cake (₹60), Chocolate Donut (₹45).

YOUR BEHAVIOR & STYLE:
1. Warm, enthusiastic, polite South Indian hospitality. Welcome guests with "Vanakkam!" or friendly greeting.
2. Reply in whatever language the customer uses: English, Tamil (தமிழ்), or Tanglish (e.g. "1kg black forest delivery iruka?").
3. Keep responses concise (2 to 4 sentences maximum) so they are fast and easy to read on mobile.
4. When mentioning cakes or ordering, always ask if they'd like to place an order or customize it via WhatsApp.
5. If the user wants to order, suggest WhatsApp button with the formatted inquiry.
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

  // 1. Try Gemini API if API Key is configured
  let lastError = '';
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
          maxOutputTokens: 350,
          topP: 0.95
        }
      };

      // Discover models enabled for this specific Google AI Studio project
      let candidateModels = [
        'gemini-1.5-flash',
        'gemini-1.5-flash-latest',
        'gemini-2.0-flash',
        'gemini-2.0-flash-exp',
        'gemini-1.5-flash-8b',
        'gemini-1.5-pro'
      ];

      try {
        const listRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`);
        if (listRes.ok) {
          const listJson = await listRes.json();
          const discovered = (listJson.models || [])
            .filter(m => Array.isArray(m.supportedGenerationMethods) && m.supportedGenerationMethods.includes('generateContent'))
            .map(m => m.name.replace(/^models\//, ''));
          if (discovered.length > 0) {
            candidateModels = discovered;
          }
        } else {
          lastError = `ListModels error: ${listRes.status} ${await listRes.text()}`;
        }
      } catch (listErr) {
        lastError = `ListModels fetch error: ${listErr.message}`;
      }

      for (const model of candidateModels) {
        try {
          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
          const response = await fetch(geminiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          if (response.ok) {
            const data = await response.json();
            const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
            if (replyText.trim()) {
              const cleanReply = replyText.replace(/[*_#`]/g, '').trim();
              const whatsappUrl = generateWhatsAppLink(message, cleanReply);
              return res.status(200).json({
                reply: cleanReply,
                whatsappUrl,
                source: `gemini (${model})`
              });
            }
          } else {
            const errText = await response.text();
            lastError = `[${model}: ${response.status}] ${errText}`;
          }
        } catch (mErr) {
          lastError = `[${model} catch] ${mErr.message}`;
        }
      }

      console.warn('All Gemini models failed, last error:', lastError);
    } catch (err) {
      console.warn('Gemini outer execution error:', err);
    }
  } else {
    console.warn('No GEMINI_API_KEY found in process.env. Keys available:', Object.keys(process.env).filter(k => !k.includes('SECRET')));
  }

  // 2. High-speed Smart Fallback (when no key or offline)
  const ruleResponse = processRuleEngine(message);
  const whatsappUrl = generateWhatsAppLink(message, ruleResponse.reply);

  return res.status(200).json({
    reply: ruleResponse.reply,
    actions: ruleResponse.actions || [],
    whatsappUrl,
    source: 'rule_engine',
    debug: {
      hasKey: !!GEMINI_API_KEY,
      envKeyLength: GEMINI_API_KEY.length,
      lastError: lastError
    }
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
