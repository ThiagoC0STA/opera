"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { plantSwingEntranceTransition } from "@/components/motion/plantEntrance";

const BALL = "/final-elements/local/ball.png";
const PLANT = "/final-elements/local/plant.png";

const ballSlideIn = {
  hidden: { opacity: 0, x: -60, y: 40, rotate: -30, scale: 0.5 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 16,
      mass: 0.8,
      delay: 0.1,
    },
  },
};

export function LocalSectionCornerArt() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 max-md:hidden overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute -bottom-3 -left-4 w-[min(44vw,180px)] sm:-bottom-4 sm:-left-6 sm:w-[min(28vw,240px)]"
        variants={ballSlideIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
      >
        <div className="animate-ball-bounce">
          <Image
            src={BALL}
            alt=""
            width={226}
            height={279}
            className="h-auto w-full select-none object-contain object-bottom-left"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-2 -right-4 w-[min(78vw,340px)] sm:-bottom-4 sm:-right-8 sm:w-[min(58vw,440px)]"
        style={{ transformOrigin: "bottom right" }}
        initial={{ opacity: 0, rotate: 40, scale: 0.72 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={plantSwingEntranceTransition(0.22)}
      >
        <div
          className="animate-plant-sway animate-leaf-shimmer"
          style={{ transformOrigin: "bottom center" }}
        >
          <Image
            src={PLANT}
            alt=""
            width={508}
            height={412}
            className="h-auto w-full select-none object-contain object-bottom-right"
          />
        </div>
      </motion.div>
    </div>
  );
}
