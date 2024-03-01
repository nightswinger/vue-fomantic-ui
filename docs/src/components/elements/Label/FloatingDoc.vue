<template>
  <DocSection label="Floating" :code="code">
    <template #description>
      A label can float above or below another element
    </template>
    <template #example>
      <SuiMenu compact>
        <SuiMenuItem>
          <SuiIcon name="mail" /> Messages
          <SuiLabel floating color="red">22</SuiLabel>
        </SuiMenuItem>
        <SuiMenuItem>
          <SuiIcon name="users" /> Friends
          <SuiLabel floating color="teal">22</SuiLabel>
        </SuiMenuItem>
      </SuiMenu>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel, SuiIcon, SuiMenu, SuiMenuItem } from 'vue-fomantic-ui'

const code = `<template>
  <SuiMenu compact>
    <SuiMenuItem>
      <SuiIcon name="mail" /> Messages
      <SuiLabel floating color="red">22</SuiLabel>
    </SuiMenuItem>
    <SuiMenuItem>
      <SuiIcon name="users" /> Friends
      <SuiLabel floating color="teal">22</SuiLabel>
    </SuiMenuItem>
  </SuiMenu>
</template>`
</script>
