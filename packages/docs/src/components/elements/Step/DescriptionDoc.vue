<template>
  <DocSection label="Description" :code="code">
    <template #description>
      A step can contain a description
    </template>
    <template #example>
      <StepGroup>
        <Step
          title="Shipping"
          description="Choose your shipping options"
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
      title="Shipping"
      description="Choose your shipping options"
    />
  </StepGroup>
<\/template>`
</script>
