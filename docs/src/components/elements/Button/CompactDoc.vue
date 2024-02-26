<template>
  <DocSection label="Compact" :code="code">
    <template #description>
      A button can reduce its padding to fit into tighter spaces
    </template>
    <template #example>
      <SuiButton compact content="Hold" />
      <SuiButton compact icon="pause" />
      <SuiButton compact labeled icon="pause" content="Pause" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton compact content="Hold" />
  <SuiButton compact icon="pause" />
  <SuiButton compact labeled icon="pause" content="Pause" />
<\/template>`
</script>
