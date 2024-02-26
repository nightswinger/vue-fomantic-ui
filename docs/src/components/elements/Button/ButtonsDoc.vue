<template>
  <DocSection label="Buttons" :code="code">
    <template #description>
      Buttons can exist together as a group
    </template>
    <template #example>
      <SuiButtonGroup>
        <SuiButton content="One" />
        <SuiButton content="Two" />
        <SuiButton content="Three" />
      </SuiButtonGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton, SuiButtonGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButtonGroup>
    <SuiButton content="One" />
    <SuiButton content="Two" />
    <SuiButton content="Three" />
  </SuiButtonGroup>
<\/template>`
</script>
