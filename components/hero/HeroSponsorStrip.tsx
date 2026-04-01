"use client";

import Image from "next/image";

const ASSET = "/final-elements";

const ballClass =
  "h-12 w-12 shrink-0 sm:h-[min(3.2vw,46px)] sm:w-[min(3.2vw,46px)]";

/**
 * Budweiser lockup — ball · badge · ball; macaws flank this row on mobile only
 * (desktop macaws stay in {@link HeroDecorLayer}).
 */
export function HeroSponsorStrip() {
  return (
    <div className="mb-[clamp(0.5rem,3vw,1.5rem)] sm:mb-[clamp(0.75rem,3vw,1.5rem)]">
      <div className="mx-auto flex max-w-full items-end justify-center gap-2 sm:max-w-none sm:items-center sm:gap-[clamp(10px,min(2.78vw,40px),40px)]">
        <Image
          src={`${ASSET}/arara.png`}
          alt=""
          width={646}
          height={678}
          className="h-[5.75rem] w-auto min-w-0 max-w-[min(36vw,148px)] shrink translate-x-4 translate-y-5 object-contain object-left sm:hidden"
          unoptimized
        />
        <div className="flex items-center gap-5 sm:contents sm:gap-0">
          <Image
            src={`${ASSET}/ball.svg`}
            alt=""
            width={46}
            height={46}
            className={ballClass}
            unoptimized
          />
          <div className="flex h-[3.75rem] w-[min(60vw,268px)] shrink-0 items-center justify-center rounded-lg border-2 border-[#232323] bg-[#FBE297] px-3 sm:h-[min(5.18vw,75px)] sm:w-[min(19.73vw,284px)] sm:px-0">
            <Image
              src={`${ASSET}/black-budweiser.svg`}
              alt="Budweiser"
              width={148}
              height={47}
              className="h-12 w-auto max-h-full max-w-[min(94%,220px)] object-contain sm:h-[min(3.26vw,47px)] sm:w-[min(10.28vw,148px)] sm:max-w-none"
              unoptimized
            />
          </div>
          <Image
            src={`${ASSET}/ball.svg`}
            alt=""
            width={46}
            height={46}
            className={ballClass}
            unoptimized
          />
        </div>
        <Image
          src={`${ASSET}/arara.png`}
          alt=""
          width={646}
          height={678}
          className="h-[5.75rem] w-auto min-w-0 max-w-[min(36vw,148px)] shrink -translate-x-4 translate-y-5 scale-x-[-1] object-contain object-right sm:hidden"
          unoptimized
        />
      </div>
    </div>
  );
}
