# 🌹 Photo Message Feature - Quick Guide

## What It Does

**Rectangular photo frame + Typewriter message effect**

The PhotoMessage page shows:
1. **Left side:** Rectangular photo frame (3:4 aspect ratio) for GF image
2. **Right side:** Long romantic message that types out automatically
3. Progress bar showing typing completion
4. Auto-scrolling message container

---

## How to Customize

### 1. Add GF Photo

**File:** `src/pages/PhotoMessage.jsx` (Line ~70)

Find this code:
```jsx
{/* Uncomment and add your image URL here */}
{/* <img 
  src="YOUR_IMAGE_URL_HERE" 
  alt="My Love"
  className="w-full h-full object-cover"
/> */}
```

**Replace with:**
```jsx
<img 
  src="https://your-image-url.com/photo.jpg" 
  alt="My Love"
  className="w-full h-full object-cover"
/>
```

**Or use local image:**
1. Put photo in `public` folder (e.g., `public/girlfriend.jpg`)
2. Use:
```jsx
<img 
  src="/girlfriend.jpg" 
  alt="My Love"
  className="w-full h-full object-cover"
/>
```

### 2. Change Message

**File:** `src/pages/PhotoMessage.jsx` (Line ~13)

Edit the `fullMessage` variable:
```javascript
const fullMessage = `Your custom romantic message here...

Can be multiple paragraphs.

Add emojis, make it as long as you want!

Happy Rose Day! 🌹`
```

### 3. Change Photo Caption

**File:** `src/pages/PhotoMessage.jsx` (Line ~85)

Change:
```jsx
<p className="text-center text-2xl font-dancing mt-4" style={{ color: '#F0F0F0' }}>
  The Love of My Life 💕  {/* ← Edit this */}
</p>
```

### 4. Adjust Typing Speed

**File:** `src/pages/PhotoMessage.jsx` (Line ~26)

Change the number (in milliseconds):
```javascript
}, 50) // ← Change this number
```
- `30` = Faster typing
- `50` = Default (perfect)
- `100` = Slower typing

---

## Flow

1. User picks a rose → Sees rose message
2. Clicks "See Photo Message →"
3. **PhotoMessage page loads**
4. GF photo displays
5. Message starts typing automatically
6. User reads scrolling message
7. Clicks "Continue to Final Surprise" → Goes to bouquet

---

## Features

✅ Rectangular photo frame (premium look)
✅ Typewriter effect (character by character)  
✅ Auto-scrolling as message types
✅ Progress bar
✅ Custom scrollbar styling
✅ Responsive (mobile + desktop)
✅ Smooth animations

---

## Where to Access

**URL:** `http://localhost:3001/photo-message`

Or through the app flow:
1. Home → Pick Rose → Rose Message → **Photo Message** → Final Bouquet

---

**Perfect for Rose Day orders!** 🌹💖
