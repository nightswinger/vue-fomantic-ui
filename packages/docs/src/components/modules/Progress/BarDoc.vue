<template>
  <DocSection label="Bar" :code="code">
    <template #description>
      A progress element can contain a bar visually indicating progress
    </template>
    <template #example>
      <Progress :percent="33" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Progress } from 'vue-fomantic-ui'

const code = `<template>
  <Progress :percent="33" />
<\/template>`
</script>
