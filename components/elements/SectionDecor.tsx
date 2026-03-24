"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { SiteDecorPlacement } from "@/components/elements/siteDecorPlacements";
import { EASE_OUT } from "@/components/motion/presets";

type SectionDecorProps = {
  items: SiteDecorPlacement[];
};

/**
 * Floating shapes from `/public/elements2` — entrance + gentle idle float (respects reduced motion).
 */
export function SectionDecor({ items }: SectionDecorProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.wrapperClass}`}
          initial={{ opacity: 0, y: 20, rotate: -3, scale: 0.92 }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
          }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            delay: item.delay ?? 0,
            duration: 0.6,
            ease: EASE_OUT,
          }}
        >
          <motion.div
            className={`relative ${item.maxWidthClass}`}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -7, 0],
                    rotate: [0, index % 2 === 0 ? 2 : -2, 0],
                  }
            }
            transition={{
              duration: 5 + index * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (item.delay ?? 0) + 0.4,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- local SVG assets */}
            <img
              src={item.src}
              alt={item.alt}
              className={`h-auto w-full select-none ${item.imgClassName ?? ""}`}
              draggable={false}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
