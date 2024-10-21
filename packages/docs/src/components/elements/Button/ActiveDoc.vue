<template>
  <DocSection label="Active" :code="code">
    <template #description>
      A button can show it is currently the active user selection
    </template>
    <template #example>
      <SuiButton active icon="user" content=" Follow" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton active icon="user" content=" Follow" />
<\/template>`
</script>
