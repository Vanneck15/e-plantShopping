import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Utilisation d'un chemin relatif pour éviter les erreurs 404
  plugins: [react()],
})