"use client";

import Image from "next/image";

import { Reveal } from "@/components/site/reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABS = [
  {
    id: "chatbots",
    title: "Intelligent Chatbots and Virtual Assistants",
    image: "/assets/2.png",
  },
  {
    id: "workflows",
    title: "Automated Communication Workflows",
    image: "/assets/4.png",
  },
  {
    id: "operations",
    title: "Scalable and Efficient Operations",
    image: "/assets/5.png",
  },
] as const;

export function ProductTabs() {
  return (
    <Tabs defaultValue={TABS[0].id}>
      <Reveal direction="up">
        <TabsList>
          {TABS.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Reveal>

      <Reveal
        direction="up"
        className="relative mt-[80px] xl:mt-[120px]"
      >
        <div
          aria-hidden
          className="absolute -top-[75px] -right-[40px] z-0 size-[126px] animate-bob-down rounded-full bg-[rgba(0,236,183,0.66)]"
        />
        <div
          aria-hidden
          className="absolute -bottom-[10%] -left-[6%] size-[285px] animate-pulse-soft rounded-full bg-[#998eff]"
        />
        <Image
          src="/images/shape/shape_33.svg"
          alt=""
          aria-hidden
          width={185}
          height={302}
          className="absolute -right-[13%] top-1/2 z-0 h-auto animate-drift-down"
        />
        <Image
          src="/images/shape/shape_34.svg"
          alt=""
          aria-hidden
          width={186}
          height={298}
          className="absolute -left-[13%] top-[13%] z-0 h-auto animate-drift-up"
        />

        {TABS.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.id}
            className="relative rounded-[20px] bg-panel p-[4%]"
          >
            <Image
              src={tab.image}
              alt={tab.title}
              width={1214}
              height={729}
              className="h-auto w-full rounded-[25px]"
            />
          </TabsContent>
        ))}
      </Reveal>
    </Tabs>
  );
}
