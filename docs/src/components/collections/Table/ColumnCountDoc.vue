<template>
  <DocSection label="Column Count" :code="code">
    <template #description>
      A table can specify its column count to divide its content evenly
    </template>
    <template #example>
      <Table :items="items" :columns="5">
        <Column field="name" header="Name" />
        <Column field="status" header="Status" />
        <Column field="age" header="Age" />
        <Column field="gender" header="Gender" />
        <Column field="notes" header="Notes" />
        <template #footer>
          <tr>
            <th>3 People</th>
            <th>2 Approved</th>
            <th></th>
            <th></th>
            <th></th>
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
  { name: 'John', status: 'Approved', age: 22, gender: 'Male', notes: 'None' },
  { name: 'Jamie', status: 'Approved', age: 32, gender: 'Male', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', age: 22, gender: 'Female', notes: 'None' },
])

const code = `<template>
  <Table :items="items" :columns="5">
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="age" header="Age" />
    <Column field="gender" header="Gender" />
    <Column field="notes" header="Notes" />
    <template #footer>
      <tr>
        <th>3 People</th>
        <th>2 Approved</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </template>
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', age: 22, gender: 'Male', notes: 'None' },
  { name: 'Jamie', status: 'Approved', age: 32, gender: 'Male', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', age: 22, gender: 'Female', notes: 'None' },
])
<\/script>`
</script>
