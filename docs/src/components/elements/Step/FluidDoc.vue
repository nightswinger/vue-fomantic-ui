<template>
  <DocSection label="Fluid" :code="code">
    <template #description>
      A fluid step takes up the width of its container
    </template>
    <template #example>
      <Grid :columns="2">
        <GridColumn>
          <StepGroup
            fluid
            vertical
            :steps="steps"
            :activeStep="active"
          >
          </StepGroup>
        </GridColumn>
        <GridColumn>
          The steps take up the entire column width
        </GridColumn>
      </Grid>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { StepGroup, Grid, GridColumn } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "plane" },
  { title: "Billing", description: "Enter billing information", icon: "dollar" },
])
const active = ref(1)

const code = `<template>
  <Grid :columns="2">
    <GridColumn>
      <StepGroup
        fluid
        vertical
        :steps="steps"
        :activeStep="active"
      >
      </StepGroup>
    </GridColumn>
    <GridColumn>
      The steps take up the entire column width
    </GridColumn>
  </Grid>
<\/template>

<script setup>
import { ref } from 'vue'
import { StepGroup } from 'vue-fomantic-ui'

const steps = ref([
  { title: "Shipping", description: "Choose your shipping options", icon: "plane" },
  { title: "Billing", description: "Enter billing information", icon: "payment" },
])
const active = ref(1)
<\/script>`
</script>
