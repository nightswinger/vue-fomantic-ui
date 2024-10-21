<template>
  <DocSection label="Pagination" :code="code">
    <template #description>
      A pagination menu is specially formatted to present links to pages of content
    </template>
    <template #example>
      <Menu pagination>
        <MenuItem>1</MenuItem>
        <MenuItem disabled>...</MenuItem>
        <MenuItem>10</MenuItem>
        <MenuItem>11</MenuItem>
        <MenuItem>12</MenuItem>
      </Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Menu, MenuItem, Input } from 'vue-fomantic-ui'

const items = ref(['Home', 'Messages', 'Friends'])

const code = `<template>
  <Menu pagination>
    <MenuItem>1</MenuItem>
    <MenuItem disabled>...</MenuItem>
    <MenuItem>10</MenuItem>
    <MenuItem>11</MenuItem>
    <MenuItem>12</MenuItem>
  </Menu>
<\/template>`
</script>
