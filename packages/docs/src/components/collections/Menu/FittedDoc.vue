<template>
  <DocSection label="Fitted" :code="code">
    <template #description>
      A menu item or menu can remove element padding, vertically or horizontally
    </template>
    <template #example>
      <Menu>
        <MenuItem fitted>No padding whatsoever</MenuItem>
        <MenuItem fitted="horizontally">No horizontal padding</MenuItem>
        <MenuItem fitted="vertically">No vertical padding</MenuItem>
      </Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Menu, MenuItem } from 'vue-fomantic-ui'

const code = `<template>
  <Menu>
    <MenuItem fitted>No padding whatsoever</MenuItem>
    <MenuItem fitted="horizontally">No horizontal padding</MenuItem>
    <MenuItem fitted="vertically">No vertical padding</MenuItem>
  </Menu>
<\/template>`
</script>
