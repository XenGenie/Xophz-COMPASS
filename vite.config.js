import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  // In development, WordPress loads assets from the dev server URL
  // In production, assets are loaded from the plugin's dist folder
  base:
    mode === "production"
      ? "/wp-content/plugins/xophz-compass/admin/dist/"
      : "http://localhost:8080/",
  build: {
    outDir: "wp-content/plugins/xophz-compass/admin/dist",
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: "js/[name].js",
        chunkFileNames: "js/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "css/[name].[ext]";
          }
          return "assets/[name]-[hash].[ext]";
        },
      },
    },
  },
  server: {
    port: 8080,
    host: "0.0.0.0",
    strictPort: true,
    hmr: {
      host: "localhost",
      protocol: "ws",
      port: 8080,
    },
    watch: {
      ignored: ["**/node_modules/**", "**/.git/**", "**/dist/**", "**/.pnpm-store/**"],
      followSymlinks: false,
    },
    // Enable CORS so WordPress can load assets from the dev server
    cors: true,
    origin: mode === "production" ? undefined : "http://localhost:8080",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Private-Network": "true",
    },
    warmup: {
      clientFiles: [
        "./src/app.ts",
        "./src/index.vue",
        "./src/plugins/vuetify.ts",
        "./src/plugins/api.ts",
        "./src/app.router.ts",
        "./src/routes/compass/store/index.ts",
      ],
    },
  },
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
      "pinia",
      "vuetify",
      "vuetify/components/VApp",
      "vuetify/iconsets/fa",
      "lodash",
      "axios",
      "nprogress",
    ],
  },
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        silenceDeprecations: ["import"],
      },
    },
  },
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    "process.env": {},
  },
}));
