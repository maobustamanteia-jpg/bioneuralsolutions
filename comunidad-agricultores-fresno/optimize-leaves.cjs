const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeLeafImages() {
  console.log('Optimizando imágenes de hojas...\n');

  const images = [
    {
      input: 'WhatsApp Image 2026-02-18 at 7.17.38 PM.jpeg',
      output: 'leaves-yellow.webp',
      label: 'Hojas Amarillas (Antes)'
    },
    {
      input: 'WhatsApp Image 2026-02-18 at 7.22.23 PM.jpeg',
      output: 'leaves-green.webp',
      label: 'Hojas Verdes (Después)'
    }
  ];

  for (const img of images) {
    const inputPath = path.join(__dirname, 'public/images', img.input);
    const outputPath = path.join(__dirname, 'public/images', img.output);

    if (!fs.existsSync(inputPath)) {
      console.log(`❌ Skipping ${img.input} (not found)`);
      continue;
    }

    try {
      // Optimizar para desktop (800px)
      await sharp(inputPath)
        .resize(800)
        .webp({ quality: 85 })
        .toFile(outputPath);

      // Optimizar para móvil (400px)
      const mobileOutput = outputPath.replace('.webp', '-mobile.webp');
      await sharp(inputPath)
        .resize(400)
        .webp({ quality: 80 })
        .toFile(mobileOutput);

      const stats = fs.statSync(outputPath);
      const mobileStats = fs.statSync(mobileOutput);
      const originalStats = fs.statSync(inputPath);

      console.log(`✅ ${img.label}`);
      console.log(`   Desktop: ${(stats.size / 1024).toFixed(2)} KB`);
      console.log(`   Mobile: ${(mobileStats.size / 1024).toFixed(2)} KB`);
      console.log(`   Original: ${(originalStats.size / 1024).toFixed(2)} KB`);
      console.log(`   Savings: ${((1 - stats.size / originalStats.size) * 100).toFixed(1)}%`);
      console.log('');
    } catch (error) {
      console.log(`❌ Error processing ${img.input}:`, error.message);
    }
  }
}

optimizeLeafImages();
