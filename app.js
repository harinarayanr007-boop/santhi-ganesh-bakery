/* ==========================================================================
   SANTHI GANESH BAKERY - APP INTERACTIVITY & STATE MANAGEMENT
   ========================================================================== */

// DEFAULT CATALOG DATA
const DEFAULT_PRODUCTS_DATA = [
  {
    "id": "prod-1",
    "title": "Signature Black Forest Cake",
    "category": "birthday-her",
    "price": 550,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 550
      },
      {
        "weight": "1.5 kg",
        "price": 800
      },
      {
        "weight": "2 kg",
        "price": 1050
      }
    ],
    "isVeg": true,
    "image": "./Birthday cakes for her/Choco_Truffle_500_gms.jpg",
    "gallery": [
      "./Birthday cakes for her/Choco_Truffle_500_gms.jpg",
      "./Birthday cakes for her/0015_PinkRosesCake_2_360x.jpg",
      "./Birthday cakes for her/0000_cake_0014_TheCrownCake_360x.jpg"
    ],
    "description": "Rich dark chocolate layers with fresh whipped cream and juicy cherries. Tirunelveli’s favorite!"
  },
  {
    "id": "prod-2",
    "title": "Royal Crown Princess Cake",
    "category": "birthday-her",
    "price": 850,
    "weight": "1.5 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 600
      },
      {
        "weight": "1.5 kg",
        "price": 850
      },
      {
        "weight": "2 kg",
        "price": 1100
      }
    ],
    "isVeg": true,
    "image": "./Birthday cakes for her/0000_cake_0014_TheCrownCake_360x.jpg",
    "gallery": [
      "./Birthday cakes for her/0000_cake_0014_TheCrownCake_360x.jpg",
      "./Birthday cakes for her/0015_PinkRosesCake_2_360x.jpg"
    ],
    "description": "Golden tiara custom birthday cake crafted with pastel buttercream flowers."
  },
  {
    "id": "prod-3",
    "title": "Pink Rose Cascade Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 950
      },
      {
        "weight": "2 kg",
        "price": 1200
      }
    ],
    "isVeg": true,
    "image": "./Birthday cakes for her/0015_PinkRosesCake_2_360x.jpg",
    "gallery": [
      "./Birthday cakes for her/0015_PinkRosesCake_2_360x.jpg",
      "./Birthday cakes for her/Choco_Truffle_500_gms.jpg"
    ],
    "description": "Elegant pink buttercream rose piping with rich vanilla truffle sponge."
  },
  {
    "id": "prod-4",
    "title": "Good Ol Pineapple Delight",
    "category": "birthday-her",
    "price": 480,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 480
      },
      {
        "weight": "1.5 kg",
        "price": 700
      },
      {
        "weight": "2 kg",
        "price": 900
      }
    ],
    "isVeg": true,
    "image": "./Birthday cakes for her/Good-Ol-Pineapple-Cake1.jpg",
    "gallery": [
      "./Birthday cakes for her/Good-Ol-Pineapple-Cake1.jpg",
      "./Birthday cakes for her/Choco_Truffle_500_gms.jpg"
    ],
    "description": "Fresh pineapple bits layered with fluffy vanilla sponge and whipped cream."
  },
  {
    "id": "prod-5",
    "title": "Lamborghini Speedster Cake",
    "category": "birthday-him",
    "price": 950,
    "weight": "1.5 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 700
      },
      {
        "weight": "1.5 kg",
        "price": 950
      },
      {
        "weight": "2 kg",
        "price": 1250
      }
    ],
    "isVeg": true,
    "image": "./Birthday cakes for him/0001_cake_0013_TheLamborghiniCake_360x.jpg",
    "gallery": [
      "./Birthday cakes for him/0001_cake_0013_TheLamborghiniCake_360x.jpg",
      "./Birthday cakes for him/0001s_0010_GamersX-BoxCake_360x.jpg"
    ],
    "description": "Custom sports car themed birthday cake with rich chocolate fudge fill."
  },
  {
    "id": "prod-6",
    "title": "Gamers X-Box Edition Cake",
    "category": "birthday-him",
    "price": 890,
    "weight": "1.5 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 890
      },
      {
        "weight": "2 kg",
        "price": 1150
      }
    ],
    "isVeg": true,
    "image": "./Birthday cakes for him/0001s_0010_GamersX-BoxCake_360x.jpg",
    "gallery": [
      "./Birthday cakes for him/0001s_0010_GamersX-BoxCake_360x.jpg",
      "./Birthday cakes for him/0001_cake_0013_TheLamborghiniCake_360x.jpg"
    ],
    "description": "Hand-sculpted controller & console design for video game enthusiasts."
  },
  {
    "id": "prod-7",
    "title": "3-Tier Floral Wedding Cake",
    "category": "wedding",
    "price": 2400,
    "weight": "3 kg",
    "variants": [
      {
        "weight": "2 kg",
        "price": 1800
      },
      {
        "weight": "3 kg",
        "price": 2400
      },
      {
        "weight": "5 kg",
        "price": 3800
      }
    ],
    "isVeg": true,
    "image": "./Engagement, wedding cakes/0012_Floral3TierCake_360x.jpg",
    "gallery": [
      "./Engagement, wedding cakes/0012_Floral3TierCake_360x.jpg",
      "./Engagement, wedding cakes/0013_Floral2TierWeddingCake_360x.jpg",
      "./Engagement, wedding cakes/0000_WeddingFlowerCake_360x.jpg"
    ],
    "description": "Grand 3-tiered wedding cake adorned with handcrafted sugar orchids and golden accents."
  },
  {
    "id": "prod-8",
    "title": "Engagement Diamond Ring Cake",
    "category": "wedding",
    "price": 1350,
    "weight": "2 kg",
    "variants": [
      {
        "weight": "1.5 kg",
        "price": 1050
      },
      {
        "weight": "2 kg",
        "price": 1350
      },
      {
        "weight": "3 kg",
        "price": 1950
      }
    ],
    "isVeg": true,
    "image": "./Engagement, wedding cakes/Engagement_Ring_Cake_-_Smoor-4708887_360x.jpg",
    "gallery": [
      "./Engagement, wedding cakes/Engagement_Ring_Cake_-_Smoor-4708887_360x.jpg",
      "./Engagement, wedding cakes/0012_Floral3TierCake_360x.jpg"
    ],
    "description": "Luxurious engagement ring box theme cake in white and royal velvet."
  },
  {
    "id": "prod-9",
    "title": "Baby Stroller Celebration Cake",
    "category": "baby-shower",
    "price": 780,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 780
      },
      {
        "weight": "1.5 kg",
        "price": 1050
      },
      {
        "weight": "2 kg",
        "price": 1350
      }
    ],
    "isVeg": true,
    "image": "./Baby Shower cakes/0001_BabyStrollerCake_360x.jpg",
    "gallery": [
      "./Baby Shower cakes/0001_BabyStrollerCake_360x.jpg",
      "./Baby Shower cakes/0005_SkyThemedCake_360x.jpg"
    ],
    "description": "Adorable baby stroller fondant cake in sweet pastel blue and yellow."
  },
  {
    "id": "prod-10",
    "title": "Sky Theme Baby Shower Cake",
    "category": "baby-shower",
    "price": 820,
    "weight": "1.2 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 700
      },
      {
        "weight": "1.2 kg",
        "price": 820
      },
      {
        "weight": "2 kg",
        "price": 1300
      }
    ],
    "isVeg": true,
    "image": "./Baby Shower cakes/0005_SkyThemedCake_360x.jpg",
    "gallery": [
      "./Baby Shower cakes/0005_SkyThemedCake_360x.jpg",
      "./Baby Shower cakes/0001_BabyStrollerCake_360x.jpg"
    ],
    "description": "Fluffy clouds and star fondant decorations on soft vanilla bean cake."
  },
  {
    "id": "prod-11",
    "title": "Crispy Almond Snaps (Pack of 12)",
    "category": "specialty",
    "price": 220,
    "weight": "250g",
    "variants": [
      {
        "weight": "250g",
        "price": 220
      },
      {
        "weight": "500g",
        "price": 400
      },
      {
        "weight": "1 kg",
        "price": 750
      }
    ],
    "isVeg": true,
    "image": "./Birthday cakes for her/almond-snaps-12pc.jpg",
    "gallery": [
      "./Birthday cakes for her/almond-snaps-12pc.jpg",
      "./Birthday cakes for her/Kunafa-Bites_jpg.jpg"
    ],
    "description": "Handcrafted roasted almond thin cookies baked to golden perfection."
  },
  {
    "id": "prod-12",
    "title": "Authentic Kunafa Bites Box",
    "category": "specialty",
    "price": 340,
    "weight": "300g",
    "variants": [
      {
        "weight": "300g",
        "price": 340
      },
      {
        "weight": "500g",
        "price": 550
      },
      {
        "weight": "1 kg",
        "price": 1000
      }
    ],
    "isVeg": true,
    "image": "./Birthday cakes for her/Kunafa-Bites_jpg.jpg",
    "gallery": [
      "./Birthday cakes for her/Kunafa-Bites_jpg.jpg",
      "./Birthday cakes for her/almond-snaps-12pc.jpg"
    ],
    "description": "Middle-Eastern dessert crisp filled with sweet cheese and pistachios."
  },
  {
    "id": "prod-13",
    "title": "The Crown Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0000_cake_0014_TheCrownCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0000_cake_0014_TheCrownCake_360x 2.png"
    ],
    "description": "Delicious handcrafted The Crown Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-14",
    "title": "Fitness Freak Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0001s_0013_FitnessFreakCake_360x 3.png",
    "gallery": [
      "./Birthday cakes for her/0001s_0013_FitnessFreakCake_360x 3.png"
    ],
    "description": "Delicious handcrafted Fitness Freak Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-15",
    "title": "Mermaid Tail Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0001s_0059_MermaidTailCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0001s_0059_MermaidTailCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Mermaid Tail Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-16",
    "title": "Barbie Pink Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0002s_0021_Barbie-Pink-Cake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0002s_0021_Barbie-Pink-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Barbie Pink Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-17",
    "title": "Barbie Dress Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0002s_0022_Barbie-Dress-Cake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0002s_0022_Barbie-Dress-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Barbie Dress Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-18",
    "title": "Frozen Enchantment Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0003s_0006_FrozenEnchantmentCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0003s_0006_FrozenEnchantmentCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Frozen Enchantment Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-19",
    "title": "Dancing Doll Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0003s_0010_DancingDollCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0003s_0010_DancingDollCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Dancing Doll Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-20",
    "title": "Barbie Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0003s_0017_BarbieCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0003s_0017_BarbieCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Barbie Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-21",
    "title": "Yellow Unicorn Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0003s_0030_YellowUnicornCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0003s_0030_YellowUnicornCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Yellow Unicorn Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-22",
    "title": "Unicorn Dreams Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0003s_0033_UnicornDreamsCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0003s_0033_UnicornDreamsCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Unicorn Dreams Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-23",
    "title": "Teddy Rose Garden Cake A6d74cab A8b6 4d0a 906a E570fb349711",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0003s_0043_TeddyRoseGardenCake_a6d74cab-a8b6-4d0a-906a-e570fb349711_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0003s_0043_TeddyRoseGardenCake_a6d74cab-a8b6-4d0a-906a-e570fb349711_360x 2.png"
    ],
    "description": "Delicious handcrafted Teddy Rose Garden Cake A6d74cab A8b6 4d0a 906a E570fb349711 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-24",
    "title": "0005 Pastel Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0005_PastelCake_360x 3.png",
    "gallery": [
      "./Birthday cakes for her/0005_PastelCake_360x 3.png"
    ],
    "description": "Delicious handcrafted 0005 Pastel Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-25",
    "title": "Tiara Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0005_cake_0009_TiaraCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0005_cake_0009_TiaraCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Tiara Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-26",
    "title": "0015 Pink Roses Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0015_PinkRosesCake_2_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0015_PinkRosesCake_2_360x 2.png"
    ],
    "description": "Delicious handcrafted 0015 Pink Roses Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-27",
    "title": "Candyland Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0018_CustomiseCakeWebsiteImages_0052_CandylandCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0018_CustomiseCakeWebsiteImages_0052_CandylandCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Candyland Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-28",
    "title": "Elegant Floral Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0020_CustomiseCakeWebsiteImages_0050_Elegant-Floral-Cake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0020_CustomiseCakeWebsiteImages_0050_Elegant-Floral-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Elegant Floral Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-29",
    "title": "2tier Butterfly Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0031_CustomiseCakeWebsiteImages_0039_2TierButterflyCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0031_CustomiseCakeWebsiteImages_0039_2TierButterflyCake_360x 2.png"
    ],
    "description": "Delicious handcrafted 2tier Butterfly Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-30",
    "title": "Blue Ripples Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0068_CustomiseCakeWebsiteImages_0002_BlueRipplesCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0068_CustomiseCakeWebsiteImages_0002_BlueRipplesCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Blue Ripples Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-31",
    "title": "Floral Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0069_CustomiseCakeWebsiteImages_0001_FloralCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0069_CustomiseCakeWebsiteImages_0001_FloralCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Floral Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-32",
    "title": "Calvin Klein Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0102_cake_0139_CalvinKleinCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0102_cake_0139_CalvinKleinCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Calvin Klein Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-33",
    "title": "Cinderella Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0111_cake_0130_CinderellaCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0111_cake_0130_CinderellaCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Cinderella Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-34",
    "title": "Fashionista Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0126_cake_0115_FashionistaCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0126_cake_0115_FashionistaCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Fashionista Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-35",
    "title": "Golden Birthday Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0143_cake_0098_GoldenBirthdayCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0143_cake_0098_GoldenBirthdayCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Golden Birthday Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-36",
    "title": "Macaron Flower Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0173_cake_0068_MacaronFlowerCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0173_cake_0068_MacaronFlowerCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Macaron Flower Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-37",
    "title": "Macaron Magic Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0174_cake_0067_MacaronMagicCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0174_cake_0067_MacaronMagicCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Macaron Magic Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-38",
    "title": "Makeup Lovers Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0177_cake_0064_MakeupLoversCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0177_cake_0064_MakeupLoversCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Makeup Lovers Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-39",
    "title": "Makeup Set Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/0178_cake_0063_MakeupSetCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/0178_cake_0063_MakeupSetCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Makeup Set Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-40",
    "title": "Mac Beauty Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/MAC_Beauty_Cake_-_Smoor-4709568_360x 1.png",
    "gallery": [
      "./Birthday cakes for her/MAC_Beauty_Cake_-_Smoor-4709568_360x 1.png"
    ],
    "description": "Delicious handcrafted Mac Beauty Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-41",
    "title": "70 Th Flower Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/Newcakes__0053_70_th_Flower_Cake_360x 3.png",
    "gallery": [
      "./Birthday cakes for her/Newcakes__0053_70_th_Flower_Cake_360x 3.png"
    ],
    "description": "Delicious handcrafted 70 Th Flower Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-42",
    "title": "18 Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/Newcakes__0054_18_Cake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/Newcakes__0054_18_Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted 18 Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-43",
    "title": "Tier Flower Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/Newcakes__0057_2_Tier_Flower_Cake_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/Newcakes__0057_2_Tier_Flower_Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Tier Flower Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-44",
    "title": "Princess Ruffle Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/Princess_Ruffle_Cake_-_Smoor-4710088_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/Princess_Ruffle_Cake_-_Smoor-4710088_360x 2.png"
    ],
    "description": "Delicious handcrafted Princess Ruffle Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-45",
    "title": "Super Girl Cake",
    "category": "birthday-her",
    "price": 650,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 650
      },
      {
        "weight": "1.5 kg",
        "price": 943
      },
      {
        "weight": "2 kg",
        "price": 1203
      }
    ],
    "image": "./Birthday cakes for her/Super_Girl_Cake_-_Smoor-4710429_360x 2.png",
    "gallery": [
      "./Birthday cakes for her/Super_Girl_Cake_-_Smoor-4710429_360x 2.png"
    ],
    "description": "Delicious handcrafted Super Girl Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-46",
    "title": "The Lamborghini Cake",
    "category": "birthday-him",
    "price": 750,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 750
      },
      {
        "weight": "1.5 kg",
        "price": 1088
      },
      {
        "weight": "2 kg",
        "price": 1388
      }
    ],
    "image": "./Birthday cakes for him/0001_cake_0013_TheLamborghiniCake_360x 3.png",
    "gallery": [
      "./Birthday cakes for him/0001_cake_0013_TheLamborghiniCake_360x 3.png"
    ],
    "description": "Delicious handcrafted The Lamborghini Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-47",
    "title": "Rocketing Astronaut Cake",
    "category": "birthday-him",
    "price": 750,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 750
      },
      {
        "weight": "1.5 kg",
        "price": 1088
      },
      {
        "weight": "2 kg",
        "price": 1388
      }
    ],
    "image": "./Birthday cakes for him/0001s_0006_RocketingAstronautCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for him/0001s_0006_RocketingAstronautCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Rocketing Astronaut Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-48",
    "title": "Manchester United Cake",
    "category": "birthday-him",
    "price": 750,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 750
      },
      {
        "weight": "1.5 kg",
        "price": 1088
      },
      {
        "weight": "2 kg",
        "price": 1388
      }
    ],
    "image": "./Birthday cakes for him/0001s_0007_ManchesterUnitedCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for him/0001s_0007_ManchesterUnitedCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Manchester United Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-49",
    "title": "Gamers X Box Cake",
    "category": "birthday-him",
    "price": 750,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 750
      },
      {
        "weight": "1.5 kg",
        "price": 1088
      },
      {
        "weight": "2 kg",
        "price": 1388
      }
    ],
    "image": "./Birthday cakes for him/0001s_0010_GamersX-BoxCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for him/0001s_0010_GamersX-BoxCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Gamers X Box Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-50",
    "title": "Football Jersey Cake",
    "category": "birthday-him",
    "price": 750,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 750
      },
      {
        "weight": "1.5 kg",
        "price": 1088
      },
      {
        "weight": "2 kg",
        "price": 1388
      }
    ],
    "image": "./Birthday cakes for him/0001s_0011_FootballJerseyCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for him/0001s_0011_FootballJerseyCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Football Jersey Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-51",
    "title": "Football Cake",
    "category": "birthday-him",
    "price": 750,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 750
      },
      {
        "weight": "1.5 kg",
        "price": 1088
      },
      {
        "weight": "2 kg",
        "price": 1388
      }
    ],
    "image": "./Birthday cakes for him/0001s_0012_FootballCake_360x 2.png",
    "gallery": [
      "./Birthday cakes for him/0001s_0012_FootballCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Football Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-52",
    "title": "Cricket Craze Cake",
    "category": "birthday-him",
    "price": 750,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 750
      },
      {
        "weight": "1.5 kg",
        "price": 1088
      },
      {
        "weight": "2 kg",
        "price": 1388
      }
    ],
    "image": "./Birthday cakes for him/0001s_0014_CricketCrazeCake_360x 3.png",
    "gallery": [
      "./Birthday cakes for him/0001s_0014_CricketCrazeCake_360x 3.png"
    ],
    "description": "Delicious handcrafted Cricket Craze Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-53",
    "title": "Arsenal Cake",
    "category": "birthday-him",
    "price": 750,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 750
      },
      {
        "weight": "1.5 kg",
        "price": 1088
      },
      {
        "weight": "2 kg",
        "price": 1388
      }
    ],
    "image": "./Birthday cakes for him/0016_CustomiseCakeWebsiteImages_0054_Arsenal-Cake_360x 4.png",
    "gallery": [
      "./Birthday cakes for him/0016_CustomiseCakeWebsiteImages_0054_Arsenal-Cake_360x 4.png"
    ],
    "description": "Delicious handcrafted Arsenal Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-54",
    "title": "Avengers Cake",
    "category": "birthday-him",
    "price": 750,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 750
      },
      {
        "weight": "1.5 kg",
        "price": 1088
      },
      {
        "weight": "2 kg",
        "price": 1388
      }
    ],
    "image": "./Birthday cakes for him/0017_CustomiseCakeWebsiteImages_0053_Avengers-Cake_360x 4.png",
    "gallery": [
      "./Birthday cakes for him/0017_CustomiseCakeWebsiteImages_0053_Avengers-Cake_360x 4.png"
    ],
    "description": "Delicious handcrafted Avengers Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-55",
    "title": "The Fitness Freak Cake",
    "category": "birthday-him",
    "price": 750,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 750
      },
      {
        "weight": "1.5 kg",
        "price": 1088
      },
      {
        "weight": "2 kg",
        "price": 1388
      }
    ],
    "image": "./Birthday cakes for him/0049_CustomiseCakeWebsiteImages_0021_The-Fitness-freak-Cake_360x 2.png",
    "gallery": [
      "./Birthday cakes for him/0049_CustomiseCakeWebsiteImages_0021_The-Fitness-freak-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted The Fitness Freak Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-56",
    "title": "Lightning Mc Queen Cake",
    "category": "birthday-him",
    "price": 750,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 750
      },
      {
        "weight": "1.5 kg",
        "price": 1088
      },
      {
        "weight": "2 kg",
        "price": 1388
      }
    ],
    "image": "./Birthday cakes for him/Lightning_McQueen_Cake_-_Smoor-4709429_360x 2.png",
    "gallery": [
      "./Birthday cakes for him/Lightning_McQueen_Cake_-_Smoor-4709429_360x 2.png"
    ],
    "description": "Delicious handcrafted Lightning Mc Queen Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-57",
    "title": "Bow Tie Cake",
    "category": "birthday-him",
    "price": 750,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 750
      },
      {
        "weight": "1.5 kg",
        "price": 1088
      },
      {
        "weight": "2 kg",
        "price": 1388
      }
    ],
    "image": "./Birthday cakes for him/Newcakes__0046_Bow_Tie_Cake_360x 2.png",
    "gallery": [
      "./Birthday cakes for him/Newcakes__0046_Bow_Tie_Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Bow Tie Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-58",
    "title": "0000 Wedding Flower Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0000_WeddingFlowerCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0000_WeddingFlowerCake_360x 2.png"
    ],
    "description": "Delicious handcrafted 0000 Wedding Flower Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-59",
    "title": "0001 Wedding Bells Macaron Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0001_WeddingBellsMacaronCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0001_WeddingBellsMacaronCake_360x 2.png"
    ],
    "description": "Delicious handcrafted 0001 Wedding Bells Macaron Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-60",
    "title": "0003 Roses Anniversary Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0003_RosesAnniversaryCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0003_RosesAnniversaryCake_360x 2.png"
    ],
    "description": "Delicious handcrafted 0003 Roses Anniversary Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-61",
    "title": "The Perfect Pair Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0003_cake_0011_ThePerfectPairCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0003_cake_0011_ThePerfectPairCake_360x 2.png"
    ],
    "description": "Delicious handcrafted The Perfect Pair Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-62",
    "title": "Rose Garden Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0003s_0047_RoseGardenCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0003s_0047_RoseGardenCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Rose Garden Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-63",
    "title": "0004 Pastel Roses Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0004_PastelRosesCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0004_PastelRosesCake_360x 2.png"
    ],
    "description": "Delicious handcrafted 0004 Pastel Roses Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-64",
    "title": "0011 Floral Marble Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0011_FloralMarbleCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0011_FloralMarbleCake_360x 2.png"
    ],
    "description": "Delicious handcrafted 0011 Floral Marble Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-65",
    "title": "0012 Floral3tier Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0012_Floral3TierCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0012_Floral3TierCake_360x 2.png"
    ],
    "description": "Delicious handcrafted 0012 Floral3tier Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-66",
    "title": "0013 Floral2tier Wedding Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0013_Floral2TierWeddingCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0013_Floral2TierWeddingCake_360x 2.png"
    ],
    "description": "Delicious handcrafted 0013 Floral2tier Wedding Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-67",
    "title": "Wedding Vows Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0013_cake_0001_WeddingVowsCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0013_cake_0001_WeddingVowsCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Wedding Vows Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-68",
    "title": "0014 Fairy Tale Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0014_FairyTaleCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0014_FairyTaleCake_360x 2.png"
    ],
    "description": "Delicious handcrafted 0014 Fairy Tale Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-69",
    "title": "Blooming Anniversary Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0051_CustomiseCakeWebsiteImages_0019_BloomingAnniversaryCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0051_CustomiseCakeWebsiteImages_0019_BloomingAnniversaryCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Blooming Anniversary Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-70",
    "title": "Tier Fondant Wedding Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0052_CustomiseCakeWebsiteImages_0018_3-Tier-Fondant-Wedding-Cake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0052_CustomiseCakeWebsiteImages_0018_3-Tier-Fondant-Wedding-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Tier Fondant Wedding Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-71",
    "title": "Golden White Floral Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0053_CustomiseCakeWebsiteImages_0017_Golden-White-Floral-Cake_360x 3.png",
    "gallery": [
      "./Engagement, wedding cakes/0053_CustomiseCakeWebsiteImages_0017_Golden-White-Floral-Cake_360x 3.png"
    ],
    "description": "Delicious handcrafted Golden White Floral Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-72",
    "title": "Lavieenrosecake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0059_CustomiseCakeWebsiteImages_0011_LAVIEENROSECAKE_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0059_CustomiseCakeWebsiteImages_0011_LAVIEENROSECAKE_360x 2.png"
    ],
    "description": "Delicious handcrafted Lavieenrosecake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-73",
    "title": "3tier Wedding Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0078_cake_0163_3TierWeddingCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0078_cake_0163_3TierWeddingCake_360x 2.png"
    ],
    "description": "Delicious handcrafted 3tier Wedding Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-74",
    "title": "Bouquet Wedding Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0099_cake_0142_BouquetWeddingCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0099_cake_0142_BouquetWeddingCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Bouquet Wedding Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-75",
    "title": "Bridal Shower Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0100_cake_0141_BridalShowerCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0100_cake_0141_BridalShowerCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Bridal Shower Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-76",
    "title": "Brown Rose Wall Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0101_cake_0140_BrownRoseWallCake_360x 3.png",
    "gallery": [
      "./Engagement, wedding cakes/0101_cake_0140_BrownRoseWallCake_360x 3.png"
    ],
    "description": "Delicious handcrafted Brown Rose Wall Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-77",
    "title": "Decadent Chocolate Rose Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0117_cake_0124_DecadentChocolateRoseCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0117_cake_0124_DecadentChocolateRoseCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Decadent Chocolate Rose Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-78",
    "title": "Elegant Flower Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0121_cake_0120_ElegantFlowerCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0121_cake_0120_ElegantFlowerCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Elegant Flower Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-79",
    "title": "Elegant Wedding Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0122_cake_0119_ElegantWeddingCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0122_cake_0119_ElegantWeddingCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Elegant Wedding Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-80",
    "title": "Flutter Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0136_cake_0105_FlutterCake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0136_cake_0105_FlutterCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Flutter Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-81",
    "title": "Img 20221218 153945",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0158_cake_0083_IMG_20221218_153945_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0158_cake_0083_IMG_20221218_153945_360x 2.png"
    ],
    "description": "Delicious handcrafted Img 20221218 153945 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-82",
    "title": "Layer 14",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0165_cake_0076_Layer-14_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/0165_cake_0076_Layer-14_360x 2.png"
    ],
    "description": "Delicious handcrafted Layer 14 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-83",
    "title": "Layer 19",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0166_cake_0075_Layer-19_360x 3.png",
    "gallery": [
      "./Engagement, wedding cakes/0166_cake_0075_Layer-19_360x 3.png"
    ],
    "description": "Delicious handcrafted Layer 19 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-84",
    "title": "Macaron Drip Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/0171_cake_0070_MacaronDripCake_360x 3.png",
    "gallery": [
      "./Engagement, wedding cakes/0171_cake_0070_MacaronDripCake_360x 3.png"
    ],
    "description": "Delicious handcrafted Macaron Drip Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-85",
    "title": "Blue Haven Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Blue_Haven_Cake_-_Smoor-4708179_360x 1.png",
    "gallery": [
      "./Engagement, wedding cakes/Blue_Haven_Cake_-_Smoor-4708179_360x 1.png"
    ],
    "description": "Delicious handcrafted Blue Haven Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-86",
    "title": "Crimson Cascade Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Crimson_Cascade_Cake_-_Smoor-4708671_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Crimson_Cascade_Cake_-_Smoor-4708671_360x 2.png"
    ],
    "description": "Delicious handcrafted Crimson Cascade Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-87",
    "title": "Emerald Enchantment",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Emerald_Enchantment_-_Smoor-4708876_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Emerald_Enchantment_-_Smoor-4708876_360x 2.png"
    ],
    "description": "Delicious handcrafted Emerald Enchantment baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-88",
    "title": "Engagement Ring Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Engagement_Ring_Cake_-_Smoor-4708887_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Engagement_Ring_Cake_-_Smoor-4708887_360x 2.png"
    ],
    "description": "Delicious handcrafted Engagement Ring Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-89",
    "title": "Lavender Royale Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Lavender_Royale_Cake_-_Smoor-4709417_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Lavender_Royale_Cake_-_Smoor-4709417_360x 2.png"
    ],
    "description": "Delicious handcrafted Lavender Royale Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-90",
    "title": "Majestic Peacock Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Majestic_Peacock_Cake_-_Smoor-4709644_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Majestic_Peacock_Cake_-_Smoor-4709644_360x 2.png"
    ],
    "description": "Delicious handcrafted Majestic Peacock Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-91",
    "title": "Midnight Blush Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Midnight_Blush_Cake_-_Smoor-4709710_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Midnight_Blush_Cake_-_Smoor-4709710_360x 2.png"
    ],
    "description": "Delicious handcrafted Midnight Blush Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-92",
    "title": "Levels1",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Newcakes__0006_Levels1_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Newcakes__0006_Levels1_360x 2.png"
    ],
    "description": "Delicious handcrafted Levels1 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-93",
    "title": "Pink Layered Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Newcakes__0011_Pink_Layered_Cake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Newcakes__0011_Pink_Layered_Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Pink Layered Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-94",
    "title": "Pastel Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Newcakes__0016_Pastel_cake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Newcakes__0016_Pastel_cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Pastel Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-95",
    "title": "Painted Floral Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Newcakes__0018_Painted_floral_cake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Newcakes__0018_Painted_floral_cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Painted Floral Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-96",
    "title": "Blue Wedding Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Newcakes__0047_Blue_Wedding_Cake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Newcakes__0047_Blue_Wedding_Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Blue Wedding Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-97",
    "title": "Anniversary Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Newcakes__0051_Anniversary_Cake_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Newcakes__0051_Anniversary_Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Anniversary Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-98",
    "title": "Orchids Wedding Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Orchids_Wedding_Cake_-_Smoor-4709873_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Orchids_Wedding_Cake_-_Smoor-4709873_360x 2.png"
    ],
    "description": "Delicious handcrafted Orchids Wedding Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-99",
    "title": "Origami Rose Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Origami_Rose_Cake_-_Smoor-4709879_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Origami_Rose_Cake_-_Smoor-4709879_360x 2.png"
    ],
    "description": "Delicious handcrafted Origami Rose Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-100",
    "title": "Royal Blossom Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Royal_Blossom_Cake_-_Smoor-4710212_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Royal_Blossom_Cake_-_Smoor-4710212_360x 2.png"
    ],
    "description": "Delicious handcrafted Royal Blossom Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-101",
    "title": "Whimsical Elegance Cake",
    "category": "wedding",
    "price": 1450,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 1450
      },
      {
        "weight": "1.5 kg",
        "price": 2103
      },
      {
        "weight": "2 kg",
        "price": 2683
      }
    ],
    "image": "./Engagement, wedding cakes/Whimsical_Elegance_Cake_-_Smoor-4711686_360x 2.png",
    "gallery": [
      "./Engagement, wedding cakes/Whimsical_Elegance_Cake_-_Smoor-4711686_360x 2.png"
    ],
    "description": "Delicious handcrafted Whimsical Elegance Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-102",
    "title": "The Cricket Fanatic Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0001s_0001_TheCricketFanaticCake_360x 3.png",
    "gallery": [
      "./Kids Birthday cake/0001s_0001_TheCricketFanaticCake_360x 3.png"
    ],
    "description": "Delicious handcrafted The Cricket Fanatic Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-103",
    "title": "Spiderman Web Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0001s_0003_Spiderman-Web-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0001s_0003_Spiderman-Web-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Spiderman Web Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-104",
    "title": "Spider Man Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0001s_0004_SpiderManCake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0001s_0004_SpiderManCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Spider Man Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-105",
    "title": "Golden State Warriors Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0001s_0009_GoldenStateWarriorsCake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0001s_0009_GoldenStateWarriorsCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Golden State Warriors Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-106",
    "title": "Tier Prince Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0001s_0015_3-Tier-Prince-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0001s_0015_3-Tier-Prince-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Tier Prince Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-107",
    "title": "The Cars Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0001s_0016_The-Cars-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0001s_0016_The-Cars-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted The Cars Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-108",
    "title": "Lilo And Stitch Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0001s_0060_Lilo-and-Stitch-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0001s_0060_Lilo-and-Stitch-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Lilo And Stitch Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-109",
    "title": "Jungle Mania Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0004_Jungle-Mania-Cake_360x 3.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0004_Jungle-Mania-Cake_360x 3.png"
    ],
    "description": "Delicious handcrafted Jungle Mania Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-110",
    "title": "Hello Kitty Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0005_Hello-Kitty-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0005_Hello-Kitty-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Hello Kitty Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-111",
    "title": "Fluttering Feline Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0007_FlutteringFelineCake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0007_FlutteringFelineCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Fluttering Feline Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-112",
    "title": "Elephant Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0009_Elephant-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0009_Elephant-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Elephant Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-113",
    "title": "Boss Baby Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0014_BossBabyCake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0014_BossBabyCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Boss Baby Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-114",
    "title": "Bird Flower Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0015_Bird-Flower-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0015_Bird-Flower-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Bird Flower Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-115",
    "title": "Beautiful Unicorn Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0016_BeautifulUnicornCake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0016_BeautifulUnicornCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Beautiful Unicorn Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-116",
    "title": "Animal Print Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0021_Animal-Print-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0021_Animal-Print-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Animal Print Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-117",
    "title": "Animal Party Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0022_Animal-party-Cake_360x 3.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0022_Animal-party-Cake_360x 3.png"
    ],
    "description": "Delicious handcrafted Animal Party Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-118",
    "title": "Animal Enchantment Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0023_Animal-Enchantment-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0023_Animal-Enchantment-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Animal Enchantment Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-119",
    "title": "Tier Unicorn Rainbow Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0027_2-Tier-Unicorn-Rainbow-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0027_2-Tier-Unicorn-Rainbow-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Tier Unicorn Rainbow Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-120",
    "title": "Winnie Friends Cake 2a9dd8c1 2b8f 4efd Bd3f 51c4406071af",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0031_Winnie-_-Friends-Cake_2a9dd8c1-2b8f-4efd-bd3f-51c4406071af_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0031_Winnie-_-Friends-Cake_2a9dd8c1-2b8f-4efd-bd3f-51c4406071af_360x 2.png"
    ],
    "description": "Delicious handcrafted Winnie Friends Cake 2a9dd8c1 2b8f 4efd Bd3f 51c4406071af baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-121",
    "title": "Twinkling Star Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0036_TwinklingStarCake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0036_TwinklingStarCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Twinkling Star Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-122",
    "title": "Transportation Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0037_Transportation-Cake_360x 4.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0037_Transportation-Cake_360x 4.png"
    ],
    "description": "Delicious handcrafted Transportation Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-123",
    "title": "Train Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0038_Train-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0038_Train-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Train Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-124",
    "title": "Thomas The Train Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0040_Thomas-The-Train-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0040_Thomas-The-Train-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Thomas The Train Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-125",
    "title": "Teddy Half Birthday Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0044_TeddyHalfBirthdayCake_360x 4.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0044_TeddyHalfBirthdayCake_360x 4.png"
    ],
    "description": "Delicious handcrafted Teddy Half Birthday Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-126",
    "title": "Red Angrybird Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0048_RedAngrybirdCake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0048_RedAngrybirdCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Red Angrybird Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-127",
    "title": "Pink Unicorn Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0003s_0050_Pink-Unicorn-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0003s_0050_Pink-Unicorn-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Pink Unicorn Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-128",
    "title": "Babyontheway Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0004s_0004_BabyonthewayCake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0004s_0004_BabyonthewayCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Babyontheway Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-129",
    "title": "Chocolate Lovers Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0019_CustomiseCakeWebsiteImages_0051_Chocolate-lovers-cake_360x 4.png",
    "gallery": [
      "./Kids Birthday cake/0019_CustomiseCakeWebsiteImages_0051_Chocolate-lovers-cake_360x 4.png"
    ],
    "description": "Delicious handcrafted Chocolate Lovers Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-130",
    "title": "Hulk Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0021_CustomiseCakeWebsiteImages_0049_Hulk-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0021_CustomiseCakeWebsiteImages_0049_Hulk-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Hulk Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-131",
    "title": "The Transport Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0026_CustomiseCakeWebsiteImages_0044_The-Transport-Cake_360x 4.png",
    "gallery": [
      "./Kids Birthday cake/0026_CustomiseCakeWebsiteImages_0044_The-Transport-Cake_360x 4.png"
    ],
    "description": "Delicious handcrafted The Transport Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-132",
    "title": "Unicorn Magic Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0027_CustomiseCakeWebsiteImages_0043_Unicorn-Magic-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0027_CustomiseCakeWebsiteImages_0043_Unicorn-Magic-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Unicorn Magic Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-133",
    "title": "Underwater Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0037_CustomiseCakeWebsiteImages_0033_Underwater-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0037_CustomiseCakeWebsiteImages_0033_Underwater-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Underwater Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-134",
    "title": "Tier Pink Theme Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0064_CustomiseCakeWebsiteImages_0006_2-Tier-Pink-theme-Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0064_CustomiseCakeWebsiteImages_0006_2-Tier-Pink-theme-Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Tier Pink Theme Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-135",
    "title": "Harry Porter Theme Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0149_cake_0092_HarryPorterThemeCake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0149_cake_0092_HarryPorterThemeCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Harry Porter Theme Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-136",
    "title": "Harry Potter Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0150_cake_0091_HarryPotterCake_360x 4.png",
    "gallery": [
      "./Kids Birthday cake/0150_cake_0091_HarryPotterCake_360x 4.png"
    ],
    "description": "Delicious handcrafted Harry Potter Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-137",
    "title": "Superman Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/0218_cake_0023_SupermanCake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/0218_cake_0023_SupermanCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Superman Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-138",
    "title": "Barnyard Bash Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/Barnyard_Bash_Cake_-_Smoor-4708097_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/Barnyard_Bash_Cake_-_Smoor-4708097_360x 2.png"
    ],
    "description": "Delicious handcrafted Barnyard Bash Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-139",
    "title": "Bunnies Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/Bunnies_Cake_-_Smoor-4708280_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/Bunnies_Cake_-_Smoor-4708280_360x 2.png"
    ],
    "description": "Delicious handcrafted Bunnies Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-140",
    "title": "Roblox Fun Cake 3e3756c2 0821 4480 Ad36 F0eb8c15c1da",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/Newcakes__0005_Roblox_Fun_Cake_3e3756c2-0821-4480-ad36-f0eb8c15c1da_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/Newcakes__0005_Roblox_Fun_Cake_3e3756c2-0821-4480-ad36-f0eb8c15c1da_360x 2.png"
    ],
    "description": "Delicious handcrafted Roblox Fun Cake 3e3756c2 0821 4480 Ad36 F0eb8c15c1da baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-141",
    "title": "Animal Farm Cake",
    "category": "birthday-him",
    "price": 680,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 680
      },
      {
        "weight": "1.5 kg",
        "price": 986
      },
      {
        "weight": "2 kg",
        "price": 1258
      }
    ],
    "image": "./Kids Birthday cake/Newcakes__0052_Animal_Farm_Cake_360x 2.png",
    "gallery": [
      "./Kids Birthday cake/Newcakes__0052_Animal_Farm_Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Animal Farm Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-142",
    "title": "Space Themed Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0001s_0005_SpaceThemedCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0001s_0005_SpaceThemedCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Space Themed Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-143",
    "title": "Grandpa Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0001s_0008_GrandpaCake_360x 3.png",
    "gallery": [
      "./Theme cakes/0001s_0008_GrandpaCake_360x 3.png"
    ],
    "description": "Delicious handcrafted Grandpa Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-144",
    "title": "Mini Cooper Car Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0001s_0056_MiniCooperCarCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0001s_0056_MiniCooperCarCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Mini Cooper Car Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-145",
    "title": "0002 Kit Kat Teddy Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0002_Kit-KatTeddyCake_360x 3.png",
    "gallery": [
      "./Theme cakes/0002_Kit-KatTeddyCake_360x 3.png"
    ],
    "description": "Delicious handcrafted 0002 Kit Kat Teddy Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-146",
    "title": "The News Flash Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0002_cake_0012_TheNewsFlashCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0002_cake_0012_TheNewsFlashCake_360x 2.png"
    ],
    "description": "Delicious handcrafted The News Flash Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-147",
    "title": "Elsa And Anna Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0003s_0008_Elsa_and_Anna_Cake_360x 2.png",
    "gallery": [
      "./Theme cakes/0003s_0008_Elsa_and_Anna_Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Elsa And Anna Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-148",
    "title": "Candy Macaron Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0003s_0012_CandyMacaronCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0003s_0012_CandyMacaronCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Candy Macaron Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-149",
    "title": "2tier Teddy Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0003s_0029_2TierTeddyCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0003s_0029_2TierTeddyCake_360x 2.png"
    ],
    "description": "Delicious handcrafted 2tier Teddy Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-150",
    "title": "Underwater Themed Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0003s_0035_UnderwaterThemedCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0003s_0035_UnderwaterThemedCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Underwater Themed Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-151",
    "title": "Pokeball Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0003s_0049_PokeballCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0003s_0049_PokeballCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Pokeball Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-152",
    "title": "Pineapple Theme Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0003s_0051_PineappleThemeCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0003s_0051_PineappleThemeCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Pineapple Theme Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-153",
    "title": "Versatile Subtle Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0009_cake_0005_VersatileSubtleCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0009_cake_0005_VersatileSubtleCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Versatile Subtle Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-154",
    "title": "Wanderlust Adventure Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0010_cake_0004_WanderlustAdventureCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0010_cake_0004_WanderlustAdventureCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Wanderlust Adventure Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-155",
    "title": "Space Explorer Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0022_CustomiseCakeWebsiteImages_0048_Space-Explorer-Cake_360x 3.png",
    "gallery": [
      "./Theme cakes/0022_CustomiseCakeWebsiteImages_0048_Space-Explorer-Cake_360x 3.png"
    ],
    "description": "Delicious handcrafted Space Explorer Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-156",
    "title": "The Artist Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0024_CustomiseCakeWebsiteImages_0046_The-Artist-Cake_360x 3.png",
    "gallery": [
      "./Theme cakes/0024_CustomiseCakeWebsiteImages_0046_The-Artist-Cake_360x 3.png"
    ],
    "description": "Delicious handcrafted The Artist Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-157",
    "title": "Goldenjubileecake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0056_CustomiseCakeWebsiteImages_0014_GOLDENJUBILEECAKE_360x 2.png",
    "gallery": [
      "./Theme cakes/0056_CustomiseCakeWebsiteImages_0014_GOLDENJUBILEECAKE_360x 2.png"
    ],
    "description": "Delicious handcrafted Goldenjubileecake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-158",
    "title": "Thechariotcake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0060_CustomiseCakeWebsiteImages_0010_THECHARIOTCAKE_360x 2.png",
    "gallery": [
      "./Theme cakes/0060_CustomiseCakeWebsiteImages_0010_THECHARIOTCAKE_360x 2.png"
    ],
    "description": "Delicious handcrafted Thechariotcake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-159",
    "title": "Appleofmy Eye Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0082_cake_0159_AppleofmyEyeCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0082_cake_0159_AppleofmyEyeCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Appleofmy Eye Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-160",
    "title": "Aquatic Adventure Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0083_cake_0158_AquaticAdventureCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0083_cake_0158_AquaticAdventureCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Aquatic Adventure Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-161",
    "title": "Black Gold Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0093_cake_0148_Black_GoldCake_360x 3.png",
    "gallery": [
      "./Theme cakes/0093_cake_0148_Black_GoldCake_360x 3.png"
    ],
    "description": "Delicious handcrafted Black Gold Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-162",
    "title": "Blue Macaron Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0095_cake_0146_BlueMacaronCake_360x 3.png",
    "gallery": [
      "./Theme cakes/0095_cake_0146_BlueMacaronCake_360x 3.png"
    ],
    "description": "Delicious handcrafted Blue Macaron Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-163",
    "title": "Book Lover S Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0097_cake_0144_BookLover_sCake_360x 3.png",
    "gallery": [
      "./Theme cakes/0097_cake_0144_BookLover_sCake_360x 3.png"
    ],
    "description": "Delicious handcrafted Book Lover S Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-164",
    "title": "Camera Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0103_cake_0138_CameraCake_360x 3.png",
    "gallery": [
      "./Theme cakes/0103_cake_0138_CameraCake_360x 3.png"
    ],
    "description": "Delicious handcrafted Camera Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-165",
    "title": "Carpenter S Tools Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0106_cake_0135_Carpenter_sToolsCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0106_cake_0135_Carpenter_sToolsCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Carpenter S Tools Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-166",
    "title": "Casinoand Poker Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0107_cake_0134_CasinoandPokerCake_360x 3.png",
    "gallery": [
      "./Theme cakes/0107_cake_0134_CasinoandPokerCake_360x 3.png"
    ],
    "description": "Delicious handcrafted Casinoand Poker Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-167",
    "title": "Celebration Pinata Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0108_cake_0133_CelebrationPinataCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0108_cake_0133_CelebrationPinataCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Celebration Pinata Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-168",
    "title": "Chocolate Love Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0109_cake_0132_ChocolateLoveCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0109_cake_0132_ChocolateLoveCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Chocolate Love Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-169",
    "title": "Doctor Theme Cake C9ce2aa2 B7ec 4a03 Bdfe A909fe0e296b",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0118_cake_0123_DoctorThemeCake_c9ce2aa2-b7ec-4a03-bdfe-a909fe0e296b_360x 3.png",
    "gallery": [
      "./Theme cakes/0118_cake_0123_DoctorThemeCake_c9ce2aa2-b7ec-4a03-bdfe-a909fe0e296b_360x 3.png"
    ],
    "description": "Delicious handcrafted Doctor Theme Cake C9ce2aa2 B7ec 4a03 Bdfe A909fe0e296b baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-170",
    "title": "Doctor Themed Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0119_cake_0122_DoctorThemedCake_360x 3.png",
    "gallery": [
      "./Theme cakes/0119_cake_0122_DoctorThemedCake_360x 3.png"
    ],
    "description": "Delicious handcrafted Doctor Themed Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-171",
    "title": "Dog Paw Cake C342740f D8b3 4a91 Afa9 Fbfd5a3076f4",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0120_cake_0121_Dog_PawCake_c342740f-d8b3-4a91-afa9-fbfd5a3076f4_360x 3.png",
    "gallery": [
      "./Theme cakes/0120_cake_0121_Dog_PawCake_c342740f-d8b3-4a91-afa9-fbfd5a3076f4_360x 3.png"
    ],
    "description": "Delicious handcrafted Dog Paw Cake C342740f D8b3 4a91 Afa9 Fbfd5a3076f4 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-172",
    "title": "Everything Chocolate Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0124_cake_0117_EverythingChocolateCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0124_cake_0117_EverythingChocolateCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Everything Chocolate Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-173",
    "title": "Floral Pastel Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0134_cake_0107_FloralPastelCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0134_cake_0107_FloralPastelCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Floral Pastel Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-174",
    "title": "Galaxy Macaron Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0141_cake_0100_GalaxyMacaronCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0141_cake_0100_GalaxyMacaronCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Galaxy Macaron Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-175",
    "title": "Graduate Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0147_cake_0094_GraduateCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0147_cake_0094_GraduateCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Graduate Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-176",
    "title": "Harry Potter Sorting Hat Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0152_cake_0089_HarryPotterSortingHatCake_360x 2.png",
    "gallery": [
      "./Theme cakes/0152_cake_0089_HarryPotterSortingHatCake_360x 2.png"
    ],
    "description": "Delicious handcrafted Harry Potter Sorting Hat Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-177",
    "title": "High Tea Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0153_cake_0088_HighTeaCake_360x 3.png",
    "gallery": [
      "./Theme cakes/0153_cake_0088_HighTeaCake_360x 3.png"
    ],
    "description": "Delicious handcrafted High Tea Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-178",
    "title": "Impeccable Women Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0159_cake_0082_ImpeccableWomenCake_360x 3.png",
    "gallery": [
      "./Theme cakes/0159_cake_0082_ImpeccableWomenCake_360x 3.png"
    ],
    "description": "Delicious handcrafted Impeccable Women Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-179",
    "title": "Instagram Lover S Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0160_cake_0081_InstagramLover_sCake_360x 3.png",
    "gallery": [
      "./Theme cakes/0160_cake_0081_InstagramLover_sCake_360x 3.png"
    ],
    "description": "Delicious handcrafted Instagram Lover S Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-180",
    "title": "Macaron F.r.i.e.n.d.s Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/0172_cake_0069_MacaronF.R.I.E.N.D.SCake_360x 3.png",
    "gallery": [
      "./Theme cakes/0172_cake_0069_MacaronF.R.I.E.N.D.SCake_360x 3.png"
    ],
    "description": "Delicious handcrafted Macaron F.r.i.e.n.d.s Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-181",
    "title": "B09db3e8 551a 439a B507 12b08bf80993",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/2_b09db3e8-551a-439a-b507-12b08bf80993 (1).png",
    "gallery": [
      "./Theme cakes/2_b09db3e8-551a-439a-b507-12b08bf80993 (1).png"
    ],
    "description": "Delicious handcrafted B09db3e8 551a 439a B507 12b08bf80993 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-182",
    "title": "40881027 Aa41 4f73 B5c6 F868910b421f",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/3_40881027-aa41-4f73-b5c6-f868910b421f (1).png",
    "gallery": [
      "./Theme cakes/3_40881027-aa41-4f73-b5c6-f868910b421f (1).png"
    ],
    "description": "Delicious handcrafted 40881027 Aa41 4f73 B5c6 F868910b421f baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-183",
    "title": "Almondcookiesticks",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Almondcookiesticks (1).jpg",
    "gallery": [
      "./Theme cakes/Almondcookiesticks (1).jpg"
    ],
    "description": "Delicious handcrafted Almondcookiesticks baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-184",
    "title": "Artistrylarge",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Artistrylarge (1).jpg",
    "gallery": [
      "./Theme cakes/Artistrylarge (1).jpg"
    ],
    "description": "Delicious handcrafted Artistrylarge baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-185",
    "title": "Celebration Pack Box Of 20",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/CELEBRATION-PACK-Box-of-20 (1).jpg",
    "gallery": [
      "./Theme cakes/CELEBRATION-PACK-Box-of-20 (1).jpg"
    ],
    "description": "Delicious handcrafted Celebration Pack Box Of 20 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-186",
    "title": "China Hamper Peacock 94be71f2 B871 4ec7 Baf6 Ad7f2e76d265",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/China-hamper---peacock_94be71f2-b871-4ec7-baf6-ad7f2e76d265 (1).jpg",
    "gallery": [
      "./Theme cakes/China-hamper---peacock_94be71f2-b871-4ec7-baf6-ad7f2e76d265 (1).jpg"
    ],
    "description": "Delicious handcrafted China Hamper Peacock 94be71f2 B871 4ec7 Baf6 Ad7f2e76d265 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-187",
    "title": "Choco Truffle 500 Gms",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Choco_Truffle_500_gms (1).jpg",
    "gallery": [
      "./Theme cakes/Choco_Truffle_500_gms (1).jpg"
    ],
    "description": "Delicious handcrafted Choco Truffle 500 Gms baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-188",
    "title": "Chocolate Nibbles Almond No Added Sugar",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/ChocolateNibblesAlmondNoAddedSugar (1).jpg",
    "gallery": [
      "./Theme cakes/ChocolateNibblesAlmondNoAddedSugar (1).jpg"
    ],
    "description": "Delicious handcrafted Chocolate Nibbles Almond No Added Sugar baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-189",
    "title": "Chocolate Nibbles Bright Berry Burst",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/ChocolateNibblesBrightBerryBurst_1 (1).jpg",
    "gallery": [
      "./Theme cakes/ChocolateNibblesBrightBerryBurst_1 (1).jpg"
    ],
    "description": "Delicious handcrafted Chocolate Nibbles Bright Berry Burst baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-190",
    "title": "Chocolate Nibbles Classic Podi",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/ChocolateNibblesClassicPodi (1).jpg",
    "gallery": [
      "./Theme cakes/ChocolateNibblesClassicPodi (1).jpg"
    ],
    "description": "Delicious handcrafted Chocolate Nibbles Classic Podi baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-191",
    "title": "Chocolate Nibbles Hazelnut Noadded Sugar",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/ChocolateNibblesHazelnutNoaddedSugar (1).jpg",
    "gallery": [
      "./Theme cakes/ChocolateNibblesHazelnutNoaddedSugar (1).jpg"
    ],
    "description": "Delicious handcrafted Chocolate Nibbles Hazelnut Noadded Sugar baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-192",
    "title": "Chocolate Nibbles Salted Mango",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/ChocolateNibblesSaltedMango (1).jpg",
    "gallery": [
      "./Theme cakes/ChocolateNibblesSaltedMango (1).jpg"
    ],
    "description": "Delicious handcrafted Chocolate Nibbles Salted Mango baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-193",
    "title": "Dsc0338",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/DSC0338 (1).jpg",
    "gallery": [
      "./Theme cakes/DSC0338 (1).jpg"
    ],
    "description": "Delicious handcrafted Dsc0338 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-194",
    "title": "Dates Dark",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Dates-Dark (1).jpg",
    "gallery": [
      "./Theme cakes/Dates-Dark (1).jpg"
    ],
    "description": "Delicious handcrafted Dates Dark baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-195",
    "title": "Eid Kunafa Bar",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Eid-Kunafa-Bar_jpg (1).jpg",
    "gallery": [
      "./Theme cakes/Eid-Kunafa-Bar_jpg (1).jpg"
    ],
    "description": "Delicious handcrafted Eid Kunafa Bar baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-196",
    "title": "Fruit Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/FRUIT_CAKE_1_jpg (1).jpg",
    "gallery": [
      "./Theme cakes/FRUIT_CAKE_1_jpg (1).jpg"
    ],
    "description": "Delicious handcrafted Fruit Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-197",
    "title": "Fathers Day 0004 Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/FathersDay_0004_Cake (1).jpg",
    "gallery": [
      "./Theme cakes/FathersDay_0004_Cake (1).jpg"
    ],
    "description": "Delicious handcrafted Fathers Day 0004 Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-198",
    "title": "Fathers Day 0007 Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/FathersDay_0007_Cake (1).jpg",
    "gallery": [
      "./Theme cakes/FathersDay_0007_Cake (1).jpg"
    ],
    "description": "Delicious handcrafted Fathers Day 0007 Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-199",
    "title": "Fathers Day 0012 Baileys",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Fathers_Day_0012_Baileys (1).jpg",
    "gallery": [
      "./Theme cakes/Fathers_Day_0012_Baileys (1).jpg"
    ],
    "description": "Delicious handcrafted Fathers Day 0012 Baileys baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-200",
    "title": "Fathers Day 0028 Chocolate Bar",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Fathers_Day_0028_Chocolate_Bar_1 (1).jpg",
    "gallery": [
      "./Theme cakes/Fathers_Day_0028_Chocolate_Bar_1 (1).jpg"
    ],
    "description": "Delicious handcrafted Fathers Day 0028 Chocolate Bar baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-201",
    "title": "Good Ol Pineapple Cake1",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Good-Ol-Pineapple-Cake1 (1).jpg",
    "gallery": [
      "./Theme cakes/Good-Ol-Pineapple-Cake1 (1).jpg"
    ],
    "description": "Delicious handcrafted Good Ol Pineapple Cake1 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-202",
    "title": "Group 1000005287",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Group_1000005287 (1).png",
    "gallery": [
      "./Theme cakes/Group_1000005287 (1).png"
    ],
    "description": "Delicious handcrafted Group 1000005287 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-203",
    "title": "Ironhillxsmoor",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/IRONHILLXSMOOR (1).jpg",
    "gallery": [
      "./Theme cakes/IRONHILLXSMOOR (1).jpg"
    ],
    "description": "Delicious handcrafted Ironhillxsmoor baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-204",
    "title": "Intense Dark",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Intense-Dark (1).jpg",
    "gallery": [
      "./Theme cakes/Intense-Dark (1).jpg"
    ],
    "description": "Delicious handcrafted Intense Dark baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-205",
    "title": "Jaggery Dark 70",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Jaggery-Dark-70 (1).jpg",
    "gallery": [
      "./Theme cakes/Jaggery-Dark-70 (1).jpg"
    ],
    "description": "Delicious handcrafted Jaggery Dark 70 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-206",
    "title": "Kunafa Bites",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Kunafa-Bites_jpg (1).jpg",
    "gallery": [
      "./Theme cakes/Kunafa-Bites_jpg (1).jpg"
    ],
    "description": "Delicious handcrafted Kunafa Bites baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-207",
    "title": "Lime And Coconut",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Lime-and-Coconut (1).jpg",
    "gallery": [
      "./Theme cakes/Lime-and-Coconut (1).jpg"
    ],
    "description": "Delicious handcrafted Lime And Coconut baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-208",
    "title": "Newbailey1500x2 0021 Smoor 13dec2434135",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newbailey1500x2_0021_Smoor_13Dec2434135 (1).jpg",
    "gallery": [
      "./Theme cakes/Newbailey1500x2_0021_Smoor_13Dec2434135 (1).jpg"
    ],
    "description": "Delicious handcrafted Newbailey1500x2 0021 Smoor 13dec2434135 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-209",
    "title": "Newbailey1500x2 0025 Smoor 13dec2434116",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newbailey1500x2_0025_Smoor_13Dec2434116 (1).jpg",
    "gallery": [
      "./Theme cakes/Newbailey1500x2_0025_Smoor_13Dec2434116 (1).jpg"
    ],
    "description": "Delicious handcrafted Newbailey1500x2 0025 Smoor 13dec2434116 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-210",
    "title": "Brightness Contrast1",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newcakes__0002_Brightness_Contrast1_360x 2.png",
    "gallery": [
      "./Theme cakes/Newcakes__0002_Brightness_Contrast1_360x 2.png"
    ],
    "description": "Delicious handcrafted Brightness Contrast1 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-211",
    "title": "Rock N Roll Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newcakes__0004_Rock__n_Roll_Cake_360x 3.png",
    "gallery": [
      "./Theme cakes/Newcakes__0004_Rock__n_Roll_Cake_360x 3.png"
    ],
    "description": "Delicious handcrafted Rock N Roll Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-212",
    "title": "Pirate Treasure Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newcakes__0009_Pirate_Treasure_Cake_360x 3.png",
    "gallery": [
      "./Theme cakes/Newcakes__0009_Pirate_Treasure_Cake_360x 3.png"
    ],
    "description": "Delicious handcrafted Pirate Treasure Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-213",
    "title": "Pink Pup Paradise Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newcakes__0010_Pink_Pup_Paradise_cake_360x 3.png",
    "gallery": [
      "./Theme cakes/Newcakes__0010_Pink_Pup_Paradise_cake_360x 3.png"
    ],
    "description": "Delicious handcrafted Pink Pup Paradise Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-214",
    "title": "Oceanic Delight Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newcakes__0021_Oceanic_Delight_Cake_360x 2.png",
    "gallery": [
      "./Theme cakes/Newcakes__0021_Oceanic_Delight_Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Oceanic Delight Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-215",
    "title": "Mushroom Fairy House Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newcakes__0023_Mushroom_Fairy_House_Cake_360x 3.png",
    "gallery": [
      "./Theme cakes/Newcakes__0023_Mushroom_Fairy_House_Cake_360x 3.png"
    ],
    "description": "Delicious handcrafted Mushroom Fairy House Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-216",
    "title": "Mine Craft Theme Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newcakes__0025_Mine_Craft_Theme_Cake_360x 2.png",
    "gallery": [
      "./Theme cakes/Newcakes__0025_Mine_Craft_Theme_Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Mine Craft Theme Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-217",
    "title": "Friends Celebration Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newcakes__0034_Friends_Celebration_Cake_360x 3.png",
    "gallery": [
      "./Theme cakes/Newcakes__0034_Friends_Celebration_Cake_360x 3.png"
    ],
    "description": "Delicious handcrafted Friends Celebration Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-218",
    "title": "Dark Knight Decadence",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newcakes__0041_Dark_Knight_Decadence_360x 3.png",
    "gallery": [
      "./Theme cakes/Newcakes__0041_Dark_Knight_Decadence_360x 3.png"
    ],
    "description": "Delicious handcrafted Dark Knight Decadence baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-219",
    "title": "Baby Elephant Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newcakes__0048_Baby_Elephant_Cake_360x 3.png",
    "gallery": [
      "./Theme cakes/Newcakes__0048_Baby_Elephant_Cake_360x 3.png"
    ],
    "description": "Delicious handcrafted Baby Elephant Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-220",
    "title": "B Ball Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newcakes__0049_B_Ball_Cake_360x 3.png",
    "gallery": [
      "./Theme cakes/Newcakes__0049_B_Ball_Cake_360x 3.png"
    ],
    "description": "Delicious handcrafted B Ball Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-221",
    "title": "Tier Macaron Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newcakes__0056_2_Tier_Macaron_Cake_360x 2.png",
    "gallery": [
      "./Theme cakes/Newcakes__0056_2_Tier_Macaron_Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Tier Macaron Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-222",
    "title": "Wine Cherry Theme Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Newcakes__0060_Wine___Cherry_Theme_Cake_360x 2.png",
    "gallery": [
      "./Theme cakes/Newcakes__0060_Wine___Cherry_Theme_Cake_360x 2.png"
    ],
    "description": "Delicious handcrafted Wine Cherry Theme Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-223",
    "title": "Orange Hops Dark70",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/OrangeHopsDark70 (1).jpg",
    "gallery": [
      "./Theme cakes/OrangeHopsDark70 (1).jpg"
    ],
    "description": "Delicious handcrafted Orange Hops Dark70 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-224",
    "title": "Painter S Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Painter_s_Cake_-_Smoor-4709887_360x 3.png",
    "gallery": [
      "./Theme cakes/Painter_s_Cake_-_Smoor-4709887_360x 3.png"
    ],
    "description": "Delicious handcrafted Painter S Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-225",
    "title": "Paw Some Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Paw-some_Cake_-_Smoor-4709918_360x 3.png",
    "gallery": [
      "./Theme cakes/Paw-some_Cake_-_Smoor-4709918_360x 3.png"
    ],
    "description": "Delicious handcrafted Paw Some Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-226",
    "title": "Pawfect Pet Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Pawfect_Pet_Cake_-_Smoor-4709921_360x 3.png",
    "gallery": [
      "./Theme cakes/Pawfect_Pet_Cake_-_Smoor-4709921_360x 3.png"
    ],
    "description": "Delicious handcrafted Pawfect Pet Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-227",
    "title": "Peas In A Pod Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Peas_in_a_Pod_Cake_-_Smoor-4709944_360x 3.png",
    "gallery": [
      "./Theme cakes/Peas_in_a_Pod_Cake_-_Smoor-4709944_360x 3.png"
    ],
    "description": "Delicious handcrafted Peas In A Pod Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-228",
    "title": "Piggy Paradise Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Piggy_Paradise_Cake_-_Smoor-4709956_360x 3.png",
    "gallery": [
      "./Theme cakes/Piggy_Paradise_Cake_-_Smoor-4709956_360x 3.png"
    ],
    "description": "Delicious handcrafted Piggy Paradise Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-229",
    "title": "Pistachiocookiesticks",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Pistachiocookiesticks (1).jpg",
    "gallery": [
      "./Theme cakes/Pistachiocookiesticks (1).jpg"
    ],
    "description": "Delicious handcrafted Pistachiocookiesticks baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-230",
    "title": "Red Celebrate More Hamper",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Red-celebrate-more-hamper (1).jpg",
    "gallery": [
      "./Theme cakes/Red-celebrate-more-hamper (1).jpg"
    ],
    "description": "Delicious handcrafted Red Celebrate More Hamper baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-231",
    "title": "Rocher Small V2",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Rocher-Small-V2 (1).jpg",
    "gallery": [
      "./Theme cakes/Rocher-Small-V2 (1).jpg"
    ],
    "description": "Delicious handcrafted Rocher Small V2 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-232",
    "title": "Smoor 17may40597",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Smoor_17May40597_1 (1).jpg",
    "gallery": [
      "./Theme cakes/Smoor_17May40597_1 (1).jpg"
    ],
    "description": "Delicious handcrafted Smoor 17may40597 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-233",
    "title": "Smoor 17may40608",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Smoor_17May40608_1 (1).jpg",
    "gallery": [
      "./Theme cakes/Smoor_17May40608_1 (1).jpg"
    ],
    "description": "Delicious handcrafted Smoor 17may40608 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-234",
    "title": "Smoor 17may40619",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Smoor_17May40619 (1).jpg",
    "gallery": [
      "./Theme cakes/Smoor_17May40619 (1).jpg"
    ],
    "description": "Delicious handcrafted Smoor 17may40619 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-235",
    "title": "Smoor 17may40632",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Smoor_17May40632 (1).jpg",
    "gallery": [
      "./Theme cakes/Smoor_17May40632 (1).jpg"
    ],
    "description": "Delicious handcrafted Smoor 17may40632 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-236",
    "title": "Smoor 17may40642",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Smoor_17May40642_1 (1).jpg",
    "gallery": [
      "./Theme cakes/Smoor_17May40642_1 (1).jpg"
    ],
    "description": "Delicious handcrafted Smoor 17may40642 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-237",
    "title": "Smoor 17may40663",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Smoor_17May40663 (1).jpg",
    "gallery": [
      "./Theme cakes/Smoor_17May40663 (1).jpg"
    ],
    "description": "Delicious handcrafted Smoor 17may40663 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-238",
    "title": "Smoor 17may40676",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Smoor_17May40676 (1).jpg",
    "gallery": [
      "./Theme cakes/Smoor_17May40676 (1).jpg"
    ],
    "description": "Delicious handcrafted Smoor 17may40676 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-239",
    "title": "Smoor 17may40680",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Smoor_17May40680 (1).jpg",
    "gallery": [
      "./Theme cakes/Smoor_17May40680 (1).jpg"
    ],
    "description": "Delicious handcrafted Smoor 17may40680 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-240",
    "title": "Sponge Bob Themed Tiered Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/SpongeBob-themed_tiered_cake_-_Smoor-4710382_360x 3.png",
    "gallery": [
      "./Theme cakes/SpongeBob-themed_tiered_cake_-_Smoor-4710382_360x 3.png"
    ],
    "description": "Delicious handcrafted Sponge Bob Themed Tiered Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-241",
    "title": "Star Wars Theme Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Star_wars_theme_cake_-_Smoor-4710384_360x 2.png",
    "gallery": [
      "./Theme cakes/Star_wars_theme_cake_-_Smoor-4710384_360x 2.png"
    ],
    "description": "Delicious handcrafted Star Wars Theme Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-242",
    "title": "Teal Ombre Ruffle Cake",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Teal_Ombre_Ruffle_Cake_-_Smoor-4710443_360x 2.png",
    "gallery": [
      "./Theme cakes/Teal_Ombre_Ruffle_Cake_-_Smoor-4710443_360x 2.png"
    ],
    "description": "Delicious handcrafted Teal Ombre Ruffle Cake baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-243",
    "title": "True Cocoa Bars Classic 35 Milk Couverture Chocolate",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/True_Cocoa_Bars_Classic_35_Milk_Couverture_Chocolate_3 (1).jpg",
    "gallery": [
      "./Theme cakes/True_Cocoa_Bars_Classic_35_Milk_Couverture_Chocolate_3 (1).jpg"
    ],
    "description": "Delicious handcrafted True Cocoa Bars Classic 35 Milk Couverture Chocolate baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-244",
    "title": "Untitled 0003 Smoor 13dec2434210",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Untitled-1_0003_Smoor_13Dec2434210 (1).jpg",
    "gallery": [
      "./Theme cakes/Untitled-1_0003_Smoor_13Dec2434210 (1).jpg"
    ],
    "description": "Delicious handcrafted Untitled 0003 Smoor 13dec2434210 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-245",
    "title": "Untitleddesign",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/Untitleddesign_1_360x 3.png",
    "gallery": [
      "./Theme cakes/Untitleddesign_1_360x 3.png"
    ],
    "description": "Delicious handcrafted Untitleddesign baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-246",
    "title": "Almond Snaps 12pc",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/almond-snaps-12pc (1).jpg",
    "gallery": [
      "./Theme cakes/almond-snaps-12pc (1).jpg"
    ],
    "description": "Delicious handcrafted Almond Snaps 12pc baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-247",
    "title": "Almond Snaps 6pc",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/almond-snaps-6pc_1 (1).jpg",
    "gallery": [
      "./Theme cakes/almond-snaps-6pc_1 (1).jpg"
    ],
    "description": "Delicious handcrafted Almond Snaps 6pc baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-248",
    "title": "Liuxe 5pc",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/liuxe-5pc (1).jpg",
    "gallery": [
      "./Theme cakes/liuxe-5pc (1).jpg"
    ],
    "description": "Delicious handcrafted Liuxe 5pc baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-249",
    "title": "Luxe 9",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/luxe-9_1 (1).jpg",
    "gallery": [
      "./Theme cakes/luxe-9_1 (1).jpg"
    ],
    "description": "Delicious handcrafted Luxe 9 baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-250",
    "title": "Luxe Medium",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/luxe-medium_1 (1).jpg",
    "gallery": [
      "./Theme cakes/luxe-medium_1 (1).jpg"
    ],
    "description": "Delicious handcrafted Luxe Medium baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-251",
    "title": "Peanut Butter Cup",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/peanut-butter-cup (1).jpg",
    "gallery": [
      "./Theme cakes/peanut-butter-cup (1).jpg"
    ],
    "description": "Delicious handcrafted Peanut Butter Cup baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  },
  {
    "id": "prod-252",
    "title": "Truffles",
    "category": "specialty",
    "price": 790,
    "weight": "1 kg",
    "variants": [
      {
        "weight": "1 kg",
        "price": 790
      },
      {
        "weight": "1.5 kg",
        "price": 1146
      },
      {
        "weight": "2 kg",
        "price": 1462
      }
    ],
    "image": "./Theme cakes/truffles (1).jpg",
    "gallery": [
      "./Theme cakes/truffles (1).jpg"
    ],
    "description": "Delicious handcrafted Truffles baked fresh with premium ingredients for celebrations in Tirunelveli.",
    "is_available": true
  }
];

const DEFAULT_JOBS_DATA = [
  {
    id: 'job-1',
    title: 'Cleaner',
    type: 'Full Time',
    pay: '₹350 per day',
    location: 'Onsite',
    schedule: 'Daily Shift',
    description: 'Maintain immaculate hygienic standards for our baking hall, equipment, and store counters.'
  },
  {
    id: 'job-2',
    title: 'Supplier',
    type: 'Logistics & Stock',
    pay: '₹350 - ₹450 per day',
    location: 'Onsite',
    schedule: 'Delivery',
    description: 'Manage fresh stock delivery and ingredient supply chain across our Tirunelveli bakery branches.'
  },
  {
    id: 'job-3',
    title: 'Waiter / Server',
    type: 'Front Counter & Service',
    pay: '₹350 - ₹450 per day',
    location: 'Onsite',
    schedule: 'Hospitality',
    description: 'Deliver warm, friendly service to guests, manage cake display counters, and handle customer seating.'
  },
  {
    id: 'job-4',
    title: 'Social Media Manager',
    type: 'Marketing & Content',
    pay: '₹5k - ₹7k per month',
    location: 'Hybrid / Onsite',
    schedule: 'Content Creation',
    description: 'Create engaging video reels, cake showcase photos, and grow our Instagram & Facebook presence in Tirunelveli.'
  },
  {
    id: 'job-5',
    title: 'Social Media Intern',
    type: 'Internship',
    pay: 'Incentives Included',
    location: 'Hybrid / Remote',
    schedule: 'Photography',
    description: 'Assist our media team with daily bakery photography, event coverage, and creative story updates.'
  }
];

// SUPABASE CLOUD DATABASE CONFIGURATION
const SUPABASE_URL = 'https://hkkdeowfoyejfifeftme.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhra2Rlb3dmb3llamZpZmVmdG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM1MjQ1NzYsImV4cCI6MjA5OTEwMDU3Nn0.EBw0t2IZoM8koDaV2AOFj6rQbyQINSo_mkrvhhhd0nU';

// Global jobs reference
let JOBS_DATA = DEFAULT_JOBS_DATA;

// Get stored products or defaults
function getStoredProducts() {
  return PRODUCTS_DATA;
}

// Get stored jobs or defaults
function getStoredJobs() {
  return JOBS_DATA;
}

// Fetch live products from Supabase Cloud
async function loadProductsFromSupabase() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/products?select=*&order=created_at.asc`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        PRODUCTS_DATA = data;
      }
    }
  } catch(e) {
    console.log('Supabase products unavailable, using defaults:', e.message);
  }
}

// Fetch live jobs from Supabase Cloud
async function loadJobsFromSupabase() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/jobs?select=*&order=created_at.asc`, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        JOBS_DATA = data;
      }
    }
  } catch(e) {
    console.log('Supabase jobs unavailable, using defaults:', e.message);
  }
}

