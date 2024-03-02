<template>
  <DocComponent
    title="Toast"
    description="A toast allows users to be notified of an event"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

import MinimalDoc from '@/components/modules/Toast/MinimalDoc.vue'
import TitledDoc from '@/components/modules/Toast/TitledDoc.vue'
import ProgressBarDoc from '@/components/modules/Toast/ProgressBarDoc.vue';

import ToastTypeDoc from '@/components/modules/Toast/ToastTypeDoc.vue';
import PositionDoc from '@/components/modules/Toast/PositionDoc.vue';
import AttachedPosition from '@/components/modules/Toast/AttachedPosition.vue';
import DirectionDoc from '@/components/modules/Toast/DirectionDoc.vue';
import CenterAligned from '@/components/modules/Toast/CenterAligned.vue';
import DurationDoc from '@/components/modules/Toast/DurationDoc.vue';
import MessageStyleDoc from '@/components/modules/Toast/MessageStyleDoc.vue';
import IncreasingProgressBarDoc from '@/components/modules/Toast/IncreasingProgressBarDoc.vue';
import ColorVariantsDoc from '@/components/modules/Toast/ColorVariantsDoc.vue';
import InvertedColorsDoc from '@/components/modules/Toast/InvertedColorsDoc.vue';

import ActionGeneralDoc from '@/components/modules/Toast/ActionGeneralDoc.vue';
import ActionBasicDoc from '@/components/modules/Toast/ActionBasicDoc.vue';
import ActionAttachedDoc from '@/components/modules/Toast/ActionAttachedDoc.vue';
import ActionVerticalDoc from '@/components/modules/Toast/ActionVerticalDoc.vue';
import ActionVerticalAttachedDoc from '@/components/modules/Toast/ActionVerticalAttachedDoc.vue';

const docs = [
  {
    id: 'minimal',
    label: 'Minimal',
    category: 'Types',
    component: MinimalDoc,
  },
  {
    id: 'titled',
    label: 'Titled',
    category: 'Types',
    component: TitledDoc,
  },
  {
    id: 'progress-bar',
    label: 'Progress Bar',
    category: 'Types',
    component: ProgressBarDoc,
  },
  {
    id: 'toast-type',
    label: 'Toast Type',
    category: 'Variations',
    component: ToastTypeDoc,
  },
  {
    id: 'position',
    label: 'Position',
    category: 'Variations',
    component: PositionDoc,
  },
  {
    id: 'attached-position',
    label: 'Attached Position',
    category: 'Variations',
    component: AttachedPosition,
  },
  {
    id: 'direction',
    label: 'Direction',
    category: 'Variations',
    component: DirectionDoc,
  },
  {
    id: 'center-aligned',
    label: 'Center Aligned',
    category: 'Variations',
    component: CenterAligned,
  },
  {
    id: 'duration',
    label: 'Duration',
    category: 'Variations',
    component: DurationDoc,
  },
  {
    id: 'message-style',
    label: 'Use Message Style',
    category: 'Variations',
    component: MessageStyleDoc,
  },
  {
    id: 'increasing-progress-bar',
    label: 'Increasing Progress Bar',
    category: 'Variations',
    component: IncreasingProgressBarDoc,
  },
  {
    id: 'color-variants',
    label: 'Color Variants',
    category: 'Variations',
    component: ColorVariantsDoc,
  },
  {
    id: 'inverted-colors',
    label: 'Inverted Colors',
    category: 'Variations',
    component: InvertedColorsDoc,
  },
  {
    id: 'general',
    label: 'General',
    category: 'Actions',
    component: ActionGeneralDoc,
  },
  {
    id: 'action-basic',
    label: 'Basic',
    category: 'Actions',
    component: ActionBasicDoc,
  },
  {
    id: 'action-attached',
    label: 'Attached',
    category: 'Actions',
    component: ActionAttachedDoc,
  },
  {
    id: 'action-vertical',
    label: 'Vertical',
    category: 'Actions',
    component: ActionVerticalDoc,
  },
  {
    id: 'action-vertical-attached',
    label: 'Vertical Attached',
    category: 'Actions',
    component: ActionVerticalAttachedDoc,
  },
]
</script>
