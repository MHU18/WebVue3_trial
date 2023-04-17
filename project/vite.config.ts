import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: [
        "src/components",
        "../node_modules/@aemo/common-web-vue3/src/components",
      ],
      resolvers: [PrimeVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api/mock/": {
        target: "http://localhost:3000/mock/data/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/mock\//, ""),
      },
    },
  },
});