// Save a single product to Supabase (upsert)
async function saveProductToSupabase(product) {
  try {
    // Only send columns that exist in the Supabase table
    const clean = {
      id: product.id,
      title: product.title,
      category: product.category,
      price: product.price,
      weight: product.weight,
      variants: product.variants || [],
      image: product.image || '',
      gallery: product.gallery || [],
      description: product.description || '',
      is_available: product.is_available !== false,
      updated_at: new Date().toISOString()
    };
    const res = await fetch(`${SUPABASE_URL}/rest/v1/products`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(clean)
    });
    if (!res.ok) {
      const err = await res.text();
      console.error('Supabase product save failed:', res.status, err);
    }
  } catch(err) {
    console.error('Supabase product sync error:', err.message);
  }
}

// Toggle product availability status (ON / OFF)
async function toggleProductAvailability(id) {
  const product = PRODUCTS_DATA.find(p => p.id === id);
  if (!product) return;
  product.is_available = (product.is_available === false) ? true : false;
  await saveProductToSupabase(product);
}

// Delete a product from Supabase
async function deleteProductFromSupabase(id) {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.${id}`, {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
  } catch(err) {
    console.log('Supabase product delete error:', err.message);
  }
}

// Save a single job to Supabase (upsert)
async function saveJobToSupabase(job) {
  try {
    // Only send columns that exist in the Supabase table
    const clean = {
      id: job.id,
      title: job.title,
      type: job.type,
      pay: job.pay,
      location: job.location,
      schedule: job.schedule || 'Standard',
      description: job.description || '',
      updated_at: new Date().toISOString()
    };
    const res = await fetch(`${SUPABASE_URL}/rest/v1/jobs`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(clean)
    });
    if (!res.ok) {
      const err = await res.text();
      console.error('Supabase job save failed:', res.status, err);
    }
  } catch(err) {
    console.error('Supabase job sync error:', err.message);
  }
}

// Delete a job from Supabase
async function deleteJobFromSupabase(id) {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/jobs?id=eq.${id}`, {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
  } catch(err) {
    console.log('Supabase job delete error:', err.message);
  }
}

