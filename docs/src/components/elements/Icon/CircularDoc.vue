<template>
  <DocSection label="Circular" :code="code">
    <template #description>
      An icon can be formatted to appear circular
    </template>
    <template #example>
      <SuiIcon name="users" circular />
      <SuiIcon name="users" circular color="teal" />
      <SuiIcon name="users" circular inverted />
      <SuiIcon name="users" circular inverted color="teal" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiIcon name="users" circular />
  <SuiIcon name="users" circular color="teal" />
  <SuiIcon name="users" circular inverted />
  <SuiIcon name="users" circular inverted color="teal" />
</template>`
</script>
