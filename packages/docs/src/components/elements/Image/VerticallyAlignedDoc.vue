<template>
  <DocSection label="Vertically Aligned" :code="code">
    <template #description>
      An image can specify its vertical alignment
    </template>
    <template #example>
      <SuiImage verticalAlign="top" size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <span>Top Aligned</span>
      <SuiDivider />
      <SuiImage verticalAlign="middle" size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <span>Middle Aligned</span>
      <SuiDivider />
      <SuiImage verticalAlign="bottom" size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <span>Bottom Aligned</span>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiImage, SuiDivider } from 'vue-fomantic-ui'

const code = `<template>
  <SuiImage verticalAlign="top" size="tiny" src="/images/wireframe/image.png" />
  <span>Top Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="middle" size="tiny" src="/images/wireframe/image.png" />
  <span>Middle Aligned</span>
  <SuiDivider />
  <SuiImage verticalAlign="bottom" size="tiny" src="/images/wireframe/image.png" />
  <span>Bottom Aligned</span>
<\/template>`
</script>
