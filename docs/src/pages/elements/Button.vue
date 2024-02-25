<template>
  <DocComponent
    title="Button"
    description="A button indicates a possible user action"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import ButtonDoc from '@/components/elements/Button/ButtonDoc.vue'
import EmphasisDoc from '@/components/elements/Button/EmphasisDoc.vue'
import AnimatedDoc from '@/components/elements/Button/AnimatedDoc.vue'
import LabeledDoc from '@/components/elements/Button/LabeledDoc.vue'
import IconDoc from '@/components/elements/Button/IconDoc.vue'
import LabeledIconDoc from '@/components/elements/Button/LabeledIconDoc.vue'
import BasicDoc from '@/components/elements/Button/BasicDoc.vue'
import TertiaryDoc from '@/components/elements/Button/TertiaryDoc.vue'
import InvertedDoc from '@/components/elements/Button/InvertedDoc.vue'

// Groups
import ButtonsDoc from '@/components/elements/Button/ButtonsDoc.vue'
import IconButtonsDoc from '@/components/elements/Button/IconButtonsDoc.vue'

// Content
import ConditionalsDoc from '@/components/elements/Button/ConditionalsDoc.vue'

// States
import ActiveDoc from '@/components/elements/Button/ActiveDoc.vue'
import DisabledDoc from '@/components/elements/Button/DisabledDoc.vue'
import LoadingDoc from '@/components/elements/Button/LoadingDoc.vue'

const docs = [
  {
    id: 'button',
    label: 'Button',
    category: 'Types',
    component: ButtonDoc,
  },
  {
    id: 'emphasis',
    label: 'Emphasis',
    category: 'Types',
    component: EmphasisDoc,
  },
  {
    id: 'animated',
    label: 'Animated',
    category: 'Types',
    component: AnimatedDoc,
  },
  {
    id: 'labeled',
    label: 'Labeled',
    category: 'Types',
    component: LabeledDoc,
  },
  {
    id: 'icon',
    label: 'Icon',
    category: 'Types',
    component: IconDoc,
  },
  {
    id: 'labeled-icon',
    label: 'Labeled Icon',
    category: 'Types',
    component: LabeledIconDoc,
  },
  {
    id: 'basic',
    label: 'Basic',
    category: 'Types',
    component: BasicDoc,
  },
  {
    id: 'tertiary',
    label: 'Tertiary',
    category: 'Types',
    component: TertiaryDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Types',
    component: InvertedDoc,
  },
  {
    id: 'buttons',
    label: 'Buttons',
    category: 'Groups',
    component: ButtonsDoc,
  },
  {
    id: 'icon-buttons',
    label: 'Icon Buttons',
    category: 'Groups',
    component: IconButtonsDoc,
  },
  {
    id: 'content',
    label: 'Content',
    category: 'Content',
    component: ConditionalsDoc,
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
    id: 'loading',
    label: 'Loading',
    category: 'States',
    component: LoadingDoc,
  },
]
</script>
