<template>
  <DocSection label="Size" :code="code">
    <template #description>
      An image may appear at different sizes
    </template>
    <template #example>
      <SuiImage size="mini" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <SuiDivider hidden />
      <SuiImage size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <SuiDivider hidden />
      <SuiImage size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <SuiDivider hidden />
      <SuiImage size="medium" src="/vue-fomantic-ui/images/wireframe/image.png" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiImage, SuiDivider } from 'vue-fomantic-ui'

const code = `<template>
  <SuiImage size="mini" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="tiny" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="small" src="/images/wireframe/image.png" />
  <SuiDivider hidden />
  <SuiImage size="medium" src="/images/wireframe/image.png" />
<\/template>`
</script>
