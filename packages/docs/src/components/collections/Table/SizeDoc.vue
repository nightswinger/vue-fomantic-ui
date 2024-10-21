<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A table can also be small or large
    </template>
    <template #example>
      <Table
        size="small"
        :items="items"
      >
        <Column field="name" header="Name" />
        <Column field="status" header="Status" />
        <Column field="notes" header="Notes" />
        <template #footer>
          <tr>
            <th>3 People</th>
            <th>2 Approved</th>
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
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])

const code = `<template>
  <Table
    size="small"
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
    <template #footer>
      <tr>
        <th>3 People</th>
        <th>2 Approved</th>
        <th></th>
      </tr>
    </template>
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])
<\/script>`
</script>
