/**
 * Santhi Ganesh Bakery - In-Store Cafe Menu Dataset
 * Extracted from monolithic menu.html for performance and maintainability
 */

    const IN_STORE_MENU = [
      // 1. FRESH JUICE
      {
        id: "fj-1",
        category: "juices",
        category_name: "Fresh Juices",
        category_hero: "./assets/banner1.jpg",
        category_desc: "100% natural, freshly squeezed juices made to order",
        name: "Elaneer Payasam",
        desc: "Refreshing tender coconut blended with rich creamy milk & cardamom",
        price: 80,
        is_veg: true,
        badge: "Chef Special ⭐",
        icon: "🥥"
      },
      {
        id: "fj-2",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Sathukudi (Sweet Lime)",
        desc: "Pure freshly pressed sweet lime juice with a hint of salt & sugar",
        price: 80,
        is_veg: true,
        icon: "🍊"
      },
      {
        id: "fj-3",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Fresh Orange Juice",
        desc: "Pure sunshine in a glass with rich Vitamin C",
        price: 80,
        is_veg: true,
        icon: "🍊"
      },
      {
        id: "fj-4",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Pomegranate Juice",
        desc: "Fresh ruby red pomegranate seeds pressed to perfection",
        price: 80,
        is_veg: true,
        icon: "🍷"
      },
      {
        id: "fj-5",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Pomegranate Pure (No Water)",
        desc: "100% undiluted pure fresh pomegranate extraction",
        price: 120,
        is_veg: true,
        badge: "Pure Extract 👑",
        icon: "🍷"
      },
      {
        id: "fj-6",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Pineapple Juice",
        desc: "Sweet and tangy golden ripe pineapple juice",
        price: 60,
        is_veg: true,
        icon: "🍍"
      },
      {
        id: "fj-7",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Fresh Apple Juice",
        desc: "Crisp red apples blended with light honey touch",
        price: 80,
        is_veg: true,
        icon: "🍎"
      },
      {
        id: "fj-8",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Watermelon Juice",
        desc: "Ultra hydrating cold pressed fresh watermelon",
        price: 50,
        is_veg: true,
        badge: "Summer Favorite ☀️",
        icon: "🍉"
      },
      {
        id: "fj-9",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Muskmelon Juice (Kirni)",
        desc: "Creamy aromatic fresh muskmelon drink",
        price: 60,
        is_veg: true,
        icon: "🍈"
      },
      {
        id: "fj-10",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Creamy Lassi (Sweet / Salt)",
        desc: "Thick beaten curd lassi served chilled",
        price: 50,
        is_veg: true,
        icon: "🥛"
      },
      {
        id: "fj-11",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Rose Milk",
        desc: "Classic South Indian fragrant chilled rose milk",
        price: 40,
        is_veg: true,
        badge: "Bestseller 🔥",
        icon: "🌹"
      },
      {
        id: "fj-12",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Badam Kheer",
        desc: "Rich almond milk with saffron, pista and cardamom notes",
        price: 50,
        is_veg: true,
        icon: "🌰"
      },
      {
        id: "fj-13",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Grape Juice",
        desc: "Fresh black grape juice served ice cold",
        price: 60,
        is_veg: true,
        icon: "🍇"
      },
      {
        id: "fj-14",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Fresh Lime Juice",
        desc: "Classic zesty fresh lemon juice with mint",
        price: 30,
        is_veg: true,
        icon: "🍋"
      },
      {
        id: "fj-15",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Mint Lemon Juice",
        desc: "Garden fresh mint muddled with fresh lemon",
        price: 40,
        is_veg: true,
        icon: "🌿"
      },
      {
        id: "fj-16",
        category: "juices",
        category_name: "Fresh Juices",
        name: "Fresh Lemon Soda",
        desc: "Fizzy sparkling lemon soda (Sweet / Salt)",
        price: 40,
        is_veg: true,
        icon: "🥤"
      },

      // 2. MILK SHAKE
      {
        id: "ms-1",
        category: "shakes",
        category_name: "Milk Shakes",
        category_hero: "./assets/banner2.jpg",
        category_desc: "Thick & creamy shakes blended with rich dairy ice cream",
        name: "Cold Coffee Shake",
        desc: "Rich espresso decoction blended with creamy milk and chocolate drizzle",
        price: 90,
        is_veg: true,
        badge: "Bestseller 🔥",
        icon: "☕"
      },
      {
        id: "ms-2",
        category: "shakes",
        category_name: "Milk Shakes",
        name: "Oreo Shake",
        desc: "Crunchy Oreo cookies blended into thick chocolate cream",
        price: 90,
        is_veg: true,
        badge: "Kids Favorite 🍪",
        icon: "🍪"
      },
      {
        id: "ms-3",
        category: "shakes",
        category_name: "Milk Shakes",
        name: "Kitkat Shake",
        desc: "Crispy Kitkat wafer fingers blended with rich chocolate milk",
        price: 90,
        is_veg: true,
        icon: "🍫"
      },
      {
        id: "ms-4",
        category: "shakes",
        category_name: "Milk Shakes",
        name: "Vanilla Milkshake",
        desc: "Classic Madagascar vanilla ice cream shake",
        price: 70,
        is_veg: true,
        icon: "🍦"
      },
      {
        id: "ms-5",
        category: "shakes",
        category_name: "Milk Shakes",
        name: "Chocolate Milkshake",
        desc: "Rich couverture cocoa blended with chilled whole milk",
        price: 80,
        is_veg: true,
        icon: "🍫"
      },
      {
        id: "ms-6",
        category: "shakes",
        category_name: "Milk Shakes",
        name: "Butterscotch Milkshake",
        desc: "Crunchy praline cashew butterscotch shake",
        price: 80,
        is_veg: true,
        icon: "🍯"
      },
      {
        id: "ms-7",
        category: "shakes",
        category_name: "Milk Shakes",
        name: "Strawberry Milkshake",
        desc: "Sweet strawberry berry crush blended with ice cream",
        price: 80,
        is_veg: true,
        icon: "🍓"
      },
      {
        id: "ms-8",
        category: "shakes",
        category_name: "Milk Shakes",
        name: "Red Banana Milkshake",
        desc: "Authentic local Tirunelveli red banana nutrition power shake",
        price: 80,
        is_veg: true,
        badge: "Local Special 🍌",
        icon: "🍌"
      },
      {
        id: "ms-9",
        category: "shakes",
        category_name: "Milk Shakes",
        name: "Dry Fruits Milkshake",
        desc: "Loaded with premium almonds, cashews, pista, dates and figs",
        price: 160,
        is_veg: true,
        badge: "Royal Special 👑",
        icon: "🥜"
      },

      // 3. FALOODA & DESSERTS
      {
        id: "fl-1",
        category: "falooda",
        category_name: "Falooda & Desserts",
        category_hero: "./assets/banner3.jpg",
        category_desc: "Layered royal sundaes, cut fruits and traditional sweets",
        name: "Royal Falooda",
        desc: "Layers of rose syrup, sabja seeds, vermicelli, mixed dry fruits, jelly & double ice cream",
        price: 140,
        is_veg: true,
        badge: "Must Try 👑",
        icon: "🍨"
      },
      {
        id: "fl-2",
        category: "falooda",
        category_name: "Falooda & Desserts",
        name: "Classic Falooda",
        desc: "Traditional rose falooda with basil seeds, vermicelli and vanilla ice cream scoop",
        price: 100,
        is_veg: true,
        icon: "🍨"
      },
      {
        id: "fl-3",
        category: "falooda",
        category_name: "Falooda & Desserts",
        name: "Fresh Fruit Salad",
        desc: "Bowl of freshly diced seasonal fruits with honey dressing",
        price: 60,
        is_veg: true,
        icon: "🥗"
      },
      {
        id: "fl-4",
        category: "falooda",
        category_name: "Falooda & Desserts",
        name: "Fruit Salad with Ice Cream",
        desc: "Fresh cut fruit bowl topped with large gourmet ice cream scoop",
        price: 90,
        is_veg: true,
        badge: "Bestseller 🔥",
        icon: "🍨"
      },
      {
        id: "fl-5",
        category: "falooda",
        category_name: "Falooda & Desserts",
        name: "Hot Gulab Jamun with Ice Cream",
        desc: "Warm ghee-fried gulab jamuns served with cold vanilla ice cream",
        price: 60,
        is_veg: true,
        icon: "🍯"
      },
      {
        id: "fl-6",
        category: "falooda",
        category_name: "Falooda & Desserts",
        name: "Royal Rasamalai",
        desc: "Soft cottage cheese dumplings soaked in saffron cardamom clotted milk",
        price: 40,
        is_veg: true,
        icon: "🍮"
      },

      // 4. MOJITO
      {
        id: "mj-1",
        category: "mojito",
        category_name: "Mojitos",
        category_hero: "./assets/banner1.jpg",
        category_desc: "Crisp sparkling mocktails with crushed mint and citrus",
        name: "Lime Mint Mojito",
        desc: "Classic crushed garden mint, fresh lime wedges and sparkling soda",
        price: 70,
        is_veg: true,
        icon: "🍸"
      },
      {
        id: "mj-2",
        category: "mojito",
        category_name: "Mojitos",
        name: "Green Mint Mojito",
        desc: "Double green mint essence with zesty lemon splash",
        price: 70,
        is_veg: true,
        icon: "🍹"
      },
      {
        id: "mj-3",
        category: "mojito",
        category_name: "Mojitos",
        name: "Blue Curacao Mojito",
        desc: "Vibrant tropical blue citrus cooler with sparkling soda",
        price: 70,
        is_veg: true,
        badge: "Signature 💙",
        icon: "🌊"
      },
      {
        id: "mj-4",
        category: "mojito",
        category_name: "Mojitos",
        name: "Strawberry Mojito",
        desc: "Muddled strawberry fruit syrup with mint and sparkling soda",
        price: 70,
        is_veg: true,
        icon: "🍓"
      },
      {
        id: "mj-5",
        category: "mojito",
        category_name: "Mojitos",
        name: "Black Currant Mojito",
        desc: "Tangy rich black currant berry cooler",
        price: 70,
        is_veg: true,
        icon: "🍇"
      },
      {
        id: "mj-6",
        category: "mojito",
        category_name: "Mojitos",
        name: "Kiwi Fruit Mojito",
        desc: "Exotic kiwi fruit crush with mint and crushed ice",
        price: 70,
        is_veg: true,
        icon: "🥝"
      },
      {
        id: "mj-7",
        category: "mojito",
        category_name: "Mojitos",
        name: "Mango Sunshine Mojito",
        desc: "Alphonso mango nectar with fizzy mint cooler",
        price: 70,
        is_veg: true,
        icon: "🥭"
      },

      // 5. BROWNIES & CAKE VARIETIES
      {
        id: "br-1",
        category: "brownie",
        category_name: "Brownies & Pastries",
        category_hero: "./assets/banner2.jpg",
        category_desc: "Fresh baked daily pastry slices and warm dessert sizzlers",
        name: "Sizzling Chocolate Brownie",
        desc: "Warm fudge brownie on hot cast iron sizzler plate topped with vanilla ice cream and molten chocolate fudge",
        price: 140,
        is_veg: true,
        badge: "Chef Special 🔥",
        icon: "🍫"
      },
      {
        id: "br-2",
        category: "brownie",
        category_name: "Brownies & Pastries",
        name: "Brownie with Ice Cream",
        desc: "Warm dark chocolate walnut brownie with vanilla scoop",
        price: 100,
        is_veg: true,
        badge: "Bestseller ⭐",
        icon: "🍨"
      },
      {
        id: "br-3",
        category: "brownie",
        category_name: "Brownies & Pastries",
        name: "Black Forest Pastry Slice",
        desc: "Classic cocoa sponge layered with whipped cream and cherries",
        price: 55,
        is_veg: true,
        icon: "🍰"
      },
      {
        id: "br-4",
        category: "brownie",
        category_name: "Brownies & Pastries",
        name: "White Forest Pastry Slice",
        desc: "White chocolate curls over vanilla cream and cherry compote",
        price: 55,
        is_veg: true,
        icon: "🍰"
      },
      {
        id: "br-5",
        category: "brownie",
        category_name: "Brownies & Pastries",
        name: "Red Velvet Cake Slice",
        desc: "Velvety crimson sponge with cream cheese frosting",
        price: 80,
        is_veg: true,
        icon: "🍰"
      },
      {
        id: "br-6",
        category: "brownie",
        category_name: "Brownies & Pastries",
        name: "Choco Lava Cake",
        desc: "Warm chocolate cake with molten flowing chocolate center",
        price: 50,
        is_veg: true,
        icon: "🧁"
      },
      {
        id: "br-7",
        category: "brownie",
        category_name: "Brownies & Pastries",
        name: "Chocolate Mousse Cake",
        desc: "Silky airy dark chocolate mousse over sponge base",
        price: 65,
        is_veg: true,
        icon: "🍰"
      },
      {
        id: "br-8",
        category: "brownie",
        category_name: "Brownies & Pastries",
        name: "Gourmet Jar Cake",
        desc: "Layered dessert jar with cream, brownie and chocolate ganache",
        price: 65,
        is_veg: true,
        icon: "🫙"
      },
      {
        id: "br-9",
        category: "brownie",
        category_name: "Brownies & Pastries",
        name: "Italian Panna Cotta",
        desc: "Silky sweet cream pudding topped with fruit coulis",
        price: 55,
        is_veg: true,
        icon: "🍮"
      },
      {
        id: "br-10",
        category: "brownie",
        category_name: "Brownies & Pastries",
        name: "Choco Mud Pie",
        desc: "Decadent deep fudge mud pie with cookie crust",
        price: 90,
        is_veg: true,
        icon: "🥧"
      },
      {
        id: "br-11",
        category: "brownie",
        category_name: "Brownies & Pastries",
        name: "Chocolate Glazed Donut",
        desc: "Soft fried dough ring coated with rich chocolate glaze",
        price: 50,
        is_veg: true,
        icon: "🍩"
      },
      {
        id: "br-12",
        category: "brownie",
        category_name: "Brownies & Pastries",
        name: "Tirunelveli Honey Cake",
        desc: "Traditional honey-soaked sponge with strawberry jam & desiccated coconut",
        price: 22,
        is_veg: true,
        badge: "Tradition 🍯",
        icon: "🍰"
      },
      {
        id: "br-13",
        category: "brownie",
        category_name: "Brownies & Pastries",
        name: "Classic Chocolate Brownie",
        desc: "Rich fudgy dark chocolate cake slice",
        price: 50,
        is_veg: true,
        icon: "🍫"
      },
      {
        id: "br-14",
        category: "brownie",
        category_name: "Brownies & Pastries",
        name: "Texas Brownie",
        desc: "Extra dense chocolate fudge square with roasted nuts",
        price: 60,
        is_veg: true,
        icon: "🍫"
      },

      // 6. SCOOP ICE CREAM
      {
        id: "ic-1",
        category: "icecream",
        category_name: "Scoop Ice Cream",
        category_hero: "./assets/banner3.jpg",
        category_desc: "Premium dairy scoops served in bowls or waffle cones",
        name: "Vanilla Scoop",
        desc: "Classic creamy Madagascar vanilla scoop",
        price: 40,
        is_veg: true,
        icon: "🍨"
      },
      {
        id: "ic-2",
        category: "icecream",
        category_name: "Scoop Ice Cream",
        name: "Chocolate Scoop",
        desc: "Rich Belgian chocolate scoop",
        price: 50,
        is_veg: true,
        icon: "🍨"
      },
      {
        id: "ic-3",
        category: "icecream",
        category_name: "Scoop Ice Cream",
        name: "Strawberry Scoop",
        desc: "Fresh berry swirl ice cream scoop",
        price: 40,
        is_veg: true,
        icon: "🍨"
      },
      {
        id: "ic-4",
        category: "icecream",
        category_name: "Scoop Ice Cream",
        name: "Butterscotch Scoop",
        desc: "Caramel ice cream with crunchy cashew bits",
        price: 50,
        is_veg: true,
        icon: "🍨"
      },
      {
        id: "ic-5",
        category: "icecream",
        category_name: "Scoop Ice Cream",
        name: "Pista Scoop",
        desc: "Royal pistachio flavored dairy scoop",
        price: 50,
        is_veg: true,
        icon: "🍨"
      },
      {
        id: "ic-6",
        category: "icecream",
        category_name: "Scoop Ice Cream",
        name: "Mango Scoop",
        desc: "Alphonso mango fruit scoop",
        price: 50,
        is_veg: true,
        icon: "🍨"
      },

      // 7. HOT DRINKS
      {
        id: "hd-1",
        category: "hotdrinks",
        category_name: "Hot Drinks & Tea",
        category_hero: "./assets/banner1.jpg",
        category_desc: "Traditional South Indian tea, filter coffee and healthy heritage brews",
        name: "Ginger Tea (Inji Tea)",
        desc: "Fresh crushed ginger brewed with Assam tea and milk",
        price: 20,
        is_veg: true,
        badge: "Morning Favorite ☕",
        icon: "☕"
      },
      {
        id: "hd-2",
        category: "hotdrinks",
        category_name: "Hot Drinks & Tea",
        name: "Filter Coffee",
        desc: "Authentic strong South Indian chicory filter coffee with froth",
        price: 25,
        is_veg: true,
        badge: "Signature ☕",
        icon: "☕"
      },
      {
        id: "hd-3",
        category: "hotdrinks",
        category_name: "Hot Drinks & Tea",
        name: "Fresh Hot Milk",
        desc: "Boiled whole cow milk with a touch of sugar",
        price: 25,
        is_veg: true,
        icon: "🥛"
      },
      {
        id: "hd-4",
        category: "hotdrinks",
        category_name: "Hot Drinks & Tea",
        name: "Hot Boost",
        desc: "Chocolate malt health drink served steaming hot",
        price: 30,
        is_veg: true,
        icon: "☕"
      },
      {
        id: "hd-5",
        category: "hotdrinks",
        category_name: "Hot Drinks & Tea",
        name: "Hot Horlicks",
        desc: "Malted barley wheat drink with hot milk",
        price: 30,
        is_veg: true,
        icon: "☕"
      },
      {
        id: "hd-6",
        category: "hotdrinks",
        category_name: "Hot Drinks & Tea",
        name: "Naatu Sarkarai Tea",
        desc: "Healthy organic country sugar (Naatu Sarkarai) brewed tea",
        price: 30,
        is_veg: true,
        badge: "Healthy Choice 🌿",
        icon: "☕"
      },
      {
        id: "hd-7",
        category: "hotdrinks",
        category_name: "Hot Drinks & Tea",
        name: "Naatu Sarkarai Coffee",
        desc: "Filter coffee sweetened with unrefined brown country sugar",
        price: 30,
        is_veg: true,
        icon: "☕"
      },
      {
        id: "hd-8",
        category: "hotdrinks",
        category_name: "Hot Drinks & Tea",
        name: "Karupatti Coffee",
        desc: "Traditional palm jaggery (Karupatti) coffee with dry ginger and pepper",
        price: 35,
        is_veg: true,
        badge: "Tirunelveli Heritage 👑",
        icon: "☕"
      },
      {
        id: "hd-9",
        category: "hotdrinks",
        category_name: "Hot Drinks & Tea",
        name: "Honey Lemon Tea",
        desc: "Warm black tea with pure honey and fresh lemon squeeze",
        price: 20,
        is_veg: true,
        icon: "🫖"
      },
      {
        id: "hd-10",
        category: "hotdrinks",
        category_name: "Hot Drinks & Tea",
        name: "Panarkandu Milk (with Pepper)",
        desc: "Palm sugar candy milk infused with black pepper and turmeric",
        price: 35,
        is_veg: true,
        badge: "Immunity Booster 🌿",
        icon: "🥛"
      },
      {
        id: "hd-11",
        category: "hotdrinks",
        category_name: "Hot Drinks & Tea",
        name: "Black Tea",
        desc: "Strong brisk black tea without milk",
        price: 15,
        is_veg: true,
        icon: "🫖"
      },
      {
        id: "hd-12",
        category: "hotdrinks",
        category_name: "Hot Drinks & Tea",
        name: "Black Coffee",
        desc: "Pure black filter decoction",
        price: 15,
        is_veg: true,
        icon: "☕"
      },
      {
        id: "hd-13",
        category: "hotdrinks",
        category_name: "Hot Drinks & Tea",
        name: "Hot Badam Milk",
        desc: "Warm saffron almond milk with crunchy nut slivers",
        price: 30,
        is_veg: true,
        icon: "🥛"
      },

      // 8. CHAT & QUICK BITES
      {
        id: "ch-1",
        category: "chat",
        category_name: "Chat & Snacks",
        category_hero: "./assets/banner2.jpg",
        category_desc: "Crispy street chaat, samosas, fries and savory quick bites",
        name: "Pani Puri (6 pcs)",
        desc: "Crispy hollow puris filled with spiced potato and tangy mint water",
        price: 40,
        is_veg: true,
        badge: "All-Time Favorite 🔥",
        icon: "🥙"
      },
      {
        id: "ch-2",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Bhel Puri",
        desc: "Puffed rice tossed with onions, tomatoes, chutneys and sev",
        price: 50,
        is_veg: true,
        icon: "🥗"
      },
      {
        id: "ch-3",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Dahi Puri",
        desc: "Crispy puris filled with spiced potatoes, sweet yogurt and sev",
        price: 60,
        is_veg: true,
        badge: "Bestseller ⭐",
        icon: "🥙"
      },
      {
        id: "ch-4",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Aloo Puri",
        desc: "Crispy puris layered with spiced potatoes, onions and chutneys",
        price: 55,
        is_veg: true,
        icon: "🥔"
      },
      {
        id: "ch-5",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Sev Puri",
        desc: "Flat papdis topped with spiced potatoes, sweet tamarind and mountain of crisp sev",
        price: 50,
        is_veg: true,
        icon: "🥙"
      },
      {
        id: "ch-6",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Masala Puri",
        desc: "Crushed puris topped with hot spicy peas gravy, onions and coriander",
        price: 60,
        is_veg: true,
        icon: "🍲"
      },
      {
        id: "ch-7",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Cheese Pani Puri",
        desc: "Pani puris loaded with grated cheddar cheese and potato masala",
        price: 70,
        is_veg: true,
        icon: "🧀"
      },
      {
        id: "ch-8",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Fruits Bhel Puri",
        desc: "Puffed rice and sev tossed with fresh fruits and tangy chutneys",
        price: 70,
        is_veg: true,
        icon: "🥗"
      },
      {
        id: "ch-9",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Papdi Salad",
        desc: "Crispy papdi tossed with fresh cucumber, tomato, onion and lemon chat",
        price: 60,
        is_veg: true,
        icon: "🥗"
      },
      {
        id: "ch-10",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Dahi Samosa",
        desc: "Crushed hot samosa drenched in chilled sweet curd, chutneys and sev",
        price: 60,
        is_veg: true,
        icon: "🥟"
      },
      {
        id: "ch-11",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Samosa Channa",
        desc: "Hot samosas served with rich spicy chickpea channa masala",
        price: 70,
        is_veg: true,
        badge: "Hearty Snack 🔥",
        icon: "🥟"
      },
      {
        id: "ch-12",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Cutlet Channa",
        desc: "Crispy vegetable cutlets served with hot channa gravy",
        price: 70,
        is_veg: true,
        icon: "🧆"
      },
      {
        id: "ch-13",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Channa Masala (Bowl)",
        desc: "Spicy North-Indian style chickpea curry with chopped onions and lemon",
        price: 60,
        is_veg: true,
        icon: "🍲"
      },
      {
        id: "ch-14",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Bread Channa",
        desc: "Toasted bread cubes tossed in flavorful channa masala gravy",
        price: 70,
        is_veg: true,
        icon: "🍞"
      },
      {
        id: "ch-15",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Vada Pav",
        desc: "Mumbai style spiced potato batata vada in pav bun with garlic chutney",
        price: 35,
        price_display: "Single ₹35 / Double ₹60",
        is_veg: true,
        badge: "Street Special 🍔",
        icon: "🍔"
      },
      {
        id: "ch-16",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Mayonnaise Bread Omelette",
        desc: "Fluffy 2-egg spiced omelette wrapped around toasted bread with creamy mayonnaise",
        price: 60,
        is_veg: false,
        icon: "🍳"
      },
      {
        id: "ch-17",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Chicken Bread Omelette",
        desc: "Bread omelette loaded with shredded spicy chicken bits",
        price: 100,
        is_veg: false,
        icon: "🍗"
      },
      {
        id: "ch-18",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Chicken Cheese Bread Omelette",
        desc: "Double egg bread omelette stuffed with shredded chicken and melted cheese",
        price: 120,
        is_veg: false,
        badge: "Heavy Bite 🧀",
        icon: "🍗"
      },
      {
        id: "ch-19",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Crispy Veg Pops",
        desc: "Bite sized crispy seasoned vegetable nuggets",
        price: 50,
        is_veg: true,
        icon: "🍿"
      },
      {
        id: "ch-20",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Crispy Chicken Pops",
        desc: "Crunchy golden fried popcorn chicken bites",
        price: 70,
        is_veg: false,
        icon: "🍗"
      },
      {
        id: "ch-21",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Potato Cheese Balls",
        desc: "Crispy potato croquettes stuffed with molten cheese core",
        price: 100,
        is_veg: true,
        icon: "🧀"
      },
      {
        id: "ch-22",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Golden Fish Fingers (6 pcs)",
        desc: "Crumb-coated succulent fish fillet fingers with tartar sauce",
        price: 140,
        is_veg: false,
        badge: "Seafood Special 🐟",
        icon: "🐟"
      },
      {
        id: "ch-23",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Chicken Nuggets (6 pcs)",
        desc: "Crispy golden fried chicken nuggets with dip",
        price: 100,
        is_veg: false,
        icon: "🍗"
      },
      {
        id: "ch-24",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Classic French Fries",
        desc: "Crispy salted golden potato fries with ketchup",
        price: 60,
        is_veg: true,
        icon: "🍟"
      },
      {
        id: "ch-25",
        category: "chat",
        category_name: "Chat & Snacks",
        name: "Potato Smileys",
        desc: "Fun crispy potato smiley faces kids love",
        price: 60,
        is_veg: true,
        icon: "😊"
      },

      // 9. PAV BHAJI
      {
        id: "pb-1",
        category: "pavbhaji",
        category_name: "Pav Bhaji",
        category_hero: "./assets/banner3.jpg",
        category_desc: "Butter toasted pav buns with hot spiced vegetable mash (Extra Pav ₹25)",
        name: "Classic Butter Pav Bhaji",
        desc: "2 butter toasted pavs served with thick spiced potato tomato bhaji and chopped onions",
        price: 60,
        is_veg: true,
        badge: "Bestseller 🔥",
        icon: "🍲"
      },
      {
        id: "pb-2",
        category: "pavbhaji",
        category_name: "Pav Bhaji",
        name: "Paneer Pav Bhaji",
        desc: "Bhaji loaded with soft diced cottage cheese cubes",
        price: 90,
        is_veg: true,
        icon: "🧀"
      },
      {
        id: "pb-3",
        category: "pavbhaji",
        category_name: "Pav Bhaji",
        name: "Cheese Pav Bhaji",
        desc: "Pav bhaji blanketed with a generous layer of melted grated cheese",
        price: 90,
        is_veg: true,
        icon: "🧀"
      },
      {
        id: "pb-4",
        category: "pavbhaji",
        category_name: "Pav Bhaji",
        name: "Mushroom Pav Bhaji",
        desc: "Flavorful sautéed button mushrooms tossed into rich bhaji",
        price: 90,
        is_veg: true,
        icon: "🍄"
      },
      {
        id: "pb-5",
        category: "pavbhaji",
        category_name: "Pav Bhaji",
        name: "Paneer Cheese Pav Bhaji",
        desc: "The ultimate indulgence with both paneer cubes and melted cheese",
        price: 120,
        is_veg: true,
        badge: "Royal Special 👑",
        icon: "🧀"
      },

      // 10. TOAST
      {
        id: "ts-1",
        category: "toast",
        category_name: "Toasts & Quick Breads",
        category_hero: "./assets/banner1.jpg",
        category_desc: "Bakery fresh bread slices crisped on butter griddle",
        name: "Butter Bread Toast",
        desc: "Golden griddled bakery bread with rich butter",
        price: 30,
        is_veg: true,
        icon: "🍞"
      },
      {
        id: "ts-2",
        category: "toast",
        category_name: "Toasts & Quick Breads",
        name: "Chilli Toast",
        desc: "Crispy toast with green chillies, onions and spices",
        price: 40,
        is_veg: true,
        icon: "🌶️"
      },
      {
        id: "ts-3",
        category: "toast",
        category_name: "Toasts & Quick Breads",
        name: "Garlic Butter Toast",
        desc: "Aromatic roasted garlic butter brushed over crispy toast",
        price: 40,
        is_veg: true,
        icon: "🧄"
      },
      {
        id: "ts-4",
        category: "toast",
        category_name: "Toasts & Quick Breads",
        name: "Tomato Toast",
        desc: "Juicy seasoned tomato slices toasted with herbs",
        price: 40,
        is_veg: true,
        icon: "🍅"
      },
      {
        id: "ts-5",
        category: "toast",
        category_name: "Toasts & Quick Breads",
        name: "Grilled Jam Toast",
        desc: "Sweet fruit jam spread between butter-grilled bread",
        price: 40,
        is_veg: true,
        icon: "🍓"
      },
      {
        id: "ts-6",
        category: "toast",
        category_name: "Toasts & Quick Breads",
        name: "Classic Bun Butter Jam",
        desc: "Soft bakery bun sliced and stuffed with creamy butter and sweet mixed fruit jam",
        price: 35,
        is_veg: true,
        badge: "Bakery Classic 👑",
        icon: "🥯"
      },

      // 11. BURGERS
      {
        id: "bg-1",
        category: "burger",
        category_name: "Burgers",
        category_hero: "./assets/banner2.jpg",
        category_desc: "Fresh baked sesame buns with juicy patties and crispy vegetables",
        name: "Crispy Veg Burger",
        desc: "Crispy spiced vegetable patty with lettuce, tomatoes, onions and house mayo",
        price: 80,
        is_veg: true,
        icon: "🍔"
      },
      {
        id: "bg-2",
        category: "burger",
        category_name: "Burgers",
        name: "Crispy Chicken Burger",
        desc: "Seasoned chicken patty with crunchy lettuce, onions and creamy mayo",
        price: 120,
        is_veg: false,
        badge: "Bestseller 🔥",
        icon: "🍔"
      },
      {
        id: "bg-3",
        category: "burger",
        category_name: "Burgers",
        name: "Grilled Paneer Burger",
        desc: "Marinated cottage cheese patty with mint mayo and crisp greens",
        price: 110,
        is_veg: true,
        icon: "🍔"
      },
      {
        id: "bg-4",
        category: "burger",
        category_name: "Burgers",
        name: "Mushroom Patty Burger",
        desc: "Herbed mushroom patty with caramelized onions and sauce",
        price: 110,
        is_veg: true,
        icon: "🍔"
      },
      {
        id: "bg-5",
        category: "burger",
        category_name: "Burgers",
        name: "Double Chicken Burger",
        desc: "Double chicken patties with double sauce and layers of cheese",
        price: 160,
        is_veg: false,
        badge: "Giant Feast 🍗",
        icon: "🍔"
      },
      {
        id: "bg-6",
        category: "burger",
        category_name: "Burgers",
        name: "Double Veg Burger",
        desc: "Two crispy vegetable patties with double veggies and cream sauce",
        price: 120,
        is_veg: true,
        icon: "🍔"
      },
      {
        id: "bg-7",
        category: "burger",
        category_name: "Burgers",
        name: "Sweet Corn Burger",
        desc: "Sweet corn and potato patty with crunchy cabbage slaw",
        price: 110,
        is_veg: true,
        icon: "🍔"
      },
      {
        id: "bg-8",
        category: "burger",
        category_name: "Burgers",
        name: "Cheese Lover Burger",
        desc: "Loaded with melted cheddar cheese slice and cheese sauce",
        price: 110,
        is_veg: true,
        icon: "🧀"
      },

      // 12. PIZZAS
      {
        id: "pz-1",
        category: "pizza",
        category_name: "Pizzas",
        category_hero: "./assets/banner3.jpg",
        category_desc: "Fresh dough baked with Italian herb sauce and 100% mozzarella",
        name: "Classic Veg Pizza",
        desc: "Mozzarella cheese, capsicum, onions and diced tomatoes on herb crust",
        price: 110,
        is_veg: true,
        icon: "🍕"
      },
      {
        id: "pz-2",
        category: "pizza",
        category_name: "Pizzas",
        name: "Chicken Delight Pizza",
        desc: "Tender seasoned chicken chunks with capsicum and mozzarella",
        price: 140,
        is_veg: false,
        badge: "Bestseller 🔥",
        icon: "🍕"
      },
      {
        id: "pz-3",
        category: "pizza",
        category_name: "Pizzas",
        name: "Smoky BBQ Chicken Pizza",
        desc: "Barbecue glazed chicken with caramelized onions and stretchy cheese",
        price: 150,
        is_veg: false,
        badge: "Chef Special ⭐",
        icon: "🍕"
      },
      {
        id: "pz-4",
        category: "pizza",
        category_name: "Pizzas",
        name: "Double Cheese Margherita Pizza",
        desc: "Loaded with double layer of golden melted mozzarella cheese",
        price: 140,
        is_veg: true,
        icon: "🧀"
      },
      {
        id: "pz-5",
        category: "pizza",
        category_name: "Pizzas",
        name: "Paneer Tikka Pizza",
        desc: "Spiced paneer cubes with onions, green peppers and oregano",
        price: 140,
        is_veg: true,
        icon: "🍕"
      },
      {
        id: "pz-6",
        category: "pizza",
        category_name: "Pizzas",
        name: "Mushroom Feast Pizza",
        desc: "Herbed button mushrooms with garlic notes and mozzarella",
        price: 140,
        is_veg: true,
        icon: "🍄"
      },
      {
        id: "pz-7",
        category: "pizza",
        category_name: "Pizzas",
        name: "Sweet Corn & Cheese Pizza",
        desc: "Golden sweet corn kernels with creamy mozzarella cheese",
        price: 140,
        is_veg: true,
        icon: "🌽"
      },
      {
        id: "pz-8",
        category: "pizza",
        category_name: "Pizzas",
        name: "Capsicum & Onion Pizza",
        desc: "Crunchy green capsicum and onions on spiced marinara base",
        price: 120,
        is_veg: true,
        icon: "🍕"
      },

      // 13. SANDWICHES
      {
        id: "sw-1",
        category: "sandwich",
        category_name: "Sandwiches",
        category_hero: "./assets/banner1.jpg",
        category_desc: "Freshly sliced bakery bread grilled with mouthwatering fillings",
        name: "Classic Veg Sandwich",
        desc: "Cucumber, tomato, onions and green mint chutney grilled to golden crisp",
        price: 80,
        is_veg: true,
        icon: "🥪"
      },
      {
        id: "sw-2",
        category: "sandwich",
        category_name: "Sandwiches",
        name: "Chocolate Dessert Sandwich",
        desc: "Melted chocolate spread with chocolate chips inside grilled bread",
        price: 80,
        is_veg: true,
        badge: "Dessert Special 🍫",
        icon: "🍫"
      },
      {
        id: "sw-3",
        category: "sandwich",
        category_name: "Sandwiches",
        name: "Bombay Masala Sandwich",
        desc: "Spiced potato masala with capsicum, onions and chat masala",
        price: 80,
        is_veg: true,
        icon: "🥪"
      },
      {
        id: "sw-4",
        category: "sandwich",
        category_name: "Sandwiches",
        name: "Egg Mayo Sandwich",
        desc: "Boiled egg slices with seasoned mayonnaise and black pepper",
        price: 80,
        is_veg: false,
        icon: "🍳"
      },
      {
        id: "sw-5",
        category: "sandwich",
        category_name: "Sandwiches",
        name: "Grilled Paneer Sandwich",
        desc: "Spiced cottage cheese filling with mint chutney and butter",
        price: 100,
        is_veg: true,
        icon: "🥪"
      },
      {
        id: "sw-6",
        category: "sandwich",
        category_name: "Sandwiches",
        name: "Mushroom Grill Sandwich",
        desc: "Sautéed button mushrooms with herbs and black pepper",
        price: 100,
        is_veg: true,
        icon: "🍄"
      },
      {
        id: "sw-7",
        category: "sandwich",
        category_name: "Sandwiches",
        name: "Sweet Corn Sandwich",
        desc: "Juicy sweet corn with spiced cheese dressing",
        price: 100,
        is_veg: true,
        icon: "🌽"
      },
      {
        id: "sw-8",
        category: "sandwich",
        category_name: "Sandwiches",
        name: "Grilled Cheese Sandwich",
        desc: "Gooey melted cheddar and mozzarella between crisp golden bread",
        price: 100,
        is_veg: true,
        icon: "🧀"
      },
      {
        id: "sw-9",
        category: "sandwich",
        category_name: "Sandwiches",
        name: "Grill Chicken Sandwich",
        desc: "Succulent shredded chicken with pepper mayo and greens",
        price: 120,
        is_veg: false,
        badge: "Bestseller 🔥",
        icon: "🍗"
      },
      {
        id: "sw-10",
        category: "sandwich",
        category_name: "Sandwiches",
        name: "BBQ Chicken Sandwich",
        desc: "Tender chicken tossed in smoky barbecue sauce and grilled",
        price: 130,
        is_veg: false,
        icon: "🍗"
      },
      {
        id: "sw-11",
        category: "sandwich",
        category_name: "Sandwiches",
        name: "Chicken Cheese Sandwich",
        desc: "Loaded with spiced chicken and melted cheese slice",
        price: 140,
        is_veg: false,
        badge: "Heavy Bite ⭐",
        icon: "🍗"
      },
      {
        id: "sw-12",
        category: "sandwich",
        category_name: "Sandwiches",
        name: "Mushroom Cheese Sandwich",
        desc: "Sautéed mushrooms and melted cheese blend",
        price: 120,
        is_veg: true,
        icon: "🧀"
      },
      {
        id: "sw-13",
        category: "sandwich",
        category_name: "Sandwiches",
        name: "Cheese Corn Sandwich",
        desc: "Sweet corn kernels coated in molten cheese and oregano",
        price: 120,
        is_veg: true,
        icon: "🧀"
      },

      // 14. MOMOS & CRUNCHY SPECIALS
      {
        id: "mm-1",
        category: "momos",
        category_name: "Momos & Crispy",
        category_hero: "./assets/banner2.jpg",
        category_desc: "Steamed or fried Tibetan dumplings served with fiery red chutney",
        name: "Steamed Veg Momos (5 pcs)",
        desc: "Thin wrapper stuffed with finely minced vegetables and ginger garlic",
        price: 80,
        is_veg: true,
        icon: "🥟"
      },
      {
        id: "mm-2",
        category: "momos",
        category_name: "Momos & Crispy",
        name: "Steamed Chicken Momos (5 pcs)",
        desc: "Juicy minced chicken dumplings with spicy red chilli sauce",
        price: 100,
        is_veg: false,
        badge: "Bestseller 🔥",
        icon: "🥟"
      },
      {
        id: "mm-3",
        category: "momos",
        category_name: "Momos & Crispy",
        name: "Paneer Momos (5 pcs)",
        desc: "Dumplings stuffed with spiced cottage cheese and herbs",
        price: 100,
        is_veg: true,
        icon: "🥟"
      },
      {
        id: "mm-4",
        category: "momos",
        category_name: "Momos & Crispy",
        name: "Peri-Peri Chicken Momos (5 pcs)",
        desc: "Crispy fried chicken momos tossed in spicy fiery peri-peri powder",
        price: 120,
        is_veg: false,
        badge: "Extra Spicy 🌶️",
        icon: "🥟"
      },
      {
        id: "mm-5",
        category: "momos",
        category_name: "Momos & Crispy",
        name: "Crunchy Fried Chicken",
        desc: "Crispy golden crumb-fried chicken fillets with garlic mayonnaise",
        price: 110,
        is_veg: false,
        badge: "Chef Special ⭐",
        icon: "🍗"
      }
    ];

if (typeof window !== 'undefined') {
  window.IN_STORE_MENU = IN_STORE_MENU;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { IN_STORE_MENU };
}
