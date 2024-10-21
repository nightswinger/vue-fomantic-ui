<template>
  <DocSection label="Table" :code="code">
    <template #description>
      A standard table
    </template>
    <template #example>
      <Table celled :items="items">
        <Column field="name" header="Name" />
        <Column field="age" header="Age" />
        <Column field="job" header="Job" />
      </Table>

      <Divider hidden />

      <Table basic="very" collapsing celled :items="data">
        <Column field="name" header="Employee">
          <template #body="{ data }">
            <Header as="h4">
              <Image :src="data.image" size="mini" rounded />
              <div class="content">
                {{ data.name }}
                <div class="sub header">{{ data.job }}</div>
              </div>
            </Header>
          </template>
        </Column>
        <Column field="correctGuesses" header="Correct Guesses" />
      </Table>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Table, Column, Divider, Header, Image } from 'vue-fomantic-ui'

const items = ref([
  { name: 'James', age: 24, job: 'Engineer' },
  { name: 'Jill', age: 26, job: 'Engineer' },
  { name: 'Elyse', age: 24, job: 'Designer' },
])

const data = ref([
  { name: 'Lena', job: 'Human Resources', correctGuesses: 22, image: '/vue-fomantic-ui/images/avatar/small/lena.png' },
  { name: 'Matthew', job: 'Fabric Design', correctGuesses: 15, image: '/vue-fomantic-ui/images/avatar/small/matthew.png' },
  { name: 'Lindsay', job: 'Entertainment', correctGuesses: 12, image: '/vue-fomantic-ui/images/avatar/small/lindsay.png' },
  { name: 'Mark', job: 'Executive', correctGuesses: 11, image: '/vue-fomantic-ui/images/avatar/small/mark.png' },
])

const code = `<template>
  <Table celled :items="items">
    <Column field="name" header="Name" />
    <Column field="age" header="Age" />
    <Column field="job" header="Job" />
  </Table>

  <Divider hidden />

  <Table basic="very" collapsing celled :items="data">
    <Column field="name" header="Employee">
      <template #body="{ data }">
        <Header as="h4">
          <Image :src="data.image" size="mini" rounded />
          <div class="content">
            {{ data.name }}
            <div class="sub header">{{ data.job }}</div>
          </div>
        </Header>
      </template>
    </Column>
    <Column field="correctGuesses" header="Correct Guesses" />
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column, Divider, Header, Image } from 'vue-fomantic-ui'

const items = ref([
  { name: 'James', age: 24, job: 'Engineer' },
  { name: 'Jill', age: 26, job: 'Engineer' },
  { name: 'Elyse', age: 24, job: 'Designer' },
])

const data = ref([
  { name: 'Lena', job: 'Human Resources', correctGuesses: 22, image: '/vue-fomantic-ui/images/avatar/small/lena.png' },
  { name: 'Matthew', job: 'Fabric Design', correctGuesses: 15, image: '/vue-fomantic-ui/images/avatar/small/matthew.png' },
  { name: 'Lindsay', job: 'Entertainment', correctGuesses: 12, image: '/vue-fomantic-ui/images/avatar/small/lindsay.png' },
  { name: 'Mark', job: 'Executive', correctGuesses: 11, image: '/vue-fomantic-ui/images/avatar/small/mark.png' },
])
<\/script>`
</script>
