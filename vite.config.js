import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  base: "/portfolio/",
  server: {
    headers: {
      'x-robots-tag': 'index, follow'
    }
  },
  preview: {
    headers: {
      'x-robots-tag': 'index, follow'
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-animation': ['framer-motion'],
          'vendor-lottie': ['@lottiefiles/dotlottie-react'],
          'vendor-text': ['typed.js', 'react-typed', 'react-text-gradients'],
          'vendor-utils': ['react-scroll', 'particles.js']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
