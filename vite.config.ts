import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Modern targets stop the CSS minifier from collapsing backdrop-filter
    // into the -webkit- form only, which current Chrome ignores.
    cssTarget: ['chrome111', 'safari16.4', 'firefox115', 'edge111'],
  },
})
