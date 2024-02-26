<template>
  <DocSection label="Loading" :code="code">
    <template #description>
      A button can show a loading indicator
    </template>
    <template #example>
      <SuiButton loading content="Loading" />
      <SuiButton loading="double" primary content="Loading" />
      <SuiButton loading="elastic" secondary content="Loading" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton loading content="Loading" />
  <SuiButton loading="double" primary content="Loading" />
  <SuiButton loading="elastic" secondary content="Loading" />
</template>`
</script>
