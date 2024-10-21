<template>
  <DocSection label="Placeholder Segment" :code="code">
    <template #description>
      A segment can be used to reserve space for conditionally displayed content.
    </template>
    <template #example>
      <SuiSegment placeholder>
        <SuiHeader icon>
          <SuiIcon name="pdf file outline" />
          No documents are listed for this customer.
        </SuiHeader>
        <SuiButton primary>Add Document</SuiButton>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment, SuiIcon, SuiHeader, SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment placeholder>
    <SuiHeader icon>
      <SuiIcon name="pdf file outline" />
      No documents are listed for this customer.
    </SuiHeader>
    <SuiButton primary>Add Document</SuiButton>
  </SuiSegment>
</template>`
</script>
