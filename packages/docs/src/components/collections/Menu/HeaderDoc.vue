<template>
  <DocSection label="Header" :code="code">
    <template #description>
      A menu item may include a header or may itself be a header
    </template>
    <template #example>
      <Menu :items="items" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { text: 'Our Company', header: true },
  { text: 'About Us' },
  { text: 'Jobs' },
  { text: 'Locations' },
])

const code = `<template>
  <Menu :items="items" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { text: 'Our Company', header: true },
  { text: 'About Us' },
  { text: 'Jobs' },
  { text: 'Locations' },
])
<\/script>`
</script>
