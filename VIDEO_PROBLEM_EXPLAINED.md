# 🎬 The Video/GIF Problem - Explained & Solved

## The Issue

The images you see working perfectly in **development mode** (`npm run dev`) **do NOT work** in the **production build** on GitHub Pages.

### Why?

The `figma:asset/...` imports are a **special virtual module** that:
- ✅ Works in Figma Make's development server
- ❌ Does NOT bundle properly for production deployment

This is why you can see them locally but they're missing on GitHub Pages.

## The Images

You have two images that need to display:

### 1. Note Feature Image (figma:asset/4a649dd6d8bb9703322d5c931ab9e363f21987d8.png)
- **Used in:** Slide 11 - "Decomposition of Note feature"
- **Shows:** AH mobile app home screen (the one you just attached)
- **Current status:** Works in dev, missing in production

### 2. Mobile App Demo (figma:asset/60677413393dbc3f58e345fe9a4211b0ac1c57ef.png)
- **Used in:** Slide 4 - "The VM Problem"
- **Shows:** Another AH mobile app screen
- **Current status:** Works in dev, missing in production

---

## ✅ Solution Options

### OPTION 1: Keep It Simple - Accept Dev-Only Images

**Pros:**
- No changes needed
- Works perfectly when presenting locally

**Cons:**
- Images won't show on GitHub Pages

**Use if:**
- You'll present using `npm run dev` or `npm run preview`
- You don't need the GitHub Pages deployment to be fully functional

### OPTION 2: Copy Images to Public Folder (RECOMMENDED for Production)

**Steps:**

1. **Export/Download the images from Figma:**
   - The image you attached (home screen)
   - The other mobile app screen

2. **Save to `/public` folder:**
   ```
   /public/
     mobile-app-demo.png
     note-feature-demo.png
   ```

3. **Update the two slide files:**

   **In `/src/app/components/slides/VMProblemSlide.tsx` (line 4):**
   ```tsx
   // Replace:
   import mobileAppGif from "figma:asset/60677413393dbc3f58e345fe9a4211b0ac1c57ef.png";
   
   // With:
   const mobileAppGif = "/mobile-app-demo.png";
   ```

   **In `/src/app/components/slides/NoteFeatureSlide.tsx` (line 5):**
   ```tsx
   // Replace:
   import noteFeatureGif from "figma:asset/4a649dd6d8bb9703322d5c931ab9e363f21987d8.png";
   
   // With:
   const noteFeatureGif = "/note-feature-demo.png";
   ```

4. **Rebuild and deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

Now the images will work on GitHub Pages! ✅

---

## 🎯 Quick Test

To verify which option you need:

### Test in Development:
```bash
npm run dev
# Open http://localhost:5173
# Navigate to Slides 4 and 11 - images WILL show
```

### Test Production Build Locally:
```bash
npm run build:local
npm run preview
# Open http://localhost:4173
# Navigate to Slides 4 and 11 - images will NOT show (same as GitHub Pages)
```

If images show in preview, they'll show on GitHub Pages.
If images don't show in preview, they won't show on GitHub Pages.

---

## Current Code Status

I've cleaned up both slides by removing the TODO comments. The code currently:
- ✅ Uses `figma:asset` imports (works in dev)
- ❌ Won't work in production builds
- ✅ Ready to be switched to public folder paths (Option 2)

---

## Recommendation

**For presenting locally:** Keep as-is, use `npm run dev`

**For GitHub Pages deployment:** Use Option 2 - copy images to public folder and update the imports

The presentation itself is 100% functional - this is just about getting those two mobile app images to display in production!
