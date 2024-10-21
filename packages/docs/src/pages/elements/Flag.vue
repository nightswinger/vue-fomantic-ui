<template>
  <DocComponent
    title="Flag"
    description="A flag is used to represent a political state"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import SizeDoc from '@/components/elements/Flag/SizeDoc.vue'
import AutosizingDoc from '@/components/elements/Flag/AutosizingDoc.vue'

const docs = [
  {
    id: 'size',
    label: 'Size',
    category: 'Types',
    component: SizeDoc,
  },
  {
    id: 'autosizing',
    label: 'Autosizing',
    category: 'Types',
    component: AutosizingDoc,
  },
]
</script>
