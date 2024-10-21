<template>
  <DocSection label="Progress" :code="code">
    <template #description>
      A progress bar can contain a text value indicating current progress
    </template>
    <template #example>
      <Progress progress :percent="43" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Progress } from 'vue-fomantic-ui'

const code = `<template>
  <Progress progress :percent="33" />
<\/template>`
</script>
