import { readFile } from "node:fs/promises";
import initWasm from "..";

export const Yoga = await initWasm(
  await readFile(new URL("../dist/yoga.wasm", import.meta.url))
);
