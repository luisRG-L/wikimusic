import { defineConfig } from "vite";

export default defineConfig({
  base: "./wikimusic/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
