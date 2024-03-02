<template>
  <DocSection label="Rounded" :code="code">
    <template #description>
      An image may appear rounded
    </template>
    <template #example>
      <SuiImage size="medium" src="/vue-fomantic-ui/images/wireframe/image.png" rounded />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiImage src="/images/wireframe/image.png" rounded />
<\/template>`
</script>
