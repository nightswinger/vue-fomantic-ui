<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      A slider can appear disabled
    </template>
    <template #example>
      <Slider v-model="value" disabled />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(7)

const code = `<template>
  <Slider v-model="value" disabled />
<\/template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref(7)
<\/script>`
</script>
