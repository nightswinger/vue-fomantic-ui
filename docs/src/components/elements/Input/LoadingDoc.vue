<template>
  <DocSection label="Loading" :code="code">
    <template #description>
      An icon input field can show that it is currently loading data
    </template>
    <template #example>
      <SuiInput loading icon="user" placeholder="Search..." />
      <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiInput } from 'vue-fomantic-ui'

const code = `<template>
  <SuiInput loading icon="user" placeholder="Search..." />
  <SuiInput loading icon="user" iconPosition="left" placeholder="Search..." />
</template>`
</script>
