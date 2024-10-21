<template>
  <DocComponent
    title="Container"
    description="A container limits content to a maximum width"
    :component-docs="docs"
  />

</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import ContainerDoc from '@/components/elements/Container/ContainerDoc.vue'
import TextContainerDoc from '@/components/elements/Container/TextContainerDoc.vue'

// Variations
import TextAlignmentDoc from '@/components/elements/Container/TextAlignmentDoc.vue'
import FluidDoc from '@/components/elements/Container/FluidDoc.vue'

const docs = [
  {
    id: 'container',
    label: 'Container',
    category: 'Types',
    component: ContainerDoc,
  },
  {
    id: 'text-container',
    label: 'Text Container',
    category: 'Types',
    component: TextContainerDoc,
  },
  {
    id: 'text-alignment',
    label: 'Text Alignment',
    category: 'Variations',
    component: TextAlignmentDoc,
  },
  {
    id: 'fluid',
    label: 'Fluid',
    category: 'Variations',
    component: FluidDoc,
  },
]
</script>
