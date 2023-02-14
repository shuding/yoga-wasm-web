import { readFile } from "node:fs/promises";
import process from "node:process";

import initWasm from "../dist";
// for some reason Vite doesn't use export maps here, and resolves to source code
import initAsm from "../dist/asm";

export const Yoga = process.env.ASM
  ? initAsm()
  : await initWasm(
      await readFile(new URL("../dist/yoga.wasm", import.meta.url))
    );
