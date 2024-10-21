<template>
  <DocSection label="Search Dropdown" :code="code">
    <template #description>
      A dropdown can be searchable
    </template>
    <template #example>
      <Dropdown
        button
        floating
        labeled
        search
        icon="world"
        v-model="selected"
        text="Select Language"
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
  { text: 'Arabic' },
  { text: 'Chinese' },
  { text: 'Dutch' },
  { text: 'English' },
  { text: 'French' },
  { text: 'German' },
  { text: 'Italian' },
  { text: 'Japanese' },
  { text: 'Korean' },
  { text: 'Portuguese' },
  { text: 'Russian' },
  { text: 'Spanish' },
  { text: 'Thai' },
  { text: 'Turkish' },
]

const code = `<template>
  <Dropdown
    button
    floating
    labeled
    search
    icon="world"
    v-model="selected"
    text="Select Language"
    :options="options"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { text: 'Arabic' },
  { text: 'Chinese' },
  { text: 'Dutch' },
  { text: 'English' },
  { text: 'French' },
  { text: 'German' },
  { text: 'Italian' },
  { text: 'Japanese' },
  { text: 'Korean' },
  { text: 'Portuguese' },
  { text: 'Russian' },
  { text: 'Spanish' },
  { text: 'Thai' },
  { text: 'Turkish' },
]
<\/script>`
</script>
