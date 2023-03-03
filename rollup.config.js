import { copyFile, readFile, writeFile, mkdir } from "node:fs/promises";
import { minify, defineRollupSwcMinifyOption } from "rollup-plugin-swc3";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

// copy wasm file
await mkdir("./dist/generated/", { recursive: true });
await copyFile("./tmp/yoga.wasm", "./dist/yoga.wasm");

// copy d.ts files
let wrapAsm = await readFile("./yoga/javascript/src_js/wrapAsm.d.ts");
wrapAsm = wrapAsm.toString().replace(/\.\/generated\/YGEnums/g, './generated/YGEnums.js')
await writeFile("./dist/wrapAsm.d.ts", wrapAsm)

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
      minify(defineRollupSwcMinifyOption({
        compress: { passes: 2 }
      }))
    ],
  },
];
