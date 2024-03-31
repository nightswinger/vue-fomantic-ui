<template>
  <DocSection label="Ordered" :code="code">
    <template #description>
      A step can show a ordered sequence of steps
    </template>
    <template #example>
      <StepGroup
        :steps="steps"
        :activeStep="active"
        ordered
      >
      </StepGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options" },
  { title: "Billing", description: "Enter billing information" },
  { title: "Confirm Order", description: "Verify order details" },
])
const active = ref(2)

const code = `<template>
  <StepGroup
    :steps="steps"
    :activeStep="active"
    ordered
  >
  </StepGroup>
<\/template>

<script setup>
import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options" },
  { title: "Billing", description: "Enter billing information" },
  { title: "Confirm Order", description: "Verify order details" },
])
const active = ref(2)
<\/script>`
</script>
