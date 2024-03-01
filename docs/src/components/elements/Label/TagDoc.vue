<template>
  <DocSection label="Tag" :code="code">
    <template #description>
      A label can appear as a tag
    </template>
    <template #example>
      <SuiLabel as="a" tag>New</SuiLabel>
      <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
      <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabel as="a" tag>New</SuiLabel>
  <SuiLabel as="a" tag color="red">Upcoming</SuiLabel>
  <SuiLabel as="a" tag color="teal">Featured</SuiLabel>
</template>`
</script>
