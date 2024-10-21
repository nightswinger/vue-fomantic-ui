<template>
  <DocSection label="Bulleted" :code="code">
    <template #description>
      A list can mark items with a bullet
    </template>
    <template #example>
      <SuiList bulleted>
        <SuiListItem>Gaining Access</SuiListItem>
        <SuiListItem>Inviting Friends</SuiListItem>
        <SuiListItem>
          Benefits
          <SuiListList>
            <SuiListItem>Link to somewhere</SuiListItem>
            <SuiListItem>Rebates</SuiListItem>
            <SuiListItem>Discounts</SuiListItem>
          </SuiListList>
        </SuiListItem>
        <SuiListItem>Warranty</SuiListItem>
      </SuiList>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiList, SuiListItem, SuiListList } from 'vue-fomantic-ui'

const code = `<template>
  <SuiList bulleted>
    <SuiListItem>Gaining Access</SuiListItem>
    <SuiListItem>Inviting Friends</SuiListItem>
    <SuiListItem>
      Benefits
      <SuiListList>
        <SuiListItem>Link to somewhere</SuiListItem>
        <SuiListItem>Rebates</SuiListItem>
        <SuiListItem>Discounts</SuiListItem>
      </SuiListList>
      <SuiListItem>Warranty</SuiListItem>
    </SuiListItem>
  </SuiList>
</template>`
</script>
