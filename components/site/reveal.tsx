"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import * as React from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

/** Matches the offsets AOS used, so reveals land where the old ones did. */
const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  direction?: Direction;
  /** Seconds. The old markup expressed this in ms via `data-aos-delay`. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = React.useMemo(() => {
    const { x, y } = reduced ? OFFSET.none : OFFSET[direction];
    return {
      hidden: { opacity: 0, x, y },
      shown: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
      },
    };
  }, [direction, delay, reduced]);

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </MotionTag>
  );
}
