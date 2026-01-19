import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
   base: mode === 'prod' ? '/repo/' : '/repo/dev/',
  build: {
    outDir: 'dist',   // 👈 永远是 dist
    emptyOutDir: true
  },
  plugins: [react()],
}))
