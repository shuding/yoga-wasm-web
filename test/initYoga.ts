import { readFile } from "node:fs/promises";
import Yoga from "..";

const lib = await Yoga(
  await readFile(new URL("../dist/yoga.wasm", import.meta.url))
);

export default lib;
