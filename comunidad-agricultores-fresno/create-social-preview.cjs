const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createSocialPreview() {
  console.log('Creating social media preview...\n');

  const inputPath = path.join(__dirname, 'public/images', 'WhatsApp Image 2026-02-18 at 7.17.36 PM.jpeg');
  const outputPath = path.join(__dirname, 'public/images', 'social-preview.webp');

  if (!fs.existsSync(inputPath)) {
    console.log('❌ WhatsApp image not found');
    return;
  }

  try {
    // Create a 1200x630 preview image
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      // Add green overlay
      .composite([
        {
          input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="overlay" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#1B4332;stop-opacity:0.3" />
                <stop offset="100%" style="stop-color:#1B4332;stop-opacity:0.5" />
              </linearGradient>
            </defs>
            <rect width="1200" height="630" fill="url(#overlay)"/>
          </svg>`),
          gravity: 'center'
        }
      ])
      .webp({ quality: 90 })
      .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    console.log(`✅ Social preview created: ${(stats.size / 1024).toFixed(2)} KB`);
    console.log(`📸 Size: 1200x630px (Facebook/LinkedIn recommended)`);
    console.log(`💾 Path: ${outputPath}`);
  } catch (error) {
    console.log('❌ Error creating social preview:', error.message);

    // Fallback: just resize the WhatsApp image
    console.log('🔄 Creating fallback preview...');
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 90 })
      .toFile(path.join(__dirname, 'public/images', 'social-preview-fallback.webp'));
    
    console.log('✅ Fallback preview created');
  }
}

createSocialPreview();
