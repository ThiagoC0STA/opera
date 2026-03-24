"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  HERO_ASSET_ELEMENTS,
  type HeroAssetEntry,
  type HeroAssetTone,
} from "@/components/hero/heroAssetElements";

const TONE_IMG_CLASS: Record<HeroAssetTone, string> = {
  /** Warm off-white */
  cream:
    "brightness-0 invert sepia-[0.18] saturate-[1.25] hue-rotate-[12deg]",
  /** Arena yellow — subtle gold */
  sun: "brightness-0 invert sepia-100 saturate-[1.85] hue-rotate-[8deg] brightness-[1.12]",
  /** Cool highlight toward sky band in backdrop */
  ice: "brightness-0 invert sepia-[0.35] saturate-[1.4] hue-rotate-[165deg] brightness-[1.06]",
  /** Soft white, low drama */
  mist: "brightness-0 invert saturate-0 opacity-95",
};

function FloatAsset({
  item,
  children,
}: {
  item: HeroAssetEntry;
  children: ReactNode;
}) {
  const {
    delay,
    dur = 4,
    y = 10,
    rotate = 3,
    wrapperClass,
  } = item;

  return (
    <motion.div
      className={`pointer-events-none absolute ${wrapperClass}`}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -y, 0],
        rotate: [-rotate, rotate, -rotate],
      }}
      transition={{
        opacity: { delay, duration: 0.45 },
        scale: { delay, type: "spring", stiffness: 180, damping: 18 },
        y: {
          delay: delay + 0.08,
          duration: dur,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          delay: delay + 0.08,
          duration: dur + 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      aria-hidden
    >
      {children}
    </motion.div>
  );
}

/**
 * Your /public/elements SVGs — extend `HERO_ASSET_ELEMENTS` when you add files.
 */
export function HeroPosterLayer() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
      aria-hidden
    >
      {HERO_ASSET_ELEMENTS.map((item) => (
        <FloatAsset key={item.id} item={item}>
          <div
            className={`relative ${item.maxWidthClass} drop-shadow-[4px_6px_0_rgba(0,0,0,0.2)]`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={`h-auto w-full select-none ${TONE_IMG_CLASS[item.tone]}`}
              style={
                item.opacity != null
                  ? { opacity: item.opacity }
                  : undefined
              }
              draggable={false}
            />
          </div>
        </FloatAsset>
      ))}
    </div>
  );
}
