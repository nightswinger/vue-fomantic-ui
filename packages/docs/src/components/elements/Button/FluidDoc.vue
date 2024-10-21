<template>
  <DocSection label="Fluid" :code="code">
    <template #description>
      A button can take the width of its container
    </template>
    <template #example>
      <SuiButton fluid content="Fits container" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton fluid content="Fits container" />
<\/template>`
</script>
