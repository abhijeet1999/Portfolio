#!/bin/bash

# Instructional Design Portfolio Deployment Script
# This script helps you deploy your portfolio to GitHub Pages

echo "🎨 Instructional Design Portfolio Deployment"
echo "=============================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "⚠️  GitHub CLI is not installed. You'll need to set up the repository manually."
    echo "   Install GitHub CLI: https://cli.github.com/"
fi

# Initialize git repository if not already done
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Initial portfolio commit"

# Ask for repository name
echo ""
echo "🚀 GitHub Pages Setup"
echo "===================="
read -p "Enter your GitHub username: " username
read -p "Enter repository name (e.g., portfolio): " repo_name

# Create repository on GitHub if GitHub CLI is available
if command -v gh &> /dev/null; then
    echo "🌐 Creating repository on GitHub..."
    gh repo create "$username/$repo_name" --public --source=. --remote=origin --push
    
    if [ $? -eq 0 ]; then
        echo "✅ Repository created and pushed to GitHub"
        
        # Enable GitHub Pages
        echo "🔧 Enabling GitHub Pages..."
        gh repo edit --enable-pages
        
        echo ""
        echo "🎉 Deployment Complete!"
        echo "======================"
        echo "Your portfolio is now live at:"
        echo "https://$username.github.io/$repo_name"
        echo ""
        echo "📝 Next Steps:"
        echo "1. Customize the content in index.html"
        echo "2. Update your personal information"
        echo "3. Add your own projects and experience"
        echo "4. Update contact information and social links"
    else
        echo "❌ Failed to create repository. Please check your GitHub CLI authentication."
    fi
else
    echo ""
    echo "📋 Manual Setup Required"
    echo "======================="
    echo "Since GitHub CLI is not installed, please follow these steps:"
    echo ""
    echo "1. Go to https://github.com/new"
    echo "2. Create a new repository named: $repo_name"
    echo "3. Make it public"
    echo "4. Don't initialize with README (we already have one)"
    echo "5. Run these commands:"
    echo "   git remote add origin https://github.com/$username/$repo_name.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo "6. Go to repository Settings → Pages"
    echo "7. Select 'Deploy from a branch' → 'main' branch"
    echo "8. Your portfolio will be available at:"
    echo "   https://$username.github.io/$repo_name"
fi

echo ""
echo "🎨 Happy designing!" 