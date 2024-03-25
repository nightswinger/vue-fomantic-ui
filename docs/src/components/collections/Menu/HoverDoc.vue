<template>
  <DocSection label="Hover" :code="code">
    <template #description>
      A menu item can be hovered
    </template>
    <template #example>
      <Menu compact>
        <MenuItem>A link</MenuItem>
        <MenuItem as="div" link>div Link</MenuItem>
      </Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Menu, MenuItem } from 'vue-fomantic-ui'

const code = `<template>
  <Menu compact>
    <MenuItem>A link</MenuItem>
    <MenuItem as="div" link>div Link</MenuItem>
  </Menu>
<\/template>`
</script>
