"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE_OUT } from "@/components/motion/presets";

const SRC = "/final-elements/worldcups.png";
const WIDTH = 640;
const HEIGHT = 114;

/**
 * Horizontal World Cup timeline graphic — sits below the countdown card, not inside it.
 */
export function WorldCupsTimelineStrip() {
  return (
    <motion.div
      className="mx-auto mt-8 max-w-full px-2 sm:mt-10 md:mt-12"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: EASE_OUT, delay: 0.08 }}
    >
      <Image
        src={SRC}
        alt="Taças da Copa do Mundo com os anos 1958, 1962, 1970, 1994, 2002 e 2026"
        width={WIDTH}
        height={HEIGHT}
        className="mx-auto h-auto w-full max-w-[min(100%,40rem)] object-contain"
        sizes="(min-width: 768px) 40rem, 100vw"
        quality={100}
      />
    </motion.div>
  );
}
