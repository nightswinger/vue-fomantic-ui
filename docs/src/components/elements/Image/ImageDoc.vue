<template>
  <DocSection label="Image" :code="code">
    <template #description>
      An image
    </template>
    <template #example>
      <SuiImage size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiImage size="small" src="/images/wireframe/image.png" />
<\/template>`
</script>
