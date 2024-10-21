<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      An icon can have its colors inverted for contrast
    </template>
    <template #example>
      <SuiIcon name="users" inverted />
      <SuiIcon name="users" inverted primary />
      <SuiIcon name="users" inverted secondary />
      <SuiIcon name="users" inverted color="red" />
      <SuiIcon name="users" inverted color="orange" />
      <SuiIcon name="users" inverted color="yellow" />
      <SuiIcon name="users" inverted color="olive" />
      <SuiIcon name="users" inverted color="green" />
      <SuiIcon name="users" inverted color="teal" />
      <SuiIcon name="users" inverted color="blue" />
      <SuiIcon name="users" inverted color="violet" />
      <SuiIcon name="users" inverted color="purple" />
      <SuiIcon name="users" inverted color="pink" />
      <SuiIcon name="users" inverted color="brown" />
      <SuiIcon name="users" inverted color="grey" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiIcon name="users" inverted />
  <SuiIcon name="users" inverted primary />
  <SuiIcon name="users" inverted secondary />
  <SuiIcon name="users" inverted color="red" />
  <SuiIcon name="users" inverted color="orange" />
  <SuiIcon name="users" inverted color="yellow" />
  <SuiIcon name="users" inverted color="olive" />
  <SuiIcon name="users" inverted color="green" />
  <SuiIcon name="users" inverted color="teal" />
  <SuiIcon name="users" inverted color="blue" />
  <SuiIcon name="users" inverted color="violet" />
  <SuiIcon name="users" inverted color="purple" />
  <SuiIcon name="users" inverted color="pink" />
  <SuiIcon name="users" inverted color="brown" />
  <SuiIcon name="users" inverted color="grey" />
</template>`
</script>
