"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    text: "It's such a game changing service!! \nWith this service, our clients' costs are decreasing as it's always better to automate your process. For example: we used to dedicate agents to confirm all COD orders that we are receiving, but now.. it's all done very smartly and efficiently through automated calls",
    name: "Asmaa Jarrar",
    role: "Crystel company",
  },
  {
    id: 2,
    text: "It's such a game changing service!! \nWith this service, our clients' costs are decreasing as it's always better to automate your process. For example: we used to dedicate agents to confirm all COD orders that we are receiving, but now.. it's all done very smartly and efficiently through automated calls",
    name: "Asmaa Jarrar",
    role: "Crystel company",
  },
  {
    id: 3,
    text: "It's such a game changing service!! \nWith this service, our clients' costs are decreasing as it's always better to automate your process. For example: we used to dedicate agents to confirm all COD orders that we are receiving, but now.. it's all done very smartly and efficiently through automated calls",
    name: "Asmaa Jarrar",
    role: "Crystel company",
  },
] as const;

export function Testimonials() {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const reduced = useReducedMotion();

  // With a single quote there is nothing to page between, so the controls are
  // dropped rather than rendered as dead buttons.
  const isCarousel = TESTIMONIALS.length > 1;

  const paginate = (step: number) =>
    setState(([current]) => [
      (current + step + TESTIMONIALS.length) % TESTIMONIALS.length,
      step,
    ]);

  const active = TESTIMONIALS[index];
  const shift = reduced ? 0 : 60;

  return (
    <div>
      {/* Height is reserved by the grid cell so swapping slides doesn't jump. */}
      <div className="grid overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.blockquote
            key={active.id}
            className="col-start-1 row-start-1 text-center"
            initial={{ opacity: 0, x: direction >= 0 ? shift : -shift }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -shift : shift }}
            transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="mb-10 whitespace-pre-wrap text-xl leading-[1.85] text-body sm:text-[22px] xl:mb-[80px] xl:text-[25px] 2xl:text-[28px]">
              {active.text}
            </p>
            <footer>
              <cite className="m-0 block font-display text-[22px] not-italic text-heading">
                {active.name}
              </cite>
              <span className="opacity-75">{active.role}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {isCarousel ? (
        <div className="mt-[35px] flex justify-center gap-6">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="text-[26px] text-heading transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua"
          >
            <ArrowLeft className="size-[26px]" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="text-[26px] text-heading transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua"
          >
            <ArrowRight className="size-[26px]" aria-hidden />
          </button>
        </div>
      ) : null}
    </div>
  );
}
