<template>
  <DocSection label="Error" :code="code">
    <template #description>
      An input field can show the data contains errors
    </template>
    <template #example>
      <SuiInput error placeholder="Search..." />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiInput } from 'vue-fomantic-ui'

const code = `<template>
  <SuiInput error placeholder="Search..." />
</template>`
</script>
