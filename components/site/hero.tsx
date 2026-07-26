import Image from "next/image";

import { Reveal } from "@/components/site/reveal";

export function Hero() {
  return (
    <section className="relative z-1 pt-[150px] md:pt-[200px] xl:pt-[250px]">
      {/*
       * These decorations sit above the fold, so they load eagerly rather than
       * lazily — otherwise one resolves late and gets measured as the LCP
       * element. Next preloads eager images, so all three are preloaded; at
       * ~12KB combined that is negligible beside the hero screenshot below.
       */}
      <Image
        src="/images/shape/shape_26.svg"
        alt=""
        aria-hidden
        loading="eager"
        width={247}
        height={361}
        className="absolute left-[8%] top-[12%] hidden h-auto w-[11.9%] max-w-[248px] lg:block"
      />
      <Image
        src="/images/shape/shape_27.svg"
        alt=""
        aria-hidden
        loading="eager"
        width={192}
        height={392}
        className="absolute right-[9%] top-[13%] hidden h-auto w-[9.1%] max-w-[193px] lg:block"
      />

      <div className="mx-auto w-full max-w-[1320px] px-3">
        {/* Bootstrap's `col-md-11 col-lg-10` was full-bleed below `md`. */}
        <Reveal
          direction="up"
          className="mx-auto w-full text-center md:max-w-[91%] lg:max-w-[83%]"
        >
          <h1 className="relative font-display text-[40px] leading-[1.2] font-normal text-heading lg:text-[58px] xl:text-[70px] xl:leading-[1.09] 2xl:text-[82px]">
            <Image
              src="/images/shape/shape_25.svg"
              alt=""
              aria-hidden
              loading="eager"
              width={235}
              height={23}
              className="absolute left-[3%] top-[45%] hidden h-auto lg:block"
            />
            Improve customer interactions across various communication channels
            using{" "}
            <span className="relative z-1 inline-block">
              SADEEM
              <span
                aria-hidden
                className="absolute left-[31%] top-1/2 -z-1 h-[81%] w-[73%] -translate-y-1/2 bg-[#c5fff0]"
              />
            </span>{" "}
            CPaaS
          </h1>
          <p className="pt-5 text-[19px] leading-[1.67] lg:mb-[50px] lg:pt-2.5 xl:mb-[75px] xl:text-[22px] 2xl:text-[24px]">
            which enables smarter and more efficient communication.
          </p>
        </Reveal>

        <Reveal
          direction="up"
          className="relative mt-[30px] md:mt-[80px] xl:mt-[120px]"
        >
          <div className="relative z-1 rounded-[20px] bg-panel p-[4%]">
            <Image
              src="/assets/1.png"
              alt="The Sadeem communications dashboard"
              width={1214}
              height={729}
              priority
              className="h-auto w-full rounded-[25px] bg-white"
            />
          </div>

          <Image
            src="/images/shape/shape_28.svg"
            alt=""
            aria-hidden
            width={178}
            height={175}
            className="absolute -left-[7%] -top-[10%] z-0 h-auto w-[13.5%] animate-swing"
          />
          <Image
            src="/images/shape/shape_29.svg"
            alt=""
            aria-hidden
            width={400}
            height={400}
            className="absolute -bottom-[16%] -right-[11%] h-auto w-[28.3%] animate-swing-reverse"
          />
          <Image
            src="/images/shape/shape_30.svg"
            alt=""
            aria-hidden
            width={185}
            height={303}
            className="absolute -right-[10%] top-[7%] z-0 h-auto w-[12%]"
          />
          <Image
            src="/images/shape/shape_31.svg"
            alt=""
            aria-hidden
            width={186}
            height={299}
            className="absolute -left-[10%] bottom-[9%] z-0 h-auto w-[12%]"
          />
        </Reveal>
      </div>
    </section>
  );
}
