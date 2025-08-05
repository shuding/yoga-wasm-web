import { expectTypeOf, test } from "vitest";
import { readFile } from "node:fs/promises";
import type { Yoga } from "../dist/index.js";
import loadYoga from "../dist/index.js";

test("types", async () => {  
  const bin = await readFile(new URL("../dist/yoga.wasm", import.meta.url));
  expectTypeOf(loadYoga(bin)).toExtend<Promise<Yoga>>();
  expectTypeOf(await loadYoga(bin)).not.toMatchObjectType<any>();
});
