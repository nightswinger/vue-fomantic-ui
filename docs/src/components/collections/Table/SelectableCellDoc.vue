<template>
  <DocSection label="Selectable Cell" :code="code">
    <template #description>
      A table cell can be selectable
    </template>
    <template #example>
      <Table
        celled
        :items="items"
        :rowWarning="rowWarning"
        @cell:select="(e) => console.log(e.value)"
      >
        <Column field="name" header="Name" />
        <Column field="status" header="Status" :positive="colPositive" :negative="colNegative" />
        <Column field="edit" header="Notes" selectable :positive="colPositive" :negative="colNegative" />
      </Table>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'No Action', edit: 'Edit' },
  { name: 'Jamie', status: 'Approved', edit: 'Edit' },
  { name: 'Jill', status: 'Denied', edit: 'Edit' },
  { name: 'John', status: 'No Action', edit: 'Requires change' },
  { name: 'Jamie', status: 'Approved', edit: 'Approve' },
  { name: 'Jill', status: 'Denied', edit: 'Remove' },
])

const rowWarning = ({ index }: any) => index === 3
const colPositive = ({ index }: any) => index === 4
const colNegative = ({ index }: any) => index === 5

const code = `<template>
  <Table
    :items="dataSource"
    :rowWarning="rowWarning"
    v-bind="args"
    @cell:select="(e) => console.log(e.value)"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" :positive="colPositive" :negative="colNegative" />
    <Column field="edit" header="Notes" selectable :positive="colPositive" :negative="colNegative" />
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John', status: 'No Action', edit: 'Edit' },
  { name: 'Jamie', status: 'Approved', edit: 'Edit' },
  { name: 'Jill', status: 'Denied', edit: 'Edit' },
  { name: 'John', status: 'No Action', edit: 'Requires change' },
  { name: 'Jamie', status: 'Approved', edit: 'Approve' },
  { name: 'Jill', status: 'Denied', edit: 'Remove' },
])
<\/script>`
</script>
