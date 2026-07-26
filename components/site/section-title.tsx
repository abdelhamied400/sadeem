import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * The theme's `.title-style-three`: an optional uppercase eyebrow above a
 * Recoleta display heading. `<Highlight>` reproduces the `.mark-bg` swatch that
 * sits behind a word.
 */
export function SectionTitle({
  eyebrow,
  children,
  className,
}: {
  eyebrow?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow ? (
        <div className="pb-2.5 text-sm tracking-[1px] text-black/30 uppercase">
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={cn(
          "m-0 font-display font-medium text-heading",
          "text-[34px] leading-[1.2] lg:text-[48px] xl:text-[58px] 2xl:text-[64px] xl:leading-[1.15]"
        )}
      >
        {children}
      </h2>
    </div>
  );
}

export function Highlight({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  return (
    <span className="relative z-1 inline-block">
      {children}
      <span
        aria-hidden
        className="absolute -left-[5px] top-1/2 -z-1 h-[34px] w-[98%] -translate-y-1/2 lg:h-[50px]"
        style={{ backgroundColor: color }}
      />
    </span>
  );
}
