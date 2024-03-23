<template>
  <DocSection label="Colored" :code="code">
    <template #description>
      A message can be formatted to be different colors
    </template>
    <template #example>
      <Message color="red" content="Red"/>
      <Message color="orange" content="Orange"/>
      <Message color="yellow" content="Yellow"/>
      <Message color="olive" content="Olive"/>
      <Message color="green" content="Green"/>
      <Message color="teal" content="Teal"/>
      <Message color="blue" content="Blue"/>
      <Message color="violet" content="Violet"/>
      <Message color="purple" content="Purple"/>
      <Message color="pink" content="Pink"/>
      <Message color="brown" content="Brown"/>
      <Message color="grey" content="Grey"/>
      <Message color="black" content="Black"/>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Message } from 'vue-fomantic-ui'

const code = `<template>
  <Message color="red" content="Red"/>
  <Message color="orange" content="Orange"/>
  <Message color="yellow" content="Yellow"/>
  <Message color="olive" content="Olive"/>
  <Message color="green" content="Green"/>
  <Message color="teal" content="Teal"/>
  <Message color="blue" content="Blue"/>
  <Message color="violet" content="Violet"/>
  <Message color="purple" content="Purple"/>
  <Message color="pink" content="Pink"/>
  <Message color="brown" content="Brown"/>
  <Message color="grey" content="Grey"/>
  <Message color="black" content="Black"/>
<\/template>`
</script>
