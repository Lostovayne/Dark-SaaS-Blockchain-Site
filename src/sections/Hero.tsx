import { Circle } from "@/components/Circle";
import { CutCornerButton } from "@/components/CutCornerButton";
import { Hexagon } from "@/components/Hexagon";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HeroSection = () => {
  // References to the elements
  const icosahedronRef = useRef<HTMLDivElement | null>(null);
  const cubeRef = useRef<HTMLImageElement | null>(null);
  const torusRef = useRef<HTMLImageElement | null>(null);
  const cuboidRef = useRef<HTMLImageElement | null>(null);

  // Takes the scroll progress and uses it to animate the hexagon
  const { scrollYProgress } = useScroll({ target: icosahedronRef, offset: ["start end", "end start"] });

  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: ["start end", "end start"],
  });

  const IcosanhedronRotate = useTransform(scrollYProgress, [0, 1], [30, -45]);
  const CubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45]);
  const TorusRotate = useTransform(torusScrollYProgress, [0, 1], [20, -20]);
  const CuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container mx-auto">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">Introducing Blockforge</p>
        <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4 max-w-3xl mx-auto">
          The Future of Blockchain is Here.
        </h1>
        <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto ">
          Blockforge is pioneering smart contract integrity with cutting-edge data solutions.
        </p>
        <div className="flex justify-center mt-10">
          <CutCornerButton className="">Get Started</CutCornerButton>
        </div>
        <div className="flex justify-center mt-24 ">
          <div className="inline-flex  relative z-0">
            {/* Agregando el marco en el centro */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" size={1100} />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" size={1800} />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] -top-[900px]" animate>
                <motion.img
                  ref={cubeRef}
                  style={{ rotate: CubeRotate, transitionDuration: "0.6s" }}
                  src="/assets/images/cube.png"
                  alt="Cube 3d"
                  className="size-[140px]"
                />
              </Circle>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute  left-[200px] top-[270px]" animate>
                <motion.img
                  ref={cuboidRef}
                  style={{ rotate: CuboidRotate }}
                  src="/assets/images/cuboid.png"
                  alt="Cuboid 3d"
                  className="size-[140px]"
                />
              </Circle>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[600px] -top-[80px] ">
                <motion.img
                  style={{ rotate: TorusRotate }}
                  ref={torusRef}
                  src="/assets/images/torus.png"
                  alt="Torus 3d"
                  className="size-[140px]"
                />
              </Circle>
            </div>

            <motion.div style={{ rotate: IcosanhedronRotate }} className={"inline-flex"} ref={icosahedronRef}>
              <img
                src="/assets/images/icosahedron.png"
                className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate[10%] brightness-4 hue-rotate-240"
                alt=""
              />

              <img src="/assets/images/icosahedron.png" alt="Icosanhedron 3D" className="w-[500px]" />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-40 md:mt-80  gap-4">
          <div className=" h-10 w-5  outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full">
            <div className="h-3 w-1 bg-fuchsia-500 rounded-full"></div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">Scroll to learn more</p>
        </div>
      </div>
    </section>
  );
};
