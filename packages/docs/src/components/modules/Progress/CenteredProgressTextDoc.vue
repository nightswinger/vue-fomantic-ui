<template>
  <DocSection label="Centered Progress Text" :code="code">
    <template #description>
      The text inside a progress can be centered
    </template>
    <template #example>
      <Progress progress="centered" :percent="57" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Progress } from 'vue-fomantic-ui'

const code = `<template>
  <Progress progress="centered" :percent="57" />
<\/template>`
</script>
