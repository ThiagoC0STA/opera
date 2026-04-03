"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ASSET = "/final-elements/atracoes";

const confetiLeftEntrance = {
  hidden: { opacity: 0, y: -50, x: -30, rotate: -15 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 14,
      delay: 0.2,
    },
  },
};

const confetiRightEntrance = {
  hidden: { opacity: 0, y: 50, x: 30, rotate: 15 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 14,
      delay: 0.4,
    },
  },
};

const flagEntrance = {
  hidden: { opacity: 0, x: 80, rotate: 20, scale: 0.5 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 12,
      mass: 1.2,
      delay: 0.3,
    },
  },
};

const badgeEntrance = {
  hidden: { opacity: 0, scale: 0, rotate: -20 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 250,
      damping: 16,
      mass: 0.7,
      delay: 0.5,
    },
  },
};

export function AtracoesDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 max-md:hidden overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute -left-2 top-[6%] w-[min(28vw,120px)] sm:left-[2%] sm:top-[10%] sm:w-[140px]"
        variants={confetiLeftEntrance}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        <div className="animate-confetti-drift">
          <Image
            src={`${ASSET}/confeti.svg`}
            alt=""
            width={149}
            height={250}
            className="h-auto w-full object-contain"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-1 bottom-[8%] w-[min(30vw,130px)] scale-x-[-1] sm:right-[1%] sm:bottom-[12%] sm:w-[150px]"
        variants={confetiRightEntrance}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        <div className="animate-confetti-drift" style={{ animationDelay: "1s", animationDirection: "reverse" }}>
          <Image
            src={`${ASSET}/confeti.svg`}
            alt=""
            width={149}
            height={250}
            className="h-auto w-full object-contain"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-2 top-[4%] w-[min(38vw,160px)] sm:right-[3%] sm:top-[8%] sm:w-[200px]"
        variants={flagEntrance}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        <div className="animate-flag-wave">
          <Image
            src={`${ASSET}/bandeira-brasil.png`}
            alt=""
            width={231}
            height={198}
            className="h-auto w-full object-contain drop-shadow-[3px_4px_0_#0a0a0a]"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-3 bottom-[6%] w-[min(32vw,140px)] sm:bottom-[10%] sm:left-[2%] sm:w-[170px]"
        variants={badgeEntrance}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        <div className="animate-gentle-float">
          <Image
            src={`${ASSET}/arena-opera.png`}
            alt=""
            width={170}
            height={170}
            className="h-auto w-full object-contain drop-shadow-[3px_4px_0_#0a0a0a]"
          />
        </div>
      </motion.div>
    </div>
  );
}
