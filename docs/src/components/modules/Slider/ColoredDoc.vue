<template>
  <DocSection label="Colored" :code="code">
    <template #description>
      A slider can be different colors
    </template>
    <template #example>
      <Slider
        v-for="color in colors"
        :key="color"
        :color="color"
        v-model="value"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(5)
const colors = ref([
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
])

const code = `<template>
  <Slider
    v-for="color in colors"
    :key="color"
    :color="color"
    v-model="value"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(5)
const colors = ref([
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
])
<\/script>`
</script>
