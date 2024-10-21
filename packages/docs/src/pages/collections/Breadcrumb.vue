<template>
  <DocComponent
    title="Breadcrumb"
    description="A standard breadcrumb"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import BreadcrumbDoc from '@/components/collections/Breadcrumb/BreadcrumbDoc.vue'

// Content
import DividerDoc from '@/components/collections/Breadcrumb/DividerDoc.vue'
import SectionDoc from '@/components/collections/Breadcrumb/SectionDoc.vue'
import LinkDoc from '@/components/collections/Breadcrumb/LinkDoc.vue'

// States
import ActiveDoc from '@/components/collections/Breadcrumb/ActiveDoc.vue'

// Variations
import InvertedDoc from '@/components/collections/Breadcrumb/InvertedDoc.vue'
import SizeDoc from '@/components/collections/Breadcrumb/SizeDoc.vue'

const docs = [
  {
    id: 'breadcrumb',
    label: 'Breadcrumb',
    category: 'Types',
    component: BreadcrumbDoc,
  },
  {
    id: 'divider',
    label: 'Divider',
    category: 'Content',
    component: DividerDoc,
  },
  {
    id: 'section',
    label: 'Section',
    category: 'Content',
    component: SectionDoc,
  },
  {
    id: 'link',
    label: 'Link',
    category: 'Content',
    component: LinkDoc,
  },
  {
    id: 'active',
    label: 'Active',
    category: 'States',
    component: ActiveDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: InvertedDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
]
</script>
