<template>
  <DocSection label="Attached" :code="code">
    <template #description>
      A segment can be attached to other content on a page
    </template>
    <template #example>
      <SuiSegment attached="top">
        <p>This segment is on top</p>
      </SuiSegment>
      <SuiSegment attached>
        <p>This segment is attached on both sides</p>
      </SuiSegment>
      <SuiSegment attached="bottom">
        <p>This segment is on bottom</p>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment attached="top">
    <p>This segment is on top</p>
  </SuiSegment>
  <SuiSegment attached>
    <p>This segment is attached on both sides</p>
  </SuiSegment>
  <SuiSegment attached="bottom">
    <p>This segment is on bottom</p>
  </SuiSegment>
</template>`
</script>