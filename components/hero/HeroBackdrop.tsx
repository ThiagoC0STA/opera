"use client";

import Image from "next/image";

/**
 * Full-bleed hero illustration. The artwork leaves a light central “diamond”
 * for copy; bottom-center is reserved in Hero layout for the foam-finger art.
 */
export function HeroBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="relative h-full min-h-0 w-full">
        <Image
          src="/bg3.jpg"
          alt=""
          fill
          priority
          unoptimized
          className="origin-center scale-[1.07] object-cover object-[center_38%] sm:object-[center_36%]"
          sizes="100vw"
        />
      </div>
      {/* Subtle warm wash — not black, no blur */}
      <div className="absolute inset-0 bg-linear-to-b from-white/12 via-transparent to-arena-cream/14" />
    </div>
  );
}
