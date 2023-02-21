import { copyFile, mkdir } from "node:fs/promises";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

// copy wasm file
await mkdir("./dist/generated/", { recursive: true });
await copyFile("./tmp/yoga.wasm", "./dist/yoga.wasm");

// copy d.ts files
await copyFile("./yoga/javascript/src_js/wrapAsm.d.ts", "./dist/wrapAsm.d.ts");
await copyFile(
  "./yoga/javascript/src_js/generated/YGEnums.d.ts",
  "./dist/generated/YGEnums.d.ts"
);

export default [
  {
    input: ["asm.js", "index.js"],
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins: [
      nodeResolve(),
      commonjs({
        esmExternals: true,
      }),
      terser({ compress: { passes: 2 } })
    ],
  },
];
