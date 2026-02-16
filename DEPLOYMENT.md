# GitHub Pages Deployment Guide

## Prerequisites
- Git installed on your machine
- A GitHub account
- Your presentation code ready

## Step-by-Step Deployment Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** button in the top right corner
3. Select **"New repository"**
4. Name your repository: `compose-viewmodels-presentation` (or any name you prefer)
5. Make it **Public** (required for free GitHub Pages)
6. Don't initialize with README, .gitignore, or license
7. Click **"Create repository"**

### 2. Initialize Git and Push Your Code

Open your terminal in your project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: ComposeViewModels presentation"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/compose-viewmodels-presentation.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Deploy to GitHub Pages

Once your code is on GitHub, deploy it:

```bash
npm run deploy
```

This command will:
- Build your presentation for production
- Create a `gh-pages` branch
- Deploy the built files to GitHub Pages

### 4. Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Click **"Pages"** in the left sidebar
4. Under "Source", make sure it says:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Click **"Save"** if needed

### 5. Access Your Presentation

Your presentation will be live at:
```
https://YOUR-USERNAME.github.io/compose-viewmodels-presentation/
```

⏱️ **Note**: It may take 2-5 minutes for your site to be published after the first deployment.

## Updating Your Presentation

Whenever you make changes to your presentation:

```bash
# 1. Save your changes
git add .
git commit -m "Update presentation content"
git push origin main

# 2. Deploy the updates
npm run deploy
```

Your changes will be live in a few minutes!

## Important Notes

### Base Path Configuration
The `vite.config.ts` file includes:
```typescript
base: '/compose-viewmodels-presentation/'
```

**⚠️ Important**: If you named your repository something different, update this line to match:
```typescript
base: '/YOUR-REPO-NAME/'
```

### Custom Domain (Optional)
To use a custom domain:
1. In GitHub Settings → Pages, add your custom domain
2. Update `vite.config.ts` to use `base: '/'`
3. Redeploy with `npm run deploy`

## Troubleshooting

### 404 Error / Page Not Found
- Check that the `base` in `vite.config.ts` matches your repository name
- Ensure GitHub Pages is enabled and set to the `gh-pages` branch
- Wait a few minutes for changes to propagate

### Assets Not Loading
- Verify the `base` path in `vite.config.ts` is correct
- Check browser console for errors
- Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Deployment Permission Errors
```bash
# Configure git if needed
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

## Presentation Features

Your deployed presentation includes:
- ✅ 25 professional slides with AH branding
- ✅ Keyboard navigation (arrow keys, spacebar)
- ✅ Click navigation with buttons
- ✅ Progress indicators
- ✅ Fullscreen mode (F11 or fullscreen button)
- ✅ Clicker compatibility
- ✅ Auto-fit scaling for any screen size
- ✅ Animated transitions and bullet points

## Need Help?

If you encounter issues:
1. Check the GitHub Actions tab in your repository for build errors
2. Verify all files are committed and pushed
3. Ensure the repository is public (for free GitHub Pages)
4. Check that Node.js and npm are installed: `node -v` and `npm -v`
