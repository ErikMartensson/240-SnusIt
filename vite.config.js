import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [react(), compression({ algorithms: ['brotliCompress', 'gzip'] })],
})
