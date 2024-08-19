import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import initYoga from "./index.js";

const _require = 
  typeof require === "undefined" 
    ? createRequire(import.meta.url) 
    : require;

const Yoga = await initYoga(
  await readFile(_require.resolve("./yoga.wasm"))
);

export * from "./yoga/javascript/src_js/generated/YGEnums.js";
export default Yoga;
