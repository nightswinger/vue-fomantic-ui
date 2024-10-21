<template>
  <DocSection label="Colored" :code="code">
    <template #description>
      A header can have its colors inverted for contrast
    </template>
    <template #example>
      <SuiSegment inverted>
        <SuiHeader as="h4" inverted color="red">Red</SuiHeader>
        <SuiHeader as="h4" inverted color="orange">Orange</SuiHeader>
        <SuiHeader as="h4" inverted color="yellow">Yellow</SuiHeader>
        <SuiHeader as="h4" inverted color="olive">Olive</SuiHeader>
        <SuiHeader as="h4" inverted color="green">Green</SuiHeader>
        <SuiHeader as="h4" inverted color="teal">Teal</SuiHeader>
        <SuiHeader as="h4" inverted color="blue">Blue</SuiHeader>
        <SuiHeader as="h4" inverted color="purple">Purple</SuiHeader>
        <SuiHeader as="h4" inverted color="violet">Violet</SuiHeader>
        <SuiHeader as="h4" inverted color="pink">Pink</SuiHeader>
        <SuiHeader as="h4" inverted color="brown">Brown</SuiHeader>
        <SuiHeader as="h4" inverted color="grey">Grey</SuiHeader>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiHeader,
  SuiSegment,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment inverted>
    <SuiHeader as="h4" inverted color="red">Red</SuiHeader>
    <SuiHeader as="h4" inverted color="orange">Orange</SuiHeader>
    <SuiHeader as="h4" inverted color="yellow">Yellow</SuiHeader>
    <SuiHeader as="h4" inverted color="olive">Olive</SuiHeader>
    <SuiHeader as="h4" inverted color="green">Green</SuiHeader>
    <SuiHeader as="h4" inverted color="teal">Teal</SuiHeader>
    <SuiHeader as="h4" inverted color="blue">Blue</SuiHeader>
    <SuiHeader as="h4" inverted color="purple">Purple</SuiHeader>
    <SuiHeader as="h4" inverted color="violet">Violet</SuiHeader>
    <SuiHeader as="h4" inverted color="pink">Pink</SuiHeader>
    <SuiHeader as="h4" inverted color="brown">Brown</SuiHeader>
    <SuiHeader as="h4" inverted color="grey">Grey</SuiHeader>
  </SuiSegment>
</template>`
</script>
