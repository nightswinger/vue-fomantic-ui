<template>
  <DocComponent
    title="Rating"
    description="A rating indicates user interest in content"
    :component-docs="docs"
    :api-docs="api"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import RatingDoc from '@/components/modules/Rating/RatingDoc.vue'
import IconDoc from '@/components/modules/Rating/IconDoc.vue'
import ColorDoc from '@/components/modules/Rating/ColorDoc.vue'
import PartialRatingsDoc from '@/components/modules/Rating/PartialRatingsDoc.vue'

// States
import DisabledDoc from '@/components/modules/Rating/DisabledDoc.vue'

// Variations
import SizeDoc from '@/components/modules/Rating/SizeDoc.vue'

const docs = [
  {
    id: 'rating',
    label: 'Rating',
    category: 'Types',
    component: RatingDoc,
  },
  {
    id: 'icon',
    label: 'Icon',
    category: 'Types',
    component: IconDoc,
  },
  {
    id: 'color',
    label: 'Color',
    category: 'Types',
    component: ColorDoc,
  },
  {
    id: 'partial-ratings',
    label: 'Partial Ratings',
    category: 'Types',
    component: PartialRatingsDoc,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
]

const api = {
  Rating: {
    props: [
      { name: 'color', type: 'string', default: '', description: 'A rating can have different colors' },
      { name: 'defaultRating', type: 'number', default: 0, description: 'The initial value of rating.' },
      { name: 'disabled', type: 'boolean', default: false, description: 'When present, it specifies that the component should be disabled.' },
      { name: 'icon', type: 'string', default: 'star', description: 'A rating can use a set of specified icons.' },
      { name: 'maxRating', type: 'number', default: 1, description: 'The total number of icons.' },
      { name: 'modelValue', type: 'number', default: 'null', description: 'A value of rating.' },
      { name: 'size', type: 'string', default: '', description: 'A rating can have different sizes.' }
    ],
    events: [
      { name: 'change', description: 'Callback to invoke on value change.' }
    ]
  }
}
</script>
