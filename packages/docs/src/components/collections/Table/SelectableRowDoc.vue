<template>
  <DocSection label="Selectable Row" :code="code">
    <template #description>
      A table can have its rows appear selectable
    </template>
    <template #example>
      <Table
        celled
        selectable
        :items="items"
        :rowWarning="rowWarning"
        @row:select="(e) => console.log(e.data)"
      >
        <Column field="name" header="Name" />
        <Column field="status" header="Status" />
        <Column field="notes" header="Notes" :warning="colWarning" />
      </Table>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'No Action', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
  { name: 'John', status: 'No Action', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])

const rowWarning = ({ index }: any) => index === 3
const colWarning = ({ value, index }: any) => value === 'Requires call' && index === 4

const code = `<template>
  <Table
    :items="items"
    :rowWarning="rowWarning"
    @row:select="(e) => console.log(e.data)"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" :warning="colWarning" />
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'No Action', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
  { name: 'John', status: 'No Action', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])

const rowWarning = ({ index }) => index === 3
const colWarning = ({ value, index }) => value === 'Requires call' && index === 4
<\/script>`
</script>
