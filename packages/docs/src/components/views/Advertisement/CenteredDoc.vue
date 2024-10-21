<template>
  <DocSection label="Centered" :code="code">
    <template #description>
      An advertisement can appear centered
    </template>
    <template #example>
      <Advertisement centered unit="banner" test="Centered" /> 
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Advertisement } from 'vue-fomantic-ui'

const code = `<template>
  <Advertisement centered unit="banner" test="Centered" />
<\/template>`
</script>
