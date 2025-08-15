import { expectTypeOf, test } from "vitest";
import type { Yoga } from "../yoga/javascript/src/wrapAssembly.ts";
import { initYoga } from "../dist/index.js";

test("types", async () => {
  type initYogaReturnType = ReturnType<typeof initYoga>;
  expectTypeOf<initYogaReturnType>().toExtend<Promise<Yoga>>();
});
