<template>
  <DocSection label="Loading" :code="code">
    <template #description>
      An emoji can be used as a simple loader
    </template>
    <template #example>
      <SuiEmoji name="angel" loading />
      <SuiEmoji name="blush" loading />
      <SuiEmoji name="grin" loading />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiEmoji } from 'vue-fomantic-ui'

const code = `<template>
  <SuiEmoji name="angel" loading />
  <SuiEmoji name="blush" loading />
  <SuiEmoji name="grin" loading />
<\/template>`
</script>
