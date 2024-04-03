<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A slider can have different sizes
    </template>
    <template #example>
      <Slider
        v-for="size in sizes"
        :key="size"
        :size="size"
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
const sizes = ref([
  'small',
  'medium',
  'large',
  'big',
])

const code = `<template>
  <Slider
    v-for="size in sizes"
    :key="size"
    :size="size"
    v-model="value"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(5)
const sizes = ref([
  'small',
  'medium',
  'large',
  'big',
])
<\/script>`
</script>
