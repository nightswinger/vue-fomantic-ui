<template>
  <DocComponent
    title="Step"
    description="A step shows the completion status of an activity in a series of activities"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import StepDoc from '@/components/elements/Step/StepDoc.vue'

// Groups
import StepsDoc from '@/components/elements/Step/StepsDoc.vue'
import OrderedDoc from '@/components/elements/Step/OrderedDoc.vue'
import VerticalDoc from '@/components/elements/Step/VerticalDoc.vue'

// Content
import DescriptionDoc from '@/components/elements/Step/DescriptionDoc.vue'
import IconDoc from '@/components/elements/Step/IconDoc.vue'

// States
import ActiveDoc from '@/components/elements/Step/ActiveDoc.vue'
import CompletedDoc from '@/components/elements/Step/CompletedDoc.vue'
import DisabledDoc from '@/components/elements/Step/DisabledDoc.vue'

// Variations
import StackableDoc from '@/components/elements/Step/StackableDoc.vue'
import FluidDoc from '@/components/elements/Step/FluidDoc.vue'
import UnstackableDoc from '@/components/elements/Step/UnstackableDoc.vue'
import AttachedDoc from '@/components/elements/Step/AttachedDoc.vue'
import SizeDoc from '@/components/elements/Step/SizeDoc.vue'
import InvertedDoc from '@/components/elements/Step/InvertedDoc.vue'

const docs = [
  {
    id: 'step',
    label: 'Step',
    category: 'Types',
    component: StepDoc,
  },
  {
    id: 'steps',
    label: 'Steps',
    category: 'Groups',
    component: StepsDoc,
  },
  {
    id: 'ordered',
    label: 'Ordered',
    category: 'Groups',
    component: OrderedDoc,
  },
  {
    id: 'vertical',
    label: 'Vertical',
    category: 'Groups',
    component: VerticalDoc,
  },
  {
    id: 'description',
    label: 'Description',
    category: 'Content',
    component: DescriptionDoc,
  },
  {
    id: 'icon',
    label: 'Icon',
    category: 'Content',
    component: IconDoc,
  },
  {
    id: 'active',
    label: 'Active',
    category: 'States',
    component: ActiveDoc,
  },
  {
    id: 'completed',
    label: 'Completed',
    category: 'States',
    component: CompletedDoc,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
  {
    id: 'stackable',
    label: 'Stackable',
    category: 'Variations',
    component: StackableDoc,
  },
  {
    id: 'fluid',
    label: 'Fluid',
    category: 'Variations',
    component: FluidDoc,
  },
  {
    id: 'unstackable',
    label: 'Unstackable',
    category: 'Variations',
    component: UnstackableDoc,
  },
  {
    id: 'attached',
    label: 'Attached',
    category: 'Variations',
    component: AttachedDoc,
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
