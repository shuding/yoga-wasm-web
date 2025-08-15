import { readFile } from "node:fs/promises";
import { initYoga } from "../dist/index.js";

export const Yoga = await initYoga(
  await readFile(new URL("../dist/yoga.wasm", import.meta.url))
);
