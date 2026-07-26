import Image from "next/image";

import { cn } from "@/lib/utils";

/** `size` is the rendered diameter; `intrinsic` is the file's real dimension. */
const AVATARS = [
  { src: "/images/media/img_07.jpg", size: 80, intrinsic: 81, className: "top-[19%] left-[16%]" },
  { src: "/images/media/img_08.jpg", size: 45, intrinsic: 45, className: "top-[53%] left-[11%]" },
  { src: "/images/media/img_09.jpg", size: 85, intrinsic: 86, className: "bottom-[5%] left-[25%]" },
  { src: "/images/media/img_10.jpg", size: 45, intrinsic: 45, className: "top-[14%] right-[21%]" },
  { src: "/images/media/img_11.jpg", size: 110, intrinsic: 110, className: "top-[57%] right-[10%]" },
  { src: "/images/media/img_12.jpg", size: 55, intrinsic: 56, className: "bottom-[9%] right-[24%]" },
] as const;

/**
 * The ring of customer avatars behind the testimonial slider. Purely
 * decorative, and hidden below `md` exactly as the original stylesheet did.
 */
export function CircleBackdrop() {
  return (
    <div aria-hidden className="absolute inset-x-0 top-0 -z-2 hidden w-full md:block">
      <Image
        src="/images/shape/shape_37.svg"
        alt=""
        width={1445}
        height={1090}
        className="m-auto h-auto w-full"
      />
      {AVATARS.map((avatar) => (
        <Image
          key={avatar.src}
          src={avatar.src}
          alt=""
          width={avatar.intrinsic}
          height={avatar.intrinsic}
          style={{ width: avatar.size, height: avatar.size }}
          className={cn("absolute z-1 rounded-full object-cover", avatar.className)}
        />
      ))}
    </div>
  );
}
