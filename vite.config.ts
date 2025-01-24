import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import Checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({ parseNative: true }),
    Checker({ typescript: true }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
