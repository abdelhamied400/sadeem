"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function Header() {
  const [pinned, setPinned] = useState(false);
  const { scrollY } = useScroll();

  // Replaces the old scroll listener; Motion already throttles to rAF.
  useMotionValueEvent(scrollY, "change", (y) => setPinned(y >= 10));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[990] transition-all duration-400 ease-out",
        pinned
          ? "bg-white py-3 shadow-[0_13px_35px_-12px_rgba(35,35,35,0.1)]"
          : "py-5"
      )}
    >
      <div className="px-5 lg:px-15">
        <div className="flex min-h-[50px] items-center justify-between">
          <Link href="/" className="block" aria-label="Sadeem home">
            <Image
              src="/assets/logo.png"
              alt="Sadeem"
              width={100}
              height={100}
              priority
              className="h-auto w-[100px] object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
