import wrapAsm from "#yoga/wrapAssembly.ts";
import loadYoga from "./yoga_generated/yoga.mjs";

export * from "#yoga/generated/YGEnums.ts";

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
