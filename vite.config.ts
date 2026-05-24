import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'StructaUIVue',
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'index.js' : 'index.cjs',
    },
    rollupOptions: {
      external: ['vue', '@structa/ui', '@aravi1008/ui'],
      output: {
        globals: { vue: 'Vue' },
      },
    },
    sourcemap: true,
    minify: false,
  },
  resolve: {
    alias: {
      '@aravi1008/ui-vue-src': resolve(__dirname, '../aravindhan-ui-mat/packages/vue/src'),
    },
  },
});
