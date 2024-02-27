<template>
  <DocSection label="Autosizing" :code="code">
    <template #description>
      If no specific size class is given, all flags are automatically sized according to the current element font-size
    </template>
    <template #example>
      <SuiHeader size="small">
        Within a Header
        <SuiFlag name="us" />
      </SuiHeader>
      <SuiButton as="div" size="large">
        Within a Button
        <SuiFlag name="eu" />
      </SuiButton>
      <SuiLabel size="massive">
        Within a Label
        <SuiFlag name="pirate" />
      </SuiLabel>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiFlag, SuiHeader, SuiButton, SuiLabel } from 'vue-fomantic-ui'

const code = `<template>
  <SuiHeader size="small">
    Within a Header
    <SuiEmoji name="relaxed" />
  </SuiHeader>
  <SuiButton as="div" size="large">
    Within a Button
    <SuiEmoji name="relaxed" />
  </SuiButton>
  <SuiLabel size="massive">
    Within a Label
    <SuiEmoji name="relaxed" />
  </SuiLabel>
<\/template>`
</script>
