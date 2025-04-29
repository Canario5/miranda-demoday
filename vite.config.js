import { defineConfig } from "vite";
import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";

export default defineConfig({
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
  ],
});
