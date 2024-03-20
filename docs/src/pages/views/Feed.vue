<template>
  <DocComponent
    title="Feed"
    description="A feed presents user activity chronologically"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import FeedDoc from '@/components/views/Feed/FeedDoc.vue'

// Content
import LabelDoc from '@/components/views/Feed/LabelDoc.vue'
import DateDoc from '@/components/views/Feed/DateDoc.vue'
import AdditionalInformationDoc from '@/components/views/Feed/AdditionalInformationDoc.vue'

// States

// Variations
import SizeDoc from '@/components/views/Feed/SizeDoc.vue'
import InvertedDoc from '@/components/views/Feed/InvertedDoc.vue'

const docs = [
  {
    id: 'feed',
    label: 'Feed',
    category: 'Types',
    component: FeedDoc,
  },
  {
    id: 'label',
    label: 'Label',
    category: 'Content',
    component: LabelDoc,
  },
  {
    id: 'date',
    label: 'Date',
    category: 'Content',
    component: DateDoc,
  },
  {
    id: 'additional-information',
    label: 'Additional information',
    category: 'Content',
    component: AdditionalInformationDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: InvertedDoc,
  },
]
</script>
