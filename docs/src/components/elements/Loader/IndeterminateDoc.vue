<template>
  <DocSection label="Indeterminate" :code="code">
    <template #description>
      A loader can show it's unsure of how long a task will take
    </template>
    <template #example>
      <SuiSegment>
        <SuiDimmer active>
          <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
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
      <SuiLoader Indeterminate text>Preparing Files</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`
</script>
