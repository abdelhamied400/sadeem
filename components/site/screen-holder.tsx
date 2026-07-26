import Image from "next/image";

import { cn } from "@/lib/utils";

/** `width`/`height` are each file's true intrinsic size; `box` is the circle. */
const LOGOS = [
  {
    src: "/assets/logo.png",
    width: 1080,
    height: 1080,
    box: 193,
    alt: "Sadeem",
    className: "p-2",
  },
  {
    src: "/assets/Tools/2.jpg",
    width: 2000,
    height: 1047,
    box: 125,
    className: "absolute -top-[45px] right-[37%] animate-drift-down",
  },
  {
    src: "/assets/Tools/3.png",
    width: 301,
    height: 167,
    box: 105,
    className: "absolute top-[23%] -left-[59px] animate-drift-up",
  },
  {
    src: "/assets/Tools/4.png",
    width: 225,
    height: 225,
    box: 80,
    className: "absolute top-[72%] -left-[46px] animate-drift-down",
  },
  {
    src: "/assets/Tools/5.jpg",
    width: 233,
    height: 217,
    box: 80,
    className: "absolute -bottom-[75px] left-[58%] animate-drift-up p-2",
  },
  {
    src: "/assets/Tools/6.jpg",
    width: 400,
    height: 400,
    box: 105,
    className: "absolute top-[21%] -right-[39px] animate-drift-up",
  },
] as const;

/** The integration-logo cluster in the "Integrates your tools" section. */
export function ScreenHolder() {
  return (
    <div className="relative z-1 mx-auto flex h-[380px] w-full max-w-[432px] items-center justify-center rounded-[25px] bg-panel sm:h-[470px] lg:mr-[10%] lg:ml-auto">
      {LOGOS.map((logo) => (
        <div
          key={logo.src}
          style={{ width: logo.box, height: logo.box }}
          className={cn(
            "z-1 flex items-center justify-center rounded-full bg-white shadow-[0px_20px_50px_rgba(27,75,132,0.03)]",
            logo.className
          )}
        >
          <Image
            src={logo.src}
            alt={"alt" in logo ? logo.alt : ""}
            aria-hidden={!("alt" in logo)}
            width={logo.width}
            height={logo.height}
            // Both axes are sized by the circle, so `object-contain` — not the
            // intrinsic ratio — decides how the logo is laid out inside it.
            className="size-full rounded-full object-contain"
          />
        </div>
      ))}

      <Image
        src="/assets/Tools/1.png"
        alt=""
        aria-hidden
        width={1200}
        height={856}
        className="absolute top-[44%] -right-[15%] z-1 h-auto w-[105px] p-2"
      />
    </div>
  );
}
