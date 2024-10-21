<template>
  <DocSection label="Search In-Menu" :code="code">
    <template #description>
      A dropdown can include a search prompt inside its menu
    </template>
    <template #example>
      <Dropdown
        button
        floating
        labeled
        search-in-menu
        selectable
        icon="world"
        v-model="selected"
        text="Filter Posts"
        :options="options"
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
  {
    text: 'Important',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    text: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    text: 'Cannot Fix',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    text: 'News',
    label: { color: 'purple', empty: true, circular: true },
  },
  {
    text: 'Enhancement',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
    text: 'Change Declined',
    label: { empty: true, circular: true },
  },
  {
    text: 'Off Topic',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    text: 'Interesting',
    label: { color: 'pink', empty: true, circular: true },
  },
  {
    text: 'Discussion',
    label: { color: 'green', empty: true, circular: true },
  },
]

const code = `<template>
  <Dropdown
    button
    floating
    labeled
    search-in-menu
    selectable
    icon="world"
    v-model="selected"
    text="Filter Posts"
    :options="options"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  {
    text: 'Important',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    text: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    text: 'Cannot Fix',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    text: 'News',
    label: { color: 'purple', empty: true, circular: true },
  },
  {
    text: 'Enhancement',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
    text: 'Change Declined',
    label: { empty: true, circular: true },
  },
  {
    text: 'Off Topic',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    text: 'Interesting',
    label: { color: 'pink', empty: true, circular: true },
  },
  {
    text: 'Discussion',
    label: { color: 'green', empty: true, circular: true },
  },
]
<\/script>`
</script>
