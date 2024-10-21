<template>
  <DocSection label="Image" :code="code">
    <template #description>
      A header may contain an image
    </template>
    <template #example>
      <SuiHeader as="h2">
        <SuiImage src="/vue-fomantic-ui/images/avatar/large/steve.jpg" avatar />
        Steve
      </SuiHeader>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiHeader, SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiHeader as="h2">
    <SuiImage src="/images/avatar/large/steve.jpg" avatar />
    Steve
  </SuiHeader>
<\/template>`
</script>
