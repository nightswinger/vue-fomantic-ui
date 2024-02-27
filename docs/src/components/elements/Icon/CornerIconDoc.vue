<template>
  <DocSection label="Corner Icon" :code="code">
    <template #description>
      A group of icons can display a smaller corner icon
    </template>
    <template #example>
      <SuiIconGroup size="huge">
        <SuiIcon name="puzzle" />
        <SuiIcon name="add" corner="top left" />
      </SuiIconGroup>
      <SuiIconGroup size="huge">
        <SuiIcon name="puzzle" />
        <SuiIcon name="add" corner="top right" />
      </SuiIconGroup>
      <SuiIconGroup size="huge">
        <SuiIcon name="puzzle" />
        <SuiIcon name="add" corner="bottom left" />
      </SuiIconGroup>
      <SuiIconGroup size="huge">
        <SuiIcon name="puzzle" />
        <SuiIcon name="add" corner="bottom right" />
      </SuiIconGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIconGroup, SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="puzzle" />
    <SuiIcon name="add" corner="top left" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="puzzle" />
    <SuiIcon name="add" corner="top right" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="puzzle" />
    <SuiIcon name="add" corner="bottom left" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="puzzle" />
    <SuiIcon name="add" corner="bottom right" />
  </SuiIconGroup>
</template>`
</script>
