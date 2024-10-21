<template>
  <DocSection label="Colored" :code="code">
    <template #description>
      An icon can be formatted with different colors
    </template>
    <template #example>
      <SuiIcon name="users" primary />
      <SuiIcon name="users" secondary />
      <SuiIcon name="users" color="red" />
      <SuiIcon name="users" color="orange" />
      <SuiIcon name="users" color="yellow" />
      <SuiIcon name="users" color="olive" />
      <SuiIcon name="users" color="green" />
      <SuiIcon name="users" color="teal" />
      <SuiIcon name="users" color="blue" />
      <SuiIcon name="users" color="violet" />
      <SuiIcon name="users" color="purple" />
      <SuiIcon name="users" color="pink" />
      <SuiIcon name="users" color="brown" />
      <SuiIcon name="users" color="grey" />
      <SuiIcon name="users" color="black" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiIcon name="users" primary />
  <SuiIcon name="users" secondary />
  <SuiIcon name="users" color="red" />
  <SuiIcon name="users" color="orange" />
  <SuiIcon name="users" color="yellow" />
  <SuiIcon name="users" color="olive" />
  <SuiIcon name="users" color="green" />
  <SuiIcon name="users" color="teal" />
  <SuiIcon name="users" color="blue" />
  <SuiIcon name="users" color="violet" />
  <SuiIcon name="users" color="purple" />
  <SuiIcon name="users" color="pink" />
  <SuiIcon name="users" color="brown" />
  <SuiIcon name="users" color="grey" />
  <SuiIcon name="users" color="black" />
</template>`
</script>
