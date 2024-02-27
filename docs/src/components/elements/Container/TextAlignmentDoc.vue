<template>
  <DocSection label="Text Alignment" :code="code">
    <template #description>
      A container can specify its text alignment
    </template>
    <template #example>
      <SuiContainer textAlign="left">Left Aligned</SuiContainer>
      <SuiContainer textAlign="center">Center Aligned</SuiContainer>
      <SuiContainer textAlign="right">Right Aligned</SuiContainer>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiContainer } from 'vue-fomantic-ui'

const code = `<template>
  <SuiContainer textAlign="left">Left Aligned</SuiContainer>
  <SuiContainer textAlign="center">Center Aligned</SuiContainer>
  <SuiContainer textAlign="right">Right Aligned</SuiContainer>
<\/template>`
</script>
