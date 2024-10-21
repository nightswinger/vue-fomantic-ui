<template>
  <DocSection label="Colored" :code="code">
    <template #description>
      A label can have different colors
    </template>
    <template #example>
      <SuiLabel as="a" primary>Primary</SuiLabel>
      <SuiLabel as="a" secondary>Secondary</SuiLabel>
      <SuiLabel as="a" color="red">Red</SuiLabel>
      <SuiLabel as="a" color="orange">Orange</SuiLabel>
      <SuiLabel as="a" color="yellow">Yellow</SuiLabel>
      <SuiLabel as="a" color="olive">Olive</SuiLabel>
      <SuiLabel as="a" color="green">Green</SuiLabel>
      <SuiLabel as="a" color="teal">Teal</SuiLabel>
      <SuiLabel as="a" color="blue">Blue</SuiLabel>
      <SuiLabel as="a" color="violet">Violet</SuiLabel>
      <SuiLabel as="a" color="purple">Purple</SuiLabel>
      <SuiLabel as="a" color="pink">Pink</SuiLabel>
      <SuiLabel as="a" color="brown">Brown</SuiLabel>
      <SuiLabel as="a" color="grey">Grey</SuiLabel>
      <SuiLabel as="a" color="black">Black</SuiLabel>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabel as="a" primary>Primary</SuiLabel>
  <SuiLabel as="a" secondary>Secondary</SuiLabel>
  <SuiLabel as="a" color="red">Red</SuiLabel>
  <SuiLabel as="a" color="orange">Orange</SuiLabel>
  <SuiLabel as="a" color="yellow">Yellow</SuiLabel>
  <SuiLabel as="a" color="olive">Olive</SuiLabel>
  <SuiLabel as="a" color="green">Green</SuiLabel>
  <SuiLabel as="a" color="teal">Teal</SuiLabel>
  <SuiLabel as="a" color="blue">Blue</SuiLabel>
  <SuiLabel as="a" color="violet">Violet</SuiLabel>
  <SuiLabel as="a" color="purple">Purple</SuiLabel>
  <SuiLabel as="a" color="pink">Pink</SuiLabel>
  <SuiLabel as="a" color="brown">Brown</SuiLabel>
  <SuiLabel as="a" color="grey">Grey</SuiLabel>
  <SuiLabel as="a" color="black">Black</SuiLabel>
</template>`
</script>
