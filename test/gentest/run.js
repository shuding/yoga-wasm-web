import { run as jscodeshift } from "jscodeshift/src/Runner.js";
import { fileURLToPath } from "node:url";
import { copyFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const OUT_DIR = fileURLToPath(new URL("..", import.meta.url));
const DIR = fileURLToPath(
  new URL("../../yoga/javascript/tests/Facebook.Yoga", import.meta.url)
);

const files = (
  await Promise.allSettled(
    (
      await readdir(DIR)
    ).map(async (filename) => {
      const newDir = join(
        OUT_DIR,
        filename.includes("Test")
          ? filename.replace("Test", ".test")
          : filename.replace(".js", ".test.js")
      );
      await copyFile(join(DIR, filename), newDir);
      return newDir;
    })
  )
)
  .filter(({ status }) => status === "fulfilled")
  .map(({ value }) => value);

const transformPath = fileURLToPath(
  new URL("./transform.cjs", import.meta.url)
);

const res = await jscodeshift(transformPath, files, {
  verbose: 1,
  babel: false,
});

console.log(res);
