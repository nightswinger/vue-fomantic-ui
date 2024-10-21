<template>
  <DocSection label="Bordered" :code="code">
    <template #description>
      An image may include a border to emphasize the edges of white or transparent content    </template>
    <template #example>
      <SuiImage size="medium" src="/vue-fomantic-ui/images/wireframe/white-image.png" bordered />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiImage size="medium" src="/images/wireframe/white-image.png" bordered />
<\/template>`
</script>
