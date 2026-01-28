# 🌹 Rose Day Premium Website

**Romantic Red & Gold Luxury Experience**

Built with React + Vite + Tailwind CSS + Framer Motion + React Spring

---

## ✨ Features

### 🎨 Premium Design
- **Red & Gold Luxury Theme** - Deep crimson to golden gradients
- **Custom Color Palette** - 18 shades of rose-red and rose-gold
- **Premium Fonts** - Playfair Display, Cormorant Garamond, Dancing Script
- **Glowing Effects** - Text shadows and gradient animations
- **Ornate Decorations** - Corner borders and floating elements

### 🌹 Interactive Experience
- **4 Rose Types** - Red, Pink, Yellow, White (each with unique meaning)
- **3D Hover Effects** - Cards lift and glow on hover (react-spring)
- **Bloom Animations** - Roses bloom with rotation and scale
- **Petal Rain** - Continuous falling rose petals background
- **Confetti Celebrations** - Color-matched confetti for each rose
- **Sequential Blooming** - Final bouquet roses bloom one by one

### 📱 4 Pages
1. **Intro** - Grand entrance with animated rose
2. **Pick Rose** - Interactive rose selection grid
3. **Rose Message** - Personalized message for each color
4. **Final Bouquet** - 7 roses with heartfelt message

---

## 🚀 Quick Start

### Installation
```bash
cd rose-day-premium
npm install
```

### Run Development Server
```bash
npm run dev
```

Opens at `http://localhost:3001`

### Build for Production
```bash
npm run build
```

---

## 🎨 Rose Types & Meanings

| Rose | Emoji | Meaning | Message Theme |
|------|-------|---------|---------------|
| **Red** | 🌹 | Deep Love & Passion | "You are the love of my life..." |
| **Pink** | 🌸 | Sweetness & Admiration | "Your sweetness brightens..." |
| **Yellow** | 🌼 | Friendship & Joy | "You are my sunshine..." |
| **White** | 🤍 | Purity & Innocence | "Your pure heart inspires..." |

---

## 📂 Project Structure

```
rose-day-premium/
├── src/
│   ├── components/
│   │   └── PetalRain.jsx        # Falling petals animation
│   ├── pages/
│   │   ├── Intro.jsx             # Welcome page
│   │   ├── PickRose.jsx          # Rose selection
│   │   ├── RoseMessage.jsx       # Individual message
│   │   └── FinalBouquet.jsx      # Grand finale
│   ├── App.jsx                   # Routes
│   ├── main.jsx                  # Entry
│   └── index.css                 # Luxury styles
├── tailwind.config.js            # Custom red-gold palette
└── package.json                  # Premium libraries
```

---

## 🎨 Customization Guide

### 1. Change Names

**File:** `src/pages/FinalBouquet.jsx` (line ~130)
```jsx
- From Rahul, with all my heart ❤️
// ← Change boy's name
```

### 2. Customize Messages

**File:** `src/pages/RoseMessage.jsx` (lines 15-41)
```jsx
const roseData = {
  red: {
    message: 'Your custom message here...', // ← Edit
  },
  // ... edit other colors
}
```

### 3. Change Rose Count

**File:** `src/pages/FinalBouquet.jsx` (line 23)
```jsx
const roses = ['🌹', '🌸', '🌼', '🤍', '💖', '🌺', '💐']
// Add or remove roses
```

### 4. Adjust Colors

**File:** `tailwind.config.js`
- Change `rose-red` shades (lines 10-20)
- Change `rose-gold` shades (lines 21-31)

---

## 🔧 Tech Stack

### Core
- **React 18** - Modern component architecture
- **Vite** - Lightning-fast dev server
- **Tailwind CSS 3** - Utility-first styling

### Animation Libraries
- **Framer Motion** - Page transitions & complex animations
- **React Spring** - Physics-based hover effects
- **React Confetti** - Celebration effects

### Utilities
- **React Router** - Multi-page navigation
- **React Use** - Window size hook for confetti
- **React Icons** - Icon library

---

## 🎯 User Journey

1. **Land on Intro** → See grand "Happy Rose Day" title
2. **Click "Begin Journey"** → Navigate to rose selection
3. **Hover over roses** → See 3D lift and glow effects
4. **Click a rose** → Confetti bursts, navigate to message
5. **Read personalized message** → Option to pick another or see bouquet
6. **Final bouquet** → 7 roses bloom sequentially with love note

---

## 💰 Business Use

### For Rose Day (Feb 7, 2026)
- Premium feel = Can charge **₹99-₹149**
- Interactive + personalized = High perceived value
- Multiple roses = More content, feels generous

### Customization Time
- **Names:** 1 minute
- **Messages:** 2-3 minutes (4 roses)
- **Build:** 30 seconds
- **Deploy:** 1 minute
- **Total:** ~5 minutes per order

### Scaling
Store customer data in JSON:
```json
{
  "boyName": "Rahul",
  "girlName": "Priya",
  "customMessages": {
    "red": "...",
    "pink": "..."
  }
}
```

Load dynamically for batch processing!

---

## 🌟 Premium Touches

- ✨ Shimmer gradient text animations
- 🎭 Ornate corner decorations
- 💫 Floating sparkle elements
- 🌹 Continuous petal rain
- ✨ Gold dividers
- 🎨 Glassmorphism cards
- 💎 Glow pulse effects
- 🎪 Sequential bloom animations

---

## 📝 Notes

- All animations are GPU-accelerated
- Optimized for mobile and desktop
- No backend required
- Production-ready code
- Premium fonts from Google Fonts
- Confetti uses window size for responsiveness

---

## 🐛 Deployment

### Netlify
1. Build: `npm run build`
2. Upload `dist` folder
3. Add `public/_redirects`:
```
/*  /index.html  200
```

### GitHub Pages
Configure base path in `vite.config.js` if needed

---

**Created with ❤️ for Rose Day 2026**  
**Premium Red & Gold Experience** 🌹✨
