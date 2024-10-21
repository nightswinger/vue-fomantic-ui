<template>
  <DocSection label="Stackable" :code="code">
    <template #description>
      A menu can stack at mobile resolutions
    </template>
    <template #example>
      <Menu stackable>
        <MenuItem as="div">
          <img src="/images/logo.png">
        </MenuItem>
        <MenuItem>Features</MenuItem>
        <MenuItem>Testimonials</MenuItem>
        <MenuItem>Sign in</MenuItem>
      </Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Menu, MenuItem } from 'vue-fomantic-ui'

const code = `<template>
  <Menu stackable>
    <MenuItem as="div">
      <img src="/images/logo.png">
    </MenuItem>
    <MenuItem>Features</MenuItem>
    <MenuItem>Testimonials</MenuItem>
    <MenuItem>Sign in</MenuItem>
  </Menu>
<\/template>`
</script>
