import { memo } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

/**
 * Shared optimized image component with AVIF/WebP fallback.
 * Zero-frills — no framer-motion, no refs. For animated versions,
 * create a wrapper that uses motion.img instead.
 */
export const OptimizedImage = memo(
  ({ src, alt, className, loading = "lazy" }: OptimizedImageProps) => {
    const srcWithoutExt = src.replace(/\.(png|jpg|jpeg)$/i, "");
    const webpSrc =
      srcWithoutExt.replace("/images/", "/images/optimized/") + ".webp";
    const avifSrc =
      srcWithoutExt.replace("/images/", "/images/optimized/") + ".avif";

    return (
      <picture>
        <source srcSet={avifSrc} type="image/avif" />
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={src}
          alt={alt}
          className={className}
          loading={loading}
          decoding="async"
        />
      </picture>
    );
  },
);

OptimizedImage.displayName = "OptimizedImage";
