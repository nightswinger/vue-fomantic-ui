<template>
  <DocSection label="Fluid" :code="code">
    <template #description>
      An image can take up the width of its container
    </template>
    <template #example>
      <SuiImage src="/vue-fomantic-ui/images/wireframe/image.png" fluid />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiImage src="/images/wireframe/image.png" fluid />
<\/template>`
</script>
