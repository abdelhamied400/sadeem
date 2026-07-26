import Image from "next/image";

import { Reveal } from "@/components/site/reveal";

/**
 * `size` is the circle diameter, carried over from the `.bx-a` … `.bx-i`
 * modifiers in the old theme. `width`/`height` are each file's true intrinsic
 * size, which is what next/image needs to serve correctly-scaled sources.
 */
const PARTNERS = [
  { src: "/assets/Partners/1.png", size: 175, width: 342, height: 128 },
  { src: "/assets/Partners/2.png", size: 121, width: 515, height: 73 },
  { src: "/assets/Partners/3.jpg", size: 175, width: 400, height: 400 },
  { src: "/assets/Partners/4.jpg", size: 151, width: 2700, height: 1413 },
  { src: "/assets/Partners/5.png", size: 175, width: 318, height: 159 },
  { src: "/assets/Partners/6.png", size: 135, width: 225, height: 225 },
  { src: "/assets/Partners/7.png", size: 197, width: 206, height: 245 },
  { src: "/assets/Partners/8.png", size: 138, width: 1024, height: 340 },
  { src: "/assets/Partners/9.png", size: 175, width: 1200, height: 1200 },
] as const;

export function Partners() {
  return (
    <div className="grid grid-cols-2 items-center justify-items-center gap-x-4 md:grid-cols-3 xl:grid-cols-5">
      {PARTNERS.map((partner, index) => (
        <Reveal
          key={partner.src}
          direction="none"
          delay={(index + 1) * 0.1}
          className="flex w-full justify-center"
        >
          {/* The varied circle sizes are part of the original look, so each is
              capped at its design size but allowed to shrink on narrow grids. */}
          <div
            style={{ maxWidth: partner.size }}
            className="mx-auto mb-[25px] flex aspect-square w-full items-center justify-center rounded-full bg-white shadow-[15px_30px_50px_rgba(23,32,90,0.06)] transition-transform duration-300 hover:scale-110"
          >
            <Image
              src={partner.src}
              alt=""
              aria-hidden
              width={partner.width}
              height={partner.height}
              // Both axes are sized by the circle, so `object-contain` decides
              // the layout and the intrinsic ratio is never applied directly.
              className="size-full rounded-full object-contain p-3"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
