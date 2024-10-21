<template>
  <DocSection label="Active" :code="code">
    <template #description>
      A cell or row can be active or selected by a user
    </template>
    <template #example>
      <Table
        celled
        :items="items"
        :rowActive="rowActive"
      >
        <Column field="name" header="Name" :active="colActive" />
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
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'John', status: 'Requires Action', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Approved', notes: 'None' },
])

const rowActive = ({ data }: any) => data.name === 'John'
const colActive = ({ value }: any) => value === 'Jill'

const code = `<template>
  <Table
    celled
    :items="items"
    :rowActive="rowActive"
  >
    <Column field="name" header="Name" :active="colActive" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" />
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'John', status: 'Requires Action', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Approved', notes: 'None' },
])

const rowActive = ({ data }) => data.name === 'John'
const colActive = ({ value }) => value === 'Jill'
<\/script>`
</script>
