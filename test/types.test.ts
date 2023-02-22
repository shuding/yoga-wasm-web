import { expectTypeOf, test } from "vitest";
import { readFile } from "node:fs/promises";
import type { Yoga } from "../dist/index.js";
import loadYoga from "../dist/index.js";
import initYoga from "../dist/asm.js";

test("types", async () => {  
  const bin = await readFile(new URL("../dist/yoga.wasm", import.meta.url));
  expectTypeOf(loadYoga(bin)).toMatchTypeOf<Promise<Yoga>>();
  expectTypeOf(await loadYoga(bin)).not.toEqualTypeOf<any>();

  expectTypeOf(initYoga()).toMatchTypeOf<Yoga>();
});
