"use client";

import Image from "next/image";

const ASSET = "/final-elements/atracoes";

/**
 * Floating decor: confetti streamers (TL + BR), flag TR, Arena Ópera colour mark BL.
 */
export function AtracoesDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 max-md:hidden overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-2 top-[6%] w-[min(28vw,120px)] sm:left-[2%] sm:top-[10%] sm:w-[140px]">
        <Image
          src={`${ASSET}/confeti.svg`}
          alt=""
          width={149}
          height={250}
          className="h-auto w-full object-contain"
          
        />
      </div>
      <div className="absolute -right-1 bottom-[8%] w-[min(30vw,130px)] scale-x-[-1] sm:right-[1%] sm:bottom-[12%] sm:w-[150px]">
        <Image
          src={`${ASSET}/confeti.svg`}
          alt=""
          width={149}
          height={250}
          className="h-auto w-full object-contain"
          
        />
      </div>
      <div className="absolute -right-2 top-[4%] w-[min(38vw,160px)] sm:right-[3%] sm:top-[8%] sm:w-[200px]">
        <Image
          src={`${ASSET}/bandeira-brasil.png`}
          alt=""
          width={231}
          height={198}
          className="h-auto w-full object-contain drop-shadow-[3px_4px_0_#0a0a0a]"
          
        />
      </div>
      <div className="absolute -left-3 bottom-[6%] w-[min(32vw,140px)] sm:bottom-[10%] sm:left-[2%] sm:w-[170px]">
        <Image
          src={`${ASSET}/arena-opera.png`}
          alt=""
          width={170}
          height={170}
          className="h-auto w-full object-contain drop-shadow-[3px_4px_0_#0a0a0a]"
          
        />
      </div>
    </div>
  );
}
