# yoga-wasm-web

[Yoga](https://github.com/facebook/yoga) but in WebAssembly and ASM.js. This is an **opinionated** fork from [pinqy520/yoga-layout-wasm](https://github.com/pinqy520/yoga-layout-wasm) with the following changes:

- Stick to commit eea87c3 of Yoga, which supports `gap`.
- Fix missing `YGMeasureMode` binding.
- Fix missing `YGUnit` binding.
- Set flag `DYNAMIC_EXECUTION=0` for `emcc` to remove `eval` and `Function` executions.
- Set flag `TEXTDECODER=0`.
- Force the `ENVIRONMENT` to be `web`.
- Add `pre.js` to set `document` as `this`.
- Replace Rollup with esbuild for bundling.
- Remove the asm.js build.
- Enable LTO.
- Enable SIMD128.

## Install & Build

To develop this project locally, you need to clone the repo and fetch the yoga submodule first. Also, [emcc](https://emscripten.org/docs/getting_started/downloads.html) is required to build this project too.

After that, install npm dependencies:

```sh
pnpm i
```

And run the build script:

```sh
pnpm build
```

## WASM

To use the WASM build (take Node.js as an example):

```js
import fs from 'fs'
import initYoga from 'yoga-wasm-web'

const yoga = await initYoga(
  fs.readFileSync('./node_modules/yoga-wasm-web/dist/yoga.wasm')
)
```

You can use other ways to provide the WASM binary too.

## ASM.js

To use the ASM.js build:

```js
import initYoga from 'yoga-wasm-web/asm'

const yoga = initYoga()
```
