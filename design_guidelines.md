# Birthday Website Design Guidelines for Soheli

## Design Approach
**Selected Approach**: Custom celebratory experience with playful, joyful aesthetics
**Key Principle**: Create an immediately delightful, emotionally resonant experience that feels like opening a digital birthday card

---

## Visual Foundation

### Color Palette
- **Background**: Full-screen vertical gradient from pink (top) → orange (middle) → yellow (bottom)
- **Card**: Semi-transparent white background with subtle backdrop blur for depth
- **Text**: Dark text on light card for optimal readability

### Typography System
**Primary Font**: Poppins (via Google Fonts)
- **Headline**: 48px (mobile: 32px), Bold (700), letter-spacing -1px
- **Subheadline/Tagline**: 18px (mobile: 14px), Medium (500), letter-spacing 0.5px
- **Message Body**: 16px (mobile: 14px), Regular (400), line-height 1.6
- **Signature**: 14px, Italic (300)
- **Buttons**: 16px, SemiBold (600), uppercase

---

## Layout Structure

### Container System
- **Main viewport**: Full screen height, centered content both vertically and horizontally
- **Center card**: Maximum width 560px, padding 48px (mobile: 24px), rounded corners 24px
- **Spacing units**: Use increments of 8px (8, 16, 24, 32, 48px) for consistent rhythm

### Component Hierarchy (Top to Bottom)
1. **Animated headline** - Top of card with bounce entrance
2. **Subtitle/tagline** - 16px below headline
3. **Profile photo** - 32px below subtitle, centered
4. **Birthday message** - 32px below photo
5. **Signature** - 16px below message, right-aligned
6. **Action buttons** - 40px below signature, horizontal row

---

## Key Components

### Profile Photo Card
- **Size**: 200px diameter circle (mobile: 160px)
- **Treatment**: Clean circular crop with 6px white border and subtle shadow
- **Glow effect**: Pulsing soft shadow that syncs with music beat (8px blur, expanding 12-20px radius)
- **Position**: Centered horizontally within card

### Action Buttons
- **Layout**: Two-button horizontal row with 16px gap
- **Primary button** ("Replay Music"): 
  - Height 52px, padding 16px 32px
  - Fully rounded corners (26px radius)
  - Background blur effect if overlaying gradient
- **Secondary button** ("Send Wish"):
  - Same dimensions as primary
  - Outlined style with background blur
- **Mobile**: Stack vertically with 12px gap, full width

### Music Controls
- **Play/Pause toggle**: Fixed position top-right corner, 64px from top and right (mobile: 24px)
- **Fallback "Tap to Play"**: Large, prominent centered button when autoplay blocked
  - Size 56px height, 240px width minimum
  - Pulsing animation to draw attention

---

## Animation Specifications

### Entrance Animations
1. **Confetti burst**: Immediate on page load, 3-second duration, particles fade out
2. **Headline**: Fade-in + bounce from above, 0.8s duration, 0.2s delay
3. **Card content**: Staggered fade-in from 0.4s to 1.2s
4. **Photo**: Scale from 0.8 to 1.0, 0.6s duration, 0.6s delay

### Continuous Animations
- **Floating balloons**: 3-5 emoji balloons (🎈, 🎊, 🎉) positioned randomly, floating upward continuously
  - Speed: 15-25 seconds per loop
  - Drift: Slight horizontal sway 20-40px
  - Reset: Restart from bottom when reaching top
- **Sparkle overlay**: Subtle twinkling particles scattered across viewport, 2-3s fade cycle
- **Photo glow**: Pulse effect every 2 seconds when music playing

### Interactive Animations
- **Replay button**: Triggers new confetti burst on click
- **Button hover**: Subtle scale to 1.05, 0.2s transition
- **Music toggle**: Rotate icon 180° when state changes

---

## Floating Balloon Layer
- **Quantity**: 5 balloons
- **Distribution**: Scattered across viewport width, varying starting positions
- **Z-index**: Behind center card content but above gradient background
- **Sizes**: Mix of regular and small emoji sizes (32px, 48px, 64px)
- **Opacity**: 0.7-0.9 for subtle presence

---

## Content Specifications

### Text Content (Exact Copy)
- **Title**: "Happy Birthday, Soheli! 🥳"
- **Tagline**: "Made with love and a little bit of code 💻❤️"
- **Message**:
  ```
  Wishing you a year full of sunshine, laughter, and every slice of cake you want.
  You deserve all the good things life has to offer.
  — Junaid
  ```

### WhatsApp Integration
- **Button text**: "Send Wish 💬"
- **Prefilled message**: "Happy Birthday, Soheli! 🎉 Wishing you an amazing year ahead!"

---

## Mobile Optimization
- **Breakpoint**: 768px
- **Adjustments**:
  - Reduce all font sizes 15-20%
  - Decrease card padding from 48px to 24px
  - Stack buttons vertically
  - Reduce photo size from 200px to 160px
  - Tighter spacing between elements (reduce by 25%)
  - Ensure touch targets minimum 44px height

---

## Accessibility & UX
- **Music autoplay fallback**: Prominent "Tap to Play Music" button if browser blocks autoplay
- **Volume level**: Background music at 50% volume (0.5) to avoid overwhelming
- **Music controls**: Always visible pause/play toggle for user control
- **Visual feedback**: Loading states, button interactions clearly visible
- **Focus states**: All interactive elements have clear keyboard focus indicators

---

## Assets Requirements
- **Photo**: `assets/soheli.jpg` - Birthday person's image, optimized for web
- **Audio**: `assets/happy_birthday.mp3` - Royalty-free Happy Birthday tune, looping
- **Libraries**: Canvas-confetti for particle effects
- **Icons**: Simple emoji or minimal icon set for music controls (▶️ ⏸️)

---

## Overall Experience
The design should feel like unwrapping a digital gift - immediate joy through auto-playing music and confetti, followed by a warm, personal message presented in an elegant card format. Every animation and interaction reinforces celebration while maintaining clean, readable content presentation.