import { copyFile } from 'node:fs/promises'
import { build } from 'esbuild'
import flow from 'esbuild-plugin-flow'

async function start() {
  await build({
    bundle: true,
    sourcemap: false,
    format: 'esm',
    target: 'esnext',
    loader: {
      '.js': 'ts',
    },
    entryPoints: ['./index.js'],
    outfile: './dist/index.js',
    minify: true,
    plugins: [flow(/\.js$/)],
  })

  await copyFile('./tmp/yoga.wasm', './dist/yoga.wasm')
}

start()
