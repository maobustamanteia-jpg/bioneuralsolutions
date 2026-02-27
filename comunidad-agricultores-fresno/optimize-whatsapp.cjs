const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeWhatsAppImage() {
  console.log('Optimizando imagen de WhatsApp...\n');

  const inputPath = path.join(__dirname, 'public/images', 'WhatsApp Image 2026-02-18 at 7.17.36 PM.jpeg');

  if (!fs.existsSync(inputPath)) {
    console.log('❌ Imagen no encontrada');
    return;
  }

  const originalStats = fs.statSync(inputPath);
  console.log(`📸 Imagen original: ${(originalStats.size / 1024 / 1024).toFixed(2)} MB`);

  // Optimizar a WebP para móvil
  await sharp(inputPath)
    .resize(800) // Versión móvil más ligera
    .webp({ quality: 85 })
    .toFile(path.join(__dirname, 'public/images/whatsapp-hero-mobile.webp'));

  // Optimizar a WebP para desktop
  await sharp(inputPath)
    .resize(1200) // Versión desktop
    .webp({ quality: 85 })
    .toFile(path.join(__dirname, 'public/images/whatsapp-hero-desktop.webp'));

  const mobileStats = fs.statSync(path.join(__dirname, 'public/images/whatsapp-hero-mobile.webp'));
  const desktopStats = fs.statSync(path.join(__dirname, 'public/images/whatsapp-hero-desktop.webp'));

  console.log(`✅ Versión móvil (webp): ${(mobileStats.size / 1024).toFixed(2)} KB - Ahorro: ${((1 - mobileStats.size / originalStats.size) * 100).toFixed(1)}%`);
  console.log(`✅ Versión desktop (webp): ${(desktopStats.size / 1024).toFixed(2)} KB - Ahorro: ${((1 - desktopStats.size / originalStats.size) * 100).toFixed(1)}%`);
}

optimizeWhatsAppImage();
