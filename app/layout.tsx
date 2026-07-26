import type { Metadata } from "next";

import { gordita, recoleta } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sadeem",
    template: "%s | Sadeem",
  },
  description:
    "Sadeem CPaaS improves customer interactions across voice, video, SMS and chat with intelligent, automated communication.",
};

/**
 * Deliberately thin: it owns nothing but the document shell and the font
 * variables. Page chrome lives with the pages themselves so the legacy
 * `dev_` theme pages can bring their own Bootstrap chrome without inheriting
 * anything from the new marketing site.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gordita.variable} ${recoleta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
