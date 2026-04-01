"use client";

import Image from "next/image";

const ASSET = "/final-elements";

/**
 * Budweiser lockup — ball (46px) · badge (284×75) · ball. Gap ball↔badge: 40px Figma ref (scales with vw).
 * Inner image: 148×47.
 */
export function HeroSponsorStrip() {
  return (
    <div className="mb-[clamp(0.75rem,3vw,1.5rem)] flex items-center justify-center gap-[clamp(10px,min(2.78vw,40px),40px)]">
      <Image
        src={`${ASSET}/ball.svg`}
        alt=""
        width={46}
        height={46}
        className="h-[min(3.2vw,46px)] w-[min(3.2vw,46px)] shrink-0"
        unoptimized
      />
      <div className="flex h-[min(5.18vw,75px)] w-[min(19.73vw,284px)] shrink-0 items-center justify-center rounded-lg border-2 border-[#232323] bg-[#FBE297]">
        <Image
          src={`${ASSET}/black-budweiser.svg`}
          alt="Budweiser"
          width={148}
          height={47}
          className="h-[min(3.26vw,47px)] w-[min(10.28vw,148px)] object-contain"
          unoptimized
        />
      </div>
      <Image
        src={`${ASSET}/ball.svg`}
        alt=""
        width={46}
        height={46}
        className="h-[min(3.2vw,46px)] w-[min(3.2vw,46px)] shrink-0"
        unoptimized
      />
    </div>
  );
}
