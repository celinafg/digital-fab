import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  base: ".",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "static",
  site: "https://celinafg.github.io",
});
