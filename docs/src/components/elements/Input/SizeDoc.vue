<template>
  <DocSection label="Size" :code="code">
    <template #description>
      An input can vary in size
    </template>
    <template #example>
      <SuiInput icon="search" placeholder="Search mini..." size="mini" />
      <SuiInput icon="search" placeholder="Search small..." size="small" />
      <SuiInput icon="search" placeholder="Search large..." size="large" />
      <SuiInput icon="search" placeholder="Search big..." size="big" />
      <SuiInput icon="search" placeholder="Search huge..." size="huge" />
      <SuiInput icon="search" placeholder="Search massive..." size="massive" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiInput } from 'vue-fomantic-ui'

const code = `<template>
  <SuiInput icon="search" placeholder="Search mini..." size="mini" />
  <SuiInput icon="search" placeholder="Search small..." size="small" />
  <SuiInput icon="search" placeholder="Search large..." size="large" />
  <SuiInput icon="search" placeholder="Search big..." size="big" />
  <SuiInput icon="search" placeholder="Search huge..." size="huge" />
  <SuiInput icon="search" placeholder="Search massive..." size="massive" />
</template>`
</script>
