import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    // Si on build (deploy), on utilise le sous-dossier GitHub, sinon en local on utilise la racine /
    base: command === 'build' ? '/e-plantShopping/' : '/',
    plugins: [react()],
  }
})