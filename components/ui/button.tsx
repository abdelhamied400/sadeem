import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Variants map onto the original theme's `.btn-four` (solid) and `.btn-five`
 * (quiet inline link) so the rebuilt site keeps its existing button language.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        solid: "rounded-[7px] bg-aqua text-white hover:bg-heading",
        quiet: "gap-2 text-aqua underline hover:text-heading",
      },
      size: {
        default: "h-[52px] px-10 text-[17px]",
        none: "",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
