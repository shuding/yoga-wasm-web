import { readFile } from "node:fs/promises";
import initYoga from "./index.js";

import yogaFile from './yoga.wasm';

const Yoga = await initYoga(
  await readFile(yogaFile)
);

export * from "../yoga/javascript/src_js/generated/YGEnums.js";
export default Yoga;