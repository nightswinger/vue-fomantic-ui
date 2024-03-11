<template>
  <DocSection label="Skyscraper" :code="code">
    <template #description>
      An ad can use skyscraper ad unit size
    </template>
    <template #example>
      <Advertisement unit="skyscraper" test="Skyscraper"  />
      <Advertisement unit="wide skyscraper" test="Wide Skyscraper"  />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { Advertisement } from 'vue-fomantic-ui'

const code = `<template>
  <Advertisement unit="skyscraper" test="Skyscraper"  />
  <Advertisement unit="wide skyscraper" test="Wide Skyscraper"  />
<\/template>`
</script>
