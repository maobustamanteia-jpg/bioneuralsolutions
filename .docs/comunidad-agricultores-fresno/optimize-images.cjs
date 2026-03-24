const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  { input: 'hero-crops.jpg', output: 'hero-crops.webp', width: 1200 },
  { input: 'farmer-juan.jpg', output: 'farmer-juan.webp', width: 800 },
  { input: 'farmer-maria.jpg', output: 'farmer-maria.webp', width: 800 },
  { input: 'farmer-carlos.jpg', output: 'farmer-carlos.webp', width: 800 },
  { input: 'farmer-ana.jpg', output: 'farmer-ana.webp', width: 800 },
  { input: 'certificate.jpg', output: 'certificate.webp', width: 1000 }
];

async function optimizeImages() {
  console.log('Optimizing images...\n');

  for (const img of images) {
    const inputPath = path.join(__dirname, 'public/images', img.input);
    const outputPath = path.join(__dirname, 'public/images', img.output);

    if (!fs.existsSync(inputPath)) {
      console.log(`❌ Skipping ${img.input} (not found)`);
      continue;
    }

    try {
      await sharp(inputPath)
        .resize(img.width)
        .webp({ quality: 80 })
        .toFile(outputPath);

      const stats = fs.statSync(outputPath);
      const originalStats = fs.statSync(inputPath);

      console.log(`✅ Created ${img.output}`);
      console.log(`   Original: ${(originalStats.size / 1024 / 1024).toFixed(2)} MB`);
      console.log(`   Optimized: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
      console.log(`   Savings: ${((1 - stats.size / originalStats.size) * 100).toFixed(1)}%`);
      console.log('');
    } catch (error) {
      console.log(`❌ Error processing ${img.input}:`, error.message);
    }
  }
}

optimizeImages();
