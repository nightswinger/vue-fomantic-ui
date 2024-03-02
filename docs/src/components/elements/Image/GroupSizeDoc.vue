<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A group of images can be formatted to have the same size.
    </template>
    <template #example>
      <SuiImageGroup size="tiny">
        <SuiImage src="/vue-fomantic-ui/images/wireframe/image.png" />
        <SuiImage src="/vue-fomantic-ui/images/wireframe/image.png" />
        <SuiImage src="/vue-fomantic-ui/images/wireframe/image.png" />
        <SuiImage src="/vue-fomantic-ui/images/wireframe/image.png" />
      </SuiImageGroup>
      <SuiDivider hidden />
      <SuiImageGroup size="small">
        <SuiImage src="/vue-fomantic-ui/images/wireframe/image.png" />
        <SuiImage src="/vue-fomantic-ui/images/wireframe/image.png" />
        <SuiImage src="/vue-fomantic-ui/images/wireframe/image.png" />
        <SuiImage src="/vue-fomantic-ui/images/wireframe/image.png" />
      </SuiImageGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiImage, SuiImageGroup, SuiDivider } from 'vue-fomantic-ui'

const code = `<template>
  <SuiImageGroup size="tiny">
    <SuiImage src="/images/wireframe/image.png" />
    <SuiImage src="/images/wireframe/image.png" />
    <SuiImage src="/images/wireframe/image.png" />
    <SuiImage src="/images/wireframe/image.png" />
  </SuiImageGroup>
  <SuiDivider hidden />
  <SuiImageGroup size="small">
    <SuiImage src="/images/wireframe/image.png" />
    <SuiImage src="/images/wireframe/image.png" />
    <SuiImage src="/images/wireframe/image.png" />
    <SuiImage src="/images/wireframe/image.png" />
  </SuiImageGroup>
<\/template>`
</script>
