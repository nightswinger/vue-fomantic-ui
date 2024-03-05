<template>
  <DocSection label="Raised Segments" :code="code">
    <template #description>
      A group of segments can be raised
    </template>
    <template #example>
      <SuiSegmentGroup raised>
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
  <SuiSegmentGroup raised>
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
