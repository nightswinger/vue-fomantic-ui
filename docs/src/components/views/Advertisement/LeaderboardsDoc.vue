<template>
  <DocSection label="Leaderboards" :code="code">
    <template #description>
      An ad can use leaderboard ad unit size
    </template>
    <template #example>
      <Advertisement unit="leaderboard" test="Leaderboard" />
      <Advertisement unit="large leaderboard" test="Large Leaderboard" />
      <Advertisement unit="billboard" test="Billboard" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { Advertisement } from 'vue-fomantic-ui'

const code = `<template>
  <Advertisement unit="leaderboard" test="Leaderboard" />
  <Advertisement unit="large leaderboard" test="Large Leaderboard" />
  <Advertisement unit="billboard" test="Billboard" />
<\/template>`
</script>
