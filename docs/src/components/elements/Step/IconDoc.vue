<template>
  <DocSection label="Icon" :code="code">
    <template #description>
      A step can contain an icon
    </template>
    <template #example>
      <StepGroup>
        <Step
          icon="truck"
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
      icon="truck"
      title="Shipping"
      description="Choose your shipping options"
    />
  </StepGroup>
<\/template>`
</script>
