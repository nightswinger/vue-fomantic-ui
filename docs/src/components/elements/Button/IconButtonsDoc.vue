<template>
  <DocSection label="Icon Buttons" :code="code">
    <template #description>
      Button groups can show groups of icons
    </template>
    <template #example>
      <SuiButtonGroup icon>
        <SuiButton icon="align left" />
        <SuiButton icon="align center" />
        <SuiButton icon="align right" />
        <SuiButton icon="align justify" />
      </SuiButtonGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton, SuiButtonGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButtonGroup icon>
    <SuiButton icon="align left" />
    <SuiButton icon="align center" />
    <SuiButton icon="align right" />
    <SuiButton icon="align justify" />
  </SuiButtonGroup>
<\/template>`
</script>
