<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A flag can vary in size
    </template>
    <template #example>
      <SuiFlag name="de" size="small" />
      <SuiFlag name="fr" size="medium" />
      <SuiFlag name="li" size="large" />
      <SuiFlag name="jp" size="big" />
      <SuiFlag name="gb" size="huge" />
      <SuiFlag name="un" size="massive" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiFlag } from 'vue-fomantic-ui'

const code = `<template>
  <SuiFlag name="de" size="small" />
  <SuiFlag name="fr" size="medium" />
  <SuiFlag name="li" size="large" />
  <SuiFlag name="jp" size="big" />
  <SuiFlag name="gb" size="huge" />
  <SuiFlag name="un" size="massive" />
<\/template>`
</script>
