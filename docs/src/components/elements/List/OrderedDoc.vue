<template>
  <DocSection label="Ordered" :code="code">
    <template #description>
      A list can be ordered numerically
    </template>
    <template #example>
      <SuiList ordered>
        <SuiListItem as="a">Getting Started</SuiListItem>
        <SuiListItem as="a">Introduction</SuiListItem>
        <SuiListItem>
          <a>Languages</a>
          <SuiListList>
            <SuiListItem as="a">HTML</SuiListItem>
            <SuiListItem as="a">Javascript</SuiListItem>
            <SuiListItem as="a">CSS</SuiListItem>
          </SuiListList>
        </SuiListItem>
        <SuiListItem as="a">Review</SuiListItem>
      </SuiList>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiList, SuiListItem, SuiListList } from 'vue-fomantic-ui'

const code = `<template>
  <SuiList ordered>
    <SuiListItem as="a">Getting Started</SuiListItem>
    <SuiListItem as="a">Introduction</SuiListItem>
    <SuiListItem>
      <a>Languages</a>
      <SuiListList>
        <SuiListItem as="a">HTML</SuiListItem>
        <SuiListItem as="a">Javascript</SuiListItem>
        <SuiListItem as="a">CSS</SuiListItem>
      </SuiListList>
      <SuiListItem as="a">Review</SuiListItem>
    </SuiListItem>
  </SuiList>
</template>`
</script>
