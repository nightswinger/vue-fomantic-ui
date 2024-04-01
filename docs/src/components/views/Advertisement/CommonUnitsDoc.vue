<template>
  <DocSection label="Common Units" :code="code">
    <template #description>
      An advertisement can appear in common ad unit sizes
    </template>
    <template #example>
      <Advertisement unit="medium rectangle" test="Medium Rectangle" />
      <Advertisement unit="banner" test="Banner" />
      <Advertisement unit="leaderboard" test="Leaderboard" />
      <Advertisement unit="large rectangle" test="Large Rectangle" />
      <Advertisement unit="half page" test="Half Page" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { Advertisement } from 'vue-fomantic-ui'

const code = `<template>
  <Advertisement unit="medium rectangle" test="Medium Rectangle" />
  <Advertisement unit="banner" test="Banner" />
  <Advertisement unit="leaderboard" test="Leaderboard" />
  <Advertisement unit="large rectangle" test="Large Rectangle" />
  <Advertisement unit="half page" test="Half Page" />
<\/template>`
</script>
