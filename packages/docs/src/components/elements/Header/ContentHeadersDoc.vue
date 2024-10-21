<template>
  <DocSection label="Content Headers" :code="code">
    <template #description>
      Headers may be oriented to give the importance of a section in the context of the content that surrounds it
    </template>
    <template #example>
      <SuiHeader size="huge">Huge Header</SuiHeader>
      <SuiHeader size="large">Large Header</SuiHeader>
      <SuiHeader size="medium">Medium Header</SuiHeader>
      <SuiHeader size="small">Small Header</SuiHeader>
      <SuiHeader size="tiny">Tiny Header</SuiHeader>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiHeader } from 'vue-fomantic-ui'

const code = `<template>
  <SuiHeader size="huge">Huge Header</SuiHeader>
  <SuiHeader size="large">Large Header</SuiHeader>
  <SuiHeader size="medium">Medium Header</SuiHeader>
  <SuiHeader size="small">Small Header</SuiHeader>
  <SuiHeader size="tiny">Tiny Header</SuiHeader>
<\/template>`
</script>
