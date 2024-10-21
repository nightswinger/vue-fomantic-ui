<template>
  <DocComponent
    title="Header"
    description="A header provides a short summary of content"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import PageHeadersDoc from '@/components/elements/Header/PageHeadersDoc.vue'
import ContentHeadersDoc from '@/components/elements/Header/ContentHeadersDoc.vue'
import IconHeadersDoc from '@/components/elements/Header/IconHeadersDoc.vue'
import SubHeadersDoc from '@/components/elements/Header/SubHeadersDoc.vue'

// Content
import ImageDoc from '@/components/elements/Header/ImageDoc.vue'
import IconDoc from '@/components/elements/Header/IconDoc.vue'
import SubheaderDoc from '@/components/elements/Header/SubheaderDoc.vue'

// States
import DisabledDoc from '@/components/elements/Header/DisabledDoc.vue'

// Variations
import DividingDoc from '@/components/elements/Header/DividingDoc.vue'
import BlockDoc from '@/components/elements/Header/BlockDoc.vue'
import AttachedDoc from '@/components/elements/Header/AttachedDoc.vue'
import FloatingDoc from '@/components/elements/Header/FloatingDoc.vue'
import TextAlignmentDoc from '@/components/elements/Header/TextAlignmentDoc.vue'
import ColoredDoc from '@/components/elements/Header/ColoredDoc.vue'
import InvertedDoc from '@/components/elements/Header/InvertedDoc.vue'

const docs = [
  {
    id: 'page-headers',
    label: 'Page Headers',
    category: 'Types',
    component: PageHeadersDoc,
  },
  {
    id: 'content-headers',
    label: 'Content Headers',
    category: 'Types',
    component: ContentHeadersDoc,
  },
  {
    id: 'icon-headers',
    label: 'Icon Headers',
    category: 'Types',
    component: IconHeadersDoc,
  },
  {
    id: 'sub-headers',
    label: 'Sub Headers',
    category: 'Types',
    component: SubHeadersDoc,
  },
  {
    id: 'image',
    label: 'Image',
    category: 'Content',
    component: ImageDoc,
  },
  {
    id: 'icon',
    label: 'Icon',
    category: 'Content',
    component: IconDoc,
  },
  {
    id: 'subheader',
    label: 'Subheader',
    category: 'Content',
    component: SubheaderDoc,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
  {
    id: 'dividing',
    label: 'Dividing',
    category: 'Variations',
    component: DividingDoc,
  },
  {
    id: 'block',
    label: 'Block',
    category: 'Variations',
    component: BlockDoc,
  },
  {
    id: 'attached',
    label: 'Attached',
    category: 'Variations',
    component: AttachedDoc,
  },
  {
    id: 'floating',
    label: 'Floating',
    category: 'Variations',
    component: FloatingDoc,
  },
  {
    id: 'text-alignment',
    label: 'Text Alignment',
    category: 'Variations',
    component: TextAlignmentDoc,
  },
  {
    id: 'colored',
    label: 'Colored',
    category: 'Variations',
    component: ColoredDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: InvertedDoc,
  },
]
</script>
