<template>
  <DocSection label="Colored Buttons" :code="code">
    <template #description>
      Groups can have a shared color
    </template>
    <template #example>
      <SuiButtonGroup color="blue">
        <SuiButton>One</SuiButton>
        <SuiButton>Two</SuiButton>
        <SuiButton>Three</SuiButton>
      </SuiButtonGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton, SuiButtonGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButtonGroup color="blue">
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
<\/template>`
</script>
