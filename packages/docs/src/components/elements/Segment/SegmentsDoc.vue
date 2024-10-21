<template>
  <DocSection label="Segments" :code="code">
    <template #description>
      A group of segments can be formatted to appear together
    </template>
    <template #example>
      <SuiSegmentGroup>
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

      <SuiSegmentGroup basic>
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

      <SuiSegmentGroup>
        <SuiSegment>
          <p>Top</p>
        </SuiSegment>
        <SuiSegment color="red">
          <p>Middle</p>
        </SuiSegment>
        <SuiSegment secondary>
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
  <SuiSegmentGroup>
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

  <SuiSegmentGroup basic>
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

  <SuiSegmentGroup>
    <SuiSegment>
      <p>Top</p>
    </SuiSegment>
    <SuiSegment color="red">
      <p>Middle</p>
    </SuiSegment>
    <SuiSegment secondary>
      <p>Bottom</p>
    </SuiSegment>
  </SuiSegmentGroup>
<\/template>`
</script>
