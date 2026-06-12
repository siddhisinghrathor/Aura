import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    minify: "esbuild",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('react-router') ||
            id.includes('react-router-dom') ||
            id.includes('@remix-run')
          ) {
            return 'router-vendor';
          }
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('scheduler')
          ) {
            return 'react-vendor';
          }
          if (id.includes('src/components/')) {
            return 'ui-components';
          }
          if (
            id.includes('src/data/') ||
            id.includes('src/hooks/')
          ) {
            return 'product-features';
          }
        }
      }
    }
  }
})