<template>
  <DocSection label="Horizontal Divider" :code="code">
    <template #description>
      A divider can segment content horizontally
    </template>
    <template #example>
      <SuiSegment basic textAlign="center">
        <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
        <SuiDivider horizontal>Or</SuiDivider>
        <SuiButton labeled icon="add" color="green" content="Create New Order" />
      </SuiSegment>
    </template>
  </DocSection>
</template>
  
<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiDivider,
  SuiButton,
  SuiInput,
  SuiSegment,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment basic textAlign="center">
    <SuiInput icon="search" iconPosition="left" action="Search" placeholder="Order #" />
    <SuiDivider horizontal>Or</SuiDivider>
    <SuiButton labeled icon="add" color="green" content="Create New Order" />
  </SuiSegment>
<\/template>`
</script>
