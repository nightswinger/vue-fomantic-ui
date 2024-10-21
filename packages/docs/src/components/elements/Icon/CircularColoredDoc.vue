<template>
  <DocSection label="Circular Colored" :code="code">
    <template #description>
      The circular color can appear in the same color as the icon itself
    </template>
    <template #example>
      <SuiIcon name="users" circular colored color="red" />
      <SuiIcon name="users" circular colored color="green" />
      <SuiIcon name="users" circular colored color="blue" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiIcon name="users" circular colored color="red" />
  <SuiIcon name="users" circular colored color="green" />
  <SuiIcon name="users" circular colored color="blue" />
</template>`
</script>
