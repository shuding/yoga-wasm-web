import { build } from 'esbuild'
import flow from 'esbuild-plugin-flow'

build({
  bundle: true,
  sourcemap: false,
  format: 'esm',
  target: 'esnext',
  loader: {
    '.js': 'ts',
  },
  entryPoints: ['./entry/index.js'],
  outfile: './dist/entry.js',
  external: ['*.wasm', '*.ttf'],
  minify: true,
  plugins: [flow(/\.js$/)],
})

build({
  bundle: true,
  sourcemap: false,
  format: 'esm',
  target: 'esnext',
  loader: {
    '.js': 'ts',
  },
  entryPoints: ['./index.js'],
  outfile: './dist/index.js',
  external: ['*.wasm', '*.ttf', './entry.js', './yoga.mjs'],
  minify: true,
  plugins: [flow(/\.js$/)],
})
