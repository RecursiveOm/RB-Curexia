import sharp from 'sharp';

async function analyzeLogo() {
  const inputLogo = 'C:/Users/HP/.gemini/antigravity/brain/1c56eb7b-ad37-4ebe-9d30-5bf936d6d373/.user_uploaded/media_1795183045802_89d00f90.jpg';
  const img = sharp(inputLogo);
  const stats = await img.stats();
  console.log('Channels:', stats.channels.map(c => ({ min: c.min, max: c.max, mean: Math.round(c.mean) })));
}

analyzeLogo().catch(console.error);
