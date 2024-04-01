<template>
  <DocSection label="Icon" :code="code">
    <template #description>
      A list item can contain an icon
    </template>
    <template #example>
      <SuiList>
        <SuiListItem as="a">
          <SuiIcon name="help" />
          <SuiListContent>
            <SuiListHeader>Floated Icon</SuiListHeader>
            <SuiListDescription>
              This text will always have a left margin to make sure it sits alongside your icon
            </SuiListDescription>
          </SuiListContent>
        </SuiListItem>
        <SuiListItem as="a">
          <SuiIcon name="right triangle" />
          <SuiListContent>
            <SuiListHeader>Icon Alignment</SuiListHeader>
            <SuiListDescription>
              Floated icons are by default top aligned. To have an icon top aligned try this example.
            </SuiListDescription>
          </SuiListContent>
        </SuiListItem>
        <SuiListItem>
          <SuiIcon name="help" />
            Inline Text
        </SuiListItem>
      </SuiList>
    </template>
  </DocSection>
</template>
  
<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiList,
  SuiListItem,
  SuiListContent,
  SuiListHeader,
  SuiListDescription,
  SuiIcon,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiList>
    <SuiListItem as="a">
      <SuiIcon name="help" />
      <SuiListContent>
        <SuiListHeader>Floated Icon</SuiListHeader>
        <SuiListDescription>
          This text will always have a left margin to make sure it sits alongside your icon
        </SuiListDescription>
      </SuiListContent>
    </SuiListItem>
    <SuiListItem as="a">
      <SuiIcon name="right triangle" />
      <SuiListContent>
        <SuiListHeader>Icon Alignment</SuiListHeader>
        <SuiListDescription>
          Floated icons are by default top aligned. To have an icon top aligned try this example.
        </SuiListDescription>
      </SuiListContent>
    </SuiListItem>
    <SuiListItem>
      <SuiIcon name="help" />
        Inline Text
    </SuiListItem>
  </SuiList>
<\/template>`
</script>
