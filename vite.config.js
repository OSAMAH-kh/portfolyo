import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages'te site /portfolyo/ alt yolunda yayınlanır; Vercel'de kök dizinde.
export default defineConfig({
  base: process.env.GH_PAGES ? '/portfolyo/' : '/',
  plugins: [react()],
})
