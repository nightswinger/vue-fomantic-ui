<template>
  <DocSection label="Single Line" :code="code">
    <template #description>
      A table can specify that its cell contents should remain on a single line, and not wrap.
    </template>
    <template #example>
      <Table
        singleLine
        :items="items"
      >
        <Column field="name" header="Name" />
        <Column field="registrationDate" header="Registration Date" />
        <Column field="email" header="E-mail address" />
        <Column field="premiumPlan" header="Premium Plan" />
      </Table>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John Lilki', registrationDate: 'September 14, 2013', email: 'jhlilk22@yahoo.com', premiumPlan: 'No' },
  { name: 'Jamie Harington', registrationDate: 'January 11, 2014', email: 'jamieharingonton@yahoo.com', premiumPlan: 'Yes' },
  { name: 'Jill Lewis', registrationDate: 'May 11, 2014', email: 'jilsewris22@yahoo.com', premiumPlan: 'Yes' },
])

const code = `<template>
  <Table
    single-line
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="registrationDate" header="Registration Date" />
    <Column field="email" header="E-mail address" />
    <Column field="premiumPlan" header="Premium Plan" />
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'John Lilki', registrationDate: 'September 14, 2013', email: 'jhlilk22@yahoo.com', premiumPlan: 'No' },
  { name: 'Jamie Harington', registrationDate: 'January 11, 2014', email: 'jamieharingonton@yahoo.com', premiumPlan: 'Yes' },
  { name: 'Jill Lewis', registrationDate: 'May 11, 2014', email: 'jilsewris22@yahoo.com', premiumPlan: 'Yes' },
])
<\/script>`
</script>
