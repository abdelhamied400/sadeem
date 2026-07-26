import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-center overflow-x-clip pt-[150px] text-center">
        <div className="mx-auto w-full max-w-[1320px] px-3">
          <div className="mx-auto w-full lg:w-7/12 2xl:w-1/2">
            <h1 className="font-display text-[34px] leading-tight text-heading lg:text-[48px]">
              Opps! you&rsquo;r on the wrong place.
            </h1>
            <p className="pt-[15px] pb-5 text-[19px] leading-[1.67] xl:text-[22px]">
              Can not find what you need? Take a moment and do a search below or
              start from our Homepage.
            </p>
            <Button asChild>
              <Link href="/">Back to home</Link>
            </Button>
          </div>

          <Image
            src="/images/assets/ils_06.svg"
            alt=""
            aria-hidden
            width={800}
            height={522}
            className="m-auto h-auto w-full max-w-[800px]"
          />
        </div>

        <Image
          src="/images/shape/shape_178.svg"
          alt=""
          aria-hidden
          width={1799}
          height={633}
          className="h-auto w-full"
        />
      </main>

      <Footer />
    </>
  );
}
