<template>
  <DocSection label="Error" :code="code">
    <template #description>
      A cell or row may call attention to an error or a negative value
    </template>
    <template #example>
      <Table
        celled
        :items="items"
        :rowError="rowError"
      >
        <Column field="name" header="Name" />
        <Column field="status" header="Status" />
        <Column field="notes" header="Notes" :error="colError">
          <template #body="{ data }">
            <Icon name="attention" v-if="data.notes === 'Classified'" />
            {{ data.notes }}
          </template>
        </Column>
      </Table>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Table, Column, Icon } from 'vue-fomantic-ui'

const items = ref([
  { name: 'No Name Specified', status: 'Approved', notes: 'None' },
  { name: 'Jimmy', status: 'Cannot pull data', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Classified' },
  { name: 'Jill', status: 'Approved', notes: 'None' },
])

const rowError = ({ data }: any) => data.name === 'Jimmy'
const colError = ({ value }: any) => value === 'Classified'

const code = `<template>
  <Table
    celled
    :items="items"
    :rowError="rowError"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status" />
    <Column field="notes" header="Notes" :error="colError">
      <template #body="{ data }">
        <Icon name="attention" v-if="data.notes === 'Classified'" />
        {{ data.notes }}
      </template>
    </Column>
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column, Icon } from 'vue-fomantic-ui'

const items = ref([
  { name: 'No Name Specified', status: 'Approved', notes: 'None' },
  { name: 'Jimmy', status: 'Cannot pull data', notes: 'None' },
  { name: 'Jamie', status: 'Approved', notes: 'Classified' },
  { name: 'Jill', status: 'Approved', notes: 'None' },
])

const rowError = ({ data }) => data.name === 'Jimmy'
const colError = ({ value }) => value === 'Classified'
<\/script>`
</script>
