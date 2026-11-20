import sharp from 'sharp';

async function inspectImages() {
  const inputLogo = 'C:/Users/HP/.gemini/antigravity/brain/1c56eb7b-ad37-4ebe-9d30-5bf936d6d373/.user_uploaded/media_1795183045802_89d00f90.jpg';
  const currentLogo = 'public/assets/embedded-90b24ba6af66.webp';

  const inputMeta = await sharp(inputLogo).metadata();
  console.log('User Uploaded Logo:', inputMeta.width, 'x', inputMeta.height, 'format:', inputMeta.format);

  const currentMeta = await sharp(currentLogo).metadata();
  console.log('Current Logo:', currentMeta.width, 'x', currentMeta.height, 'format:', currentMeta.format);
}

inspectImages().catch(console.error);
