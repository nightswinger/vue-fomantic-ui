<template>
  <DocSection label="Segment" :code="code">
    <template #description>
      A segment of content
    </template>
    <template #example>
      <SuiSegment>
        <p>Pellentesque habitant morbi tristique senectus.</p>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`
</script>
