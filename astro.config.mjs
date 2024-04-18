import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
const VERCEL_PREVIEW_SITE = process.env.VERCEL_ENV !== "production" && process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`;
const site = VERCEL_PREVIEW_SITE || "https://celinafg.github.io/digital-fab";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [mdx(), sitemap(), react()],
  base: "digital-fab",
  outDir: "./dist"
});