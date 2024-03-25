<template>
  <DocSection label="Dropdown Item" :code="code">
    <template #description>
      An item may contain a nested menu in a dropdown
    </template>
    <template #example>
      <Menu vertical>
        <Dropdown item text="Categories">
          <DropdownMenu>
            <DropdownItem text="Electoronics" />
            <DropdownItem text="Automotive" />
            <DropdownItem text="Home" />
          </DropdownMenu>
        </Dropdown>
      </Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Menu, Dropdown, DropdownMenu, DropdownItem } from 'vue-fomantic-ui'

const code = `<template>
  <Menu vertical>
    <Dropdown item text="Categories">
      <DropdownMenu>
        <DropdownItem text="Electoronics" />
        <DropdownItem text="Automotive" />
        <DropdownItem text="Home" />
      </DropdownMenu>
    </Dropdown>
  </Menu>
<\/template>`
</script>
