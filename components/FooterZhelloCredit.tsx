const ZHELLO_URL = "https://zhello.com.br/";

/** Zhello-style credit: dark bar, uppercase sans, thin divider, royal blue wordmark. */
export function FooterZhelloCredit() {
  return (
    <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-4 pt-9 sm:px-6 lg:px-8">
      <p className="m-0 flex justify-center">
        <a
          href={ZHELLO_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Desenvolvido por Zhello, abre em nova aba"
          className="group inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-4"
        >
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-white/45 sm:text-[11px] sm:tracking-[0.38em]">
            Desenvolvido por
          </span>
          <span
            className="h-3 w-px shrink-0 bg-white/25 sm:h-3.5"
            aria-hidden
          />
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.26em] text-[#2563eb] transition-colors group-hover:text-[#60a5fa] sm:text-xs sm:tracking-[0.3em]">
            ZHELLO
          </span>
        </a>
      </p>
    </div>
  );
}
