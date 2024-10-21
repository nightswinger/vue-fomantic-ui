<template>
  <DocSection label="Dropdown" :code="code">
    <template #description>
      A dropdown
    </template>
    <template #example>
      <Dropdown
        v-model="selected"
        text="File"
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
  { text: "New" },
  { text: "Open...", description: "ctrl + o" },
  { text: "Save as...", description: "ctrl + s" },
  { text: "Rename", description: "ctrl + r" },
  { text: "Make a copy" },
  { text: "Move to folder", icon: "folder" },
  { text: "Move to trash", icon: "trash" },
  { divider: true },
  { text: "Download as..." },
  {
    text: "Publish To Web",
    icon: "dropdown",
    children: [
      { text: "Google Docs" },
      { text: "Google Drive" },
      { text: "Dropbox" },
      { text: "Adobe Creative Cloud" },
      { text: "Private FTP" },
      { text: "Another Service..." },
    ],
  },
  { text: "E-mail Collaborators" },
]

const code = `<template>
  <Dropdown
    v-model="selected"
    text="File"
    :options="options"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { text: "New" },
  { text: "Open...", description: "ctrl + o" },
  { text: "Save as...", description: "ctrl + s" },
  { text: "Rename", description: "ctrl + r" },
  { text: "Make a copy" },
  { text: "Move to folder", icon: "folder" },
  { text: "Move to trash", icon: "trash" },
  { divider: true },
  { text: "Download as..." },
  {
    text: "Publish To Web",
    icon: "dropdown",
    children: [
      { text: "Google Docs" },
      { text: "Google Drive" },
      { text: "Dropbox" },
      { text: "Adobe Creative Cloud" },
      { text: "Private FTP" },
      { text: "Another Service..." },
    ],
  },
  { text: "E-mail Collaborators" },
]
<\/script>`
</script>
