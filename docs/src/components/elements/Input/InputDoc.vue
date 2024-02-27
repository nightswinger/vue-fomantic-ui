<template>
  <DocSection label="Input" :code="code">
    <template #description>
      A standard input
    </template>
    <template #example>
      <SuiInput placeholder="Search..." />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiInput } from 'vue-fomantic-ui'

const code = `<template>
  <SuiInput placeholder="Search..." />
</template>`
</script>
