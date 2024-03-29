<template>
  <DocSection label="Positive / Negative" :code="code">
    <template #description>
      A cell or row may let a user know whether a value is good or bad
    </template>
    <template #example>
      <Table
        celled
        :items="items"
        :rowPositive="rowPositive"
        :rowNegative="rowNegative"
      >
        <Column field="name" header="Name" />
        <Column field="status" header="Status">
          <template #body="{ data }">
            <Icon name="checkmark" v-if="data.status === 'Approved'" />
            {{ data.status }}
          </template>
        </Column>
        <Column field="notes" header="Notes" :positive="colPositive" :negative="colNegative">
          <template #body="{ data }">
            <Icon name="close" v-if="data.notes === 'Requires call'" />
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
  { name: 'Jimmy', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Unknown', notes: 'Requires call' },
  { name: 'Jill', status: 'Unknown', notes: 'None' },
])

const rowPositive = ({ index }: any) => index === 1
const colPositive = ({ value }: any) => value === 'Requires call'

const rowNegative = ({ index }: any) => index === 3
const colNegative = ({ value, index }: any) => index === 0 && value === 'None'

const code = `<template>
  <Table
    celled
    :items="items"
    :rowPositive="rowPositive"
    :rowNegative="rowNegative"
  >
    <Column field="name" header="Name" />
    <Column field="status" header="Status">
      <template #body="{ data }">
        <Icon name="checkmark" v-if="data.status === 'Approved'" />
        {{ data.status }}
      </template>
    </Column>
    <Column field="notes" header="Notes" :positive="colPositive" :negative="colNegative">
      <template #body="{ data }">
        <Icon name="close" v-if="data.notes === 'Requires call'" />
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
  { name: 'Jimmy', status: 'Approved', notes: 'None' },
  { name: 'Jamie', status: 'Unknown', notes: 'Requires call' },
  { name: 'Jill', status: 'Unknown', notes: 'None' },
])

const rowPositive = ({ index }) => index === 1
const colPositive = ({ value }) => value === 'Requires call'

const rowNegative = ({ index }) => index === 3
const colNegative = ({ value, index }) => index === 0 && value === 'None'
<\/script>`
</script>
