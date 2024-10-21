<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      A loader can be disabled or hidden
    </template>
    <template #example>
      <SuiSegment>
        <SuiLoader disabled />

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
    <SuiLoader disabled />

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`
</script>
