import Image from "next/image";

import { Reveal } from "@/components/site/reveal";

/** Icon `width`/`height` are each SVG's true intrinsic size. */
const FEATURES = [
  {
    icon: "/images/icon/icon_13.svg",
    iconWidth: 73,
    iconHeight: 61,
    title: "Voice & Video",
    description:
      "Allow voice calls between applications and devices that use SIP and WebRTC.",
  },
  {
    icon: "/images/icon/icon_14.svg",
    iconWidth: 76,
    iconHeight: 57,
    title: "IVR & Media",
    description:
      "Interactive Call Control Answer, initiate, split and hang-up local or remote call participants.",
  },
  {
    icon: "/images/icon/icon_15.svg",
    iconWidth: 65,
    iconHeight: 67,
    title: "Analytics & Reporting",
    description:
      "Real-time dashboards provide visibility into key metrics such as call volumes, durations, and customer sentiment.",
  },
  {
    icon: "/images/icon/icon_16.svg",
    iconWidth: 73,
    iconHeight: 73,
    title: "Call recordings & transcription",
    description:
      "Record phone calls between parties and calls originated from external voice provider with SIPRec.",
  },
  {
    icon: "/images/icon/icon_17.svg",
    iconWidth: 76,
    iconHeight: 63,
    title: "Developer Tools & Customization",
    description:
      "Robust SDKs and APIs across various programming languages allow seamless integration of communication features into applications.",
  },
] as const;

export function Features() {
  return (
    <>
      {FEATURES.map((feature, index) => (
        <Reveal
          key={feature.title}
          direction="up"
          delay={(index + 1) * 0.1}
          className="mt-10"
        >
          <div className="group h-full rounded-[10px] border border-hairline bg-white p-[30px_10px_25px_15px] transition-all duration-300 hover:border-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] xl:p-[42px_10px_30px_45px]">
            <div className="flex h-[65px] items-end">
              <Image
                src={feature.icon}
                alt=""
                aria-hidden
                width={feature.iconWidth}
                height={feature.iconHeight}
                className="h-auto max-h-full w-auto"
              />
            </div>
            <h3 className="mt-[25px] mb-5 font-display text-[22px] leading-snug text-heading">
              {feature.title}
            </h3>
            <p className="mb-[50px] leading-[1.7]">{feature.description}</p>
            <Image
              src="/images/icon/icon_18.svg"
              alt=""
              aria-hidden
              width={39}
              height={15}
              className="h-auto transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </Reveal>
      ))}
    </>
  );
}
