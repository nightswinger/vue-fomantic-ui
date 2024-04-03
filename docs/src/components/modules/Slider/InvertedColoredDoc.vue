<template>
  <DocSection label="Inverted Colored" :code="code">
    <template #description>
      A slider can be different colors while inverted
    </template>
    <template #example>
      <Segment inverted>
        <Slider
          v-for="color in colors"
          :key="color"
          :color="color"
          inverted
          v-model="value"
        />
      </Segment>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Slider, Segment } from 'vue-fomantic-ui'

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
  <Segment inverted>
    <Slider
      v-for="color in colors"
      :key="color"
      :color="color"
      inverted
      v-model="value"
    />
  </Segment>
<\/template>

<script setup>
import { ref } from 'vue'
import { Slider, Segment } from 'vue-fomantic-ui'
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