// Legacy compatibility wrappers used by admin.html
function saveStoredProducts(products) {
  PRODUCTS_DATA = products;
  // Upsert all products to Supabase
  products.forEach(p => saveProductToSupabase(p));
}

function saveStoredJobs(jobs) {
  JOBS_DATA = jobs;
  // Upsert all jobs to Supabase
  jobs.forEach(j => saveJobToSupabase(j));
}

// Dynamic Products Reference
let PRODUCTS_DATA = DEFAULT_PRODUCTS_DATA;

// 2. SHOPPING CART STATE
let cartItems = (typeof window !== 'undefined' && window.localStorage)
  ? JSON.parse(localStorage.getItem('sg_bakery_cart') || '[]')
  : [];
let activeCategoryFilter = 'all';
let activeSearchQuery = '';

// DOM Initialization
document.addEventListener('DOMContentLoaded', async () => {
  // Load from Supabase first, then render
  await Promise.all([
    loadProductsFromSupabase(),
    loadJobsFromSupabase()
  ]);

  renderHomePreviewGrid();
  renderFullProductsGrid();
  updateCartUI();
  setupEventListeners();
});

// 3. RENDER HOME PAGE PREVIEW GRID (First 8 Items)
function renderHomePreviewGrid() {
  const container = document.getElementById('products-grid-container');
  if (!container) return;

  const availableItems = PRODUCTS_DATA.filter(p => p.is_available !== false);
  const previewItems = availableItems.slice(0, 8);
  container.innerHTML = previewItems.map(product => createProductCardHTML(product)).join('');
}

