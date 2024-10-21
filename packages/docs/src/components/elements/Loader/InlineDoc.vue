<template>
  <DocSection label="Inline" :code="code">
    <template #description>
      Loaders can appear inline with content
    </template>
    <template #example>
      <SuiLoader active inline />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLoader } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLoader active inline />
</template>`
</script>
