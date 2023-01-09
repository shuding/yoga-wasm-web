import { copyFile } from 'node:fs/promises'
import { build } from 'esbuild'
import flow from 'esbuild-plugin-flow'

async function start() {
  const asm = build({
    bundle: true,
    sourcemap: false,
    format: 'esm',
    target: 'esnext',
    loader: {
      '.js': 'ts',
    },
    entryPoints: ['./asm.js'],
    outfile: './dist/asm.js',
    minify: true,
    plugins: [flow(/\.js$/, true)],
  })

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
    plugins: [flow(/\.js$/, true)],
  })

  await copyFile('./tmp/yoga.wasm', './dist/yoga.wasm')
  await asm
}

start()
