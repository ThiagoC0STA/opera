"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ASSET = "/final-elements";

const macawLeft = {
  initial: { opacity: 0, x: -80, rotate: -12, scale: 0.75 },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
      mass: 1.1,
      delay: 0.15,
    },
  },
};

const macawRight = {
  initial: { opacity: 0, x: 80, rotate: 12, scale: 0.75 },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
      mass: 1.1,
      delay: 0.28,
    },
  },
};

const trophyLeft = {
  initial: { opacity: 0, scale: 0.6, y: 24, rotate: -12 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 16,
      mass: 0.55,
      delay: 0.45,
    },
  },
};

const trophyRight = {
  initial: { opacity: 0, scale: 0.6, y: 24, rotate: 12 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 16,
      mass: 0.55,
      delay: 0.58,
    },
  },
};

/**
 * Hero-style macaws and trophies, positioned for the cadastro page layout.
 */
export function CadastroDecorLayer() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute top-[10%] z-[2] hidden w-[min(58vw,260px)] max-w-none sm:block sm:top-[14%] sm:w-[min(54vw,300px)] md:top-[16%] md:w-[340px] lg:top-[18%] lg:w-[380px] left-[calc(50%-min(32rem,calc(100vw-2rem))/2-5rem)] -translate-x-full lg:left-[calc(50%-min(36rem,calc(100vw-2rem))/2-5rem)]"
        variants={macawLeft}
        initial="initial"
        animate="animate"
      >
        <div className="animate-macaw-hover">
          <Image
            src={`${ASSET}/arara.png`}
            alt=""
            width={646}
            height={678}
            className="h-auto w-full object-contain"
            unoptimized
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[10%] z-[2] hidden w-[min(58vw,260px)] max-w-none scale-x-[-1] sm:block sm:top-[14%] sm:w-[min(54vw,300px)] md:top-[16%] md:w-[340px] lg:top-[18%] lg:w-[380px] left-[calc(50%+min(32rem,calc(100vw-2rem))/2+5rem)] lg:left-[calc(50%+min(36rem,calc(100vw-2rem))/2+5rem)]"
        variants={macawRight}
        initial="initial"
        animate="animate"
      >
        <div className="animate-macaw-hover" style={{ animationDelay: "0.4s" }}>
          <Image
            src={`${ASSET}/arara.png`}
            alt=""
            width={646}
            height={678}
            className="h-auto w-full object-contain"
            unoptimized
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[26%] left-[2%] z-[3] w-[48px] sm:bottom-[30%] sm:left-[max(1rem,calc(50%-22rem))] sm:w-[min(12vw,76px)] lg:left-[max(1.5rem,calc(50%-26rem))]"
        variants={trophyLeft}
        initial="initial"
        animate="animate"
      >
        <div className="animate-trophy-gleam">
          <Image
            src={`${ASSET}/trophy.svg`}
            alt=""
            width={118}
            height={153}
            className="h-auto w-full object-contain"
            unoptimized
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[26%] right-[2%] z-[3] w-[48px] scale-x-[-1] sm:bottom-[30%] sm:right-[max(1rem,calc(50%-22rem))] sm:w-[min(12vw,76px)] lg:right-[max(1.5rem,calc(50%-26rem))]"
        variants={trophyRight}
        initial="initial"
        animate="animate"
      >
        <div className="animate-trophy-gleam" style={{ animationDelay: "0.25s" }}>
          <Image
            src={`${ASSET}/trophy.svg`}
            alt=""
            width={118}
            height={153}
            className="h-auto w-full object-contain"
            unoptimized
          />
        </div>
      </motion.div>
    </div>
  );
}
