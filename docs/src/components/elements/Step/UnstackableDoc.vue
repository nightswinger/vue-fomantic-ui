<template>
  <DocSection label="Unstackable" :code="code">
    <template #description>
      A step can prevent itself from stacking on mobile
    </template>
    <template #example>
      <StepGroup
        unstackable
        :steps="steps"
        :activeStep="active"
        no-completed
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
  { title: "Shipping", description: "Choose your shipping options", icon: "truck" },
  { title: "Billing", description: "Enter billing information", icon: "dollar" },
  { title: "Confirm Order", description: "Verify order details", icon: "info circle" },
])
const active = ref(1)

const code = `<template>
  <StepGroup
    unstackable
    :steps="steps"
    :activeStep="active"
    no-completed
  >
  </StepGroup>
<\/template>

<script setup>
import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "truck" },
  { title: "Billing", description: "Enter billing information", icon: "dollar" },
  { title: "Confirm Order", description: "Verify order details", icon: "info circle" },
])
const active = ref(1)
<\/script>`
</script>
