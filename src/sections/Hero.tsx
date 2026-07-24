import { Circle } from "@/components/Circle";
import { CutCornerButton } from "@/components/CutCornerButton";
import { Hexagon } from "@/components/Hexagon";
import { motion, useMotionValue } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

// Custom hook that replaces useScroll + useTransform for element-scroll rotation.
// Uses useLayoutEffect to measure the element's actual position on the client
// and set the correct rotation BEFORE the browser paints — no SSR→client jump.
function useElementScrollRotation(
  ref: React.RefObject<Element | null>,
  startAngle: number,
  endAngle: number
) {
  const rotate = useMotionValue(startAngle);

  useLayoutEffect(() => {
    const cb = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // offset: ["start end", "end start"] — when element top
      // aligns with viewport bottom, progress = 0.
      const totalDist = vh + rect.height;
      const currentPos = vh - rect.top;
      const progress = Math.max(0, Math.min(1, currentPos / totalDist));
      rotate.set(startAngle + (endAngle - startAngle) * progress);
    };

    cb(); // Set correct initial value immediately (before browser paints)
    window.addEventListener("scroll", cb, { passive: true });
    return () => window.removeEventListener("scroll", cb);
  }, [ref, startAngle, endAngle]);

  return rotate;
}

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  imgRef?: React.Ref<HTMLImageElement>;
  loading?: "lazy" | "eager";
}

// Optimized image with framer-motion for scroll animations
const AnimatedImage = ({
  src,
  alt,
  className,
  style,
  imgRef,
  loading = "lazy",
}: AnimatedImageProps) => {
  const srcWithoutExt = src.replace(/\.(png|jpg|jpeg)$/i, "");
  const webpSrc =
    srcWithoutExt.replace("/images/", "/images/optimized/") + ".webp";
  const avifSrc =
    srcWithoutExt.replace("/images", "/images/optimized/") + ".avif";

  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />
      <motion.img
        ref={imgRef}
        src={src}
        alt={alt}
        className={className}
        style={style}
        initial={false}
        loading={loading}
        decoding="async"
      />
    </picture>
  );
};

export const HeroSection = () => {
  // References to the elements
  const icosahedronRef = useRef<HTMLDivElement | null>(null);
  const cubeRef = useRef<HTMLImageElement | null>(null);
  const torusRef = useRef<HTMLImageElement | null>(null);
  const cuboidRef = useRef<HTMLImageElement | null>(null);

  const IcosahedronRotate = useElementScrollRotation(icosahedronRef, 30, -45);
  const CubeRotate = useElementScrollRotation(cubeRef, 30, -30);
  const TorusRotate = useElementScrollRotation(torusRef, 20, -20);
  const CuboidRotate = useElementScrollRotation(cuboidRef, 20, -20);

  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container mx-auto">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
          Introducing Blockforge
        </p>
        <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4 max-w-3xl mx-auto">
          The Future of Blockchain is Here.
        </h1>
        <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto ">
          Blockforge is pioneering smart contract integrity with cutting-edge
          data solutions.
        </p>
        <div className="flex justify-center mt-10">
          <CutCornerButton className="">Get Started</CutCornerButton>
        </div>
        <div className="flex justify-center mt-24 ">
          <div className="inline-flex  relative z-0">
            {/* Agregando el marco en el centro */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-275" size={1100} />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" size={1800} />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-50 -top-225" animate>
                <AnimatedImage
                  imgRef={cubeRef}
                  style={{ rotate: CubeRotate }}
                  src="/assets/images/cube.png"
                  alt="Cube 3d"
                  className="size-35 [rotate:30deg]"
                  loading="lazy"
                />
              </Circle>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute  left-50 top-67.5" animate>
                <AnimatedImage
                  imgRef={cuboidRef}
                  style={{ rotate: CuboidRotate }}
                  src="/assets/images/cuboid.png"
                  alt="Cuboid 3d"
                  className="size-35 [rotate:20deg]"
                  loading="lazy"
                />
              </Circle>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-150 -top-20 ">
                <AnimatedImage
                  imgRef={torusRef}
                  style={{ rotate: TorusRotate }}
                  src="/assets/images/torus.png"
                  alt="Torus 3d"
                  className="size-35 [rotate:20deg]"
                  loading="lazy"
                />
              </Circle>
            </div>

            <motion.div
              style={{ rotate: IcosahedronRotate }}
              initial={false}
              className="inline-flex [rotate:30deg]"
              ref={icosahedronRef}
            >
              <img
                src="/assets/images/icosahedron.png"
                className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate[10%] brightness-4 hue-rotate-240"
                alt=""
              />

              <img
                src="/assets/images/icosahedron.png"
                alt="Icosanhedron 3D"
                className="w-125"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-40 md:mt-80  gap-4">
          <div className=" h-10 w-5  outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full">
            <div className="h-3 w-1 bg-fuchsia-500 rounded-full"></div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};
