<template>
  <DocComponent
    title="Message"
    description="A message displays information that explains nearby content"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import MessageDoc from '@/components/collections/Message/MessageDoc.vue'

const docs = [
  {
    id: 'message',
    label: 'Message',
    category: 'Types',
    component: MessageDoc,
  }
]
</script>
