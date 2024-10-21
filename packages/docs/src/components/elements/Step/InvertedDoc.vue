<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      A step's color can be inverted
    </template>
    <template #example>
      <Segment inverted>
        <StepGroup
          inverted
          :steps="steps"
          :activeStep="active"
          no-completed
        >
        </StepGroup>
      </Segment>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { StepGroup, Segment } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "truck" },
  { title: "Billing", description: "Enter billing information", icon: "payment" },
  { title: "Confirm Order", icon: "info" },
])
const active = ref(1)

const code = `<template>
  <StepGroup
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
  { title: "Billing", description: "Enter billing information", icon: "payment" },
  { title: "Confirm Order", icon: "info" },
])
const active = ref(1)
<\/script>`
</script>
