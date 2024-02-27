<template>
  <DocSection label="Colored" :code="code">
    <template #description>
      A header can be formatted with different colors
    </template>
    <template #example>
      <SuiHeader as="h4" primary>Primary</SuiHeader>
      <SuiHeader as="h4" secondary>Secondary</SuiHeader>
      <SuiHeader as="h4" color="red">Red</SuiHeader>
      <SuiHeader as="h4" color="orange">Orange</SuiHeader>
      <SuiHeader as="h4" color="yellow">Yellow</SuiHeader>
      <SuiHeader as="h4" color="olive">Olive</SuiHeader>
      <SuiHeader as="h4" color="green">Green</SuiHeader>
      <SuiHeader as="h4" color="teal">Teal</SuiHeader>
      <SuiHeader as="h4" color="blue">Blue</SuiHeader>
      <SuiHeader as="h4" color="purple">Purple</SuiHeader>
      <SuiHeader as="h4" color="violet">Violet</SuiHeader>
      <SuiHeader as="h4" color="pink">Pink</SuiHeader>
      <SuiHeader as="h4" color="brown">Brown</SuiHeader>
      <SuiHeader as="h4" color="grey">Grey</SuiHeader>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiHeader,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiHeader as="h4" primary>Primary</SuiHeader>
  <SuiHeader as="h4" secondary>Secondary</SuiHeader>
  <SuiHeader as="h4" color="red">Red</SuiHeader>
  <SuiHeader as="h4" color="orange">Orange</SuiHeader>
  <SuiHeader as="h4" color="yellow">Yellow</SuiHeader>
  <SuiHeader as="h4" color="olive">Olive</SuiHeader>
  <SuiHeader as="h4" color="green">Green</SuiHeader>
  <SuiHeader as="h4" color="teal">Teal</SuiHeader>
  <SuiHeader as="h4" color="blue">Blue</SuiHeader>
  <SuiHeader as="h4" color="purple">Purple</SuiHeader>
  <SuiHeader as="h4" color="violet">Violet</SuiHeader>
  <SuiHeader as="h4" color="pink">Pink</SuiHeader>
  <SuiHeader as="h4" color="brown">Brown</SuiHeader>
  <SuiHeader as="h4" color="grey">Grey</SuiHeader>
</template>`
</script>
