<template>
  <DocSection label="Collapsing" :code="code">
    <template #description>
      A table can be collapsing, taking up only as much space as its rows.
    </template>
    <template #example>
      <Table
        collapsing
        :items="items"
      >
        <Column field="name" header="Name" />
        <Column field="status" header="Status" />
        <Column field="notes" header="Notes" />
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
    collapsing
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
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
