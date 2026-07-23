// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";
import cloudflare from "@astrojs/cloudflare";
// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  output: "static",

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("node_modules")) {
              if (id.includes("framer-motion")) {
                return "framer-motion";
              }
              if (id.includes("react") || id.includes("react-dom")) {
                return "react-vendor";
              }
              return "vendor";
            }
          },
        },
      },
    },
  },

  prefetch: {
    prefetchAll: false,
    defaultStrategy: "viewport",
  },

  adapter: cloudflare(),
});
