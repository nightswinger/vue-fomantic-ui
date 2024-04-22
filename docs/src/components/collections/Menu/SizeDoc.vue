<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A menu can vary in size
    </template>
    <template #example>
      <Menu size="mini">
        <MenuItem active>Home</MenuItem>
        <MenuItem>Messages</MenuItem>
        <MenuMenu position="right">
          <Dropdown item text="Language" :options="[ 'English', 'Russian', 'Spanish' ]" />
          <MenuItem as="div">
            <Button color="primary">Sign up</Button>
          </MenuItem>
        </MenuMenu>
      </Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import {
  Menu,
  MenuItem,
  MenuMenu,
  Dropdown,
  Button,
} from 'vue-fomantic-ui'

const code = `<template>
  <Menu size="mini">
    <MenuItem active>Home</MenuItem>
    <MenuItem>Messages</MenuItem>
    <MenuMenu position="right">
      <Dropdown item text="Language" :options="[ 'English', 'Russian', 'Spanish' ]" />
      <MenuItem as="div">
        <Button color="primary">Sign up</Button>
      </MenuItem>
    </MenuMenu>
  </Menu>
<\/template>`
</script>
