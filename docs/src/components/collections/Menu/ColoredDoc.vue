<template>
  <DocSection label="Colored" :code="code">
    <template #description>
      Additional colors can be specified
    </template>
    <template #example>
      <Menu>
        <MenuItem active color="red">Red</MenuItem>
        <MenuItem color="orange">Orange</MenuItem>
        <MenuItem color="yellow">Yellow</MenuItem>
        <MenuItem color="olive">Olive</MenuItem>
        <MenuItem color="green">Green</MenuItem>
        <MenuItem color="teal">Teal</MenuItem>
      </Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Menu, MenuItem } from 'vue-fomantic-ui'

const code = `<template>
  <Menu>
    <MenuItem active color="red">Red</MenuItem>
    <MenuItem color="orange">Orange</MenuItem>
    <MenuItem color="yellow">Yellow</MenuItem>
    <MenuItem color="olive">Olive</MenuItem>
    <MenuItem color="green">Green</MenuItem>
    <MenuItem color="teal">Teal</MenuItem>
  </Menu>
<\/template>`
</script>
