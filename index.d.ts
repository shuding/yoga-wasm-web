import type { Yoga } from "./dist/wrapAsm";

export * from "./dist/generated/YGEnums";
export * from "./dist/wrapAsm";

export default function (wasm: ArrayBuffer): Promise<Yoga>;
export function initStreaming(response: Response): Promise<Yoga>;
