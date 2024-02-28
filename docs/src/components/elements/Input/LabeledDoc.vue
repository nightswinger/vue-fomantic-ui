<template>
  <DocSection label="Labeled" :code="code">
    <template #description>
      An input can be formatted with a label
    </template>
    <template #example>
      <SuiInput label="http://" placeholder="mysite.com" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiInput } from 'vue-fomantic-ui'

const code = `<template>
  <SuiInput label="http://" placeholder="mysite.com" />
</template>`
</script>
