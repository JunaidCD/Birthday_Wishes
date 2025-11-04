# 🎉 Happy Birthday Website

A beautiful, lightweight, single-file birthday page with auto-playing music, confetti, and animated reveals. Made with love and a little bit of code!

## 🚀 Quick Start

1. **Open `index.html` in your browser** — that's it! The page is ready to use.

2. **Add your assets:**
   - Place the birthday person's photo at: **`assets/soheli.jpg`**
   - Place the Happy Birthday audio at: **`assets/happy_birthday.mp3`**

3. **Customize the content** by editing the `CONFIG` block at the top of `index.html`:

```javascript
const CONFIG = {
  name: "Soheli",              // Birthday person's name
  from: "Junaid",              // Your name
  photo: "assets/soheli.jpg",  // Path to photo
  audio: "assets/happy_birthday.mp3",  // Path to audio
  message: "Your custom message here...",
  memPhotos: ["assets/mem1.jpg", "assets/mem2.jpg", "assets/mem3.jpg"],
  memCaptions: ["Caption 1", "Caption 2", "Caption 3"]
};
```

## 📁 Project Structure

```
.
├── index.html              # The complete birthday page (HTML + CSS + JS)
├── assets/
│   ├── soheli.jpg         # Birthday person's photo (you need to add this)
│   ├── happy_birthday.mp3 # Birthday music (you need to add this)
│   ├── mem1.jpg           # Optional: Memory photo 1
│   ├── mem2.jpg           # Optional: Memory photo 2
│   └── mem3.jpg           # Optional: Memory photo 3
└── README.md              # This file
```

## 🎵 Audio File Requirements

- **Format:** MP3 (recommended) or WAV
- **Duration:** 30-60 seconds (will loop automatically)
- **File size:** Keep under 5MB for faster loading
- **Location:** `assets/happy_birthday.mp3`

### Where to get royalty-free Happy Birthday music:
- [Pixabay Music](https://pixabay.com/music/search/happy%20birthday/)
- [Free Music Archive](https://freemusicarchive.org/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary)

## 📸 Photo Requirements

- **Format:** JPG or PNG
- **Recommended size:** 500x500px (square works best for circular crop)
- **File size:** Keep under 2MB
- **Location:** `assets/soheli.jpg`

## 🎨 Features

✅ **Auto-play music** — Attempts to play on page load  
✅ **Graceful fallback** — Shows overlay button if browser blocks autoplay  
✅ **Confetti burst** — Triggers when music starts or manually via "Play Surprise"  
✅ **Smooth reveal animation** — Photo sharpens, text fades in beautifully  
✅ **Photo pulse effect** — Subtle glow synced to music  
✅ **Music controls** — Mute/unmute button and volume slider in top-right  
✅ **Replay button** — Restarts music and triggers new confetti  
✅ **Optional memory carousel** — Shows rotating photos if mem1.jpg, mem2.jpg, mem3.jpg exist  
✅ **Mobile-friendly** — Fully responsive design  
✅ **Keyboard accessible** — All buttons work with keyboard navigation  
✅ **Reduced motion support** — Respects user's motion preferences  

## ⚠️ Browser Autoplay Note

Most modern browsers block autoplay with sound. If the music doesn't start automatically:
1. A big **"🔊 Tap to Play Music"** overlay will appear
2. Click it to start the music and trigger the reveal
3. Or click the **"🎉 Play Surprise"** button on the card

## 🎭 Optional Memory Carousel

The carousel automatically appears if you add these files:
- `assets/mem1.jpg`
- `assets/mem2.jpg`
- `assets/mem3.jpg`

Photos will auto-rotate every 4 seconds. If the files don't exist, the carousel is hidden.

Edit captions in the CONFIG:
```javascript
memCaptions: ["First memory 💫", "Second memory 💝", "Third memory 🌟"]
```

## 🎨 Customization

### Change Colors

Edit the `:root` CSS variables in the `<style>` section:

```css
:root {
  --gradient-pink: #f093fb;
  --gradient-orange: #f5576c;
  --gradient-yellow: #ffd140;
  --card-bg: rgba(255, 255, 255, 0.92);
}
```

### Change Fonts

The page uses **Poppins** from Google Fonts. To use a different font:
1. Update the Google Fonts `<link>` in the `<head>`
2. Change `font-family: 'Poppins'` in the CSS

## 🌐 Deployment

### Option 1: Replit (Easiest)
1. Upload `index.html` and the `assets/` folder to your Replit
2. Click "Run" or just open `index.html` in the browser
3. Share your Replit URL!

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Upload `index.html` and `assets/` folder
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://username.github.io/repo-name/`

### Option 3: Any Web Host
Just upload the `index.html` file and `assets/` folder to any web hosting service (Netlify, Vercel, etc.)

## 🛠️ Technical Details

- **Pure HTML/CSS/JS** — No frameworks, no build step
- **Single file** — Everything is in `index.html`
- **Canvas Confetti** — Loaded from CDN (cdn.jsdelivr.net)
- **Google Fonts** — Poppins loaded from fonts.googleapis.com
- **Modern CSS** — CSS animations, gradients, backdrop-filter
- **Accessible** — Keyboard navigation, focus states, ARIA labels
- **Performant** — Lazy-loaded carousel images

## 📱 Browser Support

Works on all modern browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 💝 Credits

Made with 💻❤️ by Junaid for Soheli

---

**Enjoy the celebration! 🥳🎊🎉**
