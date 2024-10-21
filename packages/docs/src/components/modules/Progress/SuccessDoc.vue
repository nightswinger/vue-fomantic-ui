<template>
  <DocSection label="Success" :code="code">
    <template #description>
      A progress bar can show a success state
    </template>
    <template #example>
      <Progress success progress :percent="100" label="Everything worked, your file is all ready." />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Progress } from 'vue-fomantic-ui'

const code = `<template>
  <Progress success progress :percent="100" label="Everything worked, your file is all ready." />
<\/template>`
</script>
