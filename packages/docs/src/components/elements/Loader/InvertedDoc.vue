<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      Loaders can have their colors inverted.
    </template>
    <template #example>
      <SuiSegment inverted>
        <SuiLoader active inverted />

        <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLoader, SuiSegment, SuiDimmer, SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment inverted>
    <SuiLoader active inverted />

    <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`
</script>
