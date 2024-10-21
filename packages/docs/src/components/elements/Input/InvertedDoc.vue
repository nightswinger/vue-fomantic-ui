<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      An input can be formatted to appear on dark backgrounds
    </template>
    <template #example>
      <SuiSegment inverted>
        <SuiInput inverted placeholder="Search..." />
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiInput } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment inverted>
    <SuiInput inverted placeholder="Search..." />
  </SuiSegment>
</template>`
</script>
