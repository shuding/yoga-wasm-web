import Yoga from "yoga-layout";

export {
  YogaNode,
  YogaConfig,
  YogaAlign,
  YogaDirection,
  YogaDisplay,
  YogaEdge,
  YogaFlexDirection,
  YogaExperimentalFeature,
  YogaFlexWrap,
  YogaJustifyContent,
  YogaOverflow,
  YogaPositionType,
  YogaUnit,
  YogaMeasureMode,
} from "yoga-layout"

export type YogaStatic = typeof Yoga

export type YogaWasmConfig = {
  dir?: string
  wasm?: string
  asm?: string
}

export default function init(config?: YogaWasmConfig): Promise<YogaStatic>