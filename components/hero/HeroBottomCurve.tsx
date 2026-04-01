"use client";

import Image from "next/image";

/**
 * Yellow / green / blue wave strip at the hero base (`hero-footer.png`).
 */
export function HeroBottomCurve() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] w-full leading-none"
      aria-hidden
    >
      <Image
        src="/final-elements/hero-footer.png"
        alt=""
        width={1440}
        height={120}
        className="h-auto w-full object-cover object-bottom"
        unoptimized
        sizes="100vw"
      />
    </div>
  );
}
