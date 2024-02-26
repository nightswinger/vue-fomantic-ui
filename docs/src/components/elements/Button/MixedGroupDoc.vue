<template>
  <DocSection label="Mixed Group" :code="code">
    <template #description>
      Button groups can show groups of icons
    </template>
    <template #example>
      <SuiButtonGroup>
        <SuiButton labeled icon="left chevron" content="Back" />
        <SuiButton icon="stop" content="Stop" />
        <SuiButton labeled="right">
          <SuiIcon name="right chevron" />
          Forward
        </SuiButton>
      </SuiButtonGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton, SuiButtonGroup, SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButtonGroup>
    <SuiButton labeled icon="left chevron" content="Back" />
    <SuiButton icon="stop" content="Stop" />
    <SuiButton labeled="right">
      <SuiIcon name="right chevron" />
      Forward
    </SuiButton>
  </SuiButtonGroup>
<\/template>`
</script>
