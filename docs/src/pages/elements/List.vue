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
import LinkDoc from '@/components/elements/List/LinkDoc.vue'

// Content
import IconDoc from '@/components/elements/List/IconDoc.vue'
import ImageDoc from '@/components/elements/List/ImageDoc.vue'

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
  {
    id: 'link',
    label: 'Link',
    category: 'Types',
    component: LinkDoc,
  },
  {
    id: 'icon',
    label: 'Icon',
    category: 'Content',
    component: IconDoc,
  },
  {
    id: 'image',
    label: 'Image',
    category: 'Content',
    component: ImageDoc,
  },
]
</script>
