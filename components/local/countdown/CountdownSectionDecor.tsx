"use client";

import Image from "next/image";

const ASSET = "/final-elements/countdown";

/**
 * Ball TL, confetti TR, mirrored palm clusters BL + BR.
 */
export function CountdownSectionDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-1 top-[4%] w-[min(28vw,135px)] sm:left-[2%] sm:top-[6%] sm:w-[120px]">
        <Image
          src={`${ASSET}/ball.png`}
          alt=""
          width={135}
          height={144}
          className="h-auto w-full object-contain"
          
        />
      </div>
      <div className="absolute -right-2 top-[3%] w-[min(42vw,200px)] sm:right-[1%] sm:top-[5%] sm:w-[220px]">
        <Image
          src={`${ASSET}/confeti2.png`}
          alt=""
          width={240}
          height={128}
          className="h-auto w-full object-contain"
          
        />
      </div>
      <div className="absolute -bottom-[6%] -left-[8%] w-[min(62vw,280px)] sm:bottom-[0%] sm:-left-[4%] sm:w-[500px]">
        <Image
          src={`${ASSET}/plant.png`}
          alt=""
          width={500}
          height={832}
          className="h-auto w-full object-contain object-bottom opacity-95"
          
        />
      </div>
      <div className="absolute -bottom-[6%] -right-[8%] w-[min(62vw,280px)] scale-x-[-1] sm:-bottom-[4%] sm:-right-[4%] sm:w-[500px]">
        <Image
          src={`${ASSET}/plant.png`}
          alt=""
          width={512}
          height={444}
          className="h-auto w-full object-contain object-bottom opacity-95"
          
        />
      </div>
    </div>
  );
}
