<template>
  <DocSection label="Labeled Slider" :code="code">
    <template #description>
      A slider that show its labels
    </template>
    <template #example>
      <Slider labeled v-model="value" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(4)

const code = `<template>
  <Slider labeled v-model="value" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(4)
<\/script>`
</script>
