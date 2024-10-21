<template>
  <DocComponent
    title="Label"
    description="A label displays content classification"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import LabelDoc from '@/components/elements/Label/LabelDoc.vue'
import ImageDoc from '@/components/elements/Label/ImageDoc.vue'
import PointingDoc from '@/components/elements/Label/PointingDoc.vue'
import CornerDoc from '@/components/elements/Label/CornerDoc.vue'
import TagDoc from '@/components/elements/Label/TagDoc.vue'
import RibbonDoc from '@/components/elements/Label/RibbonDoc.vue'
import AttachedDoc from '@/components/elements/Label/AttachedDoc.vue'
import HorizontalDoc from '@/components/elements/Label/HorizontalDoc.vue'
import FloatingDoc from '@/components/elements/Label/FloatingDoc.vue'
import InvertedDoc from '@/components/elements/Label/InvertedDoc.vue'

// Content
import DetailDoc from '@/components/elements/Label/DetailDoc.vue'
import IconDoc from '@/components/elements/Label/IconDoc.vue'
import LinkDoc from '@/components/elements/Label/LinkDoc.vue'

// States
import DisabledDoc from '@/components/elements/Label/DisabledDoc.vue'

// Variations
import FluidDoc from '@/components/elements/Label/FluidDoc.vue'
import CircularDoc from '@/components/elements/Label/CircularDoc.vue'
import BasicDoc from '@/components/elements/Label/BasicDoc.vue'
import ColoredDoc from '@/components/elements/Label/ColoredDoc.vue'
import BasicTagDoc from '@/components/elements/Label/BasicTagDoc.vue'
import SizeDoc from '@/components/elements/Label/SizeDoc.vue'

// Groups
import GroupSize from '@/components/elements/Label/GroupSizeDoc.vue'
import ColoredGroupDoc from '@/components/elements/Label/ColoredGroupDoc.vue'
import BasicGroupDoc from '@/components/elements/Label/BasicGroupDoc.vue'
import TagGroupDoc from '@/components/elements/Label/TagGroupDoc.vue'
import CircularGroupDoc from '@/components/elements/Label/CircularGroupDoc.vue'

const docs = [
  {
    id: 'label',
    label: 'Label',
    category: 'Types',
    component: LabelDoc,
  },
  {
    id: 'image',
    label: 'Image',
    category: 'Types',
    component: ImageDoc,
  },
  {
    id: 'pointing',
    label: 'Pointing',
    category: 'Types',
    component: PointingDoc,
  },
  {
    id: 'corner',
    label: 'Corner',
    category: 'Types',
    component: CornerDoc,
  },
  {
    id: 'tag',
    label: 'Tag',
    category: 'Types',
    component: TagDoc,
  },
  {
    id: 'ribbon',
    label: 'Ribbon',
    category: 'Types',
    component: RibbonDoc,
  },
  {
    id: 'attached',
    label: 'Attached',
    category: 'Types',
    component: AttachedDoc,
  },
  {
    id: 'horizontal',
    label: 'Horizontal',
    category: 'Types',
    component: HorizontalDoc,
  },
  {
    id: 'floating',
    label: 'Floating',
    category: 'Types',
    component: FloatingDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Types',
    component: InvertedDoc,
  },
  {
    id: 'detail',
    label: 'Detail',
    category: 'Content',
    component: DetailDoc,
  },
  {
    id: 'icon',
    label: 'Icon',
    category: 'Content',
    component: IconDoc,
  },
  {
    id: 'link',
    label: 'Link',
    category: 'Content',
    component: LinkDoc,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
  {
    id: 'fluid',
    label: 'Fluid',
    category: 'Variations',
    component: FluidDoc,
  },
  {
    id: 'circular',
    label: 'Circular',
    category: 'Variations',
    component: CircularDoc,
  },
  {
    id: 'basic',
    label: 'Basic',
    category: 'Variations',
    component: BasicDoc,
  },
  {
    id: 'colored',
    label: 'Colored',
    category: 'Variations',
    component: ColoredDoc,
  },
  {
    id: 'basic-tag',
    label: 'Basic Tag',
    category: 'Variations',
    component: BasicTagDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
  {
    id: 'group-size',
    label: 'Group Size',
    category: 'Groups',
    component: GroupSize,
  },
  {
    id: 'colored-group',
    label: 'Colored Group',
    category: 'Groups',
    component: ColoredGroupDoc,
  },
  {
    id: 'basic-group',
    label: 'Basic Group',
    category: 'Groups',
    component: BasicGroupDoc,
  },
  {
    id: 'tag-group',
    label: 'Tag Group',
    category: 'Groups',
    component: TagGroupDoc,
  },
  {
    id: 'circular-group',
    label: 'Circular Group',
    category: 'Groups',
    component: CircularGroupDoc,
  },
]
</script>
