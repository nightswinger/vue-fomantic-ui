<template>
  <DocSection label="Text Alignment" :code="code">
    <template #description>
      A segment can have its text aligned to a side
    </template>
    <template #example>
      <SuiSegment textAlign="right">Right</SuiSegment>
      <SuiSegment textAlign="left">Left</SuiSegment>
      <SuiSegment textAlign="center">Center</SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment textAlign="right">Right</SuiSegment>
  <SuiSegment textAlign="left">Left</SuiSegment>
  <SuiSegment textAlign="center">Center</SuiSegment>
</template>`
</script>
