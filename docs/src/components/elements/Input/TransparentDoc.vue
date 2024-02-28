<template>
  <DocSection label="Transparent" :code="code">
    <template #description>
      A transparent input has no background
    </template>
    <template #example>
      <SuiInput transparent icon="search" placeholder="Search..." />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiInput } from 'vue-fomantic-ui'

const code = `<template>
  <SuiInput transparent icon="search" placeholder="Search..." />
</template>`
</script>
