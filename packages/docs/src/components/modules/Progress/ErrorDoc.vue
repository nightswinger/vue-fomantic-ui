<template>
  <DocSection label="Error" :code="code">
    <template #description>
      A progress bar can show an error state
    </template>
    <template #example>
      <Progress error progress :percent="100" label="There was an error." />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Progress } from 'vue-fomantic-ui'

const code = `<template>
  <Progress error progress :percent="100" label="There was an error." />
<\/template>`
</script>
