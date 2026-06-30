const sharp = require('sharp');

async function processImage() {
  try {
    console.log('Processing image...');
    await sharp('public/images/charcuterie-src.png')
      .resize(1200, 800, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 85 })
      .toFile('public/images/charcuterie-boards-final.webp');
    console.log('Image successfully resized and converted to WebP!');
  } catch (err) {
    console.error('Error processing image:', err);
    process.exit(1);
  }
}

processImage();
