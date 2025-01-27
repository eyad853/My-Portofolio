import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/', // Replace 'Portfolio' with your repository name

  plugins: [react()],
})

