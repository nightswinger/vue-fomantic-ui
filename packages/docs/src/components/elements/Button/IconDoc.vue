<template>
  <DocSection label="Icon" :code="code">
    <template #description>
      A button can have only an icon
    </template>
    <template #example>
      <SuiButton icon="cloud" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton icon="cloud" />
<\/template>`
</script>
