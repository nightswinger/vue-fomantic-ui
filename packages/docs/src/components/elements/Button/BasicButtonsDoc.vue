<template>
  <DocSection label="Basic Buttons" :code="code">
    <template #description>
      A button group can be less pronounced
    </template>
    <template #example>
      <SuiButtonGroup basic>
        <SuiButton>One</SuiButton>
        <SuiButton>Two</SuiButton>
        <SuiButton>Three</SuiButton>
      </SuiButtonGroup>
      <SuiButtonGroup>
        <SuiButton basic color="red">One</SuiButton>
        <SuiButton basic color="blue">Two</SuiButton>
        <SuiButton basic color="green">Three</SuiButton>
      </SuiButtonGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton, SuiButtonGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButtonGroup basic>
    <SuiButton>One</SuiButton>
    <SuiButton>Two</SuiButton>
    <SuiButton>Three</SuiButton>
  </SuiButtonGroup>
  <SuiButtonGroup>
    <SuiButton basic color="red">One</SuiButton>
    <SuiButton basic color="blue">Two</SuiButton>
    <SuiButton basic color="green">Three</SuiButton>
  </SuiButtonGroup>
<\/template>`
</script>
