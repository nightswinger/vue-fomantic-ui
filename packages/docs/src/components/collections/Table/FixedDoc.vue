<template>
  <DocSection label="Fixed" :code="code">
    <template #description>
      A table can use table-layout: fixed a special faster form of table rendering that does not resize table cells based on content.
    </template>
    <template #example>
      <Table
        fixed
        :items="items"
      >
        <Column field="name" header="Name" />
        <Column field="status" header="Status" />
        <Column field="description" header="Description" />
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
    description: 'John is an interesting boy but sometimes you don\'t really have enough room to describe everything you\'d like',
  },
  {
    name: 'Jamie',
    status: 'Approved',
    description: 'Jamie is a kind girl but sometimes you don\'t really have enough room to describe everything you\'d like',
  },
  {
    name: 'Jill',
    status: 'Denied',
    description: 'Jill is an alright girl but sometimes you don\'t really have enough room to describe everything you\'d like',
  },
])

const code = `<template>
  <Table
    fixed
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="description" header="Description" />
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  {
    name: 'John',
    status: 'Approved',
    description: 'John is an interesting boy but sometimes you don\\'t really have enough room to describe everything you\\'d like',
  },
  {
    name: 'Jamie',
    status: 'Approved',
    description: 'Jamie is a kind girl but sometimes you don\\'t really have enough room to describe everything you\\'d like',
  },
  {
    name: 'Jill',
    status: 'Denied',
    description: 'Jill is an alright girl but sometimes you don\\'t really have enough room to describe everything you\\'d like',
  },
])
<\/script>`
</script>
