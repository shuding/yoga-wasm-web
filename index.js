import wrapAsm from "./yoga/javascript/src/wrapAssembly.js";
import loadYoga from "./tmp/yoga.mjs";

export * from "./yoga/javascript/src/generated/YGEnums.js";

export default async function (wasm) {
  const mod = await loadYoga({
    instantiateWasm(info, receive) {
      WebAssembly.instantiate(wasm, info).then((instance) => {
        if (instance instanceof WebAssembly.Instance) {
          receive(instance);
        } else {
          receive(instance.instance);
        }
      });
    },
  });
  return wrapAsm(mod);
}

export async function initStreaming(response) {
  const mod = await loadYoga({
    instantiateWasm(info, receive) {
      WebAssembly.instantiateStreaming(response, info).then(({ instance }) => {
        receive(instance);
      });
    },
  });
  return wrapAsm(mod);
}
