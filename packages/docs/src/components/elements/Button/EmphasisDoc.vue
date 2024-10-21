<template>
  <DocSection label="Emphasis" :code="code">
    <template #description>
      A button can be formatted to show different levels of emphasis
    </template>
    <template #example>
      <SuiButton primary>Save</SuiButton>
      <SuiButton secondary>Okay</SuiButton>
      <SuiButton>Cancel</SuiButton>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton primary>Save</SuiButton>
  <SuiButton secondary>Okay</SuiButton>
  <SuiButton>Cancel</SuiButton>
<\/template>`
</script>
