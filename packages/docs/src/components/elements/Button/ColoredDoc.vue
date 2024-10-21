<template>
  <DocSection label="Colored" :code="code">
    <template #description>
      A button can have different colors
    </template>
    <template #example>
      <SuiButton color="red">Red</SuiButton>
      <SuiButton color="orange">Orange</SuiButton>
      <SuiButton color="yellow">Yellow</SuiButton>
      <SuiButton color="olive">Olive</SuiButton>
      <SuiButton color="green">Green</SuiButton>
      <SuiButton color="teal">Teal</SuiButton>
      <SuiButton color="blue">Blue</SuiButton>
      <SuiButton color="violet">Violet</SuiButton>
      <SuiButton color="purple">Purple</SuiButton>
      <SuiButton color="pink">Pink</SuiButton>
      <SuiButton color="brown">Brown</SuiButton>
      <SuiButton color="grey">Grey</SuiButton>
      <SuiButton color="black">Black</SuiButton>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton color="red">Red</SuiButton>
  <SuiButton color="orange">Orange</SuiButton>
  <SuiButton color="yellow">Yellow</SuiButton>
  <SuiButton color="olive">Olive</SuiButton>
  <SuiButton color="green">Green</SuiButton>
  <SuiButton color="teal">Teal</SuiButton>
  <SuiButton color="blue">Blue</SuiButton>
  <SuiButton color="violet">Violet</SuiButton>
  <SuiButton color="purple">Purple</SuiButton>
  <SuiButton color="pink">Pink</SuiButton>
  <SuiButton color="brown">Brown</SuiButton>
  <SuiButton color="grey">Grey</SuiButton>
  <SuiButton color="black">Black</SuiButton>
<\/template>`
</script>
