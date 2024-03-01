<template>
  <DocSection label="Basic Group" :code="code">
    <template #description>
      Labels can share their style together
    </template>
    <template #example>
      <SuiLabelGroup basic>
        <SuiLabel>
          Fun
          <SuiIcon name="close" />
        </SuiLabel>
        <SuiLabel>
          Happy
          <SuiLabelDetail>Smart</SuiLabelDetail>
        </SuiLabel>
        <SuiLabel>Insane</SuiLabel>
        <SuiLabel>Exciting</SuiLabel>
      </SuiLabelGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel, SuiLabelGroup, SuiLabelDetail, SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabelGroup basic>
    <SuiLabel>
      Fun
      <SuiIcon name="close" />
    </SuiLabel>
    <SuiLabel>
      Happy
      <SuiLabelDetail>Smart</SuiLabelDetail>
    </SuiLabel>
    <SuiLabel>Insane</SuiLabel>
    <SuiLabel>Exciting</SuiLabel>
  </SuiLabelGroup>
</template>`
</script>
