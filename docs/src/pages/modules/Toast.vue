<template>
  <DocComponent
    title="Toast"
    description="A toast allows users to be notified of an event"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '../../components/doc/DocComponent.vue'

import MinimalDoc from '../../components/Toast/MinimalDoc.vue'
import TitledDoc from '../../components/Toast/TitledDoc.vue'
import ProgressBarDoc from '../../components/Toast/ProgressBarDoc.vue';

import ToastTypeDoc from '../../components/Toast/ToastTypeDoc.vue';
import PositionDoc from '../../components/Toast/PositionDoc.vue';
import AttachedPosition from '../../components/Toast/AttachedPosition.vue';
import DirectionDoc from '../../components/Toast/DirectionDoc.vue';
import CenterAligned from '../../components/Toast/CenterAligned.vue';
import DurationDoc from '../../components/Toast/DurationDoc.vue';
import MessageStyleDoc from '../../components/Toast/MessageStyleDoc.vue';
import IncreasingProgressBarDoc from '../../components/Toast/IncreasingProgressBarDoc.vue';
import ColorVariantsDoc from '../../components/Toast/ColorVariantsDoc.vue';
import InvertedColorsDoc from '../../components/Toast/InvertedColorsDoc.vue';

import ActionGeneralDoc from '../../components/Toast/ActionGeneralDoc.vue';
import ActionBasicDoc from '../../components/Toast/ActionBasicDoc.vue';
import ActionAttachedDoc from '../../components/Toast/ActionAttachedDoc.vue';
import ActionVerticalDoc from '../../components/Toast/ActionVerticalDoc.vue';
import ActionVerticalAttachedDoc from '../../components/Toast/ActionVerticalAttachedDoc.vue';

const docs = [
  {
    label: 'Minimal',
    category: 'Types',
    component: MinimalDoc,
  },
  {
    label: 'Titled',
    category: 'Types',
    component: TitledDoc,
  },
  {
    label: 'Progress Bar',
    category: 'Types',
    component: ProgressBarDoc,
  },
  {
    label: 'Toast Type',
    category: 'Variations',
    component: ToastTypeDoc,
  },
  {
    label: 'Position',
    category: 'Variations',
    component: PositionDoc,
  },
  {
    label: 'Attached Position',
    category: 'Variations',
    component: AttachedPosition,
  },
  {
    label: 'Direction',
    category: 'Variations',
    component: DirectionDoc,
  },
  {
    label: 'Center Aligned',
    category: 'Variations',
    component: CenterAligned,
  },
  {
    label: 'Duration',
    category: 'Variations',
    component: DurationDoc,
  },
  {
    label: 'Use Message Style',
    category: 'Variations',
    component: MessageStyleDoc,
  },
  {
    label: 'Increasing Progress Bar',
    category: 'Variations',
    component: IncreasingProgressBarDoc,
  },
  {
    label: 'Color Variants',
    category: 'Variations',
    component: ColorVariantsDoc,
  },
  {
    label: 'Inverted Colors',
    category: 'Variations',
    component: InvertedColorsDoc,
  },
  {
    label: 'General',
    category: 'Actions',
    component: ActionGeneralDoc,
  },
  {
    label: 'Basic',
    category: 'Actions',
    component: ActionBasicDoc,
  },
  {
    label: 'Attached',
    category: 'Actions',
    component: ActionAttachedDoc,
  },
  {
    label: 'Vertical',
    category: 'Actions',
    component: ActionVerticalDoc,
  },
  {
    label: 'Vertical Attached',
    category: 'Actions',
    component: ActionVerticalAttachedDoc,
  },
]
</script>
