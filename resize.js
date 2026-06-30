const sharp = require('sharp');
const fs = require('fs');

async function processImage() {
  const srcPath = 'C:/Users/Steve/Downloads/memorial urn3.jpg';
  try {
    console.log('Processing memorial pieces image...');
    
    // Copy to source backup
    fs.copyFileSync(srcPath, 'public/images/memorial-pieces-src.jpg');
    console.log('Copied source to public/images/memorial-pieces-src.jpg');

    // Output WebP (full resolution and optimized)
    await sharp(srcPath)
      .webp({ quality: 85 })
      .toFile('public/images/memorial-pieces-v3.webp');
    console.log('Saved public/images/memorial-pieces-v3.webp');

    console.log('Image successfully resized and converted!');
  } catch (err) {
    console.error('Error processing image:', err);
    process.exit(1);
  }
}

processImage();
