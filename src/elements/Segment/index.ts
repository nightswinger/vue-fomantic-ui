import  { App, Plugin } from "vue"
import Segment from "./Segment"
import SegmentGroup from "./SegmentGroup"
import SegmentInline from "./SegmentInline"

export default {
  install(app: App) {
    app.component(Segment.name, Segment)
    app.component(SegmentGroup.name, SegmentGroup)
    app.component(SegmentInline.name, SegmentInline)
  }
} as Plugin

export { Segment, SegmentGroup, SegmentInline }