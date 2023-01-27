import wrapAsm from "./yoga/javascript/src_js/wrapAsm.js";
import yoga from "./tmp/yoga.mjs";

export default async function (wasm) {
  const mod = await yoga({
    instantiateWasm(info, receive) {
      WebAssembly.instantiate(wasm, info).then(({ instance }) => {
        receive(instance);
      });
    },
  });
  return wrapAsm(mod);
}

export async function initStreaming(response) {
  const mod = await yoga({
    instantiateWasm(info, receive) {
      WebAssembly.instantiateStreaming(response, info).then(({ instance }) => {
        receive(instance);
      });
    },
  });
  return wrapAsm(mod);
}
