<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      A segment can have its colors inverted for contrast
    </template>
    <template #example>
      <SuiSegment inverted>
        <p>I'm here to tell you something, and you will probably read me first.</p>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
</template>`
</script>
