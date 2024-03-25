<template>
  <DocSection label="Input" :code="code">
    <template #description>
      A menu item can contain an input inside of it
    </template>
    <template #example>
      <Menu>
        <MenuItem as="div">
          <Input icon="search" placeholder="Search..." />
        </MenuItem>
        <template #right>
          <MenuItem as="div">
            <Input placeholder="Navigate to..." action="Go" />
          </MenuItem>
        </template>
      </Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Menu, MenuItem, Input } from 'vue-fomantic-ui'

const code = `<template>
  <Menu>
    <MenuItem as="div">
      <Input icon="search" placeholder="Search..." />
    </MenuItem>
    <template #right>
      <MenuItem as="div">
        <Input placeholder="Navigate to..." action="Go" />
      </MenuItem>
    </template>
  </Menu>
<\/template>`
</script>
