<template>
  <DocSection label="Active" :code="code">
    <template #description>
      A loader can be active or visible
    </template>
    <template #example>
      <SuiSegment>
        <SuiLoader active />

        <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLoader, SuiSegment, SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment>
    <SuiLoader active />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`
</script>
