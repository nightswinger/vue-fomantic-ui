<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      A step can show that it cannot be selected
    </template>
    <template #example>
      <StepGroup>
        <Step disabled>
          Billing
        </Step>
      </StepGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Step, StepGroup } from 'vue-fomantic-ui'

const code = `<template>
  <StepGroup>
    <Step disabled>
      Billing
    </Step>
  </StepGroup>
<\/template>`
</script>
