"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export type FloatWrapProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  /** Peak vertical float in px. */
  yRange?: number;
  floatDuration?: number;
  floatDelay?: number;
  /** Resting rotation (deg). */
  rotate?: number;
  hoverScale?: number;
  hoverRotate?: number;
  entranceDelay?: number;
};

/**
 * Independent float + hover motion so each collage piece feels unique.
 */
export function FloatWrap({
  children,
  className = "",
  yRange = 8,
  floatDuration = 3.6,
  floatDelay = 0,
  rotate = 0,
  hoverScale = 1.06,
  hoverRotate = 5,
  entranceDelay = 0,
  ...rest
}: FloatWrapProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.92, rotate: rotate - 4 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate,
        y: [0, -yRange, 0],
      }}
      transition={{
        opacity: { delay: entranceDelay, duration: 0.45 },
        scale: {
          delay: entranceDelay,
          type: "spring",
          stiffness: 260,
          damping: 22,
        },
        rotate: {
          delay: entranceDelay,
          type: "spring",
          stiffness: 180,
          damping: 16,
        },
        y: {
          delay: entranceDelay + floatDelay + 0.2,
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: hoverScale,
        rotate: rotate + hoverRotate,
        transition: { type: "spring", stiffness: 420, damping: 18 },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
