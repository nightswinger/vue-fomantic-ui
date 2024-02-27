<template>
  <DocSection label="Loading" :code="code">
    <template #description>
      An icon can be used as a simple loader
    </template>
    <template #example>
      <SuiIcon name="spinner" loading />
      <SuiIcon name="notched circle" loading />
      <SuiIcon name="asterisk" loading />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiIcon name="spinner" loading />
  <SuiIcon name="notched circle" loading />
  <SuiIcon name="asterisk" loading />
</template>`
</script>
