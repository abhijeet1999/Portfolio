# GitHub Pages Deployment Guide

This portfolio is configured to deploy automatically to GitHub Pages using GitHub Actions.

## 🚀 Quick Setup

### 1. Repository Setup

1. Create a new repository on GitHub (or use existing one)
2. Make sure your repository name matches the `base` path in `vite.config.js`
   - If repo is `Portfolio`, base should be `/Portfolio/`
   - If repo is `username.github.io`, base should be `/`

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: `GitHub Actions`
4. Save the settings

### 3. Push Your Code

```bash
cd portfolio-react
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 4. Automatic Deployment

Once you push to the `main` branch, GitHub Actions will automatically:
- Build your React app
- Deploy it to GitHub Pages
- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 🔧 Configuration

### Update Base Path

If your repository name is different from "Portfolio", you have two options:

**Option 1: Environment Variable (Recommended)**
Create a `.env` file in the `portfolio-react` folder:
```
VITE_BASE_PATH=/YOUR_REPO_NAME/
```

**Option 2: Direct Edit**
Edit `vite.config.js` and change the default:
```javascript
const basePath = process.env.VITE_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/')
```

**For username.github.io repositories:**
Set `VITE_BASE_PATH=/` in your `.env` file or update the default in `vite.config.js` to `/`

### Custom Domain (Optional)

If you have a custom domain:
1. Update `vite.config.js` base to `/`
2. Add a `CNAME` file in the `public` folder with your domain
3. Configure DNS settings as per GitHub Pages documentation

## 📝 Local Development

```bash
# Install dependencies
npm install

# Start dev server on port 5173
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✅ Verification

After deployment, verify:
- ✅ All routes work (using HashRouter for GitHub Pages compatibility)
- ✅ Images and assets load correctly
- ✅ No console errors
- ✅ Mobile responsiveness

## 🐛 Troubleshooting

### Routes not working
- Make sure you're using `HashRouter` (already configured in `App.jsx`)
- Check that `base` path in `vite.config.js` matches your repo name

### 404 errors
- Verify GitHub Pages is enabled in repository settings
- Check that the workflow completed successfully in Actions tab
- Ensure `base` path is correct

### Assets not loading
- Check that paths in your code use relative paths (not absolute)
- Verify all assets are in the `public` folder

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)

