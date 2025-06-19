import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "/recipe-book/",
  plugins: [react()],
  base: "/recipe-book/",
  server: {
    watch: {
      usePolling: true,
    },
    open: true,
    historyApiFallback: true,
  }
}));

