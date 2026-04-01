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
        className="absolute left-0 top-[18%] z-2 hidden w-[min(34vw,240px)] max-w-none -translate-x-[14%] object-contain sm:top-[16%] sm:block sm:w-[min(45vw,646px)] sm:-translate-x-[3%]"
        unoptimized
      />
      {/* Right macaw — mirrored */}
      <Image
        src={`${ASSET}/arara.png`}
        alt=""
        width={646}
        height={678}
        className="absolute right-0 top-[18%] z-2 hidden w-[min(34vw,240px)] max-w-none translate-x-[14%] scale-x-[-1] object-contain sm:top-[16%] sm:block sm:w-[min(45vw,646px)] sm:translate-x-[3%]"
        unoptimized
      />

      {/* Left trophy — ref: 118px wide, beside date badge area */}
      <Image
        src={`${ASSET}/trophy.svg`}
        alt=""
        width={118}
        height={153}
        className="absolute bottom-[13%] left-[6%] z-3 w-[min(13vw,72px)] object-contain sm:bottom-[16%] sm:left-[26%] sm:w-[min(8.2vw,118px)]"
        unoptimized
      />
      {/* Right trophy — mirrored */}
      <Image
        src={`${ASSET}/trophy.svg`}
        alt=""
        width={118}
        height={153}
        className="absolute bottom-[13%] right-[6%] z-3 w-[min(13vw,72px)] scale-x-[-1] object-contain sm:bottom-[16%] sm:right-[26%] sm:w-[min(8.2vw,118px)]"
        unoptimized
      />
    </div>
  );
}
