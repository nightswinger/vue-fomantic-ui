<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A divider text can vary in size
    </template>
    <template #example>
      <SuiDivider horizontal size="mini">MINI</SuiDivider>
      <SuiDivider horizontal size="tiny">TINY</SuiDivider>
      <SuiDivider horizontal size="small">SMALL</SuiDivider>
      <SuiDivider horizontal size="large">LARGE</SuiDivider>
      <SuiDivider horizontal size="big">BIG</SuiDivider>
      <SuiDivider horizontal size="huge">HUGE</SuiDivider>
      <SuiDivider horizontal size="massive">MASSIVE</SuiDivider>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiDivider } from 'vue-fomantic-ui'

const code = `<template>
  <SuiDivider size="mini">MINI</SuiDivider>
  <SuiDivider size="tiny">TINY</SuiDivider>
  <SuiDivider size="small">SMALL</SuiDivider>
  <SuiDivider size="large">LARGE</SuiDivider>
  <SuiDivider size="big">BIG</SuiDivider>
  <SuiDivider size="huge">HUGE</SuiDivider>
  <SuiDivider size="massive">MASSIVE</SuiDivider>
<\/template>`
</script>
