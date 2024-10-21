<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      A button can be formatted to appear on dark backgrounds
    </template>
    <template #example>
      <SuiSegment inverted>
        <SuiButton inverted primary>Primary</SuiButton>
        <SuiButton inverted secondary>Secondary</SuiButton>
        <SuiButton inverted color="red">Red</SuiButton>
        <SuiButton inverted color="orange">Orange</SuiButton>
        <SuiButton inverted color="yellow">Yellow</SuiButton>
        <SuiButton inverted color="olive">Olive</SuiButton>
        <SuiButton inverted color="green">Green</SuiButton>
        <SuiButton inverted color="teal">Teal</SuiButton>
        <SuiButton inverted color="blue">Blue</SuiButton>
        <SuiButton inverted color="violet">Violet</SuiButton>
        <SuiButton inverted color="purple">Purple</SuiButton>
        <SuiButton inverted color="pink">Pink</SuiButton>
        <SuiButton inverted color="brown">Brown</SuiButton>
        <SuiButton inverted color="grey">Grey</SuiButton>
        <SuiButton inverted color="black">Black</SuiButton>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton, SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment inverted>
    <SuiButton inverted primary>Primary</SuiButton>
    <SuiButton inverted secondary>Secondary</SuiButton>
    <SuiButton inverted color="red">Red</SuiButton>
    <SuiButton inverted color="orange">Orange</SuiButton>
    <SuiButton inverted color="yellow">Yellow</SuiButton>
    <SuiButton inverted color="olive">Olive</SuiButton>
    <SuiButton inverted color="green">Green</SuiButton>
    <SuiButton inverted color="teal">Teal</SuiButton>
    <SuiButton inverted color="blue">Blue</SuiButton>
    <SuiButton inverted color="violet">Violet</SuiButton>
    <SuiButton inverted color="purple">Purple</SuiButton>
    <SuiButton inverted color="pink">Pink</SuiButton>
    <SuiButton inverted color="brown">Brown</SuiButton>
    <SuiButton inverted color="grey">Grey</SuiButton>
    <SuiButton inverted color="black">Black</SuiButton>
  </SuiSegment>
<\/template>`
</script>
