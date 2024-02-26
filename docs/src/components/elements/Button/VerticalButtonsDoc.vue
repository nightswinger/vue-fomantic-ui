<template>
  <DocSection label="Vertical Buttons" :code="code">
    <template #description>
      Groups can be formatted to appear vertically
    </template>
    <template #example>
      <SuiButtonGroup vertical>
        <SuiButton>Feed</SuiButton>
        <SuiButton>Messages</SuiButton>
        <SuiButton>Events</SuiButton>
        <SuiButton>Photos</SuiButton>
      </SuiButtonGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton, SuiButtonGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButtonGroup vertical>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
<\/template>`
</script>
