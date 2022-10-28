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
    entryPoints: ['./entry/index.js'],
    outfile: './dist/entry.js',
    external: ['*.wasm'],
    minify: true,
    plugins: [flow(/\.js$/)],
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
    external: ['*.wasm', './entry.js', './yoga.mjs'],
    minify: true,
    plugins: [flow(/\.js$/)],
  })
}

start()
