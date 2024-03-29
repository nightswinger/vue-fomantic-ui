<template>
  <DocSection label="Scrolling" :code="code">
    <template #description>
      A table body can scroll vertically.
    </template>
    <template #example>
      <Table
        unstackable
        celled
        :scrolling="true"
        :items="items"
      >
        <Column field="name" header="Name" />
        <Column field="age" header="Age" />
        <Column field="job" header="Job" />

        <template #footer>
          <tr>
            <td>18 Entries</td>
            <td>Average age: 25</td>
            <td>2 Job-Types</td>
          </tr>
        </template>
      </Table>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'James', age: 24, job: 'Engineer' },
  { name: 'Jill', age: 26, job: 'Engineer' },
  { name: 'Elyse', age: 24, job: 'Designer' },
  { name: 'Daphne', age: 24, job: 'Engineer' },
  { name: 'Zoe', age: 26, job: 'Engineer' },
  { name: 'Kirk', age: 24, job: 'Designer' },
  { name: 'Doug', age: 24, job: 'Engineer' },
  { name: 'Francis', age: 26, job: 'Engineer' },
  { name: 'Claire', age: 24, job: 'Designer' },
  { name: 'Thomas', age: 27, job: 'Engineer' },
  { name: 'Clint', age: 31, job: 'Engineer' },
  { name: 'Alison', age: 21, job: 'Designer' },
  { name: 'Rachel', age: 19, job: 'Engineer' },
  { name: 'Dave', age: 23, job: 'Engineer' },
  { name: 'Oliver', age: 29, job: 'Designer' },
  { name: 'Sue', age: 23, job: 'Engineer' },
  { name: 'Jennifer', age: 22, job: 'Engineer' },
  { name: 'Zak', age: 27, job: 'Designer' },
])

const code = `<template>
  <Table
    unstackable
    celled
    scrolling
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="age" header="Age" />
    <Column field="job" header="Job" />

    <template #footer>
      <tr>
        <td>18 Entries</td>
        <td>Average age: 25</td>
        <td>2 Job-Types</td>
      </tr>
    </template>
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'James', age: 24, job: 'Engineer' },
  { name: 'Jill', age: 26, job: 'Engineer' },
  { name: 'Elyse', age: 24, job: 'Designer' },
  { name: 'Daphne', age: 24, job: 'Engineer' },
  { name: 'Zoe', age: 26, job: 'Engineer' },
  { name: 'Kirk', age: 24, job: 'Designer' },
  { name: 'Doug', age: 24, job: 'Engineer' },
  { name: 'Francis', age: 26, job: 'Engineer' },
  { name: 'Claire', age: 24, job: 'Designer' },
  { name: 'Thomas', age: 27, job: 'Engineer' },
  { name: 'Clint', age: 31, job: 'Engineer' },
  { name: 'Alison', age: 21, job: 'Designer' },
  { name: 'Rachel', age: 19, job: 'Engineer' },
  { name: 'Dave', age: 23, job: 'Engineer' },
  { name: 'Oliver', age: 29, job: 'Designer' },
  { name: 'Sue', age: 23, job: 'Engineer' },
  { name: 'Jennifer', age: 22, job: 'Engineer' },
  { name: 'Zak', age: 27, job: 'Designer' },
])
<\/script>`
</script>
