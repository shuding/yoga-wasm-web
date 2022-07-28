import { build } from 'esbuild'
import fs from 'node:fs/promises'
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

  // Here a trick to avoid initializing the URL for the wasm file. Doing this
  // because I couldn't find a way to avoid it with emcc.
  // Related issue: https://github.com/emscripten-core/emscripten/issues/12184
  const yoga = await fs.readFile('./dist/yoga.mjs', 'utf8')
  await fs.writeFile(
    './dist/yoga.mjs',
    yoga.replace('new URL("yoga.wasm",import.meta.url)', '""')
  )
}

start()
