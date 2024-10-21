<template>
  <DocSection label="Button" :code="code">
    <template #description>
      A menu item can contain a button inside of it
    </template>
    <template #example>
      <Menu>
        <MenuItem as="div">
          <Button primary>Sign up</Button>
        </MenuItem>
        <MenuItem as="div">
          <Button>Log in</Button>
        </MenuItem>
      </Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Menu, MenuItem, Button } from 'vue-fomantic-ui'

const code = `<template>
  <Menu>
    <MenuItem as="div">
      <Button primary>Sign up</Button>
    </MenuItem>
    <MenuItem as="div">
      <Button>Log in</Button>
    </MenuItem>
  </Menu>
<\/template>`
</script>
