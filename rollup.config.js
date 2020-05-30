import sucrase from '@rollup/plugin-sucrase';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
  {
    input: 'yoga/javascript/sources/entry-common.js',
    output: [
      {
        file: 'build/entry.js',
        format: 'esm',
      },
    ],
    plugins: [
      sucrase({
        transforms: ['flow'],
      }),
      commonjs(),
      copy({
        targets: [
          { src: 'build/yoga.wasm', dest: 'dist/' },
          { src: 'build/yoga.wasm.js', dest: 'dist/' },
        ],
      }),
    ],
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: 'dist/index.umd.js',
        format: 'iife',
        name: 'Yoga',
      },
    ],
    plugins: [
      babel({
        babelrc: false,
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
      }),
      terser(),
    ],
  },
  {
    input: 'src/asm.js',
    output: [
      {
        file: 'asm.js',
        format: 'cjs',
      },
      {
        file: 'dist/asm.umd.js',
        format: 'iife',
        name: 'Yoga',
      },
    ],
    plugins: [
      babel({
        babelrc: false,
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
      }),
      terser(),
    ],
  },
];
