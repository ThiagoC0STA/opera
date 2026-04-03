"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ASSET = "/final-elements";

const macawLeft = {
  initial: { opacity: 0, x: -140, rotate: -15, scale: 0.7 },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 14,
      mass: 1.3,
      delay: 0.6,
    },
  },
};

const macawRight = {
  initial: { opacity: 0, x: 140, rotate: 15, scale: 0.7 },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 14,
      mass: 1.3,
      delay: 0.8,
    },
  },
};

const trophyLeft = {
  initial: { opacity: 0, scale: 0, y: 50, rotate: -20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 14,
      mass: 0.6,
      delay: 1.0,
    },
  },
};

const trophyRight = {
  initial: { opacity: 0, scale: 0, y: 50, rotate: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 14,
      mass: 0.6,
      delay: 1.15,
    },
  },
};

export function HeroDecorLayer() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-1 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute left-0 top-[18%] z-2 hidden w-[min(calc(var(--hero-vw)*0.34),240px)] max-w-none -translate-x-[14%] sm:top-[16%] sm:block sm:w-[min(calc(var(--hero-vw)*var(--hero-macaw-vw)),var(--hero-macaw-max))] sm:-translate-x-[3%]"
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
        className="absolute right-0 top-[18%] z-2 hidden w-[min(calc(var(--hero-vw)*0.34),240px)] max-w-none translate-x-[14%] scale-x-[-1] sm:top-[16%] sm:block sm:w-[min(calc(var(--hero-vw)*var(--hero-macaw-vw)),var(--hero-macaw-max))] sm:translate-x-[3%]"
        variants={macawRight}
        initial="initial"
        animate="animate"
      >
        <div className="animate-macaw-hover" style={{ animationDelay: "0.5s" }}>
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
        className="absolute bottom-[13%] left-[6%] z-3 w-[min(calc(var(--hero-vw)*0.13),72px)] sm:bottom-[16%] sm:left-[26%] sm:w-[min(calc(var(--hero-vw)*0.082),var(--hero-trophy-max))]"
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
        className="absolute bottom-[13%] right-[6%] z-3 w-[min(calc(var(--hero-vw)*0.13),72px)] scale-x-[-1] sm:bottom-[16%] sm:right-[26%] sm:w-[min(calc(var(--hero-vw)*0.082),var(--hero-trophy-max))]"
        variants={trophyRight}
        initial="initial"
        animate="animate"
      >
        <div className="animate-trophy-gleam" style={{ animationDelay: "0.3s" }}>
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
