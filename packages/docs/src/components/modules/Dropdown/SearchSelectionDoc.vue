<template>
  <DocSection label="Search Selection" :code="code">
    <template #description>
      A selection dropdown can allow a user to search through a large list of choices
    </template>
    <template #example>
      <Dropdown
        v-model="selected"
        :options="options"
        search
        selection
        fluid
        placeholder="Pet"
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
  { text: 'Cat', value: 1 },
  { text: 'Dog', value: 2 },
  { text: 'Bird', value: 3 },
  { text: 'Rabbit', value: 4 },
  { text: 'Squirrel', value: 5 },
  { text: 'Horse', value: 6 },
  { text: 'Turtle', value: 7 },
  { text: 'Parrot', value: 8 },
]

const code = `<template>
  <Dropdown
    v-model="selected"
    :options="options"
    search
    selection
    fluid
    placeholder="Pet"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { text: 'Cat', value: 1 },
  { text: 'Dog', value: 2 },
  { text: 'Bird', value: 3 },
  { text: 'Rabbit', value: 4 },
  { text: 'Squirrel', value: 5 },
  { text: 'Horse', value: 6 },
  { text: 'Turtle', value: 7 },
  { text: 'Parrot', value: 8 },
]
<\/script>`
</script>
