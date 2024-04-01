<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      A cell can be disabled
    </template>
    <template #example>
      <Table
        celled
        :items="items"
        :rowDisabled="rowDisabled"
      >
        <Column field="name" header="Name" :disabled="colDisabled" />
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

const rowDisabled = ({ index }: any) => index === 0
const colDisabled = ({ value }: any) => value === 'Jill'

const code = `<template>
  <Table
    celled
    :items="items"
    :rowDisabled="rowDisabled"
  >
    <Column field="name" header="Name" :disabled="colDisabled" />
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

const rowDisabled = ({ index }) => index === 0
const colDisabled = ({ value }) => value === 'Jill'
<\/script>`
</script>
