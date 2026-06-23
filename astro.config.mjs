// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    compress({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: true,
    }),
  ],

  output: "static",

  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ["console.log", "console.info"],
        },
        mangle: true,
      },
      cssMinify: true,
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
      chunkSizeWarningLimit: 500,
    },
  },

  image: {
    domains: [],
    remotePatterns: [],
  },

  compressHTML: "jsx",

  prefetch: {
    prefetchAll: false,
    defaultStrategy: "viewport",
  },

  adapter: netlify(),
});