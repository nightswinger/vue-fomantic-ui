<template>
  <DocSection label="Active" :code="code">
    <template #description>
      A progress bar can show activity
    </template>
    <template #example>
      <Progress active progress :percent="12" label="Uploading Files" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Progress } from 'vue-fomantic-ui'

const code = `<template>
  <Progress active progress :percent="12" label="Uploading Files" />
<\/template>`
</script>
