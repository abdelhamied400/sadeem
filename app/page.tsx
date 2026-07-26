import Image from "next/image";
import { Toaster } from "sonner";

import { CircleBackdrop } from "@/components/site/circle-backdrop";
import { Features } from "@/components/site/features";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Partners } from "@/components/site/partners";
import { ProductTabs } from "@/components/site/product-tabs";
import { Reveal } from "@/components/site/reveal";
import { ScreenHolder } from "@/components/site/screen-holder";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { Highlight, SectionTitle } from "@/components/site/section-title";
import { Subscribe } from "@/components/site/subscribe";
import { TagList, type Tag } from "@/components/site/tag-list";
import { Testimonials } from "@/components/site/testimonials";
import { Button } from "@/components/ui/button";

const CHANNEL_TAGS: readonly Tag[] = [
  { color: "rgba(255, 130, 130, 0.13)", text: "1Voice" },
  { color: "rgba(73, 230, 213, 0.13)", text: "SMS" },
  { color: "rgba(73, 179, 230, 0.13)", text: "Analytics" },
  { color: "rgba(251, 208, 80, 0.15)", text: "API" },
  { color: "rgba(213, 126, 255, 0.15)", text: "customer management" },
  { color: "rgba(189, 231, 122, 0.15)", text: "chat" },
  { color: "rgba(255, 152, 152, 0.15)", text: "video" },
];