// 4. RENDER FULL PRODUCTS PAGE GRID (With Filter & Search)
function renderFullProductsGrid() {
  const container = document.getElementById('full-products-grid');
  if (!container) return;

  // Filter only active/available items for the store
  let filtered = PRODUCTS_DATA.filter(p => p.is_available !== false);

  // Apply Category Filter
  if (activeCategoryFilter !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategoryFilter);
  }

  // Apply Search Query Filter
  if (activeSearchQuery.trim() !== '') {
    const q = activeSearchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) ||
      p.weight.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 64px 20px;">
        <p style="font-size: 3rem; margin-bottom: 12px;">🔍</p>
        <h3 style="font-size: 1.4rem; font-weight: 600; margin-bottom: 8px;">No cakes found</h3>
        <p style="color: var(--color-text-muted);">Try searching for another flavor or category!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => createProductCardHTML(product)).join('');
}

// Helper: Product Card HTML Template
function createProductCardHTML(product) {
  return `
    <article class="product-card">
      <a href="./product-detail.html?id=${product.id}" class="product-image-box" style="display: block; text-decoration: none;">
        <img src="${product.image}" alt="${product.title}" loading="lazy" />
      </a>
      <div class="product-info">
        <h3 class="product-title">
          <a href="./product-detail.html?id=${product.id}" style="color: inherit; text-decoration: none;">${product.title}</a>
        </h3>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 4px;">
          <p class="product-weight">Weight: ${product.weight}</p>
          <span style="font-size: 0.8rem; font-weight: 600; color: #FC8019; background: rgba(252, 128, 25, 0.1); padding: 2px 8px; border-radius: 12px;" data-i18n="swiggy_badge">★ 4.3 Swiggy</span>
        </div>
      </div>
      <div class="product-footer">
        <span class="product-price">₹${product.price}</span>
        <button class="btn-add-cart" onclick="addToCart('${product.id}')">
          + Add
        </button>
      </div>
    </article>
  `;
}

