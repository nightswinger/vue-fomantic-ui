<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      A segment may show its content is disabled
    </template>
    <template #example>
      <SuiSegment disabled>
        <p>Pellentesque habitant morbi tristique senectus.</p>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment disabled>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
</template>`
</script>
