"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SRC = "/final-elements/trophy.png";
const REF_W = 118;
const REF_H = 153;

type FinalCtaTrophyProps = {
  className?: string;
  mirrored?: boolean;
};

/** Same delay for both sides — trophies pop in together with “Ingressos limitados”. */
const FINAL_CTA_TROPHY_DELAY = 0;

const trophyEntrance = (fromRight: boolean) => ({
  hidden: {
    opacity: 0,
    scale: 0.3,
    y: 60,
    x: fromRight ? 40 : -40,
    rotate: fromRight ? 15 : -15,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 16,
      mass: 0.8,
      delay: FINAL_CTA_TROPHY_DELAY,
    },
  },
});

export function FinalCtaTrophy({
  className = "",
  mirrored = false,
}: FinalCtaTrophyProps) {
  return (
    <motion.div
      className={`${className}`}
      variants={trophyEntrance(mirrored)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
      <div className="h-full w-full animate-trophy-gleam">
        <Image
          src={SRC}
          alt=""
          width={REF_W}
          height={REF_H}
          className={`pointer-events-none h-full w-full select-none object-contain ${mirrored ? "scale-x-[-1]" : ""}`}
        />
      </div>
    </motion.div>
  );
}
