import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-arena-ink bg-arena-ink py-10 text-arena-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="font-display text-2xl uppercase tracking-wide">
          Arena Ópera
        </p>
        <p className="text-center text-sm text-white/60 sm:text-left">
          © {new Date().getFullYear()} Arena Ópera. Landing de demonstração —
          imagens via{" "}
          <Link
            href="https://unsplash.com"
            className="underline decoration-arena-yellow decoration-2 underline-offset-2 hover:text-white"
          >
            Unsplash
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
