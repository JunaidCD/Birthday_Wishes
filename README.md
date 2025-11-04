# 🎉 Happy Birthday Soheli! 🎂

A beautiful, animated single-page birthday website with music, confetti, and floating balloons. Made with love and code by Junaid.

## ✨ Features

- 🎵 Auto-playing Happy Birthday music (with fallback for autoplay restrictions)
- 🎊 Confetti burst animation on page load
- 🎈 Floating emoji balloons with smooth CSS animations
- ✨ Twinkling sparkle effects
- 🖼️ Circular profile photo with pulsing glow effect
- 📱 Fully responsive and mobile-friendly design
- 🎨 Vibrant gradient background (pink → orange → yellow)
- 🔊 Music controls (play/pause, mute/unmute)
- 🔄 Replay Music button (triggers new confetti burst)
- 💬 Send Wish via WhatsApp button

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. **Add the audio file:**
   - Download a royalty-free "Happy Birthday" mp3 file
   - Place it at `client/public/assets/happy_birthday.mp3`
   
   **Recommended sources for royalty-free music:**
   - [Pixabay Music](https://pixabay.com/music/search/happy%20birthday/)
   - [Free Music Archive](https://freemusicarchive.org/)
   - [YouTube Audio Library](https://www.youtube.com/audiolibrary)

4. **Replace the photo (optional):**
   - Current photo is at `client/public/assets/soheli.jpg`
   - Replace with your own photo (recommended size: 500x500px)

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and visit the URL shown in the terminal (usually `http://0.0.0.0:5000`)

## 🎨 Customization

### Change the Name and Message

Edit `client/src/pages/BirthdayPage.tsx`:

```tsx
<BirthdayCard
  name="Your Name Here"  // Change the birthday person's name
  photoUrl="/assets/soheli.jpg"  // Path to the photo
  message="Your custom birthday message here..."  // Customize the message
  signature="— Your Name"  // Change the signature
  isPlaying={isPlaying}
/>
```

### Change the WhatsApp Message

Edit the `handleSendWish` function in `client/src/pages/BirthdayPage.tsx`:

```tsx
const handleSendWish = () => {
  const message = encodeURIComponent("Your custom WhatsApp message here!");
  window.open(`https://wa.me/?text=${message}`, '_blank');
};
```

### Customize Colors

The gradient background can be adjusted in `client/src/index.css`. Look for these CSS variables:

```css
:root {
  --gradient-pink: 340 82% 75%;
  --gradient-orange: 25 95% 65%;
  --gradient-yellow: 45 93% 70%;
}
```

## 📁 Project Structure

```
client/
├── public/
│   └── assets/
│       ├── soheli.jpg          # Birthday person's photo
│       └── happy_birthday.mp3  # Background music (you need to add this)
├── src/
│   ├── components/
│   │   ├── BirthdayCard.tsx    # Main card with photo and message
│   │   ├── FloatingBalloons.tsx # Floating balloon animations
│   │   ├── Sparkles.tsx        # Sparkle effects
│   │   └── MusicPlayer.tsx     # Audio controls
│   ├── pages/
│   │   └── BirthdayPage.tsx    # Main birthday page
│   └── App.tsx                 # App entry point
```

## 🌐 Deployment

### Deploy on Replit

This project is ready to deploy on Replit:

1. Click the "Publish" button in your Replit workspace
2. Your birthday website will be live at a `.replit.app` URL
3. Share the link with the birthday person!

### Deploy on GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to GitHub Pages

### Deploy on Vercel/Netlify

1. Connect your repository to Vercel or Netlify
2. They will automatically detect it's a Vite project
3. Deploy with one click!

## 🎵 Audio File Requirements

- **Format:** MP3 (recommended) or WAV
- **Duration:** 30-60 seconds recommended (will loop)
- **File size:** Keep under 5MB for faster loading
- **Location:** `client/public/assets/happy_birthday.mp3`

**Note:** Modern browsers may block autoplay with sound. If autoplay is blocked, the website will automatically show a "Tap to Play Music" button.

## 💝 Made With

- React + TypeScript
- Tailwind CSS
- Canvas Confetti
- Vite
- Lucide Icons

## 📝 License

This is a personal birthday project. Feel free to use and customize it for your own birthday wishes!

---

**Made with 💻❤️ by Junaid**
