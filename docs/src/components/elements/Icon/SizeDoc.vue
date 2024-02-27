<template>
  <DocSection label="Size" :code="code">
    <template #description>
      An icon can vary in size
    </template>
    <template #example>
      <SuiIcon name="home" size="mini" />
      <SuiIcon name="home" size="tiny" />
      <SuiIcon name="home" size="small" />
      <SuiIcon name="home" />
      <SuiIcon name="home" size="large" />
      <SuiIcon name="home" size="big" />
      <SuiIcon name="home" size="huge" />
      <SuiIcon name="home" size="massive" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiIcon name="home" size="mini" />
  <SuiIcon name="home" size="tiny" />
  <SuiIcon name="home" size="small" />
  <SuiIcon name="home" />
  <SuiIcon name="home" size="large" />
  <SuiIcon name="home" size="big" />
  <SuiIcon name="home" size="huge" />
  <SuiIcon name="home" size="massive" />
</template>`
</script>
