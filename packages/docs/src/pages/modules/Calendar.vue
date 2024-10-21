<template>
  <DocComponent
    title="Calendar"
    description="A calendar allows users to select any date or time"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import CalendarDoc from '@/components/modules/Calendar/CalendarDoc.vue'
import InlineCalendarDoc from '@/components/modules/Calendar/InlineCalendarDoc.vue'

// Variations
import SizeDoc from '@/components/modules/Calendar/SizeDoc.vue'
import InvertedDoc from '@/components/modules/Calendar/InvertedDoc.vue'

// States
import DisabledDoc from '@/components/modules/Calendar/DisabledDoc.vue'

const docs = [
  {
    id: 'calendar',
    label: 'Calendar',
    category: 'Types',
    component: CalendarDoc,
  },
  {
    id: 'inline-calendar',
    label: 'Inline Calendar',
    category: 'Types',
    component: InlineCalendarDoc,
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
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
]
</script>
