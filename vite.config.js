import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/e-plantShopping/", // Indique à GitHub Pages de chercher dans le bon dépôt
  plugins: [react()],
})