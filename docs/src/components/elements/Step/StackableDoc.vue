<template>
  <DocSection label="Stackable" :code="code">
    <template #description>
      A step can stack vertically only on smaller screens
    </template>
    <template #example>
      <StepGroup
        stackable="tablet"
        noCompleted
        :steps="steps"
        :activeStep="active"
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
  { title: "Shipping", description: "Choose your shipping options", icon: "plane" },
  { title: "Billing", description: "Enter billing information", icon: "payment" },
  { title: "Confirm Order", description: "Verify order details", icon: "info" },
])
const active = ref(1)

const code = `<template>
  <StepGroup
    stackable="tablet"
    noCompleted
    :steps="steps"
    :activeStep="active"
  >
  </StepGroup>
<\/template>

<script setup>
import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "plane" },
  { title: "Billing", description: "Enter billing information", icon: "payment" },
  { title: "Confirm Order", description: "Verify order details", icon: "info" },
])
const active = ref(1)
<\/script>`
</script>
