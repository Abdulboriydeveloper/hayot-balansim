import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Chunk splitting — vendor alohida keshlanadi
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Kichikroq build
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,   // console.log olib tashlanadi
        drop_debugger: true,
      },
    },
    // Rasmlarni inline qilmaslik (katta fayllar)
    assetsInlineLimit: 4096,
    // CSS code splitting
    cssCodeSplit: true,
  },
})