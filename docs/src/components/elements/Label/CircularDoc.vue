<template>
  <DocSection label="Circular" :code="code">
    <template #description>
      A label can be circular
    </template>
    <template #example>
      <SuiLabel circular color="red">2</SuiLabel>
      <SuiLabel circular color="orange">2</SuiLabel>
      <SuiLabel circular color="yellow">2</SuiLabel>
      <SuiLabel circular color="olive">2</SuiLabel>
      <SuiLabel circular color="green">2</SuiLabel>
      <SuiLabel circular color="teal">2</SuiLabel>
      <SuiLabel circular color="blue">2</SuiLabel>
      <SuiLabel circular color="violet">2</SuiLabel>
      <SuiLabel circular color="purple">2</SuiLabel>
      <SuiLabel circular color="pink">2</SuiLabel>
      <SuiLabel circular color="brown">2</SuiLabel>
      <SuiLabel circular color="grey">2</SuiLabel>
      <SuiLabel circular color="black">2</SuiLabel>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabel circular color="red">2</SuiLabel>
  <SuiLabel circular color="orange">2</SuiLabel>
  <SuiLabel circular color="yellow">2</SuiLabel>
  <SuiLabel circular color="olive">2</SuiLabel>
  <SuiLabel circular color="green">2</SuiLabel>
  <SuiLabel circular color="teal">2</SuiLabel>
  <SuiLabel circular color="blue">2</SuiLabel>
  <SuiLabel circular color="violet">2</SuiLabel>
  <SuiLabel circular color="purple">2</SuiLabel>
  <SuiLabel circular color="pink">2</SuiLabel>
  <SuiLabel circular color="brown">2</SuiLabel>
  <SuiLabel circular color="grey">2</SuiLabel>
  <SuiLabel circular color="black">2</SuiLabel>
</template>`
</script>
