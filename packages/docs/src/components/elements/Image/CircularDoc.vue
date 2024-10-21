<template>
  <DocSection label="Circular" :code="code">
    <template #description>
      An image may appear circular
    </template>
    <template #example>
      <SuiImage size="medium" src="/vue-fomantic-ui/images/wireframe/square-image.png" circular />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiImage src="/images/wireframe/square-image.png" circular />
<\/template>`
</script>
