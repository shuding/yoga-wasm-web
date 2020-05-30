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

export type YogaWasm = {
  init(filepath?: string): Promise<YogaWasm>
} & YogaStatic

const mod: YogaWasm

export default mod