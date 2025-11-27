# Image Size Optimization Guide

## Current Image Sizes

### Images That Need Optimization (Too Large):

1. **marist-digital-education.jpg** - 4.6MB ❌
   - **Target:** < 500KB
   - **Action:** Compress or resize

2. **emerging-leader.JPG** - 2.4MB ❌
   - **Target:** < 300KB
   - **Action:** Compress or resize

3. **employee-of-year.jpg** - 606KB ⚠️
   - **Target:** < 300KB
   - **Action:** Compress

4. **award.jpg** - 374KB ⚠️
   - **Target:** < 200KB
   - **Action:** Compress

5. **inkedin-banner.png** - 179KB ⚠️
   - **Target:** < 100KB
   - **Action:** Convert to JPG or compress

### Images That Are Good:

- **profile.jpg** - 86KB ✅
- **pic.jpg** - 86KB ✅
- **spar-thumb.jpg** - 83KB ✅
- **cisco-thingqbator.jpg** - 45KB ✅
- **eyantra.jpg** - 58KB ✅
- **eyantra-team.jpg** - 52KB ✅

## How to Optimize Images

### Option 1: Online Tools (Easiest)

1. **TinyPNG / TinyJPG** - https://tinypng.com/
   - Drag and drop images
   - Download optimized versions
   - Replace in `portfolio-react/public/` folder

2. **Squoosh** - https://squoosh.app/
   - More control over compression
   - Can adjust quality settings

### Option 2: Command Line (ImageMagick)

```bash
# Install ImageMagick (if not installed)
# macOS: brew install imagemagick

# Compress JPG
cd portfolio-react/public/images
magick marist-digital-education.jpg -quality 85 -resize 1920x1080 marist-digital-education.jpg

# Compress certificate
cd ../certificates
magick emerging-leader.JPG -quality 85 -resize 1200x1600 emerging-leader.JPG
```

### Option 3: Using Python (Pillow)

```python
from PIL import Image
import os

def optimize_image(input_path, output_path, quality=85, max_size=(1920, 1080)):
    img = Image.open(input_path)
    img.thumbnail(max_size, Image.Resampling.LANCZOS)
    img.save(output_path, optimize=True, quality=quality)
    print(f"Optimized: {input_path} -> {output_path}")

# Example usage
optimize_image('marist-digital-education.jpg', 'marist-digital-education.jpg')
```

## Recommended Sizes

- **Profile Images:** 400x400px, < 100KB
- **Project Thumbnails:** 800x600px, < 150KB
- **Certificates:** 1200x1600px, < 300KB
- **Banner Images:** 1920x1080px, < 500KB

## After Optimization

1. Replace optimized images in `portfolio-react/public/`
2. Test locally: `npm run dev`
3. Verify images load correctly
4. Commit and push changes

## Benefits of Optimization

- ✅ Faster page load times
- ✅ Better user experience
- ✅ Lower bandwidth usage
- ✅ Better SEO scores
- ✅ Reduced hosting costs

