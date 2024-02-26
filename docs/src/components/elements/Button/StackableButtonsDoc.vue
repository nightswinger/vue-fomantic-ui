<template>
  <DocSection label="Stackable Buttons" :code="code">
    <template #description>
      Horizontal groups can automatically be stacked on mobile devices
    </template>
    <template #example>
      <SuiButtonGroup stackable>
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
  <SuiButtonGroup stackable>
    <SuiButton>Feed</SuiButton>
    <SuiButton>Messages</SuiButton>
    <SuiButton>Events</SuiButton>
    <SuiButton>Photos</SuiButton>
  </SuiButtonGroup>
<\/template>`
</script>
