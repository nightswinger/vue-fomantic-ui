<template>
  <DocSection label="Link" :code="code">
    <template #description>
      An icon can be formatted as a link
    </template>
    <template #example>
      <SuiIcon name="close" link />
      <SuiIcon name="help" link />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiIcon name="close" link />
  <SuiIcon name="help" link />
</template>`
</script>
