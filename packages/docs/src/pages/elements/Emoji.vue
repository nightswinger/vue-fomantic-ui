<template>
  <DocComponent
    title="Emoji"
    description="An emoji is a glyph used to represent an emotional state"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// States
import DisabledDoc from '@/components/elements/Emoji/DisabledDoc.vue'
import LoadingDoc from '@/components/elements/Emoji/LoadingDoc.vue'

// Variations
import SizeDoc from '@/components/elements/Emoji/SizeDoc.vue'
import AutosizingDoc from '@/components/elements/Emoji/AutosizingDoc.vue'
import LinkDoc from '@/components/elements/Emoji/LinkDoc.vue'

const docs = [
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
  {
    id: 'loading',
    label: 'Loading',
    category: 'States',
    component: LoadingDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
  {
    id: 'autosizing',
    label: 'Autosizing',
    category: 'Variations',
    component: AutosizingDoc,
  },
  {
    id: 'link',
    label: 'Link',
    category: 'Variations',
    component: LinkDoc,
  },
]
</script>
