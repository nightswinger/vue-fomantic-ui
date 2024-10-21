<template>
  <DocSection label="Link" :code="code">
    <template #description>
      An emoji can be formatted as a link
    </template>
    <template #example>
      <SuiEmoji link name="slight_smile" size="medium" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiEmoji } from 'vue-fomantic-ui'

const code = `<template>
  <SuiEmoji link name="slight_smile" size="medium" />
<\/template>`
</script>
