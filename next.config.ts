import path from "node:path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // TypeScript 7 is the Go-native compiler and no longer exposes the JS
    // compiler API that Next links against, so type checking goes through the
    // `tsc` CLI instead.
    useTypeScriptCli: true,
  },
  sassOptions: {
    // Only `styles/index.scss` (the legacy `dev_` theme bundle) still uses Sass.
    // Its imports are written relative to the project root and node_modules,
    // which Next 14 used to add implicitly.
    loadPaths: [path.join(process.cwd()), path.join(process.cwd(), "node_modules")],
    // The vendored Bootstrap 5 SCSS still uses `@import`. Nothing here is worth
    // migrating since these styles serve reference pages only.
    silenceDeprecations: ["import", "global-builtin", "color-functions"],
    quietDeps: true,
  },
};

export default nextConfig;
