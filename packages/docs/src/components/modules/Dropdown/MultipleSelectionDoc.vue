<template>
  <DocSection label="Multiple Selection" :code="code">
    <template #description>
      A selection dropdown can allow multiple selections
    </template>
    <template #example>
      <Dropdown
        v-model="selected"
        :options="options"
        multiple
        selection
        fluid
        placeholder="Skills"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref([])
const options = [
  { text: 'Angular', value: 'angular' },
  { text: 'CSS', value: 'css' },
  { text: 'Graphic Design', value: 'design' },
  { text: 'Ember', value: 'ember' },
  { text: 'HTML', value: 'html' },
  { text: 'Information Architecture', value: 'ia' },
  { text: 'Javascript', value: 'javascript' },
  { text: 'Mechanical Engineering', value: 'mech' },
  { text: 'Meteor', value: 'meteor' },
  { text: 'NodeJS', value: 'node' },
  { text: 'Plumbing', value: 'plumbing' },
  { text: 'Python', value: 'python' },
  { text: 'Rails', value: 'rails' },
  { text: 'React', value: 'react' },
  { text: 'Kitchen Repair', value: 'repair' },
  { text: 'Ruby', value: 'ruby' },
  { text: 'UI Design', value: 'ui' },
  { text: 'User Experience', value: 'ux' },
]

const code = `<template>
  <Dropdown
    v-model="selected"
    :options="options"
    multiple
    selection
    fluid
    placeholder="Skills"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref([])
const options = [
  { text: 'Angular', value: 'angular' },
  { text: 'CSS', value: 'css' },
  { text: 'Graphic Design', value: 'design' },
  { text: 'Ember', value: 'ember' },
  { text: 'HTML', value: 'html' },
  { text: 'Information Architecture', value: 'ia' },
  { text: 'Javascript', value: 'javascript' },
  { text: 'Mechanical Engineering', value: 'mech' },
  { text: 'Meteor', value: 'meteor' },
  { text: 'NodeJS', value: 'node' },
  { text: 'Plumbing', value: 'plumbing' },
  { text: 'Python', value: 'python' },
  { text: 'Rails', value: 'rails' },
  { text: 'React', value: 'react' },
  { text: 'Kitchen Repair', value: 'repair' },
  { text: 'Ruby', value: 'ruby' },
  { text: 'UI Design', value: 'ui' },
  { text: 'User Experience', value: 'ux' },
]
<\/script>`
</script>
