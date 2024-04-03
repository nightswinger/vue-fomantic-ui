<template>
  <DocSection label="Step" :code="code">
    <template #description>
      A slider can change the default step increment
    </template>
    <template #example>
      <Slider v-model="value" labeled :step="5" :max="120" :min="20" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(40)

const code = `<template>
  <Slider v-model="value" labeled :step="5" :max="120" :min="20" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(40)
<\/script>`
</script>
