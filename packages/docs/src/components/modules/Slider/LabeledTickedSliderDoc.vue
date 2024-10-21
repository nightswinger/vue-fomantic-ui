<template>
  <DocSection label="Labeled Ticked Slider" :code="code">
    <template #description>
      A slider that show its labels and ticks
    </template>
    <template #example>
      <Slider labeled="ticked" v-model="value" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(6)

const code = `<template>
  <Slider labeled="ticked" v-model="value" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(6)
<\/script>`
</script>
