<template>
  <DocComponent
    title="Comment"
    description="A comment displays user feedback to site content"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import CommentsDoc from '@/components/views/Comment/CommentsDoc.vue'

// Content
import AvatarDoc from '@/components/views/Comment/AvatarDoc.vue'
import MetadataDoc from '@/components/views/Comment/MetadataDoc.vue'
import ActionsDoc from '@/components/views/Comment/ActionsDoc.vue'

// States
import CollapsedDoc from '@/components/views/Comment/CollapsedDoc.vue'

// Variations
import ThreadedDoc from '@/components/views/Comment/ThreadedDoc.vue'
import MinimalDoc from '@/components/views/Comment/MinimalDoc.vue'
import InvertedDoc from '@/components/views/Comment/InvertedDoc.vue'

const docs = [
  {
    id: 'comments',
    label: 'Comments',
    category: 'Types',
    component: CommentsDoc,
  },
  {
    id: 'avatar',
    label: 'Avatar',
    category: 'Content',
    component: AvatarDoc,
  },
  {
    id: 'metadata',
    label: 'Metadata',
    category: 'Content',
    component: MetadataDoc,
  },
  {
    id: 'actions',
    label: 'Actions',
    category: 'Content',
    component: ActionsDoc,
  },
  {
    id: 'collapsed',
    label: 'Collapsed',
    category: 'States',
    component: CollapsedDoc,
  },
  {
    id: 'threaded',
    label: 'Threaded',
    category: 'Variations',
    component: ThreadedDoc,
  },
  {
    id: 'minimal',
    label: 'Minimal',
    category: 'Variations',
    component: MinimalDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: InvertedDoc,
  },
]
</script>
