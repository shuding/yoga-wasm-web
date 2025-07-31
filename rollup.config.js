import { copyFile, readFile, writeFile, mkdir } from "node:fs/promises";
import { minify, defineRollupSwcMinifyOption } from "rollup-plugin-swc3";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

// copy wasm file
await mkdir("./dist/generated/", { recursive: true });
await copyFile("./tmp/yoga.wasm", "./dist/yoga.wasm");
await copyFile("./yoga/javascript/src/wrapAssembly.ts", "./dist/wrapAssembly.ts");
await copyFile("./yoga/javascript/src/generated/YGEnums.ts", "./dist/generated/YGEnums.ts");

export default [
  {
    input: ["index.js", "node.js", "browser.js"],
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins: [
      nodeResolve(),
      commonjs({
        esmExternals: true,
      }),
      minify(
        defineRollupSwcMinifyOption({
          compress: { passes: 2 },
        })
      ),
    ],
  },
];
