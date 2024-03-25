<template>
  <DocSection label="Sub Menu" :code="code">
    <template #description>
      A menu item may contain another menu nested inside that acts as a grouped sub-menu.
    </template>
    <template #example>
      <Menu vertical>
        <MenuItem as="div">
          <Input placeholder="Search..." />
        </MenuItem>
        <MenuItem as="div">
          Home
          <MenuMenu>
            <MenuItem>Search</MenuItem>
            <MenuItem>Add</MenuItem>
            <MenuItem>Remove</MenuItem>
          </MenuMenu>
        </MenuItem>
        <MenuItem>
          <Icon name="grid layout" />
          Browse
        </MenuItem>
        <MenuItem>Messages</MenuItem>
        <Dropdown item text="More">
          <DropdownMenu>
            <DropdownItem icon="edit" text="Edit Profile" />
            <DropdownItem icon="globe" text="Choose Language" />
            <DropdownItem icon="settings" text="Account Settings" />
          </DropdownMenu>
        </Dropdown>
      </Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import {
  Menu,
  MenuItem,
  MenuMenu,
  Icon,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from 'vue-fomantic-ui'

const code = `<template>
  <Menu vertical>
    <MenuItem as="div">
      <Input placeholder="Search..." />
    </MenuItem>
    <MenuItem as="div">
      Home
      <MenuMenu>
        <MenuItem>Search</MenuItem>
        <MenuItem>Add</MenuItem>
        <MenuItem>Remove</MenuItem>
      </MenuMenu>
    </MenuItem>
    <MenuItem>
      <Icon name="grid layout" />
      Browse
    </MenuItem>
    <MenuItem>Messages</MenuItem>
    <Dropdown item text="More">
      <DropdownMenu>
        <DropdownItem icon="edit" text="Edit Profile" />
        <DropdownItem icon="globe" text="Choose Language" />
        <DropdownItem icon="settings" text="Account Settings" />
      </DropdownMenu>
    </Dropdown>
  </Menu>
<\/template>`
</script>
