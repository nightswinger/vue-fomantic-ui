<template>
  <DocSection label="Avatar" :code="code">
    <template #description>
      An image may be formatted to appear inline with text as an avatar
    </template>
    <template #example>
      <SuiImage src="/vue-fomantic-ui/images/wireframe/square-image.png" avatar />
      <span>Username</span>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiImage src="/images/wireframe/square-image.png" avatar />
  <span>Username</span>
<\/template>`
</script>
