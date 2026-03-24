import type { ReactNode } from "react";

export type SectionVariant = "dark" | "cream" | "yellow" | "blue" | "pattern";

const variantClasses: Record<SectionVariant, string> = {
  dark: "bg-[#12121a] text-foreground",
  cream: "bg-arena-cream text-arena-ink",
  yellow: "bg-arena-yellow text-arena-ink",
  blue: "bg-arena-blue text-white",
  pattern:
    "bg-[#15151f] text-foreground bg-dots bg-diagonal-stripes",
};

export type SectionProps = {
  id?: string;
  variant?: SectionVariant;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  as?: "section" | "div";
};

export function Section({
  id,
  variant = "dark",
  className = "",
  innerClassName = "",
  children,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`relative scroll-mt-20 ${variantClasses[variant]} ${className}`}
    >
      <div
        className={`mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${innerClassName}`}
      >
        {children}
      </div>
    </Tag>
  );
}
