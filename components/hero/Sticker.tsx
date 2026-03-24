"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export type StickerProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  /** Base rotation in degrees (poster tilt). */
  rotate?: number;
  /** Extra hover rotation added to base. */
  hoverRotate?: number;
  floatRange?: number;
  floatDuration?: number;
  entranceDelay?: number;
  /** White “die-cut” ring like printed stickers. */
  ring?: boolean;
};

export function Sticker({
  children,
  className = "",
  rotate = -4,
  hoverRotate = 4,
  floatRange = 7,
  floatDuration = 3.2,
  entranceDelay = 0,
  ring = true,
  ...rest
}: StickerProps) {
  const ringClass = ring ? "ring-[3px] ring-white ring-offset-0" : "";

  return (
    <motion.div
      className={`relative border-4 border-arena-ink shadow-sticker ${ringClass} ${className}`}
      initial={{ opacity: 0, scale: 0.88, rotate: rotate - 6 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate,
        y: [0, -floatRange, 0],
      }}
      transition={{
        opacity: { delay: entranceDelay, duration: 0.45 },
        scale: { delay: entranceDelay, type: "spring", stiffness: 260, damping: 20 },
        rotate: { delay: entranceDelay, type: "spring", stiffness: 200, damping: 18 },
        y: {
          delay: entranceDelay + 0.35,
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.06,
        rotate: rotate + hoverRotate,
        transition: { type: "spring", stiffness: 400, damping: 16 },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
