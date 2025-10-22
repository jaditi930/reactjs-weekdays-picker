import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true, // <-- generates types entry
    }),
    cssInjectedByJsPlugin()
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ReactWeekdaysPicker",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-plotly.js", "plotly.js"],
    },
  },
});
