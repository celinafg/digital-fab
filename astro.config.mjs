import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  base: "https:/celinafg.github.io/digital-fab/",
  integrations: [mdx(), sitemap(), tailwind()],
});
