<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      A label can show it is currently unable to be interacted with
    </template>
    <template #example>
      <SuiLabel disabled>Disabled Label</SuiLabel>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabel disabled>Disabled Label</SuiLabel>
</template>`
</script>
