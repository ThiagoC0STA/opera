"use client";

/**
 * Smooth cream wave at the hero base — matches `bg-arena-cream` on `main`.
 * Reads clearly on wide viewports where small border-radius is nearly invisible.
 */
export function HeroBottomCurve() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-6 h-[clamp(4rem,13.5vw,7rem)] text-arena-cream"
      aria-hidden
    >
      <svg
        className="h-full w-full drop-shadow-[0_-8px_20px_rgba(10,10,10,0.08)]"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,48 C200,6 280,84 480,40 C680,4 760,92 960,44 C1160,4 1240,80 1440,34 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  );
}
