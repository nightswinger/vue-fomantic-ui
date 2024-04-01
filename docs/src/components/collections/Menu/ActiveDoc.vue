<template>
  <DocSection label="Active" :code="code">
    <template #description>
      A menu item can be active
    </template>
    <template #example>
      <Menu compact>
        <MenuItem active>Link</MenuItem>
      </Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Menu, MenuItem } from 'vue-fomantic-ui'

const code = `<template>
  <Menu compact>
    <MenuItem active>Link</MenuItem>
  </Menu>
<\/template>`
</script>
