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
import InputDoc from '@/components/elements/Input/InputDoc.vue'

// States
import FocusDoc from '@/components/elements/Input/FocusDoc.vue'
import LoadingDoc from '@/components/elements/Input/LoadingDoc.vue'
import DisabledDoc from '@/components/elements/Input/DisabledDoc.vue'
import ErrorDoc from '@/components/elements/Input/ErrorDoc.vue'

// Variations
import IconDoc from '@/components/elements/Input/IconDoc.vue'
import LabeledDoc from '@/components/elements/Input/LabeledDoc.vue'
import ActionDoc from '@/components/elements/Input/ActionDoc.vue'
import TransparentDoc from '@/components/elements/Input/TransparentDoc.vue'
import InvertedDoc from '@/components/elements/Input/InvertedDoc.vue'
import FluidDoc from '@/components/elements/Input/FluidDoc.vue'
import SizeDoc from '@/components/elements/Input/SizeDoc.vue'

const docs = [
  {
    id: 'input',
    label: 'Input',
    category: 'Types',
    component: InputDoc,
  },
  {
    id: 'focus',
    label: 'Focus',
    category: 'States',
    component: FocusDoc,
  },
  {
    id: 'loading',
    label: 'Loading',
    category: 'States',
    component: LoadingDoc,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
  {
    id: 'error',
    label: 'Error',
    category: 'States',
    component: ErrorDoc,
  },
  {
    id: 'icon',
    label: 'Icon',
    category: 'Variations',
    component: IconDoc,
  },
  {
    id: 'labeled',
    label: 'Labeled',
    category: 'Variations',
    component: LabeledDoc,
  },
  {
    id: 'action',
    label: 'Action',
    category: 'Variations',
    component: ActionDoc,
  },
  {
    id: 'transparent',
    label: 'Transparent',
    category: 'Variations',
    component: TransparentDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: InvertedDoc,
  },
  {
    id: 'fluid',
    label: 'Fluid',
    category: 'Variations',
    component: FluidDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
]
</script>
