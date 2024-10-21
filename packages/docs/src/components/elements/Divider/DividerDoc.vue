<template>
  <DocSection label="Divider" :code="code">
    <template #description>
      A standard divider
    </template>
    <template #example>
      <SuiImage wireframe src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
      <SuiDivider />
      <SuiImage wireframe src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiDivider, SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
  <SuiDivider />
  <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
<\/template>`
</script>
