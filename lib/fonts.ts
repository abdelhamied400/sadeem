import localFont from "next/font/local";

/**
 * Both families ship with the original theme as local webfonts. Only the weights
 * the marketing site actually renders are loaded.
 */
export const gordita = localFont({
  src: [
    { path: "../public/fonts/gordita/gordita_light-webfont.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/gordita/gordita_regular-webfont.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/gordita/gordita_medium-webfont.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/gordita/gordita_bold-webfont.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-gordita",
  display: "swap",
});

export const recoleta = localFont({
  src: [
    { path: "../public/fonts/recoleta/Recoleta-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/recoleta/Recoleta-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/recoleta/Recoleta-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/recoleta/Recoleta-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/recoleta/Recoleta-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-recoleta",
  display: "swap",
});