/** Shared page gutter — the Bootstrap `.container` this site was built around. */
const container = "mx-auto w-full max-w-[1320px] px-3";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="overflow-x-clip">
        <Hero />

        {/* Integrates your tools */}
        <section className="pt-[120px] md:pt-[170px] lg:pt-[200px] xl:pt-[300px]">
          <div className={container}>
            <div className="flex flex-wrap items-center">
              <Reveal direction="right" className="w-full md:w-1/2 lg:w-5/12">
                <div className="mb-[50px] md:mb-0 xl:pe-12">
                  <SectionTitle eyebrow="Integrates your tools">
                    a powerful solution that facilitates{" "}
                    <Highlight color="#D6F9EF">communication</Highlight>
                  </SectionTitle>
                  <p className="mt-[25px] mb-10 text-[19px] leading-[1.67] xl:mb-[60px] xl:text-[22px] 2xl:text-[24px]">
                    Software development kits to integrate communication
                    features into applications, websites and business systems
                    seamlessly.
                  </p>
                  <Button>Learn More</Button>
                </div>
              </Reveal>

              <Reveal
                direction="left"
                className="ms-auto w-full md:w-1/2 lg:w-7/12 xl:w-1/2"
              >
                <ScreenHolder />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Artificial Intelligence & Automation */}
        <section className="pt-[120px] xl:pt-[250px]">
          <div className={container}>
            <Reveal
              direction="up"
              className="mx-auto max-w-[100%] text-center md:max-w-[66%] 2xl:max-w-[58%]"
            >
              <SectionTitle>
                Artificial <Highlight color="#F7E4FF">Intelligence</Highlight>{" "}
                &amp; Automation
              </SectionTitle>
              <p className="mt-5 mb-[50px] text-[19px] leading-[1.67] xl:mt-10 xl:mb-[100px] xl:text-[22px] 2xl:text-[24px]">
                deliver enhanced customer experiences through intelligent
                chatbots, automated workflows, and adaptive communication.
              </p>
            </Reveal>

            <ProductTabs />
          </div>
        </section>

        {/* Discover our products */}
        <section className="relative mt-[80px] sm:mt-[100px] xl:mt-[225px]">
          <div className={container}>
            {/* Title cell + 5 feature cards fill two rows of three. */}
            <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3">
              <Reveal direction="up" className="mt-10 self-center">
                <SectionTitle className="mb-10 xl:mb-[65px]">
                  Let&rsquo;s <br />
                  <Highlight color="#E1EDFF">Discover</Highlight> our all
                  products
                </SectionTitle>
                <Button variant="quiet" size="none" className="text-[17px]">
                  Click here for more info
                  <span aria-hidden>›</span>
                </Button>
              </Reveal>

              <Features />
            </div>
          </div>

          <div
            aria-hidden
            className="absolute -left-[50px] top-[4%] size-[126px] animate-drift-up rounded-full bg-mint"
          />
          <Image
            src="/images/shape/shape_36.svg"
            alt=""
            aria-hidden
            width={148}
            height={165}
            className="absolute right-[3%] top-[30%] hidden h-auto lg:block"
          />
          <div
            aria-hidden
            className="absolute -right-[150px] bottom-0 size-[300px] animate-drift-down rounded-full bg-aqua opacity-70"
          />
        </section>

        {/* Omni-channel platform */}
        <section className="pt-[140px] xl:pt-[300px]">
          <div className={container}>
            <div className="flex flex-wrap items-center">
              <Reveal
                direction="right"
                className="order-2 w-full md:order-1 md:w-1/2"
              >
                <div className="relative rounded-[25px] bg-panel p-8 xl:px-[65px] xl:pt-[45px] xl:pb-[50px]">
                  <Image
                    src="/images/shape/shape_35.svg"
                    alt=""
                    aria-hidden
                    width={164}
                    height={148}
                    className="absolute right-[1%] top-[1%] z-0 h-auto w-[25%] animate-drift-up"
                  />
                  <div className="font-display text-[32px] font-normal text-heading">
                    100+
                  </div>
                  <p className="pb-2.5 text-[19px] opacity-50 lg:pb-[25px] xl:text-[22px] 2xl:text-[24px]">
                    Tool to help your business
                  </p>
                  <TagList tags={CHANNEL_TAGS} />
                </div>
              </Reveal>

              <Reveal
                direction="left"
                className="order-1 ms-auto w-full md:order-2 md:w-1/2 lg:w-5/12"
              >
                <div className="mb-[50px] sm:mb-0 xl:pe-12">
                  <SectionTitle
                    eyebrow={
                      <>
                        Over{" "}
                        <span className="text-mint underline">
                          500+ Satisfied Clients
                        </span>
                      </>
                    }
                  >
                    Sadeem is an intelligent{" "}
                    <Highlight color="#D8FFE8">omni-channel</Highlight>{" "}
                    communication platform.
                  </SectionTitle>
                  <p className="mt-[30px] mb-[50px] text-[19px] leading-[1.67] xl:mt-10 xl:mb-[75px] xl:text-[22px] 2xl:text-[24px]">
                    enables enterprises to engage with their customers via the
                    appropriate context and channel.
                  </p>
                  <Button>Try free now</Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative mt-[100px] py-10 sm:py-[100px] xl:mt-[170px] xl:py-[150px]">
          <div className={container}>
            <Reveal
              direction="up"
              className="mx-auto max-w-full text-center sm:max-w-[83%] md:max-w-[66%] lg:max-w-[58%] 2xl:max-w-1/2"
            >
              <div className="mx-auto mb-[45px] flex size-[90px] items-center justify-center rounded-full bg-mint">
                <Image
                  src="/images/icon/icon_19.svg"
                  alt=""
                  aria-hidden
                  width={57}
                  height={42}
                  className="h-auto"
                />
              </div>
              <SectionTitle className="mb-10 xl:mb-[70px]">
                Check what&rsquo;s our{" "}
                <Highlight color="#BCF8F1">client</Highlight> say about us.
              </SectionTitle>
            </Reveal>

            <div className="mx-auto w-full lg:w-3/4 xl:w-7/12">
              <Testimonials />
            </div>
          </div>

          <CircleBackdrop />
        </section>

        {/* Partners */}
        <section className="relative mt-[100px] xl:mt-[225px]">
          <div className={container}>
            <Reveal
              direction="up"
              className="mx-auto mb-[30px] max-w-full text-center md:max-w-[66%] xl:mb-[100px]"
            >
              <SectionTitle eyebrow="Our partners">
                Our trusted <Highlight color="#C8FFC6">partners</Highlight>{" "}
                support us always
              </SectionTitle>
            </Reveal>

            <div className="mx-auto w-full 2xl:w-11/12">
              <Partners />
            </div>
          </div>

          <Image
            src="/images/shape/shape_38.svg"
            alt=""
            aria-hidden
            width={130}
            height={123}
            className="absolute right-[9%] top-[18%] hidden h-auto animate-drift-down lg:block"
          />
          <Image
            src="/images/shape/shape_39.svg"
            alt=""
            aria-hidden
            width={145}
            height={105}
            className="absolute -bottom-[11%] left-[12%] hidden h-auto animate-drift-up lg:block"
          />
        </section>

        {/* Free trial call to action */}
        <section className="mt-[100px] mb-[100px] xl:mt-[180px] xl:mb-[200px]">
          <div className={container}>
            <div className="mx-auto w-full text-center md:w-3/4 lg:w-2/3 2xl:w-7/12">
              <Reveal direction="up">
                <SectionTitle>
                  Ready to start{" "}
                  <Highlight color="#C3F0FF">free trial?</Highlight> it&rsquo;s
                  just a matter of a single click
                </SectionTitle>
                <p className="pt-[30px] pb-[30px] text-[19px] leading-[1.67] text-black xl:pb-[55px] xl:text-[22px] 2xl:text-[24px]">
                  Try it risk free — we don&rsquo;t charge cancellation fees.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.2} className="mx-auto max-w-[620px]">
                <Subscribe />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
      <Toaster position="bottom-right" />
    </>
  );
}
