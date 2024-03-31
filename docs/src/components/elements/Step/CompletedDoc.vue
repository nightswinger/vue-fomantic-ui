<template>
  <DocSection label="Completed" :code="code">
    <template #description>
      A step can show that a user has completed it
    </template>
    <template #example>
      <StepGroup>
        <Step
          completed
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
      completed
      icon="payment"
      title="Billing"
      description="Enter billing information"
    />
  </StepGroup>
<\/template>`
</script>
