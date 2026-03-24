"use client";

import { motion } from "framer-motion";
import { FloatWrap } from "@/components/hero/FloatWrap";
import { Sticker } from "@/components/hero/Sticker";

/** Stadium illustration — friendly vector, aligned with collage event sites. */
function StadiumGraphic({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 400 340"
      className={className}
      aria-hidden
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      <path
        d="M36 188 Q200 28 364 188"
        className="fill-none stroke-arena-ink"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M52 182 Q200 48 348 182 L332 198 Q200 72 68 198Z"
        className="fill-white stroke-arena-ink"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M72 198 L328 198 L312 232 L88 232Z"
        className="fill-arena-blue stroke-arena-ink"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M88 232 L312 232 L298 258 L102 258Z"
        className="fill-arena-green stroke-arena-ink"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <g className="stroke-arena-ink" strokeWidth="2.5">
        {[
          [102, 210, 7, 22],
          [118, 206, 8, 26],
          [134, 212, 6, 20],
          [152, 204, 9, 28],
          [170, 208, 7, 24],
          [190, 205, 8, 27],
          [208, 210, 6, 22],
          [226, 206, 8, 26],
          [244, 212, 7, 21],
          [262, 208, 8, 25],
          [280, 214, 6, 20],
          [298, 210, 7, 24],
        ].map(([x, y, w, h], i) => (
          <rect
            key={i}
            x={Number(x)}
            y={Number(y)}
            width={Number(w)}
            height={Number(h)}
            rx="3"
            className={
              i % 3 === 0
                ? "fill-arena-yellow"
                : i % 3 === 1
                  ? "fill-arena-pink"
                  : "fill-white"
            }
          />
        ))}
      </g>
      <ellipse
        cx="200"
        cy="292"
        rx="138"
        ry="30"
        className="fill-[#4ade80] stroke-arena-ink"
        strokeWidth="4"
      />
      <ellipse
        cx="200"
        cy="288"
        rx="40"
        ry="12"
        className="fill-none stroke-white"
        strokeWidth="3"
      />
    </motion.svg>
  );
}

function BrazilFlagSticker({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden>
      <rect
        x="4"
        y="4"
        width="112"
        height="72"
        rx="10"
        className="fill-arena-green stroke-arena-ink"
        strokeWidth="4"
      />
      <path
        d="M60 18 L98 40 L60 62 L22 40Z"
        className="fill-arena-yellow stroke-arena-ink"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle
        cx="60"
        cy="40"
        r="18"
        className="fill-arena-blue stroke-white"
        strokeWidth="3"
      />
      <path
        d="M42 40 Q60 32 78 40 Q60 48 42 40Z"
        className="fill-white"
      />
    </svg>
  );
}

export function HeroComposition() {
  return (
    <div className="absolute inset-0 mx-auto w-full">
      <motion.div
        className="relative z-10 mx-auto w-[min(92%,400px)] max-w-[400px] -rotate-2 sm:w-[min(90%,440px)] sm:max-w-[440px]"
        initial={{ opacity: 0, rotate: 4, y: 10 }}
        animate={{ opacity: 1, rotate: -2, y: 0 }}
        transition={{ delay: 0.04, type: "spring", stiffness: 120, damping: 15 }}
        whileHover={{ rotate: -3, scale: 1.02 }}
      >
        <div className="rounded-3xl border-4 border-arena-ink bg-white/50 p-3 shadow-[6px_8px_0_#0a0a0a] sm:p-4">
          <StadiumGraphic className="h-auto w-full" />
        </div>
      </motion.div>

      <Sticker
        className="absolute -right-[4%] top-[4%] z-20 h-[4.25rem] w-[5.75rem] overflow-hidden rounded-2xl bg-arena-cream p-1 sm:right-[0%]"
        rotate={8}
        hoverRotate={5}
        floatRange={6}
        floatDuration={3}
        entranceDelay={0.2}
        ring={false}
      >
        <BrazilFlagSticker className="h-full w-full" />
      </Sticker>

      <Sticker
        className="absolute bottom-[18%] -left-[4%] z-20 flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full bg-arena-blue"
        rotate={-10}
        hoverRotate={-6}
        floatDuration={3.4}
        entranceDelay={0.28}
        ring={false}
      >
        <span className="font-display text-2xl leading-none text-white [text-shadow:2px_2px_0_#0a0a0a]">
          BR
        </span>
      </Sticker>

      <Sticker
        className="absolute bottom-[4%] right-[4%] z-20 rounded-2xl bg-arena-yellow px-4 py-2"
        rotate={-6}
        hoverRotate={8}
        floatDuration={3.2}
        entranceDelay={0.34}
        ring={false}
      >
        <span className="font-condensed text-sm uppercase tracking-widest text-arena-ink">
          Live 2026
        </span>
      </Sticker>

      <FloatWrap
        className="pointer-events-auto absolute left-[4%] top-[10%] z-20 sm:left-[8%]"
        rotate={-8}
        yRange={5}
        floatDuration={2.8}
        entranceDelay={0.22}
        hoverRotate={-6}
      >
        <div className="rounded-2xl border-4 border-arena-ink bg-arena-cream px-3 py-2 font-condensed text-xs uppercase tracking-widest text-arena-ink shadow-[4px_4px_0_#0a0a0a]">
          CWB
        </div>
      </FloatWrap>
    </div>
  );
}
