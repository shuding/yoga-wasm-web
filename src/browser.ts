import initYoga from "./index";

export * from "#yoga/generated/YGEnums.ts";

const Yoga = await initYoga(
  await fetch(new URL("./yoga_generated/yoga.wasm", import.meta.url)).then((res) =>
    res.arrayBuffer()
  )
);

export default Yoga;
