<template>
  <DocSection label="Text Alignment" :code="code">
    <template #description>
      A header can have its text aligned to a side
    </template>
    <template #example>
      <SuiSegment>
        <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
        <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
        <SuiHeader as="h3" textAlign="justified">
          This text takes up the full width of the container
        </SuiHeader>
        <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiHeader, SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment>
    <SuiHeader as="h3" textAlign="right">Float Right</SuiHeader>
    <SuiHeader as="h3" textAlign="left">Float Left</SuiHeader>
    <SuiHeader as="h3" textAlign="justified">
      This text takes up the full width of the container
    </SuiHeader>
    <SuiHeader as="h3" textAlign="center">Centered</SuiHeader>
  </SuiSegment>
</template>`
</script>
