<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A progress bar can vary in size
    </template>
    <template #example>
      <Progress :percent="88" size="tiny" label="tiny" />
      <Progress :percent="100" size="small" label="small" success />
      <Progress :percent="83" label="standard" />
      <Progress :percent="73" size="large" label="large" />
      <Progress :percent="94" size="big" label="big" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Progress } from 'vue-fomantic-ui'

const code = `<template>
  <Progress :percent="88" size="tiny" label="tiny" />
  <Progress :percent="100" size="small" label="small" success />
  <Progress :percent="83" label="standard" />
  <Progress :percent="73" size="large" label="large" />
  <Progress :percent="94" size="big" label="big" />
<\/template>`
</script>
