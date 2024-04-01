<template>
  <DocSection label="Link Item" :code="code">
    <template #description>
      A menu may contain a link item, or an item formatted as if it is a link.
    </template>
    <template #example>
      <Menu>
        <MenuItem link href="https://google.com" target="_blank">
          Visit Google
        </MenuItem>
        <MenuItem link>
          Javascript Link
        </MenuItem>
      </Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Menu, MenuItem } from 'vue-fomantic-ui'

const code = `<template>
  <Menu>
    <MenuItem link href="https://google.com" target="_blank">
      Visit Google
    </MenuItem>
    <MenuItem link>
      Javascript Link
    </MenuItem>
  </Menu>
<\/template>`
</script>
