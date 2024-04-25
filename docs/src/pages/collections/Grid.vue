<template>
  <DocComponent
    title="Grid"
    description="A grid is used to harmonize negative space in a layout"
    :component-docs="docs"
    :api-docs="api"
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

const api = {
  Grid: {
    props: [
      { name: 'celled', type: 'boolean|string', default: 'false', description: 'A grid can have rows divided into cells.' },
      { name: 'centered', type: 'boolean', default: 'false', description: 'A grid can have its columns centered.' },
      { name: 'columns', type: 'number|string', default: 'undefined', description: 'Represents column count per row in Grid.' },
      { name: 'container', type: 'boolean', default: 'false', description: 'A grid can be combined with a container to use the available layout and alignment.' },
      { name: 'divided', type: 'boolean|string', default: 'false', description: 'A grid can have dividers between its columns.' },
      { name: 'doubling', type: 'boolean', default: 'false', description: 'A grid can double its column width on tablet and mobile sizes.' },
      { name: 'inverted', type: 'boolean', default: 'false', description: 'A grid\'s colors can be inverted.' },
      { name: 'padded', type: 'boolean|string', default: 'false', description: 'A grid can preserve its vertical and horizontal gutters on first and last columns.' },
      { name: 'relaxed', type: 'boolean|string', default: 'false', description: 'A grid can increase its gutters to allow for more negative space.' },
      { name: 'reversed', type: 'string', default: 'undefined', description: 'A grid can specify that its columns should reverse order at different device sizes.' },
      { name: 'stackable', type: 'boolean', default: 'false', description: 'A grid can have its columns stack on-top of each other after reaching mobile breakpoints.' },
      { name: 'stretched', type: 'boolean', default: 'false', description: 'A grid can stretch its contents to take up the entire grid height.' },
      { name: 'textAlign', type: 'string', default: 'undefined', description: 'A grid can specify its text alignment.' },
      { name: 'verticalAlign', type: 'string', default: 'undefined', description: 'A grid can specify its vertical alignment to have all its columns vertically centered.' },
    ]
  },
  GridRow: {
    props: [
      { name: 'centered', type: 'boolean', default: 'false', description: 'A row can have its columns centered.' },
      { name: 'color', type: 'string', default: 'undefined', description: 'A grid row can be colored. ' },
      { name: 'divided', type: 'boolean', default: 'false', description: 'A row can have dividers between its columns.' },
      { name: 'only', type: 'string', default: 'undefined', description: 'A row can appear only for a specific device, or screen sizes.' },
      { name: 'reversed', type: 'string', default: 'undefined', description: 'A row can specify that its columns should reverse order at different device sizes.' },
      { name: 'stretched', type: 'boolean', default: 'false', description: 'A row can stretch its contents to take up the entire column height.' },
      { name: 'textAlign', type: 'string', default: 'undefined', description: 'A row can specify its text alignment. ' },
      { name: 'verticalAlign', type: 'string', default: 'undefined', description: 'A row can specify its vertical alignment to have all its columns vertically centered. ' }
    ]
  },
  GridColumn: {
    props: [
      { name: 'color', type: 'string', default: 'undefined', description: 'A grid column can be colored. ' },
      { name: 'computer', type: 'number', default: 'undefined', description: 'A column can specify a width for a computer.' },
      { name: 'floated', type: 'string', default: 'undefined', description: 'A column can sit flush against the left or right edge of a row. ' },
      { name: 'largeScreen', type: 'number', default: 'undefined', description: 'A column can specify a width for a large screen device.' },
      { name: 'mobile', type: 'number', default: 'undefined', description: 'A column can specify a width for a mobile device.' },
      { name: 'only', type: 'string', default: 'undefined', description: 'A column can appear only for a specific device, or screen sizes.' },
      { name: 'stretched', type: 'boolean', default: 'false', description: 'A column can stretch its contents to take up the entire grid or row height.' },
      { name: 'tablet', type: 'number', default: 'undefined', description: 'A column can specify a width for a tablet device.' },
      { name: 'textAlign', type: 'string', default: 'undefined', description: 'A column can specify its text alignment. ' },
      { name: 'verticalAlign', type: 'string', default: 'undefined', description: 'A column can specify its vertical alignment to have all its columns vertically centered. ' },
      { name: 'widescreen', type: 'number', default: 'undefined', description: 'A column can specify a width for a wide screen device.' },
      { name: 'width', type: 'number', default: 'undefined', description: 'Represents width of column.' }
    ]
  }
}
</script>
