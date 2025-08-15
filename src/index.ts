import wrapAssembly from "../yoga/javascript/src/wrapAssembly.ts";
import loadYoga from "./yoga_generated/yoga.mjs";
import type YogaLayout from 'yoga-layout';

export type {
  Config,
  DirtiedFunction,
  MeasureFunction,
  Node,
} from 'yoga-layout';

export * from 'yoga-layout';

/**
 * Initialize Yoga with a WebAssembly module or buffer
 * @param wasm - WebAssembly.Module or ArrayBuffer containing the WASM binary
 * @returns Promise<Yoga> - Initialized Yoga instance
 */
export async function initYoga(wasm: ArrayBuffer | WebAssembly.Module): Promise<typeof YogaLayout> {
  const mod = await loadYoga({
    instantiateWasm(info: WebAssembly.Imports, receive: (instance: WebAssembly.Instance) => void) {
      WebAssembly.instantiate(wasm, info).then((result) => {
        if (result instanceof WebAssembly.Instance) {
          receive(result);
        } else {
          receive((result as WebAssembly.WebAssemblyInstantiatedSource).instance);
        }
      });
    },
  });
  return wrapAssembly(mod);
}

/**
 * Initialize Yoga with streaming WebAssembly instantiation
 * @param response - Response or Promise<Response> containing WASM data
 * @returns Promise<Yoga> - Initialized Yoga instance
 */
export async function initStreaming(response: Response | Promise<Response>): Promise<typeof YogaLayout> {
  const mod = await loadYoga({
    instantiateWasm(info: WebAssembly.Imports, receive: (instance: WebAssembly.Instance) => void) {
      WebAssembly.instantiateStreaming(response, info).then(({ instance }) => {
        receive(instance);
      });
    },
  });
  return wrapAssembly(mod);
}
