<template>
  <DocSection label="Tertiary" :code="code">
    <template #description>
      An none bordered less important button
    </template>
    <template #example>
      <SuiButton tertiary primary>Primary</SuiButton>
      <SuiButton tertiary secondary>Secondary</SuiButton>
      <SuiButton tertiary color="red">Red</SuiButton>
      <SuiButton tertiary color="orange">Orange</SuiButton>
      <SuiButton tertiary color="yellow">Yellow</SuiButton>
      <SuiButton tertiary color="olive">Olive</SuiButton>
      <SuiButton tertiary color="green">Green</SuiButton>
      <SuiButton tertiary color="teal">Teal</SuiButton>
      <SuiButton tertiary color="blue">Blue</SuiButton>
      <SuiButton tertiary color="violet">Violet</SuiButton>
      <SuiButton tertiary color="purple">Purple</SuiButton>
      <SuiButton tertiary color="pink">Pink</SuiButton>
      <SuiButton tertiary color="brown">Brown</SuiButton>
      <SuiButton tertiary color="grey">Grey</SuiButton>
      <SuiButton tertiary color="black">Black</SuiButton>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton tertiary primary>Primary</SuiButton>
  <SuiButton tertiary secondary>Secondary</SuiButton>
  <SuiButton tertiary color="red">Red</SuiButton>
  <SuiButton tertiary color="orange">Orange</SuiButton>
  <SuiButton tertiary color="yellow">Yellow</SuiButton>
  <SuiButton tertiary color="olive">Olive</SuiButton>
  <SuiButton tertiary color="green">Green</SuiButton>
  <SuiButton tertiary color="teal">Teal</SuiButton>
  <SuiButton tertiary color="blue">Blue</SuiButton>
  <SuiButton tertiary color="violet">Violet</SuiButton>
  <SuiButton tertiary color="purple">Purple</SuiButton>
  <SuiButton tertiary color="pink">Pink</SuiButton>
  <SuiButton tertiary color="brown">Brown</SuiButton>
  <SuiButton tertiary color="grey">Grey</SuiButton>
  <SuiButton tertiary color="black">Black</SuiButton>
<\/template>`
</script>
