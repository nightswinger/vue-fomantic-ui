<template>
  <DocComponent
    title="Grid"
    description="A grid is used to harmonize negative space in a layout"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import GridDoc from '@/components/collections/Grid/GridDoc.vue'
import DividedDoc from '@/components/collections/Grid/DividedDoc.vue'
import VerticallyDividedDoc from '@/components/collections/Grid/VerticallyDividedDoc.vue'
import CelledDoc from '@/components/collections/Grid/CelledDoc.vue'
import InternallyCelledDoc from '@/components/collections/Grid/InternallyCelledDoc.vue'

// Content
import RowsDoc from '@/components/collections/Grid/RowsDoc.vue'
import ColumnsDoc from '@/components/collections/Grid/ColumnsDoc.vue'

// Variations
import FloatedDoc from '@/components/collections/Grid/FloatedDoc.vue'
import ColumnWidthDoc from '@/components/collections/Grid/ColumnWidthDoc.vue'
import ColumnCountDoc from '@/components/collections/Grid/ColumnCountDoc.vue'
import EqualWidthDoc from '@/components/collections/Grid/EqualWidthDoc.vue'
import StretchedDoc from '@/components/collections/Grid/StretchedDoc.vue'
import PaddedDoc from '@/components/collections/Grid/PaddedDoc.vue'
import RelaxedDoc from '@/components/collections/Grid/RelaxedDoc.vue'
import ColoredDoc from '@/components/collections/Grid/ColoredDoc.vue'
import CenteredDoc from '@/components/collections/Grid/CenteredDoc.vue'
import TextAlignmentDoc from '@/components/collections/Grid/TextAlignmentDoc.vue'
import VerticalAlignmentDoc from '@/components/collections/Grid/VerticalAlignmentDoc.vue'

// Responsive Variations
import DoublingDoc from '@/components/collections/Grid/DoublingDoc.vue'
import StackableDoc from '@/components/collections/Grid/StackableDoc.vue'
import ReversedDoc from '@/components/collections/Grid/ReversedDoc.vue'
import DeviceVisibilityDoc from '@/components/collections/Grid/DeviceVisibilityDoc.vue'
import ResponsiveWidthDoc from '@/components/collections/Grid/ResponsiveWidthDoc.vue'

const docs = [
  {
    id: 'grid',
    label: 'Grid',
    category: 'Types',
    component: GridDoc,
  },
  {
    id: 'divided',
    label: 'Divided',
    category: 'Types',
    component: DividedDoc,
  },
  {
    id: 'vertically-divided',
    label: 'Vertically Divided',
    category: 'Types',
    component: VerticallyDividedDoc,
  },
  {
    id: 'celled',
    label: 'Celled',
    category: 'Types',
    component: CelledDoc,
  },
  {
    id: 'internally-celled',
    label: 'Internally Celled',
    category: 'Types',
    component: InternallyCelledDoc,
  },
  {
    id: 'rows',
    label: 'Rows',
    category: 'Content',
    component: RowsDoc,
  },
  {
    id: 'columns',
    label: 'Columns',
    category: 'Content',
    component: ColumnsDoc,
  },
  {
    id: 'floated',
    label: 'Floated',
    category: 'Variations',
    component: FloatedDoc,
  },
  {
    id: 'column-width',
    label: 'Column Width',
    category: 'Variations',
    component: ColumnWidthDoc,
  },
  {
    id: 'column-count',
    label: 'Column Count',
    category: 'Variations',
    component: ColumnCountDoc,
  },
  {
    id: 'equal-width',
    label: 'Equal Width',
    category: 'Variations',
    component: EqualWidthDoc,
  },
  {
    id: 'stretched',
    label: 'Stretched',
    category: 'Variations',
    component: StretchedDoc,
  },
  {
    id: 'padded',
    label: 'Padded',
    category: 'Variations',
    component: PaddedDoc,
  },
  {
    id: 'relaxed',
    label: 'Relaxed',
    category: 'Variations',
    component: RelaxedDoc,
  },
  {
    id: 'colored',
    label: 'Colored',
    category: 'Variations',
    component: ColoredDoc,
  },
  {
    id: 'centered',
    label: 'Centered',
    category: 'Variations',
    component: CenteredDoc,
  },
  {
    id: 'text-alignment',
    label: 'Text Alignment',
    category: 'Variations',
    component: TextAlignmentDoc,
  },
  {
    id: 'vertical-alignment',
    label: 'Vertical Alignment',
    category: 'Variations',
    component: VerticalAlignmentDoc,
  },
  {
    id: 'doubling',
    label: 'Doubling',
    category: 'Responsive Variations',
    component: DoublingDoc,
  },
  {
    id: 'stackable',
    label: 'Stackable',
    category: 'Responsive Variations',
    component: StackableDoc,
  },
  {
    id: 'reversed',
    label: 'Reversed',
    category: 'Responsive Variations',
    component: ReversedDoc,
  },
  {
    id: 'device-visibility',
    label: 'Device Visibility',
    category: 'Responsive Variations',
    component: DeviceVisibilityDoc,
  },
  {
    id: 'responsive-width',
    label: 'Responsive Width',
    category: 'Responsive Variations',
    component: ResponsiveWidthDoc,
  },
]
</script>
