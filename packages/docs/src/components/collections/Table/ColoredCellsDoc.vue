<template>
  <DocSection label="Colored Cells" :code="code">
    <template #description>
      A cell can be styled by the central color palette colors
    </template>
    <template #example>
      <Table
        celled
        :items="items"
        :rowColor="rowColor"
      >
        <Column field="name" header="Name" :color="colColor" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Icon name="microphone" v-if="data.status === 'Recording session'" />
            {{ data.status }}
          </template>
        </Column>
        <Column field="notes" header="Notes" :color="colColor">
          <template #body="{ data }">
            <Icon name="child" v-if="data.notes === 'Baby Party'" />
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
  { name: 'Jimmy', status: 'Recording session', notes: 'None' },
  { name: 'Jamie', status: 'Unknown', notes: 'Baby Party' },
  { name: 'Jill', status: 'Unknown', notes: 'Vacation' },
])

const rowColor = ({ data }: any) => data.name === 'Jimmy' ? 'blue': undefined
const colColor = ({ value }: any) => {
  if (value === 'No Name Specified') return 'orange'
  if (value === 'Baby Party') return 'pink'
  if (value === 'Vacation') return 'green'
}

const code = `<template>
  <Table
    celled
    :items="items"
    :rowColor="rowColor"
  >
    <Column field="name" header="Name" :color="colColor" />
    <Column field="status" header="Status">
      <template #body="{ data }">
        <Icon name="microphone" v-if="data.status === 'Recording session'" />
        {{ data.status }}
      </template>
    </Column>
    <Column field="notes" header="Notes" :color="colColor">
      <template #body="{ data }">
        <Icon name="child" v-if="data.notes === 'Baby Party'" />
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
  { name: 'Jimmy', status: 'Recording session', notes: 'None' },
  { name: 'Jamie', status: 'Unknown', notes: 'Baby Party' },
  { name: 'Jill', status: 'Unknown', notes: 'Vacation' },
])

const rowColor = ({ data }) => data.name === 'Jimmy' ? 'blue': undefined
const colColor = ({ value }) => {
  if (value === 'No Name Specified') return 'orange'
  if (value === 'Baby Party') return 'pink'
  if (value === 'Vacation') return 'green'
}
<\/script>`
</script>
