<template>
  <DocSection label="Negative" :code="code">
    <template #description>
      A button can hint towards a negative consequence
    </template>
    <template #example>
      <SuiButton negative content="Negative Button" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton negative content="Negative Button" />
<\/template>`
</script>
