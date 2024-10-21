<template>
  <DocComponent
    title="Checkbox"
    description="A checkbox allows a user to select a value from a small set of options, often binary"
    :component-docs="docs"
    :api-docs="api"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import CheckboxDoc from '@/components/modules/Checkbox/CheckboxDoc.vue'
import MultipleDoc from '@/components/modules/Checkbox/MultipleDoc.vue'
import ToggleDoc from '@/components/modules/Checkbox/ToggleDoc.vue'
import SliderDoc from '@/components/modules/Checkbox/SliderDoc.vue'

const docs = [
  {
    id: 'checkbox',
    label: 'Checkbox',
    category: 'Types',
    component: CheckboxDoc,
  },
  {
    id: 'multiple',
    label: 'Multiple',
    category: 'Types',
    component: MultipleDoc,
  },
  {
    id: 'toggle',
    label: 'Toggle',
    category: 'Types',
    component: ToggleDoc,
  },
  {
    id: 'slider',
    label: 'Slider',
    category: 'Types',
    component: SliderDoc,
  },
]

const api = {
  Checkbox: {
    props: [
      { name: 'label', type: 'string', default: 'null', description: 'Label of the checkbox.' },
      { name: 'modelValue', type: 'any', default: 'null', description: 'Value binding of the checkbox.' },
      { name: 'value', type: 'any', default: 'null', description: 'Value of the checkbox.' }
    ],
    events: [
      { name: 'change', description: 'Callback to invoke when checkbox value is changed.' },
      { name: 'click', description: 'Callback to invoke when checkbox is clicked.' }
    ]
  }
}
</script>
