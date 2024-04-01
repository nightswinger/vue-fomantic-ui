<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      All Variants of Label can be inverted
    </template>
    <template #example>
      <SuiSegment inverted>
        <SuiLabel as="a" inverted primary>Primary</SuiLabel>
        <SuiLabel as="a" inverted secondary>Secondary</SuiLabel>
        <SuiLabel as="a" inverted color="red">Red</SuiLabel>
        <SuiLabel as="a" inverted color="orange">Orange</SuiLabel>
        <SuiLabel as="a" inverted color="yellow">Yellow</SuiLabel>
        <SuiLabel as="a" basic inverted color="olive">Olive</SuiLabel>
        <SuiLabel as="a" basic inverted color="green">Green</SuiLabel>
        <SuiLabel as="a" basic inverted color="teal">Teal</SuiLabel>
        <SuiLabel as="a" basic inverted color="blue">Blue</SuiLabel>
        <SuiLabel as="a" basic inverted color="violet">Violet</SuiLabel>
        <SuiLabel as="a" tag inverted color="purple">Purple</SuiLabel>
        <SuiLabel as="a" tag inverted color="pink">Pink</SuiLabel>
        <SuiLabel as="a" tag inverted color="brown">Brown</SuiLabel>
        <SuiLabel as="a" tag inverted color="grey">Grey</SuiLabel>
        <SuiLabel as="a" tag inverted color="black">Black</SuiLabel>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel, SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment inverted>
    <SuiLabel as="a" inverted primary>Primary</SuiLabel>
    <SuiLabel as="a" inverted secondary>Secondary</SuiLabel>
    <SuiLabel as="a" inverted color="red">Red</SuiLabel>
    <SuiLabel as="a" inverted color="orange">Orange</SuiLabel>
    <SuiLabel as="a" inverted color="yellow">Yellow</SuiLabel>
    <SuiLabel as="a" basic inverted color="olive">Olive</SuiLabel>
    <SuiLabel as="a" basic inverted color="green">Green</SuiLabel>
    <SuiLabel as="a" basic inverted color="teal">Teal</SuiLabel>
    <SuiLabel as="a" basic inverted color="blue">Blue</SuiLabel>
    <SuiLabel as="a" basic inverted color="violet">Violet</SuiLabel>
    <SuiLabel as="a" tag inverted color="purple">Purple</SuiLabel>
    <SuiLabel as="a" tag inverted color="pink">Pink</SuiLabel>
    <SuiLabel as="a" tag inverted color="brown">Brown</SuiLabel>
    <SuiLabel as="a" tag inverted color="grey">Grey</SuiLabel>
    <SuiLabel as="a" tag inverted color="black">Black</SuiLabel>
  </SuiSegment>
</template>`
</script>
