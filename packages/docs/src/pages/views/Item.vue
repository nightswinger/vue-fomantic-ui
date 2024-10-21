<template>
  <DocComponent
    title="Item"
    description="An item view presents large collections of site content for display"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import ItemDoc from '@/components/views/Item/ItemsDoc.vue'

// Content
import ImageDoc from '@/components/views/Item/ImageDoc.vue'
import ContentDoc from '@/components/views/Item/ContentDoc.vue'
import HeaderDoc from '@/components/views/Item/HeaderDoc.vue'
import MetadataDoc from '@/components/views/Item/MetadataDoc.vue'
import LinkDoc from '@/components/views/Item/LinkDoc.vue'
import DescriptionDoc from '@/components/views/Item/DescriptionDoc.vue'
import ExtraContentDoc from '@/components/views/Item/ExtraContentDoc.vue'
import RatingDoc from '@/components/views/Item/RatingDoc.vue'

// States
import DisabledDoc from '@/components/views/Item/DisabledDoc.vue'

// Variations
import StackingDoc from '@/components/views/Item/StackingDoc.vue'
import DividedDoc from '@/components/views/Item/DividedDoc.vue'
import RelaxedDoc from '@/components/views/Item/RelaxedDoc.vue'
import LinkItemDoc from '@/components/views/Item/LinkItemDoc.vue'
import VerticalAlignmentDoc from '@/components/views/Item/VerticalAlignmentDoc.vue'
import FloatedContentDoc from '@/components/views/Item/FloatedContentDoc.vue'
import InvertedDoc from '@/components/views/Item/InvertedDoc.vue'

const docs = [
  {
    id: 'item',
    label: 'Item',
    category: 'Types',
    component: ItemDoc,
  },
  {
    id: 'image',
    label: 'Image',
    category: 'Content',
    component: ImageDoc,
  },
  {
    id: 'content',
    label: 'Content',
    category: 'Content',
    component: ContentDoc,
  },
  {
    id: 'header',
    label: 'Header',
    category: 'Content',
    component: HeaderDoc,
  },
  {
    id: 'metadata',
    label: 'Metadata',
    category: 'Content',
    component: MetadataDoc,
  },
  {
    id: 'link',
    label: 'Link',
    category: 'Content',
    component: LinkDoc,
  },
  {
    id: 'description',
    label: 'Description',
    category: 'Content',
    component: DescriptionDoc,
  },
  {
    id: 'extra-content',
    label: 'Extra Content',
    category: 'Content',
    component: ExtraContentDoc,
  },
  {
    id: 'rating',
    label: 'Rating',
    category: 'Content',
    component: RatingDoc,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
  {
    id: 'stacking',
    label: 'Stacking',
    category: 'Variations',
    component: StackingDoc,
  },
  {
    id: 'divided',
    label: 'Divided',
    category: 'Variations',
    component: DividedDoc,
  },
  {
    id: 'relaxed',
    label: 'Relaxed',
    category: 'Variations',
    component: RelaxedDoc,
  },
  {
    id: 'link-item',
    label: 'Link Item',
    category: 'Variations',
    component: LinkItemDoc,
  },
  {
    id: 'vertical-alignment',
    label: 'Vertical Alignment',
    category: 'Variations',
    component: VerticalAlignmentDoc,
  },
  {
    id: 'floated-content',
    label: 'Floated Content',
    category: 'Variations',
    component: FloatedContentDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: InvertedDoc,
  },
]
</script>
