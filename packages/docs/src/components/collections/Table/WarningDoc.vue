<template>
  <DocSection label="Warning" :code="code">
    <template #description>
      A cell or row may warn a user
    </template>
    <template #example>
      <Table
        celled
        :items="items"
        :rowWarning="rowWarning"
      >
        <Column field="name" header="Name" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Icon name="attention" v-if="data.status === 'Requires Action'" />
            {{ data.status }}
          </template>
        </Column>
        <Column field="notes" header="Notes" :warning="colWarning">
          <template #body="{ data }">
            <Icon name="attention" v-if="data.notes === 'Hostile'" />
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
  { name: 'No Name Specified', status: 'Unknown', notes: 'None' },
  { name: 'Jimmy', status: 'Requires Action', notes: 'None' },
  { name: 'Jamie', status: 'Unknown', notes: 'Hostile' },
  { name: 'Jill', status: 'Unknown', notes: 'None' },
])

const rowWarning = ({ data }: any) => data.name === 'Jimmy'
const colWarning = ({ value }: any) => value === 'Hostile'

const code = `<template>
  <Table
    celled
    :items="items"
    :rowWarning="rowWarning"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status">
      <template #body="{ data }">
        <Icon name="attention" v-if="data.status === 'Requires Action'" />
        {{ data.status }}
      </template>
    </Column>
    <Column field="notes" header="Notes" :warning="colWarning">
      <template #body="{ data }">
        <Icon name="attention" v-if="data.notes === 'Hostile'" />
        {{ data.notes }}
      </template>
    </Column>
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column, Icon } from 'vue-fomantic-ui'

const items = ref([
  { name: 'No Name Specified', status: 'Unknown', notes: 'None' },
  { name: 'Jimmy', status: 'Requires Action', notes: 'None' },
  { name: 'Jamie', status: 'Unknown', notes: 'Hostile' },
  { name: 'Jill', status: 'Unknown', notes: 'None' },
])

const rowWarning = ({ data }) => data.name === 'Jimmy'
const colWarning = ({ value }) => value === 'Hostile'
<\/script>`
</script>
