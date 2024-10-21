<template>
  <DocSection label="Right Menu" :code="code">
    <template #description>
      A menu may contain another menu group in the same level as menu items.
    </template>
    <template #example>
      <Menu :items="items">
        <template #right>
          <MenuItem>Sign Up</MenuItem>
          <MenuItem>Help</MenuItem>
        </template>
      </Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Menu, MenuItem } from 'vue-fomantic-ui'

const items = ref(['Browse', 'Submit'])

const code = `<template>
  <Menu :items="items">
    <template #right>
      <MenuItem>Sign Up</MenuItem>
      <MenuItem>Help</MenuItem>
    </template>
  </Menu>
<\/template>

<script setup>
import { ref } from 'vue'
import { Menu, MenuItem } from 'vue-fomantic-ui'

const items = ref(['Browse', 'Submit'])
<\/script>`
</script>
