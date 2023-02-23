import { readFile } from "node:fs/promises";
import process from "node:process";

import initWasm from "../dist/index.js";
import initAsm from "../dist/asm.js";

export const Yoga = process.env.ASM
  ? initAsm()
  : await initWasm(
      await readFile(new URL("../dist/yoga.wasm", import.meta.url))
    );
