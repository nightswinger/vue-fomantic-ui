<template>
  <DocSection label="Flipped" :code="code">
    <template #description>
      An icon can be flipped
    </template>
    <template #example>
      <SuiIcon name="cloud" flipped="horizontally" />
      <SuiIcon name="cloud" flipped="vertically" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiIcon name="cloud" flipped="horizontally" />
  <SuiIcon name="cloud" flipped="vertically" />
</template>`
</script>
