import { readFile } from "node:fs/promises";
import process from "node:process";

import initWasm from "..";
import initAsm from "../asm";

export const Yoga = process.env.ASM
  ? initAsm()
  : await initWasm(
      await readFile(new URL("../dist/yoga.wasm", import.meta.url))
    );
