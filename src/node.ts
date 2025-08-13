import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import initYoga from "./index";

export * from "#yoga/generated/YGEnums.ts";

const Yoga = await initYoga(
  await readFile(createRequire(import.meta.url).resolve("./yoga_generated/yoga.wasm"))
);

export default Yoga;
