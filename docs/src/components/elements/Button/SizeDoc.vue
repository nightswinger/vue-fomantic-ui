<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A button can have different sizes
    </template>
    <template #example>
      <SuiButton size="mini" content="Mini" />
      <SuiButton size="tiny" content="Tiny" />
      <SuiButton size="small" content="Small" />
      <SuiButton size="medium" content="Medium" />
      <SuiButton size="large" content="Large" />
      <SuiButton size="big" content="Big" />
      <SuiButton size="huge" content="Huge" />
      <SuiButton size="massive" content="Massive" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton size="mini" content="Mini" />
  <SuiButton size="tiny" content="Tiny" />
  <SuiButton size="small" content="Small" />
  <SuiButton size="medium" content="Medium" />
  <SuiButton size="large" content="Large" />
  <SuiButton size="big" content="Big" />
  <SuiButton size="huge" content="Huge" />
  <SuiButton size="massive" content="Massive" />
<\/template>`
</script>
