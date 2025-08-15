import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { copyFileSync, mkdirSync } from 'fs'

export default defineConfig({
  plugins: [
    dts({
      outDir: 'dist',
      include: ['src/index.ts'],
      exclude: ['src/yoga_generated/**'],
      insertTypesEntry: true,
      rollupTypes: true,
    }),
    {
      name: 'copy-wasm-files',
      generateBundle() {
        // Copy WASM files to dist folder
        mkdirSync('./dist/yoga_generated', { recursive: true })
        copyFileSync('./src/yoga_generated/yoga.wasm', './dist/yoga.wasm')
      }
    }
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'YogaWasmWeb',
      fileName: 'index',
      formats: ['es'],
    },
    sourcemap: true,
    minify: false,
  },
  assetsInclude: ['**/*.wasm'],
})
