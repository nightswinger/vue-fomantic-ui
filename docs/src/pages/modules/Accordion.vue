<template>
  <DocComponent
    title="Accordion"
    description="An accordion allows users to toggle the display of sections of content"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import AccordionDoc from '@/components/modules/Accordion/AccordionDoc.vue'
import StyledDoc from '@/components/modules/Accordion/StyledDoc.vue'
import BasicStyledDoc from '@/components/modules/Accordion/BasicStyledDoc.vue'

// Variations
import FluidDoc from '@/components/modules/Accordion/FluidDoc.vue'
import InvertedDoc from '@/components/modules/Accordion/InvertedDoc.vue'
import CompactDoc from '@/components/modules/Accordion/CompactDoc.vue'
import CompactVeryDoc from '@/components/modules/Accordion/CompactVeryDoc.vue'

// Usage
import MultipleDoc from '@/components/modules/Accordion/MultipleDoc.vue'

const docs = [
  {
    id: 'accordion',
    label: 'Accordion',
    category: 'Types',
    component: AccordionDoc
  },
  {
    id: 'styled',
    label: 'Styled',
    category: 'Types',
    component: StyledDoc
  },
  {
    id: 'basic-styled',
    label: 'Basic Styled',
    category: 'Types',
    component: BasicStyledDoc
  },
  {
    id: 'fluid',
    label: 'Fluid',
    category: 'Variations',
    component: FluidDoc
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: InvertedDoc
  },
  {
    id: 'compact',
    label: 'Compact',
    category: 'Variations',
    component: [CompactDoc, CompactVeryDoc]
  },
  {
    id: 'multiple',
    label: 'Multiple',
    category: 'Usage',
    component: MultipleDoc
  }
]
</script>
