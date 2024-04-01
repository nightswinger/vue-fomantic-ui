<template>
  <DocSection label="Colors" :code="code">
    <template #description>
      Loaders can be different colors
    </template>
    <template #example>
      <SuiLoader active inline primary />
      <SuiLoader active inline secondary />
      <SuiLoader active inline color="red" />
      <SuiLoader active inline color="orange" />
      <SuiLoader active inline color="yellow" />
      <SuiLoader active inline color="olive" />
      <SuiLoader active inline color="green" />
      <SuiLoader active inline color="teal" />
      <SuiLoader active inline color="blue" />
      <SuiLoader active inline color="violet" />
      <SuiLoader active inline color="purple" />
      <SuiLoader active inline color="pink" />
      <SuiLoader active inline color="brown" />
      <SuiLoader active inline color="grey" />
      <SuiLoader active inline color="black" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLoader } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLoader active inline primary />
  <SuiLoader active inline secondary />
  <SuiLoader active inline color="red" />
  <SuiLoader active inline color="orange" />
  <SuiLoader active inline color="yellow" />
  <SuiLoader active inline color="olive" />
  <SuiLoader active inline color="green" />
  <SuiLoader active inline color="teal" />
  <SuiLoader active inline color="blue" />
  <SuiLoader active inline color="violet" />
  <SuiLoader active inline color="purple" />
  <SuiLoader active inline color="pink" />
  <SuiLoader active inline color="brown" />
  <SuiLoader active inline color="grey" />
  <SuiLoader active inline color="black" />
</template>`
</script>
