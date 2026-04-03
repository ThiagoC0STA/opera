"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { plantSwingEntranceTransition } from "@/components/motion/plantEntrance";

export function HeaderCornerPlants() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-11 z-110 hidden h-[min(46vh,320px)] overflow-visible sm:block"
      aria-hidden
    >
      {/* Left plant — swings in from top-left corner */}
      <motion.div
        className="absolute left-0 top-0 w-[min(56vw,340px)] max-w-none -translate-x-[8%] -translate-y-[12%] sm:w-[min(48vw,400px)]"
        style={{ transformOrigin: "top left" }}
        initial={{ opacity: 0, rotate: -58, scale: 0.72 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={plantSwingEntranceTransition(0.1)}
      >
        <div className="animate-plant-sway animate-leaf-shimmer">
          <Image
            src="/final-elements/plant.png"
            alt=""
            width={560}
            height={400}
            className="h-auto w-full object-contain"
            unoptimized
          />
        </div>
      </motion.div>

      {/*
        Right plant: mirror only (scale-x on inner div) so Framer never fights scaleX.
        Same sway as left — reverse sway + mirror looked “wrong” on screen.
        Entrance is tween-only so rotate never overshoots past 0 into negative (that was sliding it off-screen).
      */}
      <motion.div
        className="absolute right-0 top-0 w-[min(56vw,340px)] max-w-none -translate-y-[12%] sm:w-[min(48vw,400px)]"
        style={{ transformOrigin: "top right" }}
        initial={{ opacity: 0, rotate: 58, scale: 0.72 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={plantSwingEntranceTransition(0.22)}
      >
        <div className="w-full scale-x-[-1]">
          <div className="animate-plant-sway animate-leaf-shimmer">
            <Image
              src="/final-elements/plant.png"
              alt=""
              width={560}
              height={400}
              className="h-auto w-full object-contain"
              unoptimized
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
