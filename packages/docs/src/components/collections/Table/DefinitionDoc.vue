<template>
  <DocSection label="Definition" :code="code">
    <template #description>
      A table may be formatted to emphasize a first column that defines a rows content
    </template>
    <template #example>
      <Table celled definition :items="items">
        <Column field="text" />
        <Column field="arguments" header="Arguments" />
        <Column field="description" header="Description" />
      </Table>

      <Divider hidden />

      <Table celled definition :items="data" definitionClass="collapsing">
        <template #definition>
          <Checkbox fitted slider />
        </template>

        <Column field="name" header="Name" />
        <Column field="registrationDate" header="Registration Date" />
        <Column field="email" header="E-mail address" />
        <Column field="premiumPlan" header="Premium Plan" />

        <template #footer>
          <tr>
            <th></th>
            <th colspan="4">
              <Button primary labeled icon="user" size="small" floated="right" content="Add User" />
              <Button content="Approve" size="small" />
              <Button content="Approve All" size="small" disabled />
            </th>
          </tr>
        </template>
      </Table>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Table, Column, Button, Checkbox, Divider } from 'vue-fomantic-ui'

const items = ref([
  { text: 'reset rating', arguments: 'None', description: 'Resets rating to default value' },
  { text: 'set rating', arguments: 'rating (integer)', description: 'Sets the current star rating to specified value' },
])

const data = ref([
  { name: 'John Lilki', registrationDate: 'September 14, 2013', email: 'jhlilk22@yahoo.com', premiumPlan: 'No' },
  { name: 'Jamie Harington', registrationDate: 'January 11, 2014', email: 'jamieharingonton@yahoo.com', premiumPlan: 'Yes' },
  { name: 'Jill Lewis', registrationDate: 'May 11, 2014', email: 'jilsewris22@yahoo.com', premiumPlan: 'Yes' },
])

const code = `<template>
  <Table :items="items" definitionClass="collapsing">
    <template #definition>
      <Checkbox fitted slider />
    </template>
    <Column field="arguments" header="Arguments" />
    <Column field="description" header="Description" />
  </Table>

  <Divider hidden />

  <Table celled definition :items="data" definitionClass="collapsing">
    <template #definition>
      <Checkbox fitted slider />
    </template>

    <Column field="name" header="Name" />
    <Column field="registrationDate" header="Registration Date" />
    <Column field="email" header="E-mail address" />
    <Column field="premiumPlan" header="Premium Plan" />

    <template #footer>
      <tr>
        <th></th>
        <th colspan="4">
          <Button primary labeled icon="user" size="small" floated="right" content="Add User" />
          <Button content="Approve" size="small" />
          <Button content="Approve All" size="small" disabled />
        </th>
      </tr>
    </template>
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column, Button, Checkbox, Divider } from 'vue-fomantic-ui'

const items = ref([
  { text: 'reset rating', arguments: 'None', description: 'Resets rating to default value' },
  { text: 'set rating', arguments: 'rating (integer)', description: 'Sets the current star rating to specified value' },
])

const data = ref([
  { name: 'John Lilki', registrationDate: 'September 14, 2013', email: 'jhlilk22@yahoo.com', premiumPlan: 'No' },
  { name: 'Jamie Harington', registrationDate: 'January 11, 2014', email: 'jamieharingonton@yahoo.com', premiumPlan: 'Yes' },
  { name: 'Jill Lewis', registrationDate: 'May 11, 2014', email: 'jilsewris22@yahoo.com', premiumPlan: 'Yes' },
])
<\/script>`
</script>
