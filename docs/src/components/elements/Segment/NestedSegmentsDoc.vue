<template>
  <DocSection label="Nested Segments" :code="code">
    <template #description>
      A group of segments can be nested in another group of segments
    </template>
    <template #example>
      <SuiSegmentGroup>
        <SuiSegment>
          <p>Top</p>
        </SuiSegment>
        <SuiSegmentGroup>
          <SuiSegment>
            <p>Nested Top</p>
          </SuiSegment>
          <SuiSegment>
            <p>Nested Middle</p>
          </SuiSegment>
          <SuiSegment>
            <p>Nested Bottom</p>
          </SuiSegment>
        </SuiSegmentGroup>
        <SuiSegment>
          <p>Middle</p>
        </SuiSegment>
        <SuiSegmentGroup horizontal>
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
  <SuiSegmentGroup>
    <SuiSegment>
      <p>Top</p>
    </SuiSegment>
    <SuiSegmentGroup>
      <SuiSegment>
        <p>Nested Top</p>
      </SuiSegment>
      <SuiSegment>
        <p>Nested Middle</p>
      </SuiSegment>
      <SuiSegment>
        <p>Nested Bottom</p>
      </SuiSegment>
    </SuiSegmentGroup>
    <SuiSegment>
      <p>Middle</p>
    </SuiSegment>
    <SuiSegmentGroup horizontal>
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
    <SuiSegment>
      <p>Bottom</p>
    </SuiSegment>
  </SuiSegmentGroup>
</template>`
</script>
