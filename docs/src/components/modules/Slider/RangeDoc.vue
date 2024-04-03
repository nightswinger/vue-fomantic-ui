<template>
  <DocSection label="Range" :code="code">
    <template #description>
      A range slider which allow you to select a range between two values
    </template>
    <template #example>
      <Slider
        v-model="value"
        range
        labeled="ticked"
        :min="5"
        :max="100"
        :step="5"
      />
      Slider value: {{ value }}
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref([20, 60])

const code = `<template>
  <Slider
    v-model="value"
    range
    labeled="ticked"
    :min="5"
    :max="100"
    :step="5"
  />
  Slider value: {{ value }}
<\/template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref([20, 60])
<\/script>`
</script>
