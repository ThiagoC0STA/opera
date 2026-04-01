"use client";

import Image from "next/image";

/**
 * Venue lockup — uses the opera-concept.svg (182×63 ref) at the bottom of the hero.
 */
export function HeroVenueLockup() {
  return (
    <div className="flex w-full justify-center">
      <Image
        src="/final-elements/opera-concept.svg"
        alt="Ópera Concept Hall"
        width={182}
        height={63}
        unoptimized
        className="h-auto w-[min(52vw,182px)] object-contain sm:w-[min(12.6vw,182px)]"
      />
    </div>
  );
}
