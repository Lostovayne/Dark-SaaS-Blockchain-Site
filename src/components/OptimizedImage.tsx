import { memo } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  width?: number;
  height?: number;
}

const getOptimizedPaths = (src: string) => {
  if (src.endsWith(".svg")) {
    return { avif: null, webp: null, fallback: src };
  }
  const cleanPath = src.replace(/\.(png|jpg|jpeg)$/i, "");
  if (cleanPath.includes("/images/optimized/")) {
    return {
      avif: `${cleanPath}.avif`,
      webp: `${cleanPath}.webp`,
      fallback: `${cleanPath}.webp`,
    };
  }
  const base = cleanPath.replace(
    "/assets/images/",
    "/assets/images/optimized/",
  );
  return {
    avif: `${base}.avif`,
    webp: `${base}.webp`,
    fallback: `${base}.webp`,
  };
};

/**
 * Shared optimized image component with AVIF/WebP fallback.
 */
export const OptimizedImage = memo(
  ({
    src,
    alt,
    className,
    loading = "lazy",
    fetchPriority,
    width,
    height,
  }: OptimizedImageProps) => {
    const { avif, webp, fallback } = getOptimizedPaths(src);

    if (!avif || !webp) {
      return (
        <img
          src={src}
          alt={alt}
          className={className}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          width={width || 500}
          height={height || 500}
        />
      );
    }

    return (
      <picture style={{ display: "contents" }}>
        <source srcSet={avif} type="image/avif" />
        <source srcSet={webp} type="image/webp" />
        <img
          src={fallback}
          alt={alt}
          className={className}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding="async"
          width={width || 500}
          height={height || 500}
        />
      </picture>
    );
  },
);

OptimizedImage.displayName = "OptimizedImage";
