<template>
  <DocSection label="Netboard" :code="code">
    <template #description>
      An ad can use netboard ad unit size
    </template>
    <template #example>
      <Advertisement unit="netboard" test="Netboard" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Advertisement } from 'vue-fomantic-ui'

const code = `<template>
  <Advertisement unit="netboard" test="Netboard" />
<\/template>`
</script>
