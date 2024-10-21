<template>
  <DocSection label="Fitted" :code="code">
    <template #description>
      A segment can remove its padding, vertically or horizontally
    </template>
    <template #example>
      <SuiSegment fitted>
        <p>Fitted Segment</p>
      </SuiSegment>
      <SuiSegment fitted="horizontally">
        <p>Horizontally fitted segment</p>
      </SuiSegment>
      <SuiSegment fitted="vertically">
        <p>Vertically fitted segment</p>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment fitted>
    <p>Fitted Segment</p>
  </SuiSegment>
  <SuiSegment fitted="horizontally">
    <p>Horizontally fitted segment</p>
  </SuiSegment>
  <SuiSegment fitted="vertically">
    <p>Vertically fitted segment</p>
  </SuiSegment>
</template>`
</script>
