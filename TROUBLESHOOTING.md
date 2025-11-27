# Website Not Visible - Troubleshooting Guide

If your website is not visible at https://abhijeet1999.github.io/Portfolio/, follow these steps:

## ✅ Step 1: Check GitHub Pages Settings

1. Go to: https://github.com/abhijeet1999/Portfolio/settings/pages
2. **VERIFY** the source is set to:
   - ✅ **"GitHub Actions"** (NOT "Branch")
   - ❌ If it says "Branch" → Change it to "GitHub Actions" and Save

## ✅ Step 2: Check GitHub Actions Workflow

1. Go to: https://github.com/abhijeet1999/Portfolio/actions
2. Look for the **"Deploy to GitHub Pages"** workflow
3. Check if it:
   - ✅ Shows a green checkmark (success)
   - ❌ Shows a red X (failed) - Click to see error details
   - ⏳ Shows yellow circle (in progress) - Wait for it to complete

## ✅ Step 3: Manually Trigger Deployment

If the workflow hasn't run:

1. Go to: https://github.com/abhijeet1999/Portfolio/actions
2. Click on **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** button (top right)
4. Select **"main"** branch
5. Click **"Run workflow"**
6. Wait 2-3 minutes for deployment

## ✅ Step 4: Verify Deployment

1. After workflow completes, check:
   - https://abhijeet1999.github.io/Portfolio/
   - The site should show your React portfolio

## 🔍 Common Issues

### Issue: "404 Not Found"
**Solution:** 
- Make sure GitHub Pages source is "GitHub Actions" (not "Branch")
- Wait a few minutes after deployment (propagation delay)
- Clear browser cache or try incognito mode

### Issue: Workflow Failed
**Solution:**
- Click on the failed workflow to see error details
- Check if there are any build errors
- Verify all files are committed and pushed

### Issue: Old HTML Site Still Showing
**Solution:**
- GitHub Pages is still using "Branch" source
- Change to "GitHub Actions" in Settings → Pages
- Wait for new deployment to complete

### Issue: Blank Page
**Solution:**
- Check browser console for errors (F12)
- Verify base path is correct (`/Portfolio/`)
- Check that all assets are loading correctly

## 📞 Quick Fix Checklist

- [ ] GitHub Pages source = "GitHub Actions" ✅
- [ ] GitHub Actions workflow completed successfully ✅
- [ ] Waited 2-3 minutes after deployment ✅
- [ ] Tried incognito/private browsing ✅
- [ ] Checked browser console for errors ✅

## 🚀 Force Re-deployment

If nothing works, try this:

1. Make a small change (add a space to README.md)
2. Commit and push:
   ```bash
   git commit --allow-empty -m "Trigger deployment"
   git push origin main
   ```
3. This will trigger the workflow again

