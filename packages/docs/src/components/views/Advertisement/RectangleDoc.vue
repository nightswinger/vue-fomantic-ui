<template>
  <DocSection label="Rectangle" :code="code">
    <template #description>
      An ad can use a common rectangle ad unit size
    </template>
    <template #example>
      <Advertisement unit="medium rectangle" test="Medium Rectangle" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { Advertisement } from 'vue-fomantic-ui'

const code = `<template>
  <Advertisement unit="medium rectangle" test="Medium Rectangle" />
<\/template>`
</script>
