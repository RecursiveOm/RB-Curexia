import sharp from 'sharp';
import fs from 'fs';

async function process4kLogo() {
  const inputPath = 'C:/Users/HP/.gemini/antigravity/brain/1c56eb7b-ad37-4ebe-9d30-5bf936d6d373/.user_uploaded/media_1795183045802_89d00f90.jpg';

  console.log('Loading input logo...');
  const inputBuffer = fs.readFileSync(inputPath);
  const { width, height } = await sharp(inputBuffer).metadata();
  console.log(`Original size: ${width}x${height}`);

  // 1. First get raw pixels to create a smooth, clean alpha mask for the black background
  // The foreground is cream/champagne (R: 210-245, G: 200-245, B: 180-230)
  // The background is pure black (R: 0-15, G: 0-15, B: 0-15)
  const rawImage = await sharp(inputBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = rawImage;
  const pixelCount = info.width * info.height;

  // Let's create an alpha channel based on luminance
  // If brightness is low (< 25), alpha is 0
  // If brightness is between 25 and 65, smooth ramp
  // If brightness > 65, alpha is 1
  for (let i = 0; i < pixelCount; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    
    // Perceived luminance
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    
    if (lum < 18) {
      data[i * 4 + 3] = 0; // completely transparent
    } else if (lum < 55) {
      // Smooth anti-aliased edge transition
      const factor = (lum - 18) / (55 - 18);
      data[i * 4 + 3] = Math.round(factor * 255);
    } else {
      data[i * 4 + 3] = 255;
    }
  }

  // 2. Now upscale to 4K resolution (4x scale: ~2716 x 1980) using Lanczos3 + sharpening
  const targetWidth = Math.round(width * 4);
  const targetHeight = Math.round(height * 4);
  console.log(`Upscaling to 4K: ${targetWidth}x${targetHeight}...`);

  const transparent4k = await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
    .resize(targetWidth, targetHeight, {
      kernel: sharp.kernel.lanczos3,
      fit: 'fill'
    })
    .sharpen({
      sigma: 1.2,
      m1: 1.5,
      m2: 0.5
    })
    .webp({ quality: 95, lossless: false })
    .toFile('scratch/logo-4k-transparent.webp');

  console.log('Saved scratch/logo-4k-transparent.webp', transparent4k);

  // Also create a version with clean solid black background for comparison
  const black4k = await sharp(inputBuffer)
    .resize(targetWidth, targetHeight, {
      kernel: sharp.kernel.lanczos3,
      fit: 'fill'
    })
    .sharpen({
      sigma: 1.2,
      m1: 1.5,
      m2: 0.5
    })
    .webp({ quality: 95 })
    .toFile('scratch/logo-4k-black.webp');

  console.log('Saved scratch/logo-4k-black.webp', black4k);
}

process4kLogo().catch(console.error);
