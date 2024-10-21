<template>
  <DocSection label="Circular" :code="code">
    <template #description>
      A button can be circular
    </template>
    <template #example>
      <SuiButton circular icon="settings" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton circular icon="settings" />
<\/template>`
</script>
