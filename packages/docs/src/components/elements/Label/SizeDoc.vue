<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A label can be small or large
    </template>
    <template #example>
      <SuiLabel size="mini">Mini</SuiLabel>
      <SuiLabel size="tiny">Tiny</SuiLabel>
      <SuiLabel size="small">Small</SuiLabel>
      <SuiLabel>Medium</SuiLabel>
      <SuiLabel size="large">Large</SuiLabel>
      <SuiLabel size="big">Big</SuiLabel>
      <SuiLabel size="huge">Huge</SuiLabel>
      <SuiLabel size="massive">Massive</SuiLabel>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabel size="mini">Mini</SuiLabel>
  <SuiLabel size="tiny">Tiny</SuiLabel>
  <SuiLabel size="small">Small</SuiLabel>
  <SuiLabel>Medium</SuiLabel>
  <SuiLabel size="large">Large</SuiLabel>
  <SuiLabel size="big">Big</SuiLabel>
  <SuiLabel size="huge">Huge</SuiLabel>
  <SuiLabel size="massive">Massive</SuiLabel>
</template>`
</script>
