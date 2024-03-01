<template>
  <DocSection label="Tag Group" :code="code">
    <template #description>
      Labels can share tag formatting
    </template>
    <template #example>
      <SuiLabelGroup tag>
        <SuiLabel as="a">$10.00</SuiLabel>
        <SuiLabel as="a">$19.99</SuiLabel>
        <SuiLabel as="a">$24.99</SuiLabel>
        <SuiLabel as="a">$10.25</SuiLabel>
      </SuiLabelGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel, SuiLabelGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabelGroup size="huge">
    <SuiLabel>Fun</SuiLabel>
    <SuiLabel>Happy</SuiLabel>
    <SuiLabel>Smart</SuiLabel>
    <SuiLabel>Witty</SuiLabel>
  </SuiLabelGroup>
</template>`
</script>
