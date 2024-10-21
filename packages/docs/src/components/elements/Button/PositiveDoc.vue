<template>
  <DocSection label="Positive" :code="code">
    <template #description>
      A button can hint towards a positive consequence
    </template>
    <template #example>
      <SuiButton positive content="Positive Button" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton positive content="Positive Button" />
<\/template>`
</script>
