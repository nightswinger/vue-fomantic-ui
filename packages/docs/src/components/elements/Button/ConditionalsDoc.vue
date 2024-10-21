<template>
  <DocSection label="Conditionals" :code="code">
    <template #description>
      Button groups can contain conditionals
    </template>
    <template #example>
      <SuiButtonGroup>
        <SuiButton content="Cancel" />
        <div class="or"></div>
        <SuiButton content="Save" positive />
      </SuiButtonGroup>
      <SuiButtonGroup>
        <SuiButton content="un" />
        <div class="or" data-text="ou"></div>
        <SuiButton content="deux" positive />
      </SuiButtonGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton, SuiButtonGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButtonGroup>
    <SuiButton content="Cancel" />
    <div class="or"></div>
    <SuiButton content="Save" positive />
  </SuiButtonGroup>
  <SuiButtonGroup>
    <SuiButton content="un" />
    <div class="or" data-text="ou"></div>
    <SuiButton content="deux" positive />
  </SuiButtonGroup>
<\/template>`
</script>
