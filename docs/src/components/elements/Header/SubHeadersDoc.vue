<template>
  <DocSection label="Sub Headers" :code="code">
    <template #description>
      Headers may be formatted to label smaller or de-emphasized content.
    </template>
    <template #example>
      <SuiHeader sub>Price</SuiHeader>
      <span>$10.99</span>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiHeader,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiHeader sub>Price</SuiHeader>
  <span>$10.99</span>
<\/template>`
</script>
