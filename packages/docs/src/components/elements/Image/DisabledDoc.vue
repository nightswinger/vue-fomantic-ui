<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      An image can show that it is disabled and cannot be selected
    </template>
    <template #example>
      <SuiImage size="small" src="/vue-fomantic-ui/images/wireframe/image.png" disabled />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiImage size="small" src="/images/wireframe/image.png" disabled />
<\/template>`
</script>
