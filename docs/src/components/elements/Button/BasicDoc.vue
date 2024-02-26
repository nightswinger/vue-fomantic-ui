<template>
  <DocSection label="Basic" :code="code">
    <template #description>
      A basic button is less pronounced
    </template>
    <template #example>
      <SuiButton basic primary>Primary</SuiButton>
      <SuiButton basic secondary>Secondary</SuiButton>
      <SuiButton basic positive>Positive</SuiButton>
      <SuiButton basic negative>Negative</SuiButton>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton basic primary>Primary</SuiButton>
  <SuiButton basic secondary>Secondary</SuiButton>
  <SuiButton basic positive>Positive</SuiButton>
  <SuiButton basic negative>Negative</SuiButton>
<\/template>`
</script>
