const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue2');
const vueSvgPlugin = require('vite-plugin-vue2-svg');
const path = require('path');

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [vue(), vueSvgPlugin.createSvgPlugin()],
  build: {
    outDir: './lib',
    minify: true,
    lib: {
      entry: path.resolve(__dirname, '/src/crayon.js'),
      name: 'crayon',
      fileName: format => `crayon.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
        assetFileNames: assetInfo => {
          if (assetInfo.name === 'style.css') return 'crayon.css';
          return assetInfo.name;
        },
        inlineDynamicImports: true,
      },
    },
  },
});
