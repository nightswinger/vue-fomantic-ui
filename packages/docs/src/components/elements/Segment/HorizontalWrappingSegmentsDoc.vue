<template>
  <DocSection label="Horizontal wrapping Segments" :code="code">
    <template #description>
      A horizontal segment group can automatically wrap their segments on smaller screens
    </template>
    <template #example>
      <SuiSegmentGroup horizontal="wrapping">
        <SuiSegment>
          Segment One
        </SuiSegment>
        <SuiSegment>
          Segment Two
        </SuiSegment>
        <SuiSegment>
          Segment Three
        </SuiSegment>
        <SuiSegment>
          Segment Four
        </SuiSegment>
        <SuiSegment>
          Segment Five
        </SuiSegment>
        <SuiSegment>
          Segment Six
        </SuiSegment>
        <SuiSegment>
          Segment Seven
        </SuiSegment>
        <SuiSegment>
          Segment Eight
        </SuiSegment>
      </SuiSegmentGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment, SuiSegmentGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegmentGroup horizontal="wrapping">
    <SuiSegment>
      Segment One
    </SuiSegment>
    <SuiSegment>
      Segment Two
    </SuiSegment>
    <SuiSegment>
      Segment Three
    </SuiSegment>
    <SuiSegment>
      Segment Four
    </SuiSegment>
    <SuiSegment>
      Segment Five
    </SuiSegment>
    <SuiSegment>
      Segment Six
    </SuiSegment>
    <SuiSegment>
      Segment Seven
    </SuiSegment>
    <SuiSegment>
      Segment Eight
    </SuiSegment>
  </SuiSegmentGroup>
<\/template>`
</script>
