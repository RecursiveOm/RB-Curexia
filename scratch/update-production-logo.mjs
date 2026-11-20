import sharp from 'sharp';
import fs from 'fs';

async function updateProductionLogo() {
  const sourcePath = 'scratch/logo-4k-transparent.webp';
  const destWebp = 'public/assets/embedded-90b24ba6af66.webp';
  const destPng = 'public/assets/rbcurexia-logo-4k.png';

  console.log('Copying 4K logo to production assets...');
  
  // Write 4K WebP
  await sharp(sourcePath)
    .webp({ quality: 98, lossless: false })
    .toFile(destWebp);

  // Write 4K PNG
  await sharp(sourcePath)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(destPng);

  const meta = await sharp(destWebp).metadata();
  console.log('Production logo updated:', meta.width, 'x', meta.height, 'format:', meta.format);
}

updateProductionLogo().catch(console.error);
