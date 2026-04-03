"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { plantSwingEntranceTransition } from "@/components/motion/plantEntrance";

const ASSET = "/final-elements/countdown";

const ballEntrance = {
  hidden: { opacity: 0, scale: 0, y: 30, rotate: -25 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 280,
      damping: 14,
      mass: 0.7,
      delay: 0.2,
    },
  },
};

const confetiEntrance = {
  hidden: { opacity: 0, y: -40, rotate: 12 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 16,
      delay: 0.4,
    },
  },
};

export function CountdownSectionDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute hidden sm:left-[2%] sm:top-[6%] sm:block sm:w-[120px]"
        variants={ballEntrance}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        <div className="animate-ball-bounce">
          <Image
            src={`${ASSET}/ball.png`}
            alt=""
            width={135}
            height={144}
            className="h-auto w-full object-contain"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-2 top-[3%] hidden w-[min(42vw,200px)] sm:right-[1%] sm:top-[5%] sm:w-[220px] md:block"
        variants={confetiEntrance}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        <div className="animate-confetti-drift">
          <Image
            src={`${ASSET}/confeti2.png`}
            alt=""
            width={240}
            height={128}
            className="h-auto w-full object-contain"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-[6%] -left-[8%] w-[min(62vw,280px)] sm:bottom-[0%] sm:-left-[4%] sm:w-[500px]"
        style={{ transformOrigin: "bottom left" }}
        initial={{ opacity: 0, rotate: 40, scale: 0.72 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true, margin: "80px" }}
        transition={plantSwingEntranceTransition(0.12)}
      >
        <div
          className="animate-plant-sway animate-leaf-shimmer"
          style={{ transformOrigin: "bottom center" }}
        >
          <Image
            src={`${ASSET}/plant.png`}
            alt=""
            width={500}
            height={832}
            className="h-auto w-full object-contain object-bottom"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-[6%] -right-[8%] w-[min(62vw,280px)] sm:-bottom-[4%] sm:-right-[4%] sm:w-[500px]"
        style={{ transformOrigin: "bottom right" }}
        initial={{ opacity: 0, rotate: -40, scale: 0.72 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true, margin: "80px" }}
        transition={plantSwingEntranceTransition(0.28)}
      >
        <div className="w-full scale-x-[-1]">
          <div
            className="animate-plant-sway animate-leaf-shimmer"
            style={{ transformOrigin: "bottom center" }}
          >
            <Image
              src={`${ASSET}/plant.png`}
              alt=""
              width={512}
              height={444}
              className="h-auto w-full object-contain object-bottom"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
