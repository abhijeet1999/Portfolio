import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For GitHub Pages: Set VITE_BASE_PATH environment variable
// If your repo is username.github.io, set VITE_BASE_PATH=/
// Otherwise, set VITE_BASE_PATH=/repository-name/
// Default: /Portfolio/ for production, / for development
const basePath = process.env.VITE_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/')

export default defineConfig({
  plugins: [react()],
  base: basePath,
  server: {
    port: 5173, // Different port from default
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})


