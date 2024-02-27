<template>
  <DocSection label="Fluid" :code="code">
    <template #description>
      An input can take the size of its container
    </template>
    <template #example>
      <SuiInput fluid icon="search" placeholder="Search..." />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiInput } from 'vue-fomantic-ui'

const code = `<template>
  <SuiInput fluid icon="search" placeholder="Search..." />
</template>`
</script>
