<template>
  <DocSection label="Text Alignment" :code="code">
    <template #description>
      A table header, row, or cell can adjust its text alignment
    </template>
    <template #example>
      <Table
        striped
        :items="items"
        :rowClass="rowClass"
      >
        <Column field="name" header="Name" />
        <Column field="status" header="Status" />
        <Column field="notes" header="Notes" :cellClass="colClass">
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
  { name: 'John', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Denied', notes: 'None' },
])

const rowClass = ({ index }: any) => index === 0 ? 'center aligned' : null
const colClass = () => 'right aligned'

const code = `<template>
  <Table
    striped
    :items="items"
    :rowClass="rowClass"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" :cellClass="colClass">
    </Column>
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

const rowClass = ({ index }) => index === 0 ? 'center aligned' : null
const colClass = () => 'right aligned'
<\/script>`
</script>
