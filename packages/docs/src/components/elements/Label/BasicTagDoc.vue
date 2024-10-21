<template>
  <DocSection label="Basic Tag" :code="code">
    <template #description>
    </template>
    <template #example>
      <SuiLabel as="a" basic tag primary>Primary</SuiLabel>
      <SuiLabel as="a" basic tag secondary>Secondary</SuiLabel>
      <SuiLabel as="a" basic tag color="red">Red</SuiLabel>
      <SuiLabel as="a" basic tag color="orange">Orange</SuiLabel>
      <SuiLabel as="a" basic tag color="yellow">Yellow</SuiLabel>
      <SuiLabel as="a" basic tag color="olive">Olive</SuiLabel>
      <SuiLabel as="a" basic tag color="green">Green</SuiLabel>
      <SuiLabel as="a" basic tag color="teal">Teal</SuiLabel>
      <SuiLabel as="a" basic tag color="blue">Blue</SuiLabel>
      <SuiLabel as="a" basic tag color="violet">Violet</SuiLabel>
      <SuiLabel as="a" basic tag color="purple">Purple</SuiLabel>
      <SuiLabel as="a" basic tag color="pink">Pink</SuiLabel>
      <SuiLabel as="a" basic tag color="brown">Brown</SuiLabel>
      <SuiLabel as="a" basic tag color="grey">Grey</SuiLabel>
      <SuiLabel as="a" basic tag color="black">Black</SuiLabel>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabel as="a" basic tag primary>Primary</SuiLabel>
  <SuiLabel as="a" basic tag secondary>Secondary</SuiLabel>
  <SuiLabel as="a" basic tag color="red">Red</SuiLabel>
  <SuiLabel as="a" basic tag color="orange">Orange</SuiLabel>
  <SuiLabel as="a" basic tag color="yellow">Yellow</SuiLabel>
  <SuiLabel as="a" basic tag color="olive">Olive</SuiLabel>
  <SuiLabel as="a" basic tag color="green">Green</SuiLabel>
  <SuiLabel as="a" basic tag color="teal">Teal</SuiLabel>
  <SuiLabel as="a" basic tag color="blue">Blue</SuiLabel>
  <SuiLabel as="a" basic tag color="violet">Violet</SuiLabel>
  <SuiLabel as="a" basic tag color="purple">Purple</SuiLabel>
  <SuiLabel as="a" basic tag color="pink">Pink</SuiLabel>
  <SuiLabel as="a" basic tag color="brown">Brown</SuiLabel>
  <SuiLabel as="a" basic tag color="grey">Grey</SuiLabel>
  <SuiLabel as="a" basic tag color="black">Black</SuiLabel>
</template>`
</script>
