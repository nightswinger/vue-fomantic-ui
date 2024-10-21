<template>
  <DocComponent
    title="Progress"
    description="A progress bar shows the progression of a task"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import StandardDoc from '@/components/modules/Progress/StandardDoc.vue'
import IndicatingDoc from '@/components/modules/Progress/IndicatingDoc.vue'

// Content
import BarDoc from '@/components/modules/Progress/BarDoc.vue'
import ProgressDoc from '@/components/modules/Progress/ProgressDoc.vue'
import CenteredProgressTextDoc from '@/components/modules/Progress/CenteredProgressTextDoc.vue'
import LabelDoc from '@/components/modules/Progress/LabelDoc.vue'

// States
import ActiveDoc from '@/components/modules/Progress/ActiveDoc.vue'
import SuccessDoc from '@/components/modules/Progress/SuccessDoc.vue'
import WarningDoc from '@/components/modules/Progress/WarningDoc.vue'
import ErrorDoc from '@/components/modules/Progress/ErrorDoc.vue'
import DisabledDoc from '@/components/modules/Progress/DisabledDoc.vue'

// Variations
import InvertedDoc from '@/components/modules/Progress/InvertedDoc.vue'
import AttachedDoc from '@/components/modules/Progress/AttachedDoc.vue'
import SizeDoc from '@/components/modules/Progress/SizeDoc.vue'
import ColorDoc from '@/components/modules/Progress/ColorDoc.vue'
import InvertedColorDoc from '@/components/modules/Progress/InvertedColorDoc.vue'

const docs = [
  {
    id: 'standard',
    label: 'Standard',
    category: 'Types',
    component: StandardDoc,
  },
  {
    id: 'indicating',
    label: 'Indicating',
    category: 'Types',
    component: IndicatingDoc,
  },
  {
    id: 'bar',
    label: 'Bar',
    category: 'Content',
    component: BarDoc,
  },
  {
    id: 'progress',
    label: 'Progress',
    category: 'Content',
    component: ProgressDoc,
  },
  {
    id: 'centered-progress-text',
    label: 'Centered Progress Text',
    category: 'Content',
    component: CenteredProgressTextDoc,
  },
  {
    id: 'label',
    label: 'Label',
    category: 'Content',
    component: LabelDoc,
  },
  {
    id: 'active',
    label: 'Active',
    category: 'States',
    component: ActiveDoc,
  },
  {
    id: 'success',
    label: 'Success',
    category: 'States',
    component: SuccessDoc,
  },
  {
    id: 'warning',
    label: 'Warning',
    category: 'States',
    component: WarningDoc,
  },
  {
    id: 'error',
    label: 'Error',
    category: 'States',
    component: ErrorDoc,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'States',
    component: DisabledDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: InvertedDoc,
  },
  {
    id: 'attached',
    label: 'Attached',
    category: 'Variations',
    component: AttachedDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
  {
    id: 'color',
    label: 'Color',
    category: 'Variations',
    component: ColorDoc,
  },
  {
    id: 'inverted-color',
    label: 'Inverted Color',
    category: 'Variations',
    component: InvertedColorDoc,
  },
]
</script>
