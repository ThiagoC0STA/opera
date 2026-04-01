"use client";

import Image from "next/image";

const ASSET = "/final-elements";

/**
 * Framing artwork: macaws (646px ref) and trophies (118px ref).
 * Macaws frame the logo diamond closely. Trophies sit beside the date badge.
 */
export function HeroDecorLayer() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-1 overflow-hidden"
      aria-hidden
    >
      {/* Left macaw — ref: 646px wide, framing the logo */}
      <Image
        src={`${ASSET}/arara.png`}
        alt=""
        width={646}
        height={678}
        className="absolute left-0 top-[16%] z-2 w-[min(45vw,646px)] max-w-none -translate-x-[3%] object-contain"
        unoptimized
      />
      {/* Right macaw — mirrored */}
      <Image
        src={`${ASSET}/arara.png`}
        alt=""
        width={646}
        height={678}
        className="absolute right-0 top-[16%] z-2 w-[min(45vw,646px)] max-w-none translate-x-[3%] scale-x-[-1] object-contain"
        unoptimized
      />

      {/* Left trophy — ref: 118px wide, beside date badge area */}
      <Image
        src={`${ASSET}/trophy.svg`}
        alt=""
        width={118}
        height={153}
        className="absolute bottom-[16%] left-[26%] z-3 w-[min(8.2vw,118px)] object-contain"
        unoptimized
      />
      {/* Right trophy — mirrored */}
      <Image
        src={`${ASSET}/trophy.svg`}
        alt=""
        width={118}
        height={153}
        className="absolute bottom-[16%] right-[26%] z-3 w-[min(8.2vw,118px)] scale-x-[-1] object-contain"
        unoptimized
      />
    </div>
  );
}
