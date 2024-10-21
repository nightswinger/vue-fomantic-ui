<template>
  <DocSection label="Striped" :code="code">
    <template #description>
      A table can stripe alternate rows of content with a darker color to increase contrast
    </template>
    <template #example>
      <Table
        striped
        :items="items"
      >
        <Column field="name" header="Name" />
        <Column field="joined" header="Date Joined" />
        <Column field="email" header="E-mail" />
        <Column field="called" header="Called" />
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
    name: 'John Lilki',
    joined: 'September 14, 2013',
    email: 'jhlilk22@yahoo.com',
    called: 'No',
  },
  {
    name: 'Jamie Harington',
    joined: 'January 11, 2014',
    email: 'jamieharingonton@yahoo.com',
    called: 'Yes',
  },
  {
    name: 'Jill Lewis',
    joined: 'May 11, 2014',
    email: 'jilsewris22@yahoo.com',
    called: 'Yes',
  },
  {
    name: 'John Lilki',
    joined: 'September 14, 2013',
    email: 'jhlilk22@yahoo.com',
    called: 'No',
  },
  {
    name: 'John Lilki',
    joined: 'September 14, 2013',
    email: 'jhlilk22@yahoo.com',
    called: 'No',
  },
  {
    name: 'Jamie Harington',
    joined: 'January 11, 2014',
    email: 'jamieharingonton@yahoo.com',
    called: 'Yes',
  },
  {
    name: 'Jill Lewis',
    joined: 'May 11, 2014',
    email: 'jilsewris22@yahoo.com',
    called: 'Yes',
  },
  {
    name: 'John Lilki',
    joined: 'September 14, 2013',
    email: 'jhlilk22@yahoo.com',
    called: 'No',
  },
])

const code = `<template>
  <Table
    striped
    :items="items"
  >
    <Column field="name" header="Name" />
    <Column field="joined" header="Date Joined" />
    <Column field="email" header="E-mail" />
    <Column field="called" header="Called" />
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  {
    name: 'John Lilki',
    joined: 'September 14, 2013',
    email: 'jhlilk22@yahoo.com',
    called: 'No',
  },
  {
    name: 'Jamie Harington',
    joined: 'January 11, 2014',
    email: 'jamieharingonton@yahoo.com',
    called: 'Yes',
  },
  {
    name: 'Jill Lewis',
    joined: 'May 11, 2014',
    email: 'jilsewris22@yahoo.com',
    called: 'Yes',
  },
  {
    name: 'John Lilki',
    joined: 'September 14, 2013',
    email: 'jhlilk22@yahoo.com',
    called: 'No',
  },
  {
    name: 'John Lilki',
    joined: 'September 14, 2013',
    email: 'jhlilk22@yahoo.com',
    called: 'No',
  },
  {
    name: 'Jamie Harington',
    joined: 'January 11, 2014',
    email: 'jamieharingonton@yahoo.com',
    called: 'Yes',
  },
  {
    name: 'Jill Lewis',
    joined: 'May 11, 2014',
    email: 'jilsewris22@yahoo.com',
    called: 'Yes',
  },
  {
    name: 'John Lilki',
    joined: 'September 14, 2013',
    email: 'jhlilk22@yahoo.com',
    called: 'No',
  },
])
<\/script>`
</script>
