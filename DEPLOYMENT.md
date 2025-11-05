# Deployment Guide

## Vercel Deployment (Recommended)

Your birthday card is a static HTML file, so it can be deployed easily on Vercel.

### Steps:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N` (for first deployment)
   - Project name: `birthday-wishes` (or your preferred name)
   - In which directory is your code located? `./`

### Important Files for Vercel:
- `index.html` - Main birthday card page
- `assets/` - Images and music files
- `vercel.json` - Vercel configuration
- `package.json` - Project metadata

### What gets deployed:
- The static `index.html` file with embedded CSS and JavaScript
- All assets (images, music files)
- No server-side code needed

### Local Development:
To run locally, you can still use:
```bash
npm run dev
```

This will start the Express server on http://localhost:5000

### Notes:
- The Express server (`server/index.js`) is only for local development
- Vercel will serve the static files directly
- Make sure your `assets/happy_birthday.mp3` file is included for music to work
