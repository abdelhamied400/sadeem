"use client";

import Aos from "aos";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import ScrollToTop from "@/components/common/ScrollTop";

import "aos/dist/aos.css";
import "../../styles/index.scss";

/**
 * Chrome for the original Jano theme's demo pages, which still run on
 * Bootstrap + SCSS + AOS. Scoping these imports here (rather than in the root
 * layout) keeps the legacy stylesheet off the marketing site entirely, and
 * keeps it unlayered so it outranks Tailwind's preflight on these routes only.
 */
export default function DevThemeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Aos.init({ duration: 1200 });

    // Bootstrap's bundle touches `document` at import time, so it can only be
    // pulled in once the component has mounted on the client.
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <div className="main-page-wrapper">
        {children}
        <ScrollToTop />
      </div>
      <Toaster />
    </>
  );
}
