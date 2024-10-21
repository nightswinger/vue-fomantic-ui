<template>
  <DocSection :code="code">
    <template #description>
      <Message info>
        Fixed single line tables will automatically ensure content that does not fit in a single line will receive "..." ellipsis
      </Message>
    </template>
    <template #example>
      <Table
        fixed
        single-line
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
import { Table, Column, Message } from 'vue-fomantic-ui'

const items = ref([
  {
    name: 'John',
    status: 'Approved',
    description: 'This is much too long to fit I\'m sorry about that',
  },
  {
    name: 'Jamie',
    status: 'Approved',
    description: 'Shorter description',
  },
  {
    name: 'Jill',
    status: 'Denied',
    description: 'Shorter description',
  },
])

const code = `<template>
  <Table
    fixed
    single-line
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
    description: 'This is much too long to fit I\\'m sorry about that',
  },
  {
    name: 'Jamie',
    status: 'Approved',
    description: 'Shorter description',
  },
  {
    name: 'Jill',
    status: 'Denied',
    description: 'Shorter description',
  },
])
<\/script>`
</script>
