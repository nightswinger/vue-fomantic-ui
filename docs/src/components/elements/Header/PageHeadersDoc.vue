<template>
  <DocSection label="Page Headers" :code="code">
    <template #description>
      Headers may be oriented to give the hierarchy of a section in the context of the page
    </template>
    <template #example>
      <SuiHeader as="h1">First Header</SuiHeader>
      <SuiHeader as="h2">Second Header</SuiHeader>
      <SuiHeader as="h3">Third Header</SuiHeader>
      <SuiHeader as="h4">Fourth Header</SuiHeader>
      <SuiHeader as="h5">Fifth Header</SuiHeader>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiHeader } from 'vue-fomantic-ui'

const code = `<template>
  <SuiHeader as="h1">First Header</SuiHeader>
  <SuiHeader as="h2">Second Header</SuiHeader>
  <SuiHeader as="h3">Third Header</SuiHeader>
  <SuiHeader as="h4">Fourth Header</SuiHeader>
  <SuiHeader as="h5">Fifth Header</SuiHeader>
<\/template>`
</script>
