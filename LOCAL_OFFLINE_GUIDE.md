# Local Offline Presentation Guide

## Quick Start - 3 Simple Steps 🚀

### Option 1: Build and Open Directly (Simplest!)

```bash
# 1. Build the offline version
npm run build:local

# 2. Open the file in your browser
# The presentation will be in: dist/index.html
```

Then simply **double-click** the `dist/index.html` file to open it in your browser!

✅ **Works 100% offline** - No server needed, no internet required!

---

### Option 2: Preview with Local Server (Recommended for Testing)

```bash
# 1. Build the offline version
npm run build:local

# 2. Start a local preview server
npm run preview
```

Then open your browser to: **http://localhost:4173**

Press `Ctrl+C` to stop the server when done.

---

## Creating a Portable Version 📦

To share your presentation or run it on another computer offline:

### Method 1: Zip the dist folder

```bash
# 1. Build the offline version
npm run build:local

# 2. The entire presentation is now in the 'dist' folder
# Just zip it or copy it to a USB drive!
```

To use it:
1. Copy the `dist` folder to any computer
2. Open `dist/index.html` in any modern browser
3. Present! 🎉

### Method 2: Self-contained HTML (Advanced)

If you want a truly single-file presentation, you can use tools like:
- [single-file](https://github.com/gildas-lormeau/SingleFile) browser extension
- Or keep the dist folder as-is (it's already self-contained!)

---

## How It Works

When you run `npm run build:local`, Vite:
- ✅ Bundles all JavaScript into optimized files
- ✅ Embeds all CSS and styles
- ✅ Converts all images to base64 or optimized assets
- ✅ Includes all fonts and icons
- ✅ Creates a production-ready, fully offline presentation

**The entire presentation is self-contained in the `dist` folder!**

---

## Presentation on Different Devices

### Windows
1. Build with `npm run build:local`
2. Copy the `dist` folder to a USB drive
3. Open `dist/index.html` in Chrome, Edge, or Firefox
4. Press `F11` for fullscreen or use the fullscreen button

### Mac
1. Build with `npm run build:local`
2. Copy the `dist` folder to a USB drive
3. Open `dist/index.html` in Chrome, Safari, or Firefox
4. Press `Ctrl+Cmd+F` for fullscreen or use the fullscreen button

### Linux
1. Build with `npm run build:local`
2. Copy the `dist` folder anywhere
3. Open `dist/index.html` in Chrome or Firefox
4. Press `F11` for fullscreen

---

## Keyboard Controls (Works Offline!)

- **→ / Space / Click**: Next slide
- **← / Backspace**: Previous slide
- **F11**: Toggle fullscreen (or use the button)
- **Home**: First slide
- **End**: Last slide

---

## Troubleshooting

### "File not found" or assets not loading
- Make sure you built with `npm run build:local` (not just `npm run build`)
- The entire `dist` folder must stay together - don't move individual files
- Open `dist/index.html`, not files in other folders

### Fonts or images not showing
- Rebuild with: `npm run build:local`
- Make sure your browser is modern (Chrome, Firefox, Safari, Edge)
- Check that all files in `dist/assets/` are present

### Performance issues
- The offline version is already optimized!
- Close other browser tabs
- Use Chrome for best performance

---

## File Structure After Build

```
dist/
├── index.html          ← Open this file!
├── assets/
│   ├── index-[hash].js       ← All your code
│   ├── index-[hash].css      ← All styles
│   └── [images]-[hash].png   ← All images
└── (other optimized files)
```

**Everything your presentation needs is in the `dist` folder!**

---

## Comparison: Local vs GitHub Pages

| Feature | Local Offline | GitHub Pages |
|---------|---------------|--------------|
| Internet required | ❌ No | ✅ Yes |
| Easy to share | USB/Email | URL link |
| Setup complexity | Very easy | Medium |
| Presentation features | Full | Full |
| Updates | Rebuild & copy | `npm run deploy` |
| Best for | Conferences, offline demos | Sharing online |

---

## Pro Tips 💡

### For Conference Presentations
1. Build the night before: `npm run build:local`
2. Copy `dist` folder to your laptop AND a backup USB drive
3. Test offline by turning off WiFi and opening `dist/index.html`
4. Arrive early to test on the venue's computer if needed

### For Sharing with Colleagues
1. Build with `npm run build:local`
2. Zip the entire `dist` folder
3. Email or share via cloud storage
4. They just unzip and open `index.html` - no installation needed!

### For USB Stick Presentations
1. Build with `npm run build:local`
2. Copy `dist` folder to USB drive
3. Rename `dist` to something descriptive: `ComposeViewModels-Presentation`
4. Add a `README.txt` with instructions: "Open index.html in your browser"

---

## Need Both Local AND Online?

You can have both! 

**For local/offline use:**
```bash
npm run build:local
```

**For GitHub Pages:**
```bash
npm run build
npm run deploy
```

The build process is smart enough to handle both scenarios correctly!

---

## Questions?

- **Q: Can I present without Node.js installed?**  
  A: Yes! Once you run `npm run build:local`, you can copy the `dist` folder to any computer and open `index.html` - no Node.js needed!

- **Q: Will my animations and transitions work offline?**  
  A: Absolutely! Everything is bundled including the Motion library.

- **Q: How big is the offline presentation?**  
  A: Typically 2-5 MB total - small enough to email!

- **Q: Can I open it from a network drive?**  
  A: Yes, but local or USB is faster and more reliable.

Enjoy your offline presentation! 🎉
