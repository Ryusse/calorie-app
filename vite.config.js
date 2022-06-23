import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@elements': path.resolve('./src/shared/elements'),
      '@components': path.resolve('./src/shared/components'),
      '@utils': path.resolve('./src/shared/utils'),
      '@hooks': path.resolve('./src/shared/hooks'),
      '@pages': path.resolve('./src/pages'),
    },
  },
});
