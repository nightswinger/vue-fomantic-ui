<template>
  <DocSection label="Colored" :code="code">
    <template #description>
      A segment can be colored
    </template>
    <template #example>
      <SuiSegment color="red">Red</SuiSegment>
      <SuiSegment color="orange">Orange</SuiSegment>
      <SuiSegment color="yellow">Yellow</SuiSegment>
      <SuiSegment color="olive">Olive</SuiSegment>
      <SuiSegment color="green">Green</SuiSegment>
      <SuiSegment color="teal">Teal</SuiSegment>
      <SuiSegment color="blue">Blue</SuiSegment>
      <SuiSegment color="violet">Violet</SuiSegment>
      <SuiSegment color="purple">Purple</SuiSegment>
      <SuiSegment color="pink">Pink</SuiSegment>
      <SuiSegment color="brown">Brown</SuiSegment>
      <SuiSegment color="grey">Grey</SuiSegment>
      <SuiSegment color="black">Black</SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment color="red">Red</SuiSegment>
  <SuiSegment color="orange">Orange</SuiSegment>
  <SuiSegment color="yellow">Yellow</SuiSegment>
  <SuiSegment color="olive">Olive</SuiSegment>
  <SuiSegment color="green">Green</SuiSegment>
  <SuiSegment color="teal">Teal</SuiSegment>
  <SuiSegment color="blue">Blue</SuiSegment>
  <SuiSegment color="violet">Violet</SuiSegment>
  <SuiSegment color="purple">Purple</SuiSegment>
  <SuiSegment color="pink">Pink</SuiSegment>
  <SuiSegment color="brown">Brown</SuiSegment>
  <SuiSegment color="grey">Grey</SuiSegment>
  <SuiSegment color="black">Black</SuiSegment>
</template>`
</script>
