<template>
  <DocSection label="Padded" :code="code">
    <template #description>
      A table may sometimes need to be more padded for legibility
    </template>
    <template #example>
      <Table
        padded
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
  {
    name: 'John',
    status: 'Approved',
    notes: 'He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.'
  },
  {
    name: 'Jamie',
    status: 'Approved',
    notes: 'Jamie was not interested in purchasing our product.'
  },
])

const code = `<template>
  <Table
    padded
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
  {
    name: 'John',
    status: 'Approved',
    notes: 'He is a very nice guy and I enjoyed talking to him on the telephone. I hope we get to talk again.'
  },
  {
    name: 'Jamie',
    status: 'Approved',
    notes: 'Jamie was not interested in purchasing our product.'
  },
])
<\/script>`
</script>
