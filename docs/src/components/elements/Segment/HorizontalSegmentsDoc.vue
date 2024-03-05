<template>
  <DocSection label="Horizontal Segments" :code="code">
    <template #description>
      A segment group can appear horizontally
    </template>
    <template #example>
      <SuiSegmentGroup horizontal>
        <SuiSegment>
          <p>Left</p>
        </SuiSegment>
        <SuiSegment>
          <p>Middle</p>
        </SuiSegment>
        <SuiSegment>
          <p>Right</p>
        </SuiSegment>
      </SuiSegmentGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment, SuiSegmentGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegmentGroup horizontal>
    <SuiSegment>
      <p>Left</p>
    </SuiSegment>
    <SuiSegment>
      <p>Middle</p>
    </SuiSegment>
    <SuiSegment>
      <p>Right</p>
    </SuiSegment>
  </SuiSegmentGroup>
<\/template>`
</script>
