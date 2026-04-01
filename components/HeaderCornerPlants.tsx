"use client";

import Image from "next/image";

/**
 * Palms above the header bar — `fixed` so they are not clipped by flex parents
 * and stay in front of the sticky header (`z-index` below this layer).
 */
export function HeaderCornerPlants() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-11 z-110 h-[min(46vh,320px)] overflow-visible"
      aria-hidden
    >
      <Image
        src="/final-elements/plant.png"
        alt=""
        width={560}
        height={400}
        className="absolute left-0 top-0 w-[min(56vw,340px)] max-w-none -translate-x-[8%] -translate-y-[12%] object-contain sm:w-[min(48vw,400px)]"
        unoptimized
      />
      <Image
        src="/final-elements/plant.png"
        alt=""
        width={560}
        height={400}
        className="absolute right-0 top-0 w-[min(56vw,340px)] max-w-none -translate-y-[12%] translate-x-[8%] scale-x-[-1] object-contain sm:w-[min(48vw,400px)]"
        unoptimized
      />
    </div>
  );
}
