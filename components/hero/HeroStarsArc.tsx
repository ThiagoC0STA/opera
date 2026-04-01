"use client";

import Image from "next/image";

const ASSET = "/final-elements";

/** Arc y-offsets (px) — desktop stars ~76px ref. */
const ARC_Y_DESKTOP = [108, 36, -36, 36, 108];

/** Tighter arc for narrow viewports — keeps hero stack from exploding vertically. */
const ARC_Y_MOBILE = [90, 30, -16, 30, 90];

const STAR_DESKTOP_PX = 76;
const STAR_MOBILE_PX = 46;

/**
 * Five stars in a downward-opening arc above the logo diamond.
 */
export function HeroStarsArc() {
  return (
    <div className="w-full" aria-hidden>
      <div className="mb-1 w-full sm:mb-[clamp(0.125rem,calc(var(--hero-vw)*0.006),0.25rem)]">
        <div className="flex w-full items-start justify-between gap-0.5 sm:hidden">
          {ARC_Y_MOBILE.map((y, i) => (
            <div key={`m-${i}`} className="flex shrink-0 justify-center">
              <Image
                src={`${ASSET}/star.svg`}
                alt=""
                width={STAR_MOBILE_PX}
                height={STAR_MOBILE_PX}
                className="h-[46px] w-[46px] object-contain"
                style={{ transform: `translateY(${y}px)` }}
                unoptimized
              />
            </div>
          ))}
        </div>
        <div className="hidden w-full sm:block">
          <div className="origin-top sm:scale-[var(--hero-star-arc-scale)]">
            <div className="flex w-full items-center justify-between gap-1">
              {ARC_Y_DESKTOP.map((y, i) => (
                <div key={`d-${i}`} className="flex shrink-0 justify-center">
                  <Image
                    src={`${ASSET}/star.svg`}
                    alt=""
                    width={STAR_DESKTOP_PX}
                    height={STAR_DESKTOP_PX}
                    className="h-[76px] w-[76px] object-contain"
                    style={{ transform: `translateY(${y}px)` }}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
