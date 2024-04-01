<template>
  <DocComponent
    title="Icon"
    description="An icon is a glyph used to represent something else"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// States
import DisabledDoc from '@/components/elements/Icon/DisabledDoc.vue'
import LoadingDoc from '@/components/elements/Icon/LoadingDoc.vue'

// Variations
import FittedDoc from '@/components/elements/Icon/FittedDoc.vue'
import SizeDoc from '@/components/elements/Icon/SizeDoc.vue'
import LinkDoc from '@/components/elements/Icon/LinkDoc.vue'
import FlippedDoc from '@/components/elements/Icon/FlippedDoc.vue'
import RotatedDoc from '@/components/elements/Icon/RotatedDoc.vue'
import CircularDoc from '@/components/elements/Icon/CircularDoc.vue'
import CircularColoredDoc from '@/components/elements/Icon/CircularColoredDoc.vue'
import BorderedDoc from '@/components/elements/Icon/BorderedDoc.vue'
import BorderedColoredDoc from '@/components/elements/Icon/BorderedColoredDoc.vue'
import ColoredDoc from '@/components/elements/Icon/ColoredDoc.vue'
import InvertedDoc from '@/components/elements/Icon/InvertedDoc.vue'

// Groups
import IconsDoc from '@/components/elements/Icon/IconsDoc.vue'
import CornerIconDoc from '@/components/elements/Icon/CornerIconDoc.vue'

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
    id: 'fitted',
    label: 'Fitted',
    category: 'Variations',
    component: FittedDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
  {
    id: 'link',
    label: 'Link',
    category: 'Variations',
    component: LinkDoc,
  },
  {
    id: 'flipped',
    label: 'Flipped',
    category: 'Variations',
    component: FlippedDoc,
  },
  {
    id: 'rotated',
    label: 'Rotated',
    category: 'Variations',
    component: RotatedDoc,
  },
  {
    id: 'circular',
    label: 'Circular',
    category: 'Variations',
    component: CircularDoc,
  },
  {
    id: 'circular-colored',
    label: 'Circular Colored',
    category: 'Variations',
    component: CircularColoredDoc,
  },
  {
    id: 'bordered',
    label: 'Bordered',
    category: 'Variations',
    component: BorderedDoc,
  },
  {
    id: 'bordered-colored',
    label: 'Bordered Colored',
    category: 'Variations',
    component: BorderedColoredDoc,
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
  {
    id: 'icons',
    label: 'Icons',
    category: 'Groups',
    component: IconsDoc,
  },
  {
    id: 'corner-icon',
    label: 'Corner Icon',
    category: 'Groups',
    component: CornerIconDoc,
  },
]
</script>
