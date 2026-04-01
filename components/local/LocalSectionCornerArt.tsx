"use client";

import Image from "next/image";

const BALL = "/final-elements/local/ball.png";
const PLANT = "/final-elements/local/plant.png";

/**
 * Bottom-corner PNG decor for the Local section (cropped by section overflow).
 */
export function LocalSectionCornerArt() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -bottom-3 -left-4 w-[min(44vw,180px)] sm:-bottom-4 sm:-left-6 sm:w-[min(28vw,240px)]">
        <Image
          src={BALL}
          alt=""
          width={226}
          height={279}
          className="h-auto w-full select-none object-contain object-bottom-left"
          
        />
      </div>
      <div className="absolute -bottom-2 -right-4 w-[min(78vw,340px)] sm:-bottom-4 sm:-right-8 sm:w-[min(58vw,440px)]">
        <Image
          src={PLANT}
          alt=""
          width={508}
          height={412}
          className="h-auto w-full select-none object-contain object-bottom-right"
          
        />
      </div>
    </div>
  );
}
