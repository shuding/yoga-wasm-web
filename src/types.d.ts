declare module "*.mjs" {
  const content: any;
  export default content;
}

declare module "*.wasm" {
  const wasmModule: WebAssembly.Module;
  export default wasmModule;
}
declare module "*.wasm?url" {
  const content: string;
  export default content;
}
