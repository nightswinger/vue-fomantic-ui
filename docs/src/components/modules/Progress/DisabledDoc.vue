<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      A progress bar can be disabled
    </template>
    <template #example>
      <Progress disabled :percent="34" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Progress } from 'vue-fomantic-ui'

const code = `<template>
  <Progress disabled :percent="34" />
<\/template>`
</script>
