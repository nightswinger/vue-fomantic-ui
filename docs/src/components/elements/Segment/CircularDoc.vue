<template>
  <DocSection label="Circular" :code="code">
    <template #description>
      A segment can be circular
    </template>
    <template #example>
      <SuiSegment circular style="width: 175px; height: 175px;">
        <SuiHeader as="h2">
          Buy Now
          <SuiHeaderSubheader>$10.99</SuiHeaderSubheader>
        </SuiHeader>
      </SuiSegment>
      <SuiSegment circular inverted style="width: 175px; height: 175px;">
        <SuiHeader as="h2">
          Buy Now
          <SuiHeaderSubheader>$10.99</SuiHeaderSubheader>
        </SuiHeader>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment, SuiHeader, SuiHeaderSubheader } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment circular style="width: 175px; height: 175px;">
    <SuiHeader as="h2">
      Buy Now
      <SuiHeaderSubheader>$10.99</SuiHeaderSubheader>
    </SuiHeader>
  </SuiSegment>
  <SuiSegment circular inverted style="width: 175px; height: 175px;">
    <SuiHeader as="h2">
      Buy Now
      <SuiHeaderSubheader>$10.99</SuiHeaderSubheader>
    </SuiHeader>
  </SuiSegment>
</template>`
</script>
