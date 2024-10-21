<template>
  <DocSection label="Mobile" :code="code">
    <template #description>
      An ad can use common mobile ad sizes
    </template>
    <template #example>
      <Advertisement unit="mobile banner" test="Mobile Banner" />
      <Advertisement unit="mobile leaderboard" test="Mobile Leaderboard" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { Advertisement } from 'vue-fomantic-ui'

const code = `<template>
  <Advertisement unit="mobile banner" test="Mobile Banner" />
  <Advertisement unit="mobile leaderboard" test="Mobile Leaderboard" />
<\/template>`
</script>
