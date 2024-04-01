<template>
  <DocComponent
    title="Reveal"
    description="A reveal displays additional content in place of previous content when activated"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import FadeDoc from '@/components/elements/Reveal/FadeDoc.vue'
import MoveDoc from '@/components/elements/Reveal/MoveDoc.vue'
import RotateDoc from '@/components/elements/Reveal/RotateDoc.vue'

// States
import ActiveDoc from '@/components/elements/Reveal/ActiveDoc.vue'
import DisabledDoc from '@/components/elements/Reveal/DisabledDoc.vue'

// Variations
import InstantDoc from '@/components/elements/Reveal/InstantDoc.vue'

const docs = [
  {
    id: 'fade',
    label: 'Fade',
    category: 'Types',
    component: FadeDoc,
  },
  {
    id: 'move',
    label: 'Move',
    category: 'Types',
    component: MoveDoc,
  },
  {
    id: 'rotate',
    label: 'Rotate',
    category: 'Types',
    component: RotateDoc,
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
    id: 'instant',
    label: 'Instant',
    category: 'Variations',
    component: InstantDoc,
  },
]
</script>
