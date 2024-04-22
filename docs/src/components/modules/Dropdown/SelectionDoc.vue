<template>
  <DocSection label="Selection" :code="code">
    <template #description>
      A dropdown can be used to select between choices in a form
    </template>
    <template #example>
      <Dropdown
        v-model="selected"
        :options="options"
        selection
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
  'Cat',
  'Dog',
  'Bird',
  'Rabbit',
  'Squirrel',
  'Horse',
  'Turtle',
  'Parrot',
]

const code = `<template>
  <Dropdown
    v-model="selected"
    :options="options"
    selection
    placeholder="Pet"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  'Cat',
  'Dog',
  'Bird',
  'Rabbit',
  'Squirrel',
  'Horse',
  'Turtle',
  'Parrot',
]
<\/script>`
</script>
