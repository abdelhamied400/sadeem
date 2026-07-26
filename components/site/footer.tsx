import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-2 px-3 xl:px-[4%] 2xl:px-[10%]">
      <div className="mx-auto w-full max-w-[1320px] px-3">
        <div className="flex flex-col items-center gap-4 py-5 lg:flex-row lg:justify-between lg:py-[40px_0_25px]">
          <Link href="/" aria-label="Sadeem home">
            <Image
              src="/assets/logo.png"
              alt="Sadeem"
              width={96}
              height={96}
              className="h-auto w-24 object-contain"
            />
          </Link>

          <p className="m-0 text-center text-[15px]">
            Copyright © {new Date().getFullYear()} Sadeem inc.
          </p>

          {/* Balances the logo so the copyright stays optically centred. */}
          <div aria-hidden className="hidden w-24 lg:block" />
        </div>
      </div>
    </footer>
  );
}
