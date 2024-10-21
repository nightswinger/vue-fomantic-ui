<template>
  <DocSection label="Piled Segments" :code="code">
    <template #description>
      A group of segments can be piled
    </template>
    <template #example>
      <SuiSegmentGroup piled>
        <SuiSegment>
          <p>Top</p>
        </SuiSegment>
        <SuiSegment>
          <p>Middle</p>
        </SuiSegment>
        <SuiSegment>
          <p>Bottom</p>
        </SuiSegment>
      </SuiSegmentGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment, SuiSegmentGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegmentGroup piled>
    <SuiSegment>
      <p>Top</p>
    </SuiSegment>
    <SuiSegment>
      <p>Middle</p>
    </SuiSegment>
    <SuiSegment>
      <p>Bottom</p>
    </SuiSegment>
  </SuiSegmentGroup>
<\/template>`
</script>
