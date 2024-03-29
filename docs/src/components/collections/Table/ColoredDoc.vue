<template>
  <DocSection label="Colored" :code="code">
    <template #description>
      A table can be given a color to distinguish it from other tables.
    </template>
    <template #example>
      <Table
        v-for="color in colors"
        :color="color"
        :key="color"
        :items="items"
      >
        <Column field="food" header="Food" />
        <Column field="calories" header="Calories" />
        <Column field="protein" header="Protein" />
      </Table>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { food: 'Apple', calories: 200, protein: '0g' },
  { food: 'Orange', calories: 62, protein: '0g' },
])

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

const code = `<template>
  <Table
    v-for="color in colors"
    :color="color"
    :key="color"
    :items="items"
  >
    <Column field="food" header="Food" />
    <Column field="calories" header="Calories" />
    <Column field="protein" header="Protein" />
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { food: 'Apple', calories: 200, protein: '0g' },
  { food: 'Orange', calories: 62, protein: '0g' },
])

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]
<\/script>`
</script>
