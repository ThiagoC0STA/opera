"use client";

import Image from "next/image";

/**
 * Venue lockup — uses the opera-concept.svg (182×63 ref) at the bottom of the hero.
 */
export function HeroVenueLockup() {
  return (
    <div className="flex w-full justify-center mt-4 -mb-4 sm:max-[1799px]:mt-6 md:mb-0 md:mt-0">
      <Image
        src="/final-elements/opera-concept.svg"
        alt="Ópera Concept Hall"
        width={182}
        height={63}
        unoptimized
        className="h-auto w-[min(calc(var(--hero-vw)*0.52),var(--hero-venue-max))] object-contain sm:w-[min(calc(var(--hero-vw)*0.126),var(--hero-venue-max))]"
      />
    </div>
  );
}
