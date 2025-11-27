# Abhijeet Cherungottil - Portfolio

A modern React portfolio showcasing iOS development and instructional technology expertise.

## 🚀 Features

- **Modern React + Vite** - Fast, optimized build
- **Framer Motion** - Smooth, eye-catching animations
- **Interactive Particle Background** - Dynamic canvas animations
- **Animated Statistics** - Count-up animations
- **Floating 3D Cards** - Engaging visual elements
- **Responsive Design** - Works on all devices
- **Smooth Navigation** - React Router with hash-based routing for GitHub Pages
- **GitHub Pages Ready** - Automatic deployment via GitHub Actions

## 📁 Project Structure

```
Portfolio/
├── portfolio-react/          # React application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   └── styles/          # CSS files
│   ├── public/              # Static assets
│   └── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
└── README.md                # This file
```

## 🛠️ Setup Instructions

### Local Development

1. **Navigate to the React app:**
   ```bash
   cd portfolio-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open on `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment to GitHub Pages

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Quick Setup:

1. **Push your code to GitHub** (already done if you're reading this)

2. **Enable GitHub Pages:**
   - Go to: `https://github.com/abhijeet1999/Portfolio/settings/pages`
   - Under **"Source"**, select: **"GitHub Actions"** (NOT "Branch")
   - Save

3. **Automatic Deployment:**
   - GitHub Actions will automatically build and deploy
   - Check: `https://github.com/abhijeet1999/Portfolio/actions`
   - Your site will be live at: `https://abhijeet1999.github.io/Portfolio/`

### Configuration:

- **Base Path:** `/Portfolio/` (configured in `vite.config.js`)
- **Router:** HashRouter (for GitHub Pages compatibility)
- **Port:** 5173 (development), 4173 (preview)

For detailed deployment instructions, see: [portfolio-react/GITHUB_PAGES_SETUP.md](portfolio-react/GITHUB_PAGES_SETUP.md)

## 📦 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **React Router** - Navigation (HashRouter for GitHub Pages)
- **Font Awesome** - Icons

## 📝 Pages

- **Home** - Hero section with animated stats and floating cards
- **About** - Professional background and statistics
- **Projects** - Portfolio of work including S.P.A.R, LMS projects, and more
- **Skills** - Technical and professional skills
- **Experience** - Work history and achievements
- **Education** - Academic background
- **Achievements** - Awards and recognition
- **Certificates** - Professional certifications
- **Licenses** - Professional licenses
- **Contact** - Contact information and social links

## 🎨 Customization

### Update Content:

All content is in React components in `portfolio-react/src/pages/`:
- Edit page components to update content
- Images are in `portfolio-react/public/images/`
- Certificates are in `portfolio-react/public/certificates/`

### Update Styling:

- Global styles: `portfolio-react/src/styles/`
- Component styles: Co-located with components (e.g., `About.css`)

### Update Base Path:

If your repository name is different, update `portfolio-react/vite.config.js`:
```javascript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
```

## 🔧 Development

### Available Scripts:

- `npm run dev` - Start development server (port 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build (port 4173)

### Project Structure:

```
portfolio-react/
├── src/
│   ├── components/      # Navigation, ParticleBackground, etc.
│   ├── pages/           # All page components
│   └── styles/          # Global CSS
├── public/              # Static assets (images, certificates)
└── vite.config.js      # Vite configuration
```

## 📧 Contact

- **Email:** abhijeetcherungottil@gmail.com
- **LinkedIn:** [linkedin.com/in/abhijeetcherungottil](https://www.linkedin.com/in/abhijeetcherungottil/)
- **GitHub:** [github.com/abhijeet1999](https://github.com/abhijeet1999)

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Troubleshooting

### Images not loading:
- Ensure images are in `portfolio-react/public/` folder
- Check that paths use `import.meta.env.BASE_URL`

### Routes not working:
- Make sure GitHub Pages source is set to "GitHub Actions"
- Verify HashRouter is being used (already configured)

### Build fails:
- Run `npm install` to ensure dependencies are installed
- Check for linting errors

For more help, see: [portfolio-react/DEPLOYMENT_SUMMARY.md](portfolio-react/DEPLOYMENT_SUMMARY.md)

---

**Live Site:** https://abhijeet1999.github.io/Portfolio/
