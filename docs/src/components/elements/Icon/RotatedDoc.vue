<template>
  <DocSection label="Rotated" :code="code">
    <template #description>
      An icon can be rotated
    </template>
    <template #example>
      <SuiIcon name="cloud" rotated="clockwise" />
      <SuiIcon name="cloud" rotated="counterclockwise" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiIcon name="cloud" rotated="clockwise" />
  <SuiIcon name="cloud" rotated="counterclockwise" />
</template>`
</script>
