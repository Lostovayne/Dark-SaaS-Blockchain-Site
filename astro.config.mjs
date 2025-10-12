// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";

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
      Image: false, // Lo manejaremos manualmente
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
          drop_console: true, // Elimina console.logs en producción
          drop_debugger: true,
          pure_funcs: ["console.log", "console.info"],
        },
        mangle: true,
      },
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Code splitting inteligente
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
  image: {
    domains: [],
    remotePatterns: [],
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "viewport",
  },
});
