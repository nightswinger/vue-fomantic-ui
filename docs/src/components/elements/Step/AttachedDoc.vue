<template>
  <DocSection label="Attached" :code="code">
    <template #description>
      Steps can be attached to other elements
    </template>
    <template #example>
      <StepGroup
        attached="top"
        :steps="steps"
        :activeStep="active"
      >
      </StepGroup>
      <Segment attached>
        <img src="/images/wireframe/paragraph.png" />
      </Segment>
      <StepGroup
        attached="bottom"
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
import { StepGroup, Segment } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "truck" },
  { title: "Billing", description: "Enter billing information", icon: "payment" },
  { title: "Confirm Order", description: "Verify order details", icon: "info" },
])
const active = ref(1)

const code = `<template>
  <StepGroup
    attached="top"
    :steps="steps"
    :activeStep="active"
  >
  </StepGroup>
  <Segment attached>
    <img src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
  </Segment>
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
