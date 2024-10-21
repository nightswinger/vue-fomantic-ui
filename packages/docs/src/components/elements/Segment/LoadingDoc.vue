<template>
  <DocSection label="Loading" :code="code">
    <template #description>
      A segment may show its content is being loaded
    </template>
    <template #example>
      <SuiSegment loading>
        <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment, SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment loading>
    <SuiImage src="/images/wireframe/paragraph.png" />
  </SuiSegment>
</template>`
</script>
