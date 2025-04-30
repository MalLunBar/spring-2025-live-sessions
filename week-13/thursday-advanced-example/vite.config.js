import react from '@vitejs/plugin-react'
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-styled-components', { displayName: true }]]
      }
    })
  ]
})