// 5. EVENT LISTENERS & FILTER HANDLERS
function setupEventListeners() {
  // Category Pills Filter on Products Page
  const categoryTabs = document.querySelectorAll('.category-tab');
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      activeCategoryFilter = e.target.getAttribute('data-category');
      renderFullProductsGrid();
    });
  });

  // Search Input Listener on Products Page
  const searchInput = document.getElementById('product-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearchQuery = e.target.value;
      renderFullProductsGrid();
    });
  }

  // Mobile Drawer Toggle
  const menuToggleBtn = document.getElementById('mobile-menu-toggle-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');

  if (menuToggleBtn && drawer && overlay) {
    menuToggleBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      overlay.classList.add('open');
    });

    const closeMobileNav = () => {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
    };

    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileNav);
    overlay.addEventListener('click', closeMobileNav);
  }

  // Cart Drawer Toggle
  const cartBtn = document.getElementById('cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartDrawer = document.getElementById('cart-drawer');

  if (cartBtn && cartDrawer) {
    cartBtn.addEventListener('click', () => cartDrawer.classList.add('open'));
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => cartDrawer.classList.remove('open'));
  }
}

// 6. SHOPPING CART OPERATIONS
function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existing = cartItems.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartUI();

  // Open cart slide drawer automatically
  const cartDrawer = document.getElementById('cart-drawer');
  if (cartDrawer) cartDrawer.classList.add('open');
}

