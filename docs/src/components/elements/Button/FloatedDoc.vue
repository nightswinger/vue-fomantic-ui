<template>
  <DocSection label="Floated" :code="code">
    <template #description>
      A button can be aligned to the left or right of its container
    </template>
    <template #example>
      <SuiButton floated="left" content="Left Floated" />
      <SuiButton floated="right" content="Right Floated" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton floated="left" content="Left Floated" />
  <SuiButton floated="right" content="Right Floated" />
<\/template>`
</script>
