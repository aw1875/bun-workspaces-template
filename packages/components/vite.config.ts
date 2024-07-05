import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import path from 'path';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/components/index.ts'),
      name: '@monorepo-template/components',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [react(), dts({ rollupTypes: true })],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
});