function updateQuantity(productId, delta) {
  const item = cartItems.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cartItems = cartItems.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
}

function saveCart() {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('sg_bakery_cart', JSON.stringify(cartItems));
  }
}

function updateCartUI() {
  // Update Badges
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(b => b.textContent = totalCount);

  // Update Cart Drawer Body
  const cartBody = document.getElementById('cart-items-container');
  const cartTotalEl = document.getElementById('cart-total-amount');

  if (!cartBody) return;

  if (cartItems.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-state">
        <p style="margin-bottom: 12px;"><i class="ph ph-shopping-bag-open" style="font-size: 3rem; color: var(--color-desert);"></i></p>
        <p class="text-regular">Your cart is empty.</p>
        <p class="text-small" style="margin-top: 4px;">Add your favorite bakes to begin!</p>
      </div>
    `;
    if (cartTotalEl) cartTotalEl.textContent = '₹0';
    return;
  }

  let totalAmount = 0;
  cartBody.innerHTML = cartItems.map(item => {
    const itemTotal = item.price * item.quantity;
    totalAmount += itemTotal;

    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.image}" alt="${item.title}">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">₹${item.price} x ${item.quantity} = ₹${itemTotal}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (cartTotalEl) cartTotalEl.textContent = `₹${totalAmount}`;
}

// 7. DIRECT WHATSAPP ORDER GENERATOR
function sendWhatsAppOrder() {
  if (cartItems.length === 0) {
    alert('Please add at least one cake to your cart before ordering!');
    return;
  }

  const bakeryPhone = '917339073844';
  let text = `Hello Santhi Ganesh Bakery! 🧁\nI would like to place an order for delivery in Tirunelveli:\n\n`;

  let total = 0;
  cartItems.forEach((item, idx) => {
    const sub = item.price * item.quantity;
    total += sub;
    text += `${idx + 1}. *${item.title}* (${item.weight}) x ${item.quantity} = ₹${sub}\n`;
  });

  text += `\n*Total Amount:* ₹${total}`;
  text += `\n\nPlease confirm availability and delivery time. Thank you!`;

  const encodedUrl = `https://wa.me/${bakeryPhone}?text=${encodeURIComponent(text)}`;
  window.open(encodedUrl, '_blank');
}
