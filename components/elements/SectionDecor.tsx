"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { SiteDecorPlacement } from "@/components/elements/siteDecorPlacements";

type SectionDecorProps = {
  items: SiteDecorPlacement[];
};

const entranceDirections = [
  { x: -40, y: 30, rotate: -8, scale: 0.6 },
  { x: 40, y: 20, rotate: 6, scale: 0.65 },
  { x: -20, y: 40, rotate: -5, scale: 0.55 },
  { x: 30, y: 35, rotate: 10, scale: 0.5 },
];

export function SectionDecor({ items }: SectionDecorProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 max-md:hidden overflow-hidden"
      aria-hidden
    >
      {items.map((item, index) => {
        const dir = entranceDirections[index % entranceDirections.length];
        return (
          <motion.div
            key={item.id}
            className={`absolute ${item.wrapperClass}`}
            initial={{
              opacity: 0,
              x: dir.x,
              y: dir.y,
              rotate: dir.rotate,
              scale: dir.scale,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
            }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              delay: item.delay ?? 0,
              type: "spring",
              stiffness: 120,
              damping: 14,
              mass: 0.9 + index * 0.15,
            }}
          >
            <motion.div
              className={`relative ${item.maxWidthClass}`}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -12, 0],
                      x: [0, index % 2 === 0 ? 5 : -5, 0],
                      rotate: [0, index % 2 === 0 ? 3.5 : -3.5, 0],
                      scale: [1, 1.03, 1],
                    }
              }
              transition={{
                duration: 4 + index * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (item.delay ?? 0) + 0.3,
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
        );
      })}
    </div>
  );
}
