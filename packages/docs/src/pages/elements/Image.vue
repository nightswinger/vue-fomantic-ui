<template>
  <DocComponent
    title="Image"
    description="An image is a graphic representation of something"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import ImageDoc from '@/components/elements/Image/ImageDoc.vue'
import ImageLinkDoc from '@/components/elements/Image/ImageLinkDoc.vue'

// States
import HiddenDoc from '@/components/elements/Image/HiddenDoc.vue'
import DisabledDoc from '@/components/elements/Image/DisabledDoc.vue'

// Variations
import AvatarDoc from '@/components/elements/Image/AvatarDoc.vue'
import BorderedDoc from '@/components/elements/Image/BorderedDoc.vue'
import FluidDoc from '@/components/elements/Image/FluidDoc.vue'
import RoundedDoc from '@/components/elements/Image/RoundedDoc.vue'
import CircularDoc from '@/components/elements/Image/CircularDoc.vue'
import VerticallyAlignedDoc from '@/components/elements/Image/VerticallyAlignedDoc.vue'
import CenteredDoc from '@/components/elements/Image/CenteredDoc.vue'
import SpacedDoc from '@/components/elements/Image/SpacedDoc.vue'
import FloatedDoc from '@/components/elements/Image/FloatedDoc.vue'
import SizeDoc from '@/components/elements/Image/SizeDoc.vue'

// Groups
import GroupSizeDoc from '@/components/elements/Image/GroupSizeDoc.vue'

const docs = [
  {
    id: 'image',
    label: 'Image',
    category: 'Types',
    component: ImageDoc,
  },
  {
    id: 'image-link',
    label: 'Image Link',
    category: 'Types',
    component: ImageLinkDoc,
  },
  {
    id: 'hidden',
    label: 'Hidden',
    category: 'States',
    component: HiddenDoc,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
  {
    id: 'avatar',
    label: 'Avatar',
    category: 'Variations',
    component: AvatarDoc,
  },
  {
    id: 'bordered',
    label: 'Bordered',
    category: 'Variations',
    component: BorderedDoc,
  },
  {
    id: 'fluid',
    label: 'Fluid',
    category: 'Variations',
    component: FluidDoc,
  },
  {
    id: 'rounded',
    label: 'Rounded',
    category: 'Variations',
    component: RoundedDoc,
  },
  {
    id: 'circular',
    label: 'Circular',
    category: 'Variations',
    component: CircularDoc,
  },
  {
    id: 'vertically-aligned',
    label: 'Vertically Aligned',
    category: 'Variations',
    component: VerticallyAlignedDoc,
  },
  {
    id: 'centered',
    label: 'Centered',
    category: 'Variations',
    component: CenteredDoc,
  },
  {
    id: 'spaced',
    label: 'Spaced',
    category: 'Variations',
    component: SpacedDoc,
  },
  {
    id: 'floated',
    label: 'Floated',
    category: 'Variations',
    component: FloatedDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
  {
    id: 'group-size',
    label: 'Size',
    category: 'Groups',
    component: GroupSizeDoc,
  },
]
</script>
