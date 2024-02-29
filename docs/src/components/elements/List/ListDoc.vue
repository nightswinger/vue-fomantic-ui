<template>
  <DocSection label="List" :code="code">
    <template #description>
      A list groups related content
    </template>
    <template #example>
      <SuiList>
        <SuiListItem>Apples</SuiListItem>
        <SuiListItem>Oranges</SuiListItem>
        <SuiListItem>Bananas</SuiListItem>
      </SuiList>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiList, SuiListItem } from 'vue-fomantic-ui'

const code = `<template>
  <SuiList>
    <SuiListItem>Apples</SuiListItem>
    <SuiListItem>Oranges</SuiListItem>
    <SuiListItem>Bananas</SuiListItem>
  </SuiList>
</template>`
</script>
