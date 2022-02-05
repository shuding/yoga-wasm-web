const path = require('path')
const { build } = require('esbuild')
const flow = require('esbuild-plugin-flow')

build({
  bundle: true,
  sourcemap: false,
  format: 'esm',
  target: 'esnext',
  loader: {
    '.js': 'ts',
  },
  entryPoints: [
    path.join(
      __dirname,
      ...'yoga/javascript/sources/entry-common.js'.split('/')
    ),
  ],
  outfile: path.join(__dirname, 'dist', 'entry.js'),
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
  entryPoints: [path.join(__dirname, 'index.js')],
  outfile: path.join(__dirname, 'dist', 'index.js'),
  external: ['*.wasm', '*.ttf', './entry.js', './yoga.mjs'],
  minify: true,
  plugins: [flow(/\.js$/)],
})
