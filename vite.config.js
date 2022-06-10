import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@elements': path.resolve('./src/shared/elements'),
      '@components': path.resolve('./src/shared/components'),
      '@utils': path.resolve('./src/shared/utils'),
      '@pages': path.resolve('./src/pages'),
    },
  },
})
