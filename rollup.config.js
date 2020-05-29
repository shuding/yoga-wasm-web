import sucrase from '@rollup/plugin-sucrase';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'yoga/javascript/sources/entry-common.js',
    output: [
      {
        file: 'dist/entry.js',
        format: 'esm',
      },
    ],
    plugins: [
      sucrase({
        transforms: ['flow'],
      }),
      commonjs(),
    ],
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.umd.js',
        format: 'iife',
        name: 'Yoga'
      },
    ],
    plugins: [
      babel({
        babelrc: false,
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
      }),
    ],
  },
];
