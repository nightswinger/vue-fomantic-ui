<template>
  <DocComponent
    title="Slider"
    description="A slider allows users to select values within a range"
    :component-docs="docs"
    :api-docs="api"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import SliderDoc from '@/components/modules/Slider/SliderDoc.vue'
import LabeledSliderDoc from '@/components/modules/Slider/LabeledSliderDoc.vue'
import LabeledTickedSliderDoc from '@/components/modules/Slider/LabeledTickedSliderDoc.vue'
import CustomInterpretedLabelsDoc from '@/components/modules/Slider/CustomInterpretedLabelsDoc.vue'
import StepDoc from '@/components/modules/Slider/StepDoc.vue'
import RangeDoc from '@/components/modules/Slider/RangeDoc.vue'

// Variations
import DisabledDoc from '@/components/modules/Slider/DisabledDoc.vue'
import InvertedDoc from '@/components/modules/Slider/InvertedDoc.vue'
import ReversedDoc from '@/components/modules/Slider/ReversedDoc.vue'
import VerticalDoc from '@/components/modules/Slider/VerticalDoc.vue'
import ColoredDoc from '@/components/modules/Slider/ColoredDoc.vue'
import InvertedColoredDoc from '@/components/modules/Slider/InvertedColoredDoc.vue'
import SizeDoc from '@/components/modules/Slider/SizeDoc.vue'

const docs = [
  {
    id: 'slider',
    label: 'Slider',
    category: 'Types',
    component: SliderDoc,
  },
  {
    id: 'labeled-slider',
    label: 'Labeled Slider',
    category: 'Types',
    component: LabeledSliderDoc,
  },
  {
    id: 'labeled-ticked-slider',
    label: 'Labeled Ticked Slider',
    category: 'Types',
    component: LabeledTickedSliderDoc,
  },
  {
    id: 'custom-interpreted-labels',
    label: 'Custom Interpreted Labels',
    category: 'Types',
    component: CustomInterpretedLabelsDoc,
  },
  {
    id: 'step',
    label: 'Step',
    category: 'Types',
    component: StepDoc,
  },
  {
    id: 'range',
    label: 'Range',
    category: 'Types',
    component: RangeDoc,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'Variations',
    component: DisabledDoc,
  },
  {
    id: 'inverted',
    label: 'Inverted',
    category: 'Variations',
    component: InvertedDoc,
  },
  {
    id: 'reversed',
    label: 'Reversed',
    category: 'Variations',
    component: ReversedDoc,
  },
  {
    id: 'vertical',
    label: 'Vertical',
    category: 'Variations',
    component: VerticalDoc,
  },
  {
    id: 'colored',
    label: 'Colored',
    category: 'Variations',
    component: ColoredDoc,
  },
  {
    id: 'inverted-colored',
    label: 'Inverted Colored',
    category: 'Variations',
    component: InvertedColoredDoc,
  },
  {
    id: 'size',
    label: 'Size',
    category: 'Variations',
    component: SizeDoc,
  },
]

const api = {
  Slider: {
    props: [
      { name: 'color', type: 'string', default: '', description: 'A slider can have different colors' },
      { name: 'disabled', type: 'boolean', default: false, description: 'When present, it specifies that the component should be disabled.' },
      { name: 'inverted', type: 'boolean', default: false, description: 'A slider can be formatted to appear on dark backgrounds.' },
      { name: 'labeled', type: 'boolean|string', default: false, description: 'A slider can show its labels.' },
      { name: 'labels', type: 'string[]', default: '', description: 'A slider can have a custom label according to the label value.' },
      { name: 'max', type: 'number', default: 10, description: 'Maximum boundary value.' },
      { name: 'min', type: 'number', default: 0, description: 'Mininum boundary value.' },
      { name: 'modelValue', type: 'number|number[]', default: 0, description: 'A value of component.' },
      { name: 'range', type: 'boolean', default: false, description: 'When specified, allows two boundary values to be picked.' },
      { name: 'reversed', type: 'boolean', default: false, description: 'A slider can be reversed.' },
      { name: 'size', type: 'string', default: '', description: 'A slider can have different sizes.' },
      { name: 'step', type: 'number', default: 1, description: 'Step factor to increment/decrement the value.' },
      { name: 'vertical', type: 'boolean', default: false, description: 'When specified, orientation of the slider becomes vertical.' },
      { name: 'verticalHeight', type: 'number|string', default: 200, description: 'Height of the vertical slider.' }
    ],
    events: [
      { name: 'change', description: 'Callback to invoke on value change.' },
      { name: 'slideend', description: 'Callback to invoke when slide end.' }
    ]
  }
}
</script>
