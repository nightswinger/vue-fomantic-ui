<template>
  <DocSection label="Equal Width" :code="code">
    <template #description>
      Groups can have their widths divided evenly
    </template>
    <template #example>
      <SuiButtonGroup :widths="5">
        <SuiButton>Overview</SuiButton>
        <SuiButton>Specs</SuiButton>
        <SuiButton>Warranty</SuiButton>
        <SuiButton>Reviews</SuiButton>
        <SuiButton>Support</SuiButton>
      </SuiButtonGroup>
      <SuiButtonGroup :widths="3">
        <SuiButton>Overview</SuiButton>
        <SuiButton>Specs</SuiButton>
        <SuiButton>Support</SuiButton>
      </SuiButtonGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton, SuiButtonGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButtonGroup :widths="5">
    <SuiButton>Overview</SuiButton>
    <SuiButton>Specs</SuiButton>
    <SuiButton>Warranty</SuiButton>
    <SuiButton>Reviews</SuiButton>
    <SuiButton>Support</SuiButton>
  </SuiButtonGroup>
  <SuiButtonGroup :widths="3">
    <SuiButton>Overview</SuiButton>
    <SuiButton>Specs</SuiButton>
    <SuiButton>Support</SuiButton>
  </SuiButtonGroup>
<\/template>`
</script>
