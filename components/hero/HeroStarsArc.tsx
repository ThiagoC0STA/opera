"use client";

import Image from "next/image";

const ASSET = "/final-elements";

/** Arc y-offsets (px) — tuned for ~36px stars at desktop. */
const ARC_Y = [108, 36, -36, 36, 108];

const STAR_MAX_PX = 76;

/**
 * Five stars in a downward-opening arc above the logo diamond.
 */
export function HeroStarsArc() {
  return (
    <div className="mb-[clamp(0.125rem,0.6vw,0.25rem)] w-full" aria-hidden>
      <div className="flex items-center justify-between gap-1 sm:gap-[57px] w-full">
        {ARC_Y.map((y, i) => (
          <div key={i}>
            <Image
              src={`${ASSET}/star.svg`}
              alt=""
              width={STAR_MAX_PX}
              height={STAR_MAX_PX}
              className=" h-[76px] w-[76px] object-contain"
              style={{ transform: `translateY(${y}px)` }}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
