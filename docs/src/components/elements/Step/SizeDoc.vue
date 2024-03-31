<template>
  <DocSection label="Size" :code="code">
    <template #description>
      Steps can have different sizes
    </template>
    <template #example>
      <StepGroup
        size="mini"
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
  { title: "Shipping", description: "Choose your shipping options", icon: "truck" },
  { title: "Billing", description: "Enter billing information", icon: "payment" },
  { title: "Confirm Order", description: "Verify order details", icon: "info" },
])
const active = ref(1)

const code = `<template>
  <StepGroup
    size="mini"
    :steps="steps"
    :activeStep="active"
  >
  </StepGroup>
<\/template>

<script setup>
import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "truck" },
  { title: "Billing", description: "Enter billing information", icon: "payment" },
  { title: "Confirm Order", description: "Verify order details", icon: "info" },
])
const active = ref(1)
<\/script>`
</script>
