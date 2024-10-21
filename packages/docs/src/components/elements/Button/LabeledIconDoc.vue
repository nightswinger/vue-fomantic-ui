<template>
  <DocSection label="Labeled Icon" :code="code">
    <template #description>
      A button can use an icon as a label
    </template>
    <template #example>
      <SuiButton labeled icon="pause" content="Pause" />
      <SuiButton labeled="right" icon="right arrow" content="Next" />
      <SuiButton labeled icon>
        <SuiIcon loading name="spinner" />
        Loading
      </SuiButton>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton, SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton labeled icon="pause" content="Pause" />
  <SuiButton labeled="right" icon="right arrow" content="Next" />
  <SuiButton labeled icon>
    <SuiIcon loading name="spinner" />
    Loading
  </SuiButton>
<\/template>`
</script>
