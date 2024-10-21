<template>
  <DocSection label="Pointing" :code="code">
    <template #description>
      A dropdown can be formatted so that its menu is pointing
    </template>
    <template #example>
      <Dropdown
        v-model="selected"
        :options="options"
        button
        icon="wrench"
        pointing="top left"
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
  { header: "DISPLAY DENSITY" },
  { text: "Comfortable" },
  { text: "Save as..." },
  { text: "Cozy" },
  { text: "Make a copy" },
  { text: "Compact" },
  { divider: true },
  { text: "Settings" },
  {
    text: "Upload Settings",
    icon: "dropdown",
    children: [
      { text: "Convert Updated Files to PDF", icon: "check" },
      { text: "Digitize Text from Uploaded Files", icon: "check" },
    ],
  },
  { text: "Manage Apps" },
  { text: "Keyboard Shortcuts" },
  { text: "Help" },
]

const code = `<template>
  <Dropdown
    v-model="selected"
    :options="options"
    button
    icon="wrench"
    pointing="top left"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { header: "DISPLAY DENSITY" },
  { text: "Comfortable" },
  { text: "Save as..." },
  { text: "Cozy" },
  { text: "Make a copy" },
  { text: "Compact" },
  { divider: true },
  { text: "Settings" },
  {
    text: "Upload Settings",
    icon: "dropdown",
    children: [
      { text: "Convert Updated Files to PDF", icon: "check" },
      { text: "Digitize Text from Uploaded Files", icon: "check" },
    ],
  },
  { text: "Manage Apps" },
  { text: "Keyboard Shortcuts" },
  { text: "Help" },
]
<\/script>`
</script>
