<template>
  <DocComponent
    title="Statistic"
    description="A statistic emphasizes the current value of an attribute"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import StatisticDoc from '@/components/views/Statistic/StatisticDoc.vue'
import StatisticGroupDoc from '@/components/views/Statistic/StatisticGroupDoc.vue'

// Content
import ValueDoc from '@/components/views/Statistic/ValueDoc.vue'
import LabelDoc from '@/components/views/Statistic/LabelDoc.vue'

// Variations
import HorizontalStatisticDoc from '@/components/views/Statistic/HorizontalStatisticDoc.vue'
import ColoredDOc from '@/components/views/Statistic/ColoredDoc.vue'
import InvertedDoc from '@/components/views/Statistic/InvertedDoc.vue'
import EvenlyDividedDoc from '@/components/views/Statistic/EvenlyDividedDoc.vue'
import FloatedDoc from '@/components/views/Statistic/FloatedDoc.vue'
import SizeDoc from '@/components/views/Statistic/SizeDoc.vue'

const docs = [
  {
    id: 'statistic',
    label: 'Statistic',
    category: 'Types',
    component: StatisticDoc,
  },
  {
    id: 'statistic-group',
    label: 'Statistic Group',
    category: 'Types',
    component: StatisticGroupDoc,
  },
  {
    id: 'value',
    label: 'Value',
    category: 'Content',
    component: ValueDoc,
  },
  {
    id: 'label',
    label: 'Label',
    category: 'Content',
    component: LabelDoc,
  },
  {
    id: 'horizontal-statistic',
    label: 'Horizontal Statistic',
    category: 'Variations',
    component: HorizontalStatisticDoc,
  },
  {
    id: 'colored',
    label: 'Colored',
    category: 'Variations',
    component: ColoredDOc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: InvertedDoc,
  },
  {
    id: 'evenly-divided',
    label: 'Evenly Divided',
    category: 'Variations',
    component: EvenlyDividedDoc,
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
]
</script>
