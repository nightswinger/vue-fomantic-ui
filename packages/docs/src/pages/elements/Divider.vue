<template>
  <DocComponent
    title="Divider"
    description="A divider visually segments content into groups"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import DividerDoc from '@/components/elements/Divider/DividerDoc.vue'
import VerticalDividerDoc from '@/components/elements/Divider/VerticalDividerDoc.vue'
import HorizontalDividerDoc from '@/components/elements/Divider/HorizontalDividerDoc.vue';
import HorizontalAlignmentDoc from '@/components/elements/Divider/HorizontalAlignmentDoc.vue';

// Variations
import InvertedDoc from '@/components/elements/Divider/InvertedDoc.vue'
import FittedDoc from '@/components/elements/Divider/FittedDoc.vue'
import HiddenDoc from '@/components/elements/Divider/HiddenDoc.vue'
import SectionDoc from '@/components/elements/Divider/SectionDoc.vue'
import ClearingDoc from '@/components/elements/Divider/ClearingDoc.vue'
import SizeDoc from '@/components/elements/Divider/SizeDoc.vue';

const docs = [
  {
    id: 'divider',
    label: 'Divider',
    category: 'Types',
    component: DividerDoc,
  },
  {
    id: 'vertical-divider',
    label: 'Vertical Divider',
    category: 'Types',
    component: VerticalDividerDoc,
  },
  {
    id: 'horizontal-divider',
    label: 'Horizontal Divider',
    category: 'Types',
    component: HorizontalDividerDoc,
  },
  {
    id: 'horizontal-alignment',
    label: 'Horizontal Alignment',
    category: 'Types',
    component: HorizontalAlignmentDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: InvertedDoc,
  },
  {
    id: 'fitted',
    label: 'Fitted',
    category: 'Variations',
    component: FittedDoc,
  },
  {
    id: 'hidden',
    label: 'Hidden',
    category: 'Variations',
    component: HiddenDoc,
  },
  {
    id: 'section',
    label: 'Section',
    category: 'Variations',
    component: SectionDoc,
  },
  {
    id: 'clearing',
    label: 'Clearing',
    category: 'Variations',
    component: ClearingDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
]
</script>
