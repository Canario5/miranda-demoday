import { defineConfig } from "vite";
import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";
import PluginCritical from "rollup-plugin-critical";

export default defineConfig({
  base: "/",
  plugins: [
    VitePluginSvgSpritemap("./assets/img/icons/*.svg", {
      styles: {
        filename: "./assets/scss/spritemap.scss",
        format: "scss",
      },
      svgo: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                // Convert colors to currentColor for CSS styling
                convertColors: {
                  currentColor: true,
                },
                // Remove unnecessary attributes
                removeViewBox: false,
              },
            },
          },
          // Additional plugins can be added here
          {
            name: "removeStyleElement",
          },
        ],
      },
    }),
    PluginCritical({
      criticalUrl: "./dist/", //? [criticalUrl] + [criticalPages] = which file to input (can be live url "https://site.com/")
      criticalBase: "./dist/", //? [criticalBase] + [criticalPages] = which file to output
      criticalPages: [
        {
          uri: "index.html",
          template: "index", //!important for noninlined files, its prefix; index_critical.css, about-page_critical.css etc.
        },
      ],
      criticalConfig: {
        inline: true,
        extract: false,
        dimensions: [
          { width: 375, height: 667 },
          { width: 1280, height: 720 },
        ],
      },
    }),
  ],
});
