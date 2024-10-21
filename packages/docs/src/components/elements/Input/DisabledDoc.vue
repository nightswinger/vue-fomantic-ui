<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      An input field can show that it is disabled
    </template>
    <template #example>
      <SuiInput disabled placeholder="Search..." />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiInput } from 'vue-fomantic-ui'

const code = `<template>
  <SuiInput disabled placeholder="Search..." />
</template>`
</script>
