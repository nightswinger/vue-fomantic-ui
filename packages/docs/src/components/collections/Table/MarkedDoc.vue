<template>
  <DocSection label="Marked" :code="code">
    <template #description>
      A cell or row can be marked by a colored left or right border
    </template>
    <template #example>
      <Table
        celled
        :items="items"
      >
        <Column field="name" header="Name" :marked="marked" />
        <Column field="status" header="Status" :marked="marked">
          <template #body="{ data }">
            <Icon name="microphone" v-if="data.status === 'Recording session'" />
            {{ data.status }}
          </template>
        </Column>
        <Column field="notes" header="Notes" :marked="marked">
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

const marked = ({ data, value }: any) => {
  if (value === 'No Name Specified') return 'right blue'
  if (data.name === 'No Name Specified' && value === 'Unknown') return 'left red'
  if (value === 'Jimmy') return 'left green'
  if (data.name === 'Jamie' && value === 'Unknown') return 'right orange'
  if (value === 'Vacation') return 'right purple'
}

const code = `<template>
  <Table
    celled
    :items="items"
    :rowColor="rowColor"
  >
    <Column field="name" header="Name" :marked="marked" />
    <Column field="status" header="Status" :marked="marked">
      <template #body="{ data }">
        <Icon name="microphone" v-if="data.status === 'Recording session'" />
        {{ data.status }}
      </template>
    </Column>
    <Column field="notes" header="Notes" :marked="marked">
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

const marked = ({ data, value }) => {
  if (value === 'No Name Specified') return 'right blue'
  if (data.name === 'No Name Specified' && value === 'Unknown') return 'left red'
  if (value === 'Jimmy') return 'left green'
  if (data.name === 'Jamie' && value === 'Unknown') return 'right orange'
  if (value === 'Vacation') return 'right purple'
}
<\/script>`
</script>
