<template>
  <DocSection label="Group Size" :code="code">
    <template #description>
      Labels can share sizes together
    </template>
    <template #example>
      <SuiLabelGroup size="huge">
        <SuiLabel>Fun</SuiLabel>
        <SuiLabel>Happy</SuiLabel>
        <SuiLabel>Smart</SuiLabel>
        <SuiLabel>Witty</SuiLabel>
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
