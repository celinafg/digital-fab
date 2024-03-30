import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://celinafg.github.io/digital-fab",
  publicDir: "static",
  outDir: "public",
  base: "digital-fab",
  integrations: [mdx(), sitemap()],
});
