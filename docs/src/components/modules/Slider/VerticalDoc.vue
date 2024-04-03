<template>
  <DocSection label="Vertical" :code="code">
    <template #description>
      A slider can be vertical
    </template>
    <template #example>
      <Slider v-model="value" vertical />
      Slider value: {{ value }}
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(5)

const code = `<template>
  <Slider v-model="value" vertical />
  Slider value: {{ value }}
<\/template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(5)
<\/script>`
</script>
