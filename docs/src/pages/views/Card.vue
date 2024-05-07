<template>
  <DocComponent
    title="Card"
    description="A card displays site content in a manner similar to a playing card"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import CardDoc from '@/components/views/Card/CardDoc.vue'
import CardsDoc from '@/components/views/Card/CardsDoc.vue'

// Content
import ContentBlockDoc from '@/components/views/Card/ContentBlockDoc.vue'
import HeaderDoc from '@/components/views/Card/HeaderDoc.vue'
import MetadataDoc from '@/components/views/Card/MetadataDoc.vue'
import ButtonsDoc from '@/components/views/Card/ButtonsDoc.vue'
import ApprovalDoc from '@/components/views/Card/ApprovalDoc.vue'
import DescriptionDoc from '@/components/views/Card/DescriptionDoc.vue'
import ExtraContentDoc from '@/components/views/Card/ExtraContentDoc.vue'

// States
import DisabledDoc from '@/components/views/Card/DisabledDoc.vue'
import LoadingDoc from '@/components/views/Card/LoadingDoc.vue'
import LoadingVariantDoc from '@/components/views/Card/LoadingVariantDoc.vue'

// Variations
import FluidCardDoc from '@/components/views/Card/FluidCardDoc.vue'
import CenteredDoc from '@/components/views/Card/CenteredDoc.vue'
import HorizontalCardsDoc from '@/components/views/Card/HorizontalCardsDoc.vue'
import RaisedCardDoc from '@/components/views/Card/RaisedCardDoc.vue'
import LinkCardDoc from '@/components/views/Card/LinkCardDoc.vue'
import FloatedContentDoc from '@/components/views/Card/FloatedContentDoc.vue'
import TextAlignmentDoc from '@/components/views/Card/TextAlignmentDoc.vue'
import InvertedDoc from '@/components/views/Card/InvertedDoc.vue'
import ColoredDoc from '@/components/views/Card/ColoredDoc.vue'
import ColumnCountDoc from '@/components/views/Card/ColumnCountDoc.vue'
import StackableDoc from '@/components/views/Card/StackableDoc.vue'
import DoublingDoc from '@/components/views/Card/DoublingDoc.vue'

const docs = [
  {
    id: 'card',
    label: 'Card',
    category: 'Types',
    component: CardDoc,
  },
  {
    id: 'cards',
    label: 'Cards',
    category: 'Types',
    component: CardsDoc,
  },
  {
    id: 'content-block',
    label: 'Content Block',
    category: 'Content',
    component: ContentBlockDoc,
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
    id: 'buttons',
    label: 'Buttons',
    category: 'Content',
    component: ButtonsDoc,
  },
  {
    id: 'approval',
    label: 'Approval',
    category: 'Content',
    component: ApprovalDoc,
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
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
  {
    id: 'loading',
    label: 'Loading',
    category: 'States',
    component: [LoadingDoc, LoadingVariantDoc],
  },
  {
    id: 'fluid-card',
    label: 'Fluid Card',
    category: 'Variations',
    component: FluidCardDoc,
  },
  {
    id: 'centered',
    label: 'Centered Card',
    category: 'Variations',
    component: CenteredDoc,
  },
  {
    id: 'horizontal-cards',
    label: 'Horizontal Cards',
    category: 'Variations',
    component: HorizontalCardsDoc,
  },
  {
    id: 'raised-card',
    label: 'Raised Card',
    category: 'Variations',
    component: RaisedCardDoc,
  },
  {
    id: 'link-card',
    label: 'Link Card',
    category: 'Variations',
    component: LinkCardDoc,
  },
  {
    id: 'floated-content',
    label: 'Floated Content',
    category: 'Variations',
    component: FloatedContentDoc,
  },
  {
    id: 'text-alignment',
    label: 'Text Alignment',
    category: 'Variations',
    component: TextAlignmentDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: InvertedDoc,
  },
  {
    id: 'colored',
    label: 'Colored',
    category: 'Variations',
    component: ColoredDoc,
  },
  {
    id: 'column-count',
    label: 'Column Count',
    category: 'Variations',
    component: ColumnCountDoc,
  },
  {
    id: 'stackable',
    label: 'Stackable',
    category: 'Variations',
    component: StackableDoc,
  },
  {
    id: 'doubling',
    label: 'Doubling',
    category: 'Variations',
    component: DoublingDoc,
  },
]
</script>
