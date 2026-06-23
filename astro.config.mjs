// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";

import netlify from "@astrojs/netlify";
import { cacheNetlify } from "@astrojs/netlify/cache";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      // Optimización: Solo incluir componentes React explícitamente
      include: ["**/react/**", "**/*.tsx", "**/*.jsx"],
      // Excluir componentes Astro puros
      exclude: ["**/astro/**"],
    }),
    compress({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: false,
        },
      },
      Image: false, // Lo manejaremos manualmente
      JavaScript: true,
      SVG: true,
    }),
  ],

  output: "static",

  // Astro 7: Netlify CDN cache provider para mejor rendimiento
  cache: {
    provider: cacheNetlify(),
  },

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
            // Code splitting optimizado para framer-motion
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
      // Optimización: Limitar chunk size
      chunkSizeWarningLimit: 500,
    },
  },

  image: {
    domains: [],
    remotePatterns: [],
  },

  // Astro 7: JSX whitespace handling (nuevo default)
  compressHTML: "jsx",

  prefetch: {
    prefetchAll: false,
    defaultStrategy: "viewport",
  },

  adapter: netlify(),
});