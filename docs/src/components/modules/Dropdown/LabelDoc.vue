<template>
  <DocSection label="Label" :code="code">
    <template #description>
      A dropdown menu can contain an label.
    </template>
    <template #example>
      <Dropdown
        v-model="selected"
        :options="options"
        button
        floating
        labeled
        icon="filter"
        text="Filter"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { header: 'Filter by tag', icon: 'tags' },
  {
    text: 'Important',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    text: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    text: 'Discussion',
    label: { color: 'green', empty: true, circular: true },
  },
]

const code = `<template>
  <Dropdown
    v-model="selected"
    :options="options"
    button
    floating
    labeled
    icon="filter"
    text="Filter"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { header: 'Filter by tag', icon: 'tags' },
  {
    text: 'Important',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    text: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    text: 'Discussion',
    label: { color: 'green', empty: true, circular: true },
  },
]
<\/script>`
</script>
