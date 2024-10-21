<template>
  <DocSection label="Clearing" :code="code">
    <template #description>
      A divider can clear the contents above it
    </template>
    <template #example>
      <SuiSegment>
        <SuiHeader floated="right">Section One</SuiHeader>
        <SuiDivider clearing />
        <SuiImage wireframe src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiDivider, SuiImage, SuiHeader, SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment>
    <SuiHeader floated="right">Section One</SuiHeader>
    <SuiDivider clearing />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
<\/template>`
</script>
