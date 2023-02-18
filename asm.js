import wrapAsm from "./yoga/javascript/src_js/wrapAsm.js";
import yoga from "./tmp/yoga-asm.mjs";

export { ALIGN_AUTO } from "./yoga/javascript/src_js/generated/YGEnums.js";

export default function () {
  return wrapAsm(yoga());
}
