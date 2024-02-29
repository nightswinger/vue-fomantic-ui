<template>
  <DocComponent
    title="Input"
    description="An input is a field used to elicit a response from a user"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import ListDoc from '@/components/elements/List/ListDoc.vue'
import BulletedDoc from '@/components/elements/List/BulletedDoc.vue'
import OrderedDoc from '@/components/elements/List/OrderedDoc.vue'

const docs = [
  {
    id: 'list',
    label: 'List',
    category: 'Types',
    component: ListDoc,
  },
  {
    id: 'bulleted',
    label: 'Bulleted',
    category: 'Types',
    component: BulletedDoc,
  },
  {
    id: 'ordered',
    label: 'Ordered',
    category: 'Types',
    component: OrderedDoc,
  },
]
</script>
