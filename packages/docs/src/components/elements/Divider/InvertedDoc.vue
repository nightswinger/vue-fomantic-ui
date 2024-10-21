<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      A divider can have its colors inverted
    </template>
    <template #example>
      <SuiSegment inverted>
        <SuiImage wireframe src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
        <SuiDivider inverted />
        <SuiImage wireframe src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
        <SuiDivider horizontal inverted>Horizontal</SuiDivider>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiDivider, SuiImage, SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment inverted>
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider inverted />
    <SuiImage wireframe src="/images/wireframe/short-paragraph.png" />
    <SuiDivider horizontal inverted>Horizontal</SuiDivider>
  </SuiSegment>
</template>`
</script>
