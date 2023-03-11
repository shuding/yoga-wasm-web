import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import initYoga from "./index.js";

const Yoga = await initYoga(
  await readFile(createRequire(import.meta.url).resolve("./yoga.wasm"))
);

export * from "./yoga/javascript/src_js/generated/YGEnums.js";
export default Yoga;
