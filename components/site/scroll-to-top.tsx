"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 400));

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Scroll back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed right-5 bottom-5 z-[999] flex size-11 items-center justify-center rounded-full bg-aqua text-white shadow-lg transition-colors hover:bg-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heading"
        >
          <ArrowUp className="size-5" aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
