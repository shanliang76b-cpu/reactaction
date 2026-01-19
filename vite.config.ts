import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => ({
  // base: process.env.VITE_API_BASE || '/',
  base: '/repo/dev/',
  plugins: [react()],
}))
