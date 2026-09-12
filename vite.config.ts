import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Nombre del repo en GitHub Pages -> https://<usuario>.github.io/kaffeina-brunch-y-specialty-coffee-el-carmen/
const BASE = process.env.VITE_BASE ?? '/kaffeina-brunch-y-specialty-coffee-el-carmen/'

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss()],
})
