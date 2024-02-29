<template>
  <DocSection label="Link" :code="code">
    <template #description>
      A list can be specially formatted for navigation links
    </template>
    <template #example>
      <SuiList>
        <SuiListItem active>Home</SuiListItem>
        <SuiListItem as="a">About</SuiListItem>
        <SuiListItem as="a">Jobs</SuiListItem>
        <SuiListItem as="a">Team</SuiListItem>
      </SuiList>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiList, SuiListItem } from 'vue-fomantic-ui'

const code = `<template>
  <SuiList>
    <SuiListItem active>Home</SuiListItem>
    <SuiListItem as="a">About</SuiListItem>
    <SuiListItem as="a">Jobs</SuiListItem>
    <SuiListItem as="a">Team</SuiListItem>
  </SuiList>
</template>`
</script>
