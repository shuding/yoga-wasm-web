import { Config } from 'yoga-layout';
import { default as default_2 } from 'yoga-layout';
import { DirtiedFunction } from 'yoga-layout';
import { MeasureFunction } from 'yoga-layout';
import { Node as Node_2 } from 'yoga-layout';

export { Config }

export { DirtiedFunction }

/**
 * Initialize Yoga with streaming WebAssembly instantiation
 * @param response - Response or Promise<Response> containing WASM data
 * @returns Promise<Yoga> - Initialized Yoga instance
 */
export declare function initStreaming(response: Response | Promise<Response>): Promise<typeof default_2>;

/**
 * Initialize Yoga with a WebAssembly module or buffer
 * @param wasm - WebAssembly.Module or ArrayBuffer containing the WASM binary
 * @returns Promise<Yoga> - Initialized Yoga instance
 */
export declare function initYoga(wasm: ArrayBuffer | WebAssembly.Module): Promise<typeof default_2>;

export { MeasureFunction }

export { Node_2 as Node }


export * from "yoga-layout";

export { }
