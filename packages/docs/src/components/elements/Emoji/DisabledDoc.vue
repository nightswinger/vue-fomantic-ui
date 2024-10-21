<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      An emoji can show that it is disabled
    </template>
    <template #example>
      <SuiEmoji name="anguished" disabled />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiEmoji } from 'vue-fomantic-ui'

const code = `<template>
  <SuiEmoji name="anguished" disabled />
<\/template>`
</script>
