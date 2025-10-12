import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../public/assets/images');
const OUTPUT_DIR = path.join(__dirname, '../public/assets/images/optimized');

// Crear directorio de salida si no existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const optimizeImages = async () => {
  try {
    const files = fs.readdirSync(INPUT_DIR);

    console.log('🖼️  Starting image optimization...\n');

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();

      // Solo procesar imágenes PNG y JPG
      if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
        console.log(`⏭️  Skipping ${file} (not an image)`);
        continue;
      }

      const inputPath = path.join(INPUT_DIR, file);
      const outputFileName = path.basename(file, ext);
      const outputPathWebP = path.join(OUTPUT_DIR, `${outputFileName}.webp`);
      const outputPathAVIF = path.join(OUTPUT_DIR, `${outputFileName}.avif`);

      console.log(`⚙️  Processing: ${file}`);

      // Obtener tamaño original
      const originalStats = fs.statSync(inputPath);
      const originalSize = (originalStats.size / 1024).toFixed(2);

      // Convertir a WebP
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPathWebP);

      const webpStats = fs.statSync(outputPathWebP);
      const webpSize = (webpStats.size / 1024).toFixed(2);
      const webpSavings = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);

      console.log(`   ✅ WebP: ${originalSize}KB → ${webpSize}KB (${webpSavings}% smaller)`);

      // Convertir a AVIF (más comprimido pero menos compatible)
      try {
        await sharp(inputPath)
          .avif({ quality: 80, effort: 6 })
          .toFile(outputPathAVIF);

        const avifStats = fs.statSync(outputPathAVIF);
        const avifSize = (avifStats.size / 1024).toFixed(2);
        const avifSavings = ((1 - avifStats.size / originalStats.size) * 100).toFixed(1);

        console.log(`   ✅ AVIF: ${originalSize}KB → ${avifSize}KB (${avifSavings}% smaller)`);
      } catch (error) {
        console.log(`   ⚠️  AVIF conversion failed for ${file}`);
      }

      console.log('');
    }

    console.log('✨ Image optimization complete!\n');
    console.log(`📁 Optimized images saved to: ${OUTPUT_DIR}`);
    console.log('\n📝 Next steps:');
    console.log('   1. Update your components to use <picture> tags with multiple formats');
    console.log('   2. Add fallback to original images for older browsers');
    console.log('   3. Test the images in your application\n');

  } catch (error) {
    console.error('❌ Error optimizing images:', error);
    process.exit(1);
  }
};

optimizeImages();
