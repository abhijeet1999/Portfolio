# Quick Setup Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd portfolio-react
npm install
```

### 2. Copy Your Images
Make sure your profile image is in the public folder:
```bash
# If images folder exists in parent directory
cp -r ../images public/

# Or manually copy images/profile.jpg to public/images/profile.jpg
```

### 3. Start Development Server
```bash
npm run dev
```

The site will open at `http://localhost:3000`

## ✨ What You Get

- **Stunning Homepage** with:
  - Animated particle background
  - Count-up statistics (100M+, 99%, 140+)
  - Floating 3D cards
  - Smooth scroll animations
  - Interactive profile card

- **Modern Navigation** with:
  - Smooth transitions
  - Active link indicators
  - Mobile-responsive menu

- **Ready-to-customize Pages**:
  - About
  - Projects
  - Skills
  - Experience
  - Education
  - Achievements
  - Certificates
  - Licenses
  - Contact

## 🎨 Customization

Edit the files in `src/pages/` to add your content. The design uses:
- Framer Motion for animations
- CSS variables for easy color changes
- Responsive grid layouts

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist` folder, ready to deploy!


