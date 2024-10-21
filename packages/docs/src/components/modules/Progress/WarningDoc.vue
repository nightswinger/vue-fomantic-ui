<template>
  <DocSection label="Warning" :code="code">
    <template #description>
      A progress bar can show a warning state
    </template>
    <template #example>
      <Progress warning progress :percent="100" label="Your file didn't meet the minimum resolution requirements." />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Progress } from 'vue-fomantic-ui'

const code = `<template>
  <Progress warning progress :percent="100" label="Your file didn't meet the minimum resolution requirements." />
<\/template>`
</script>
