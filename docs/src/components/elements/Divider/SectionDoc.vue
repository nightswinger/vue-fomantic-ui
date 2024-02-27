<template>
  <DocSection label="Section" :code="code">
    <template #description>
      A divider can provide greater margins to divide sections of content
    </template>
    <template #example>
      <SuiHeader>Section One</SuiHeader>
      <SuiImage wireframe src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
      <SuiDivider section />
      <SuiHeader>Section Two</SuiHeader>
      <SuiImage wireframe src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiDivider, SuiImage, SuiHeader } from 'vue-fomantic-ui'

const code = `<template>
  <SuiHeader>Section One</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider section />
  <SuiHeader>Section Two</SuiHeader>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
<\/template>`
</script>
