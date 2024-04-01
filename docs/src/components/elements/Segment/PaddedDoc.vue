<template>
  <DocSection label="Padded" :code="code">
    <template #description>
      A segment can increase its padding
    </template>
    <template #example>
      <SuiSegment padded>
        <p>Padded content.</p>
      </SuiSegment>
      <SuiSegment padded="very">
        <p>Padded content.</p>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment padded>
    <p>Padded content.</p>
  </SuiSegment>
  <SuiSegment padded="very">
    <p>Padded content.</p>
  </SuiSegment>
</template>`
</script>
