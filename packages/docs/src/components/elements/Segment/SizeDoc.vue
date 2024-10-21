<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A segment can vary in size
    </template>
    <template #example>
      <SuiSegment size="mini">Mini</SuiSegment>
      <SuiSegment size="tiny">Tiny</SuiSegment>
      <SuiSegment size="small">Small</SuiSegment>
      <SuiSegment>Default</SuiSegment>
      <SuiSegment size="large">Large</SuiSegment>
      <SuiSegment size="big">Big</SuiSegment>
      <SuiSegment size="huge">Huge</SuiSegment>
      <SuiSegment size="massive">Massive</SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment size="mini">Mini</SuiSegment>
  <SuiSegment size="tiny">Tiny</SuiSegment>
  <SuiSegment size="small">Small</SuiSegment>
  <SuiSegment>Default</SuiSegment>
  <SuiSegment size="large">Large</SuiSegment>
  <SuiSegment size="big">Big</SuiSegment>
  <SuiSegment size="huge">Huge</SuiSegment>
  <SuiSegment size="massive">Massive</SuiSegment>
</template>`
</script>
