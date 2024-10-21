<template>
  <DocSection label="Bordered Colored" :code="code">
    <template #description>
      The bordered color can appear in the same color as the icon itself
    </template>
    <template #example>
      <SuiIcon name="users" bordered colored color="red" />
      <SuiIcon name="users" bordered colored color="green" />
      <SuiIcon name="users" bordered colored color="blue" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiIcon name="users" bordered colored color="red" />
  <SuiIcon name="users" bordered colored color="green" />
  <SuiIcon name="users" bordered colored color="blue" />
</template>`
</script>
