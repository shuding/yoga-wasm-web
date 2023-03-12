import initYoga from "./index.js";

const Yoga = await initYoga(
  await fetch(new URL("./yoga.wasm", import.meta.url)).then((res) =>
    res.arrayBuffer()
  )
);

export * from "./yoga/javascript/src_js/generated/YGEnums.js";
export default Yoga;
