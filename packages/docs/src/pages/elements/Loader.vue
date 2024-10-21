<template>
  <DocComponent
    title="Loader"
    description="A loader alerts a user to wait for an activity to complete"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import LoaderDoc from '@/components/elements/Loader/LoaderDoc.vue'
import TextLoaderDoc from '@/components/elements/Loader/TextLoaderDoc.vue'

// States
import IndeterminateDoc from '@/components/elements/Loader/IndeterminateDoc.vue'
import ActiveDoc from '@/components/elements/Loader/ActiveDoc.vue'
import DisabledDoc from '@/components/elements/Loader/DisabledDoc.vue'

// Variations
import InlineDoc from '@/components/elements/Loader/InlineDoc.vue'
import InlineCenterDoc from '@/components/elements/Loader/InlineCenterDoc.vue'
import SpeedDoc from '@/components/elements/Loader/SpeedDoc.vue'
import ColorsDoc from '@/components/elements/Loader/ColorsDoc.vue'
import SizeDoc from '@/components/elements/Loader/SizeDoc.vue'
import InvertedDoc from '@/components/elements/Loader/InvertedDoc.vue'

const docs = [
  {
    id: 'loader',
    label: 'Loader',
    category: 'Types',
    component: LoaderDoc,
  },
  {
    id: 'text-loader',
    label: 'Text Loader',
    category: 'Types',
    component: TextLoaderDoc,
  },
  {
    id: 'indeterminate',
    label: 'Indeterminate',
    category: 'States',
    component: IndeterminateDoc,
  },
  {
    id: 'active',
    label: 'Active',
    category: 'States',
    component: ActiveDoc,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
  {
    id: 'inline',
    label: 'Inline',
    category: 'Variations',
    component: InlineDoc,
  },
  {
    id: 'inline-center',
    label: 'Inline Center',
    category: 'Variations',
    component: InlineCenterDoc,
  },
  {
    id: 'speed',
    label: 'Speed',
    category: 'Variations',
    component: SpeedDoc,
  },
  {
    id: 'colors',
    label: 'Colors',
    category: 'Variations',
    component: ColorsDoc,
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
