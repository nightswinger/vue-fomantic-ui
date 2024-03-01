<template>
  <DocSection label="Circular Group" :code="code">
    <template #description>
      Labels can share shapes
    </template>
    <template #example>
      <SuiLabelGroup circular>
        <SuiLabel as="a">1</SuiLabel>
        <SuiLabel as="a">3</SuiLabel>
        <SuiLabel as="a">4</SuiLabel>
        <SuiLabel as="a">14</SuiLabel>
        <SuiLabel as="a">16</SuiLabel>
        <SuiLabel as="a">34</SuiLabel>
      </SuiLabelGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel, SuiLabelGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabelGroup tag>
    <SuiLabel as="a">1</SuiLabel>
    <SuiLabel as="a">3</SuiLabel>
    <SuiLabel as="a">4</SuiLabel>
    <SuiLabel as="a">14</SuiLabel>
    <SuiLabel as="a">16</SuiLabel>
    <SuiLabel as="a">34</SuiLabel>
  </SuiLabelGroup>
</template>`
</script>
