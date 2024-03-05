<template>
  <DocSection label="Floated" :code="code">
    <template #description>
      A segment can appear to the left or right of other content
    </template>
    <template #example>
      <SuiSegment floated="right">
        <p>This segment will appear to the right</p>
      </SuiSegment>
      <SuiSegment floated="left">
        <p>This segment will appear to the left</p>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment floated="right">
    <p>This segment will appear to the right</p>
  </SuiSegment>
  <SuiSegment floated="left">
    <p>This segment will appear to the left</p>
  </SuiSegment>
</template>`
</script>
