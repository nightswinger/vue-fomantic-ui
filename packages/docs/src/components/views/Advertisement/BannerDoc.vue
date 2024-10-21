<template>
  <DocSection label="Banner" :code="code">
    <template #description>
      An ad can use banner ad unit size
    </template>
    <template #example>
      <Advertisement unit="banner" test="Banner" />
      <Advertisement unit="vertical banner" test="Vertical Banner" />
      <Advertisement unit="top banner" test="Top Banner" />
      <Advertisement unit="half banner" test="Half Banner" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { Advertisement } from 'vue-fomantic-ui'

const code = `<template>
  <Advertisement unit="banner" test="Banner" />
  <Advertisement unit="vertical banner" test="Vertical Banner" />
  <Advertisement unit="top banner" test="Top Banner" />
  <Advertisement unit="half banner" test="Half Banner" />
<\/template>`
</script>
