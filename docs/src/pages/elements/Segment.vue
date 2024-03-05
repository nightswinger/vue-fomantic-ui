<template>
  <DocComponent
    title="Segment"
    description="A segment is used to create a grouping of related content"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import SegmentDoc from '@/components/elements/Segment/SegmentDoc.vue'
import PlaceholderSegmentDoc from '@/components/elements/Segment/PlaceholderSegmentDoc.vue'
import RaisedDoc from '@/components/elements/Segment/RaisedDoc.vue'
import StackedDoc from '@/components/elements/Segment/StackedDoc.vue'
import PiledDoc from '@/components/elements/Segment/PiledDoc.vue'
import VerticalSegmentDoc from '@/components/elements/Segment/VerticalSegmentDoc.vue'

// Groups
import SegmentsDoc from '@/components/elements/Segment/SegmentsDoc.vue'
import NestedSegmentsDoc from '@/components/elements/Segment/NestedSegmentsDoc.vue'
import HorizontalSegmentsDoc from '@/components/elements/Segment/HorizontalSegmentsDoc.vue'
import HorizontalEqualWidthSegmentsDoc from '@/components/elements/Segment/HorizontalEqualWidthSegmentsDoc.vue'
import HorizontalWrappingSegmentsDoc from '@/components/elements/Segment/HorizontalWrappingSegmentsDoc.vue'
import RaisedSegmentsDoc from '@/components/elements/Segment/RaisedSegmentsDoc.vue'
import StackedSegmentsDoc from '@/components/elements/Segment/StackedSegmentsDoc.vue'
import PiledSegmentsDoc from '@/components/elements/Segment/PiledSegmentsDoc.vue'

// States
import DisabledDoc from '@/components/elements/Segment/DisabledDoc.vue'
import LoadingDoc from '@/components/elements/Segment/LoadingDoc.vue'

// Variations
import InvertedDoc from '@/components/elements/Segment/InvertedDoc.vue'
import AttachedDoc from '@/components/elements/Segment/AttachedDoc.vue'
import PaddedDoc from '@/components/elements/Segment/PaddedDoc.vue'
import FittedDoc from '@/components/elements/Segment/FittedDoc.vue'
import CompactDoc from '@/components/elements/Segment/CompactDoc.vue'
import ColoredDoc from '@/components/elements/Segment/ColoredDoc.vue'
import EmphasisDoc from '@/components/elements/Segment/EmphasisDoc.vue'
import CircularDoc from '@/components/elements/Segment/CircularDoc.vue'
import ClearingDoc from '@/components/elements/Segment/ClearingDoc.vue'
import FloatedDoc from '@/components/elements/Segment/FloatedDoc.vue'
import TextAlignmentDoc from '@/components/elements/Segment/TextAlignmentDoc.vue'
import BasicDoc from '@/components/elements/Segment/BasicDoc.vue'
import SizeDoc from '@/components/elements/Segment/SizeDoc.vue'

const docs = [
  {
    id: 'segment',
    label: 'Segment',
    category: 'Types',
    component: SegmentDoc,
  },
  {
    id: 'placeholder-segment',
    label: 'Placeholder Segment',
    category: 'Types',
    component: PlaceholderSegmentDoc,
  },
  {
    id: 'raised',
    label: 'Raised',
    category: 'Types',
    component: RaisedDoc,
  },
  {
    id: 'stacked',
    label: 'Stacked',
    category: 'Types',
    component: StackedDoc,
  },
  {
    id: 'piled',
    label: 'Piled',
    category: 'Types',
    component: PiledDoc,
  },
  {
    id: 'vertical-segment',
    label: 'Vertical Segment',
    category: 'Types',
    component: VerticalSegmentDoc,
  },
  {
    id: 'segments',
    label: 'Segments',
    category: 'Groups',
    component: SegmentsDoc,
  },
  {
    id: 'nested-segments',
    label: 'Nested Segments',
    category: 'Groups',
    component: NestedSegmentsDoc,
  },
  {
    id: 'horizontal-segments',
    label: 'Horizontal Segments',
    category: 'Groups',
    component: HorizontalSegmentsDoc,
  },
  {
    id: 'horizontal-equal-width-segments',
    label: 'Horizontal equal width Segments',
    category: 'Groups',
    component: HorizontalEqualWidthSegmentsDoc,
  },
  {
    id: 'horizontal-wrapping-segments',
    label: 'Horizontal wrapping Segments',
    category: 'Groups',
    component: HorizontalWrappingSegmentsDoc,
  },
  {
    id: 'raised-segments',
    label: 'Raised Segments',
    category: 'Groups',
    component: RaisedSegmentsDoc,
  },
  {
    id: 'stacked-segments',
    label: 'Stacked Segments',
    category: 'Groups',
    component: StackedSegmentsDoc,
  },
  {
    id: 'piled-segments',
    label: 'Piled Segments',
    category: 'Groups',
    component: PiledSegmentsDoc,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
  {
    id: 'loading',
    label: 'Loading',
    category: 'States',
    component: LoadingDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: InvertedDoc,
  },
  {
    id: 'attached',
    label: 'Attached',
    category: 'Variations',
    component: AttachedDoc,
  },
  {
    id: 'padded',
    label: 'Padded',
    category: 'Variations',
    component: PaddedDoc,
  },
  {
    id: 'fitted',
    label: 'Fitted',
    category: 'Variations',
    component: FittedDoc,
  },
  {
    id: 'compact',
    label: 'Compact',
    category: 'Variations',
    component: CompactDoc,
  },
  {
    id: 'colored',
    label: 'Colored',
    category: 'Variations',
    component: ColoredDoc,
  },
  {
    id: 'emphasis',
    label: 'Emphasis',
    category: 'Variations',
    component: EmphasisDoc,
  },
  {
    id: 'circular',
    label: 'Circular',
    category: 'Variations',
    component: CircularDoc,
  },
  {
    id: 'clearing',
    label: 'Clearing',
    category: 'Variations',
    component: ClearingDoc,
  },
  {
    id: 'floated',
    label: 'Floated',
    category: 'Variations',
    component: FloatedDoc,
  },
  {
    id: 'text-alignment',
    label: 'Text Alignment',
    category: 'Variations',
    component: TextAlignmentDoc,
  },
  {
    id: 'basic',
    label: 'Basic',
    category: 'Variations',
    component: BasicDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
]
</script>
