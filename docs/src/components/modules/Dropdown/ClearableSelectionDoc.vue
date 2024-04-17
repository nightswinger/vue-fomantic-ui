<template>
  <DocSection label="Clearable Selection" :code="code">
    <template #description>
      A clearable selection dropdown can allow a user to cancel to cancel a previous selection
    </template>
    <template #example>
      <Dropdown
        v-model="selected"
        :options="options"
        clearable
        selection
        placeholder="Select Language"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref({ text: 'English', value: 3 })
const options = [
  { text: 'Arabic', value: 0 },
  { text: 'Chinese', value: 1 },
  { text: 'Dutch', value: 2 },
  { text: 'English', value: 3 },
  { text: 'French', value: 4 },
  { text: 'German', value: 5 },
  { text: 'Italian', value: 6 },
  { text: 'Japanese', value: 7 },
  { text: 'Korean', value: 8 },
  { text: 'Portuguese', value: 9 },
  { text: 'Russian', value: 10 },
  { text: 'Spanish', value: 11 },
  { text: 'Thai', value: 12 },
  { text: 'Turkish', value: 13 },
]

const code = `<template>
  <Dropdown
    v-model="selected"
    :options="options"
    clearable
    selection
    placeholder="Select Language"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref({ text: 'English', value: 3 })
const options = [
  { text: 'Arabic', value: 0 },
  { text: 'Chinese', value: 1 },
  { text: 'Dutch', value: 2 },
  { text: 'English', value: 3 },
  { text: 'French', value: 4 },
  { text: 'German', value: 5 },
  { text: 'Italian', value: 6 },
  { text: 'Japanese', value: 7 },
  { text: 'Korean', value: 8 },
  { text: 'Portuguese', value: 9 },
  { text: 'Russian', value: 10 },
  { text: 'Spanish', value: 11 },
  { text: 'Thai', value: 12 },
  { text: 'Turkish', value: 13 },
]
<\/script>`
</script>
