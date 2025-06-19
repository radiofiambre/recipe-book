import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  
  return {
    plugins: [react()],
    
    // Base para GitHub Pages - cambia 'nombre-de-tu-repositorio' por el tuyo
    base: isProduction ? '/nombre-de-tu-repositorio/' : '/',
    
    // Configuración para build
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
    
    // Configuración del servidor de desarrollo
    server: {
      port: 3000,
      open: true,
    },
    
    // Configuración para preview
    preview: {
      port: 4173,
    }
  }
})