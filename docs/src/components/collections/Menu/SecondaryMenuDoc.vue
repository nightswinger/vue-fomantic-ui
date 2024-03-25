<template>
  <DocSection label="Secondary Menu" :code="code">
    <template #description>
      A menu can adjust its appearance to de-emphasize its contents
    </template>
    <template #example>
      <Menu secondary :items="items">
        <template #right>
          <MenuItem as="div">
            <Input icon="search" placeholder="Search..." />
          </MenuItem>
          <MenuItem>Logout</MenuItem>
        </template>
      </Menu>

      <Menu vertical secondary :items="items" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Menu, MenuItem, Input } from 'vue-fomantic-ui'

const items = ref(['Home', 'Messages', 'Friends'])

const code = `<template>
  <Menu secondary :items="items">
    <template #right>
      <MenuItem as="div">
        <Input icon="search" placeholder="Search..." />
      </MenuItem>
      <MenuItem>Logout</MenuItem>
    </template>
  </Menu>

  <Menu vertical secondary :items="items" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Menu, MenuItem, Input } from 'vue-fomantic-ui'

const items = ref(['Home', 'Messages', 'Friends'])
<\/script>`
</script>
