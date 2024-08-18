import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@estilos': path.resolve(__dirname, 'src/styles'),
    },
  },

  server: {
    port: 3000
  }
});
