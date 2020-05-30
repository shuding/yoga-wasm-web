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

function initYoga(filepath?: string): Promise<YogaStatic>

export = initYoga

export default initYoga