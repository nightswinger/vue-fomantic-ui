<template>
  <DocSection label="Step" :code="code">
    <template #description>
      A single step
    </template>
    <template #example>
      <StepGroup>
        <Step>Shopping</Step>
      </StepGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { Step, StepGroup } from 'vue-fomantic-ui'

const code = `<template>
  <StepGroup>
    <Step>Shopping</Step>
  </StepGroup>
<\/template>`
</script>
