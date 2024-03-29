<template>
  <DocComponent
    title="Table"
    description="A table displays a collections of data grouped into rows"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import TableDoc from '@/components/collections/Table/TableDoc.vue'
import DefinitionDoc from '@/components/collections/Table/DefinitionDoc.vue'
import StructuredDoc from '@/components/collections/Table/StructuredDoc.vue'

// States
import PositiveNegativeDoc from '@/components/collections/Table/PositiveNegativeDoc.vue'
import ErrorDoc from '@/components/collections/Table/ErrorDoc.vue'
import WarningDoc from '@/components/collections/Table/WarningDoc.vue'
import ActiveDoc from '@/components/collections/Table/ActiveDoc.vue'
import DisabledDoc from '@/components/collections/Table/DisabledDoc.vue'
import ColoredCellsDoc from '@/components/collections/Table/ColoredCellsDoc.vue'
import MarkedDoc from '@/components/collections/Table/MarkedDoc.vue'

// Variations
import SingleLineDoc from '@/components/collections/Table/SingleLineDoc.vue'
import FixedDoc from '@/components/collections/Table/FixedDoc.vue'
import FixedSingleLineDoc from '@/components/collections/Table/FixedSingleLineDoc.vue'
import StackingDoc from '@/components/collections/Table/StackingDoc.vue'
import SelectableRowDoc from '@/components/collections/Table/SelectableRowDoc.vue'
import SelectableRowInvertedDoc from '@/components/collections/Table/SelectableRowInvertedDoc.vue'
import SelectableCellDoc from '@/components/collections/Table/SelectableCellDoc.vue'
import VerticalAlignmentDoc from '@/components/collections/Table/VerticalAlignmentDoc.vue'
import TextAlignmentDoc from '@/components/collections/Table/TextAlignmentDoc.vue'
import StripedDoc from '@/components/collections/Table/StripedDoc.vue'
import CelledDoc from '@/components/collections/Table/CelledDoc.vue'
import BasicDoc from '@/components/collections/Table/BasicDoc.vue'
import BasicVeryDoc from '@/components/collections/Table/BasicVeryDoc.vue'
import CollapsingCellDoc from '@/components/collections/Table/CollapsingCellDoc.vue'
import ColumnCountDoc from '@/components/collections/Table/ColumnCountDoc.vue'
import CollapsingDoc from '@/components/collections/Table/CollapsingDoc.vue'
import ColoredDoc from '@/components/collections/Table/ColoredDoc.vue'
import InvertedDoc from '@/components/collections/Table/InvertedDoc.vue'
import InvertedColoredDoc from '@/components/collections/Table/InvertedColoredDoc.vue'
import PaddedDoc from '@/components/collections/Table/PaddedDoc.vue'
import PaddedVeryDoc from '@/components/collections/Table/PaddedVeryDoc.vue'
import CompactDoc from '@/components/collections/Table/CompactDoc.vue'
import CompactVeryDoc from '@/components/collections/Table/CompactVeryDoc.vue'
import SizeDoc from '@/components/collections/Table/SizeDoc.vue'
import SizeLargeDoc from '@/components/collections/Table/SizeLargeDoc.vue'
import ScrollingDoc from '@/components/collections/Table/ScrollingDoc.vue'
import ScrollingLongDoc from '@/components/collections/Table/ScrollingLongDoc.vue'

const docs = [
  {
    id: 'table',
    label: 'Table',
    category: 'Types',
    component: TableDoc,
  },
  {
    id: 'definition',
    label: 'Definition',
    category: 'Types',
    component: DefinitionDoc,
  },
  {
    id: 'structured',
    label: 'Structured',
    category: 'Types',
    component: StructuredDoc,
  },
  {
    id: 'positive-negative',
    label: 'Positive / Negative',
    category: 'States',
    component: PositiveNegativeDoc,
  },
  {
    id: 'error',
    label: 'Error',
    category: 'States',
    component: ErrorDoc,
  },
  {
    id: 'warning',
    label: 'Warning',
    category: 'States',
    component: WarningDoc,
  },
  {
    id: 'active',
    label: 'Active',
    category: 'States',
    component: ActiveDoc,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
  {
    id: 'colored-cells',
    label: 'Colored Cells',
    category: 'States',
    component: ColoredCellsDoc,
  },
  {
    id: 'marked',
    label: 'Marked',
    category: 'States',
    component: MarkedDoc,
  },
  {
    id: 'single-line',
    label: 'Single Line',
    category: 'Variations',
    component: SingleLineDoc,
  },
  {
    id: 'fixed',
    label: 'Fixed',
    category: 'Variations',
    component: [FixedDoc, FixedSingleLineDoc],
  },
  {
    id: 'stacking',
    label: 'Stacking',
    category: 'Variations',
    component: StackingDoc,
  },
  {
    id: 'selectable-row',
    label: 'Selectable Row',
    category: 'Variations',
    component: [SelectableRowDoc, SelectableRowInvertedDoc],
  },
  {
    id: 'selectable-cell',
    label: 'Selectable Cell',
    category: 'Variations',
    component: SelectableCellDoc,
  },
  {
    id: 'vertical-alignment',
    label: 'Vertical Alignment',
    category: 'Variations',
    component: VerticalAlignmentDoc,
  },
  {
    id: 'text-alignment',
    label: 'Text Alignment',
    category: 'Variations',
    component: TextAlignmentDoc,
  },
  {
    id: 'striped',
    label: 'Striped',
    category: 'Variations',
    component: StripedDoc,
  },
  {
    id: 'celled',
    label: 'Celled',
    category: 'Variations',
    component: CelledDoc,
  },
  {
    id: 'basic',
    label: 'Basic',
    category: 'Variations',
    component: [BasicDoc, BasicVeryDoc],
  },
  {
    id: 'collapsing-cell',
    label: 'Collapsing Cell',
    category: 'Variations',
    component: CollapsingCellDoc,
  },
  {
    id: 'column-count',
    label: 'Column Count',
    category: 'Variations',
    component: ColumnCountDoc,
  },
  {
    id: 'collapsing',
    label: 'Collapsing',
    category: 'Variations',
    component: CollapsingDoc,
  },
  {
    id: 'colored',
    label: 'Colored',
    category: 'Variations',
    component: ColoredDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: [InvertedDoc, InvertedColoredDoc],
  },
  {
    id: 'padded',
    label: 'Padded',
    category: 'Variations',
    component: [PaddedDoc, PaddedVeryDoc],
  },
  {
    id: 'compact',
    label: 'Compact',
    category: 'Variations',
    component: [CompactDoc, CompactVeryDoc],
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: [SizeDoc, SizeLargeDoc],
  },
  {
    id: 'scrolling',
    label: 'Scrolling',
    category: 'Variations',
    component: [ScrollingDoc, ScrollingLongDoc],
  },
]
</script>
