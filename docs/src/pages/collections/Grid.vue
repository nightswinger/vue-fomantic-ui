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
]
</script>
