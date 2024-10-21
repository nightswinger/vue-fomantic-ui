<template>
  <DocSection label="Fluid" :code="code">
    <template #description>
      A label can take the width of its container
    </template>
    <template #example>
      <SuiLabel fluid>Fits container</SuiLabel>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabel fluid>Fits container</SuiLabel>
</template>`
</script>
