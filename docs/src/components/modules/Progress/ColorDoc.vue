<template>
  <DocSection label="Color" :code="code">
    <template #description>
      A progress bar can have different colors
    </template>
    <template #example>
      <Progress :percent="32" color="red" />
      <Progress :percent="53" color="orange" />
      <Progress :percent="13" color="yellow" />
      <Progress :percent="37" color="olive" />
      <Progress :percent="83" color="green" />
      <Progress :percent="24" color="teal" />
      <Progress :percent="88" color="blue" />
      <Progress :percent="41" color="violet" />
      <Progress :percent="47" color="purple" />
      <Progress :percent="30" color="pink" />
      <Progress :percent="68" color="brown" />
      <Progress :percent="35" color="grey" />
      <Progress :percent="73" color="black" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Progress } from 'vue-fomantic-ui'

const code = `<template>
  <Progress :percent="32" color="red" />
  <Progress :percent="53" color="orange" />
  <Progress :percent="13" color="yellow" />
  <Progress :percent="37" color="olive" />
  <Progress :percent="83" color="green" />
  <Progress :percent="24" color="teal" />
  <Progress :percent="88" color="blue" />
  <Progress :percent="41" color="violet" />
  <Progress :percent="47" color="purple" />
  <Progress :percent="30" color="pink" />
  <Progress :percent="68" color="brown" />
  <Progress :percent="35" color="grey" />
  <Progress :percent="73" color="black" />
<\/template>`
</script>
