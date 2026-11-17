import { defineConfig, svgoOptimizer } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import swup from "@swup/astro";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://sofiagomezsanchez6-star.github.io",
  base: "/sofiagomezsanchez6-estrellas.github.io",

  integrations: [
    swup({
      theme: ["overlay", { direction: "to-top" }],
      cache: true,
      progress: true,
    }),
    preact(),
    sitemap(),
  ],

  image: {
    responsiveStyles: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});