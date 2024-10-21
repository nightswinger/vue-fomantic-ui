<template>
  <DocSection label="Image Link" :code="code">
    <template #description>
      An image can be formatted to link to other content
    </template>
    <template #example>
      <SuiImage
        as="a"
        size="medium"
        href="https://google.com"
        src="/vue-fomantic-ui/images/wireframe/image-text.png"
        target="_blank"
      />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiImage
    as="a"
    size="medium"
    href="https://google.com"
    src="/images/wireframe/image-text.png"
    target="_blank"
  />
<\/template>`
</script>
