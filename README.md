# yoga-wasm-web

[Yoga](https://github.com/facebook/yoga) but in WebAssembly. This is an **opinionated** fork from [pinqy520/yoga-layout-wasm](https://github.com/pinqy520/yoga-layout-wasm) with the following changes:

- Set flag `DYNAMIC_EXECUTION=0` for `emcc` to remove `eval` and `Function` executions.
- Set flag `TEXTDECODER=0`.
- Force the `ENVIRONMENT` to be `web`.
- Add `pre.js` to set `document` as `this`.
- Replaced Rollup with esbuild for bundling.
- Removed the asm.js build.
