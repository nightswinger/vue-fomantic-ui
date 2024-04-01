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
          <Dropdown item text="Language">
            <DropdownMenu>
              <DropdownItem text="English" />
              <DropdownItem text="Russian" />
              <DropdownItem text="Spanish" />
            </DropdownMenu>
          </Dropdown>
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
  DropdownMenu,
  DropdownItem,
  Button,
} from 'vue-fomantic-ui'

const code = `<template>
  <Menu size="mini">
    <MenuItem active>Home</MenuItem>
    <MenuItem>Messages</MenuItem>
    <MenuMenu position="right">
      <Dropdown item text="Language">
        <DropdownMenu>
          <DropdownItem text="English" />
          <DropdownItem text="Russian" />
          <DropdownItem text="Spanish" />
        </DropdownMenu>
      </Dropdown>
      <MenuItem as="div">
        <Button color="primary">Sign up</Button>
      </MenuItem>
    </MenuMenu>
  </Menu>
<\/template>`
</script>
