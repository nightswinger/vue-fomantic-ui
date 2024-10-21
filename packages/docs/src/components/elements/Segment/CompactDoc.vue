<template>
  <DocSection label="Compact" :code="code">
    <template #description>
      A segment may take up only as much space as is necessary
    </template>
    <template #example>
      <SuiSegment compact>
        <p>Pellentesque habitant morbi</p>
      </SuiSegment>
      <SuiSegmentGroup compact>
        <SuiSegment>
          <p>Pellentesque habitant morbi</p>
        </SuiSegment>
        <SuiSegment>
          <p>Pellentesque habitant morbi</p>
        </SuiSegment>
      </SuiSegmentGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment, SuiSegmentGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment compact>
    <p>Pellentesque habitant morbi</p>
  </SuiSegment>
  <SuiSegmentGroup compact>
    <SuiSegment>
      <p>Pellentesque habitant morbi</p>
    </SuiSegment>
    <SuiSegment>
      <p>Pellentesque habitant morbi</p>
    </SuiSegment>
  </SuiSegmentGroup>
</template>`
</script>
