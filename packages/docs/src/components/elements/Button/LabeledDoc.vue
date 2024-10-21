<template>
  <DocSection label="Labeled" :code="code">
    <template #description>
      A button can appear alongside a label
    </template>
    <template #example>
      <SuiButton labeled="right" as="div">
        <SuiButton icon="heart" content=" Like" />
        <SuiLabel basic>2,048</SuiLabel>
      </SuiButton>
      <SuiButton labeled="left" as="div">
        <SuiLabel basic pointing="right">2,048</SuiLabel>
        <SuiButton icon="heart" content=" Like" />
      </SuiButton>
      <SuiButton labeled="left" as="div">
        <SuiLabel basic>1,048</SuiLabel>
        <SuiButton icon="fork" />
      </SuiButton>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton, SuiLabel } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton labeled="right" as="div">
    <SuiButton icon="heart" content=" Like" />
    <SuiLabel basic>2,048</SuiLabel>
  </SuiButton>
  <SuiButton labeled="left" as="div">
    <SuiLabel basic pointing="right">2,048</SuiLabel>
    <SuiButton icon="heart" content=" Like" />
  </SuiButton>
  <SuiButton labeled="left" as="div">
    <SuiLabel basic>1,048</SuiLabel>
    <SuiButton icon="fork" />
  </SuiButton>
<\/template>`
</script>
