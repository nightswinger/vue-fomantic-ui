<template>
  <DocSection label="Vertical Alignment" :code="code">
    <template #description>
      A table header, row, or cell can adjust its vertical alignment
    </template>
    <template #example>
      <Table
        striped
        :items="items"
        :rowClass="rowClass"
      >
        <Column field="name" header="Name" />
        <Column field="status" header="Status" :cellClass="colClass" />
        <Column field="notes" header="Notes">
          <template #body="{ data }">
            {{ data.notes }}<br>
            1<br>
            2<br>
          </template>
        </Column>
      </Table>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'Notes' },
  { name: 'Jamie', status: 'Approved', notes: 'Notes' },
])

const rowClass = ({ index }: any) => index === 0 ? 'top aligned' : null
const colClass = ({ index }: any) => index === 1 ? 'bottom aligned' : null

const code = `<template>
  <Table
    striped
    :items="items"
    :rowClass="rowClass"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" :cellClass="colClass" />
    <Column field="notes" header="Notes">
      <template #body="{ data }">
        {{ data.notes }}<br>
        1<br>
        2<br>
      <\/template>
    <\/Column>
  <\/Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'Approved', notes: 'Notes' },
  { name: 'Jamie', status: 'Approved', notes: 'Notes' },
])

const rowClass = ({ index }) => index === 0 ? 'top aligned' : null
const colClass = ({ index }) => index === 1 ? 'bottom aligned' : null
<\/script>`
</script>
