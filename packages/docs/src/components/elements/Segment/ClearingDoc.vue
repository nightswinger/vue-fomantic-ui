<template>
  <DocSection label="Clearing" :code="code">
    <template #description>
      A segment can clear floated content
    </template>
    <template #example>
      <SuiSegment clearing>
        <SuiButton floated="right" content="Floated" />
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment, SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment clearing>
    <SuiButton floated="right" content="Floated" />
  </SuiSegment>
</template>`
</script>
