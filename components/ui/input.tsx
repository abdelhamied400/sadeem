import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full bg-[#f5f5f5] text-base text-heading transition-shadow placeholder:text-body/70",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua",
        className
      )}
      {...props}
    />
  );
}

export { Input };
