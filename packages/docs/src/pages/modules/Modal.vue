<template>
  <DocComponent
    title="Modal"
    description="A modal displays content that temporarily blocks interactions with the main view of a site"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import ModalDoc from '@/components/modules/Modal/ModalDoc.vue'
import BasicDoc from '@/components/modules/Modal/BasicDoc.vue'

const docs = [
  {
    id: 'modal',
    label: 'Modal',
    category: 'Types',
    component: ModalDoc,
  },
  {
    id: 'basic',
    label: 'Basic',
    category: 'Types',
    component: BasicDoc,
  },
]
</script>
