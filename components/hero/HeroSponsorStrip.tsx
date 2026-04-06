"use client";

import Image from "next/image";

const ASSET = "/final-elements";

const ballClass =
  "h-12 w-12 shrink-0 sm:h-[min(calc(var(--hero-vw)*0.032),var(--hero-ball))] sm:w-[min(calc(var(--hero-vw)*0.032),var(--hero-ball))]";

/**
 * Sponsor lockup: ball · Budweiser | divider | HOOVE (grove.svg) · ball.
 * On small screens the row is centered; macaws sit beside the date badge in
 * {@link HeroDateBadge} (desktop macaws stay in {@link HeroDecorLayer}).
 */
export function HeroSponsorStrip() {
  return (
    <div className="mb-[clamp(0.5rem,calc(var(--hero-vw)*0.03),1.5rem)] sm:mb-[clamp(0.75rem,calc(var(--hero-vw)*0.03),1.5rem)] sm:max-[1799px]:mb-[clamp(1rem,calc(var(--hero-vw)*0.038),1.75rem)] mt-4 md:mt-0">
      {/* Mobile: balls + Budweiser only, centered. Macaws sit beside the date badge (HeroDateBadge). */}
      <div className="mx-auto flex w-full max-w-full items-center justify-center sm:max-w-none sm:gap-[clamp(10px,min(calc(var(--hero-vw)*0.0278),40px),40px)]">
        <div className="flex items-center justify-center gap-5 sm:contents sm:gap-0">
          <Image
            src={`${ASSET}/ball.svg`}
            alt=""
            width={46}
            height={46}
            className={ballClass}
            unoptimized
          />
          <div className="flex h-[3.75rem] w-[min(calc(var(--hero-vw)*0.88),300px)] shrink-0 items-center justify-center gap-2 rounded-lg border-2 border-[#232323] bg-[#FBE297] px-2 py-1 sm:h-[min(calc(var(--hero-vw)*0.0518),var(--hero-bud-outer-h))] sm:w-[min(calc(var(--hero-vw)*0.26),340px)] sm:gap-3 sm:px-2.5 sm:py-1.5">
            <Image
              src={`${ASSET}/black-budweiser.svg`}
              alt="Budweiser, patrocinador Arena Ópera"
              width={148}
              height={47}
              className="h-10 w-auto max-h-full max-w-[min(48%,150px)] shrink-0 object-contain sm:h-[min(calc(var(--hero-vw)*0.0326),var(--hero-bud-logo-h))] sm:max-w-[min(46%,var(--hero-bud-logo-w))]"
              unoptimized
            />
            <span
              className="h-8 w-px shrink-0 rounded-full bg-[#232323]/30 sm:h-[min(calc(var(--hero-vw)*0.034),2.75rem)]"
              aria-hidden
            />
           <Image
                src={`${ASSET}/grove.svg`}
                alt="HOOVE, patrocinador Arena Ópera"
                width={160}
                height={40}
                className="h-7 p-[2px] w-auto max-h-[1.85rem] max-w-[min(38%,112px)] object-contain object-center sm:h-[min(calc(var(--hero-vw)*0.022),2rem)] sm:max-h-[2rem] sm:max-w-[min(36%,128px)]"
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
      </div>
    </div>
  );
}
