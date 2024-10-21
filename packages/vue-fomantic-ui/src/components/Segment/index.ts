import  { App, Plugin } from "vue"
import Segment from "./Segment"
import SegmentGroup from "./SegmentGroup"
import SegmentInline from "./SegmentInline"

export default {
  install(app: App) {
    app.component('SuiSegment', Segment)
    app.component('SuiSegmentGroup', SegmentGroup)
    app.component('SuiSegmentInline', SegmentInline)
  }
} as Plugin

export { Segment, SegmentGroup, SegmentInline }