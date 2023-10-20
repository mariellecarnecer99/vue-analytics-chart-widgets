import { fileURLToPath, URL } from 'node:url'
import { resolve } from "path";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, "src/main.js"),
      name: "vue-analytics-chart-widgets",
      fileName: "vue-analytics-chart-widgets"
    },
    rollupOptions: {
      external: ["vue", "vue-router"],
    }
  },
  plugins: [
    vue({
      template: {transformAssetUrls}
    }),
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    })
  ],
  define: { 'process.env': {}},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  optimizeDeps: {
    include: ["vuetify"],
  },
})
