<template>
  <DocSection label="Active" :code="code">
    <template #description>
      A step can be highlighted as active
    </template>
    <template #example>
      <StepGroup>
        <Step
          active
          icon="payment"
          title="Billing"
          description="Enter billing information"
        />
      </StepGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Step, StepGroup } from 'vue-fomantic-ui'

const code = `<template>
  <StepGroup>
    <Step
      active
      icon="payment"
      title="Billing"
      description="Enter billing information"
    />
  </StepGroup>
<\/template>`
</script>
