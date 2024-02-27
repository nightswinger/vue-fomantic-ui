<template>
  <DocSection label="Size" :code="code">
    <template #description>
      An emoji can vary in size
    </template>
    <template #example>
      <SuiEmoji name="relaxed" size="small" />
      <SuiEmoji name="relaxed" size="medium" />
      <SuiEmoji name="relaxed" size="large" />
      <SuiEmoji name="relaxed" size="big" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiEmoji } from 'vue-fomantic-ui'

const code = `<template>
  <SuiEmoji name="relaxed" size="small" />
  <SuiEmoji name="relaxed" size="medium" />
  <SuiEmoji name="relaxed" size="large" />
  <SuiEmoji name="relaxed" size="big" />
<\/template>`
</script>
