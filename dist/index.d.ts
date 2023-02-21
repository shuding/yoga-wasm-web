import type { Yoga } from "./wrapAsm.js";

export * from "./generated/YGEnums.js";
export * from "./wrapAsm.js";

export default function (wasm: ArrayBuffer): Promise<Yoga>;
export function initStreaming(response: Response): Promise<Yoga>;
