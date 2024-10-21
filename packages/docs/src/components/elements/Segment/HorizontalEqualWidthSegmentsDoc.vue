<template>
  <DocSection label="Horizontal equal width Segments" :code="code">
    <template #description>
      A horizontal segment group can automatically divide segments to be equal width
    </template>
    <template #example>
      <SuiSegmentGroup horizontal="equal width">
        <SuiSegment>
          Segment One
        </SuiSegment>
        <SuiSegment>
          Segment Two with a lot of additional content
        </SuiSegment>
        <SuiSegment>
          Segment Three
        </SuiSegment>
      </SuiSegmentGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment, SuiSegmentGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegmentGroup horizontal="equal width">
    <SuiSegment>
      Segment One
    </SuiSegment>
    <SuiSegment>
      Segment Two with a lot of additional content
    </SuiSegment>
    <SuiSegment>
      Segment Three
    </SuiSegment>
  </SuiSegmentGroup>
<\/template>`
</script>
