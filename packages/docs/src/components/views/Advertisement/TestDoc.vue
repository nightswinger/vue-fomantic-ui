<template>
  <DocSection label="Test" :code="code">
    <template #description>
      A advertisement can be formatted to help verify placement
    </template>
    <template #example>
      <Advertisement unit="medium rectangle" test="Ad Unit 1" /> 
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
