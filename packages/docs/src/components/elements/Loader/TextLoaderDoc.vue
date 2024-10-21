<template>
  <DocSection label="Text Loader" :code="code">
    <template #description>
      A loader can contain text
    </template>
    <template #example>
      <SuiSegment>
        <SuiDimmer active>
          <SuiLoader text>Loading</SuiLoader>
        </SuiDimmer>

        <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLoader, SuiSegment, SuiDimmer, SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text>Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`
</script>
