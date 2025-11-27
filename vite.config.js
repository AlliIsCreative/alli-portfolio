import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: 'assets/css',
    emptyOutDir: false,
    rollupOptions: {
      input: 'assets/css/style.css',
      output: {
        assetFileNames: 'dist-style.css'
      }
    }
  }
})