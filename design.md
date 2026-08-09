# Design System & Specifications - Santhi Ganesh Bakery, Tirunelveli

This document captures the visual design tokens, typography rules, color palettes, component structures, and asset mapping extracted directly from the Figma Desktop & Mobile designs (`node-id=10314-66461` and `node-id=10314-66460`).

---

## 1. Brand Identity & Theme
- **Brand Name:** Santhi Ganesh Bakery
- **Location:** Tirunelveli, Tamil Nadu
- **Aesthetic:** Warm luxury editorial bakery with handcrafted, traditional & modern confectioneries. Creamy background, dark chocolate text, and warm desert amber accents.

---

## 2. Color Palette & Tokens

| Design Token Name | Value / Hex | Usage |
| :--- | :--- | :--- |
| `--color-bg-primary` | `#f6efe8` | Warm Ivory main background (Figma Scheme 3) |
| `--color-bg-card` | `#ffffff` | Clean white card backgrounds & highlights |
| `--color-text-main` | `#0a0404` | Deep Dark Chocolate text |
| `--color-text-muted` | `rgba(10, 4, 4, 0.7)` | Secondary descriptive text |
| `--color-accent-desert` | `#a6601b` | Primary brand action color (Buttons, badges) |
| `--color-accent-desert-dark` | `#844c15` | Button 3D bottom border & active states |
| `--color-neutral-overlay-5` | `rgba(10, 4, 4, 0.05)` | Secondary button background |
| `--color-neutral-overlay-15` | `rgba(10, 4, 4, 0.15)` | Secondary button border |
| `--radius-sm` | `6px` | Action buttons |
| `--radius-md` | `8px` | Product cards & gallery images |
| `--radius-pill` | `115px` | Cart icon button |

---

## 3. Typography System

We use Google Fonts:
1. **`Aboreto`** (Cursive/Serif Display) for high-impact editorial headings.
2. **`Lora`** (Serif) for body text, button labels, and subtitled details.

### Font Sizes & Hierarchy

| Element | Font Family | Size (Desktop) | Size (Mobile) | Line Height | Tracking / Weight |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | `Aboreto` | `84px` | `48px` | `1.1` | `0.84px` / Normal |
| **Section Title (H2)** | `Aboreto` | `60px` | `44px` | `1.2` | `0.6px` / Normal |
| **Product Price (H3)** | `Lora` | `26px` | `16px` | `1.6` | SemiBold (600) |
| **Subheadings / Subtitle** | `Lora` | `20px` | `14px` | `1.6` | Regular / Medium |
| **Body / Nav Items** | `Lora` | `18px` | `14px` | `1.6` | Regular (400) |
| **Badges & Small Details** | `Lora` | `16px` | `12px` | `1.5` | SemiBold (600) |

---

## 4. Spacing & Layout Tokens

- **Container Max Width:** `1280px`
- **Global Page Padding:** 
  - Desktop: `64px` (`px-[64px]`)
  - Mobile: `20px` (`px-[20px]`)
- **Section Vertical Padding:**
  - Desktop: `112px` (`py-[112px]`)
  - Mobile: `64px` (`py-[64px]`)
- **Grid Layouts:**
  - Desktop Hero Gallery: Dual offset rows, total width `2732px` with smooth infinite scrolling animation.
  - Desktop Product Catalog: 4 Columns with `32px` gap.
  - Mobile Product Catalog: 2 Columns with `20px` gap.

---

## 5. UI Components Breakdown

### 1. Navigation Bar
- Brand logo (Santhi Ganesh Bakery badge).
- Desktop Menu Links: Home, About Us, Cakes dropdown (with chevron), Custom Orders, Contact.
- Action Buttons: Shopping Cart pill with item counter badge + Primary "Order Now" button.
- Mobile Navigation: Hamburger menu overlay + brand logo.

### 2. Editorial Hero Section
- Headline: *"The black forest that stops conversations"* (or local Tirunelveli signature copy).
- Subtitle: *"Our signature velvet & butter cakes have a loyal following in Tirunelveli. Freshly baked every morning."*
- CTAs: Primary "Shop Cakes" & Secondary "Learn Our Story".
- Dynamic Image Marquee: Dual-row scrolling gallery featuring appetizing cake photography.

### 3. Product Catalog Grid ("Fresh Products")
- Section Tagline: `"Fresh Daily in Tirunelveli"`
- Section Heading: `"Our Signature Bakes"`
- Category Filter Tabs: All, Birthday Cakes (Her & Him), Wedding & Engagement, Baby Shower, Theme Cakes.
- Card Elements:
  - Product Image with smooth hover zoom.
  - Title & Weight/Variant tag (e.g., `1 kg`, `500 gms`, `6 pcs`).
  - Price in ₹ INR (`₹550`, `₹1200`, etc.).
  - Interactive "Add to Cart" button.

### 4. Local Heritage & Quality Section
- Highlighting Tirunelveli specialities, rich butter, fresh cream, custom egg/eggless choices, and same-day doorstep delivery.

### 5. Customer Reviews & Testimonials
- Star rating graphics + real local feedback cards with customer avatars.

### 6. Interactive Cart Drawer & Order Modal
- Slide-over cart preview with item count, total price, local delivery estimator, and WhatsApp direct ordering button for quick custom requests.

---

## 6. Local Product Images Asset Mapping

Images located in workspace root subfolders will be mapped directly to product cards:
- **Baby Shower Cakes:** `Baby Shower cakes/0001_BabyStrollerCake_360x.jpg`, `0005_SkyThemedCake_360x.jpg`, etc.
- **Birthday Cakes for Her:** `Birthday cakes for her/0000_cake_0014_TheCrownCake_360x.jpg`, `0015_PinkRosesCake_2_360x.jpg`, `Good-Ol-Pineapple-Cake1.jpg`, `Choco_Truffle_500_gms.jpg`.
- **Birthday Cakes for Him:** `Birthday cakes for him/0001_cake_0013_TheLamborghiniCake_360x.jpg`, `0001s_0010_GamersX-BoxCake_360x.jpg`, etc.
- **Engagement & Wedding Cakes:** `Engagement, wedding cakes/0000_WeddingFlowerCake_360x.jpg`, `0012_Floral3TierCake_360x.jpg`, `Engagement_Ring_Cake_-_Smoor-4708887_360x.jpg`.
- **Specialty Bakes & Chocolates:** Assorted Truffles, Almond Cookie Sticks, Kunafa Bites, etc.
