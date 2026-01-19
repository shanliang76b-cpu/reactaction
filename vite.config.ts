import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => ({
  base: process.env.VITE_BASE_PATH || '/',
  build: {
    outDir: 'dist',   // 👈 永远是 dist
    emptyOutDir: true
  },
  plugins: [react()],
}))
