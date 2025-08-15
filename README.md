# yoga-wasm-web

[Yoga](https://github.com/facebook/yoga) v3.2.1 compiled to WebAssembly for universal usage across Node.js, browsers, and edge runtimes.

## Installation

```sh
npm install yoga-wasm-web
```

## Usage

This library provides a universal `initYoga` function. You provide the WASM binary however you obtain it:

### Node.js

```js
import { readFile } from 'node:fs/promises';
import { initYoga } from 'yoga-wasm-web';

const wasmBuffer = await readFile('./node_modules/yoga-wasm-web/dist/yoga.wasm');
const Yoga = await initYoga(wasmBuffer);

const node = Yoga.Node.create();
node.setWidth(100);
node.setHeight(50);
node.setAlignContent(Yoga.ALIGN_CENTER);
node.calculateLayout();

console.log(node.getComputedLayout());
node.free(); // Clean up memory
```

### Browser

```js
import { initYoga, initStreaming } from 'yoga-wasm-web';

// Method 1: Fetch and load
const response = await fetch('/node_modules/yoga-wasm-web/dist/yoga.wasm');
const wasmBuffer = await response.arrayBuffer();
const Yoga = await initYoga(wasmBuffer);

// Method 2: Streaming (recommended for large files)
const response = fetch('/path/to/yoga.wasm');
const Yoga = await initStreaming(response);
```

### Edge Runtimes (Cloudflare Workers, Vercel Edge)

```js
import { initYoga } from 'yoga-wasm-web';
import wasmModule from 'yoga-wasm-web/yoga.wasm';

const Yoga = await initYoga(wasmModule);
// Use Yoga for layout calculations...
```

## API

- `initYoga(wasm: ArrayBuffer | WebAssembly.Module): Promise<Yoga>`
- `initStreaming(response: Response | Promise<Response>): Promise<Yoga>`

The returned Yoga instance provides the complete [Yoga Layout API](https://yogalayout.com/). Remember to call `node.free()` or `node.freeRecursive()` to clean up memory.

## Development

To develop this project locally:

1. Clone the repository and fetch the yoga submodule:
   ```sh
   git clone --recursive https://github.com/shuding/yoga-wasm-web.git
   cd yoga-wasm-web
   ```

2. Install Emscripten (required for compiling to WebAssembly):
   ```sh
   ./setup-emscripten.sh
   source ./emsdk/emsdk_env.sh
   ```

3. Install dependencies:
   ```sh
   pnpm install
   ```

4. Build the project:
   ```sh
   pnpm build-yoga  # Compile Yoga to WASM
   pnpm build       # Build the library
   ```

5. Run tests:
   ```sh
   pnpm test
   ```

## Files Structure

- `dist/index.js` - Main library entry point
- `dist/index.d.ts` - TypeScript definitions
- `dist/yoga.wasm` - Compiled Yoga WebAssembly binary
- `src/index.ts` - Library source code
- `yoga/` - Yoga layout submodule (C++ source)

## Acknowledgements

This project was started as an **opinionated** fork from [pinqy520/yoga-layout-wasm](https://github.com/pinqy520/yoga-layout-wasm) and has been updated to Yoga Layout v3.2.1 with modern build tooling.
