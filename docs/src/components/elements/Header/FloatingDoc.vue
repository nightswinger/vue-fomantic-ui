<template>
  <DocSection label="Floating" :code="code">
    <template #description>
      A header can sit to the left or right of other content
    </template>
    <template #example>
      <SuiSegment clearing>
        <SuiHeader as="h3" floated="right">
          Go Forward
        </SuiHeader>
        <SuiHeader as="h3" floated="left">
          Go Back
        </SuiHeader>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiHeader,
  SuiSegment,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment clearing>
    <SuiHeader as="h3" floated="right">
      Go Forward
    </SuiHeader>
    <SuiHeader as="h3" floated="left">
      Go Back
    </SuiHeader>
  </SuiSegment>
</template>`
</script>
