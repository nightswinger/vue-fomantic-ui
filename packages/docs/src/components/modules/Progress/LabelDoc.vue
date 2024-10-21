<template>
  <DocSection label="Label" :code="code">
    <template #description>
      A progress element can contain a label
    </template>
    <template #example>
      <Progress progress :percent="12" label="Uploading Files" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Progress } from 'vue-fomantic-ui'

const code = `<template>
  <Progress progress :percent="12" label="Uploading Files" />
<\/template>`
</script>
