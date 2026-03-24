const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create mobile optimized versions (smaller for slow mobile connections)
const mobileImages = [
  { input: 'farmer-juan.webp', output: 'farmer-juan-mobile.webp', width: 400 },
  { input: 'farmer-maria.webp', output: 'farmer-maria-mobile.webp', width: 400 },
  { input: 'farmer-carlos.webp', output: 'farmer-carlos-mobile.webp', width: 400 },
  { input: 'farmer-ana.webp', output: 'farmer-ana-mobile.webp', width: 400 }
];

async function createMobileImages() {
  console.log('Creating mobile-optimized images...\n');

  for (const img of mobileImages) {
    const inputPath = path.join(__dirname, 'public/images', img.input);
    const outputPath = path.join(__dirname, 'public/images', img.output);

    if (!fs.existsSync(inputPath)) {
      console.log(`❌ Skipping ${img.input} (not found)`);
      continue;
    }

    try {
      await sharp(inputPath)
        .resize(img.width)
        .webp({ quality: 75 })
        .toFile(outputPath);

      const stats = fs.statSync(outputPath);
      const originalStats = fs.statSync(inputPath);

      console.log(`✅ Created ${img.output}`);
      console.log(`   Original: ${(originalStats.size / 1024).toFixed(2)} KB`);
      console.log(`   Mobile: ${(stats.size / 1024).toFixed(2)} KB`);
      console.log(`   Savings: ${((1 - stats.size / originalStats.size) * 100).toFixed(1)}%`);
      console.log('');
    } catch (error) {
      console.log(`❌ Error processing ${img.input}:`, error.message);
    }
  }
}

createMobileImages();
