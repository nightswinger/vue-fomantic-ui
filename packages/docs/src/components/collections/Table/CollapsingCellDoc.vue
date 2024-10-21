<template>
  <DocSection label="Collapisng Cell" :code="code">
    <template #description>
      A cell can be collapsing so that it only uses as much space as required
    </template>
    <template #example>
      <Table :items="items" hideHeader>
        <Column field="name" collapsing>
          <template #body="{ data }">
            <Icon name="folder" />
            {{ data.name }}
          </template>
        </Column>
        <Column field="message" />
        <Column field="time" />
      </Table>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Table, Column, Icon } from 'vue-fomantic-ui'

const items = ref([
  { name: 'node_modules', message: 'Initial commit', time: '10 hours ago' },
  { name: 'test', message: 'Initial commit', time: '10 hours ago' },
  { name: 'build', message: 'Initial commit', time: '10 hours ago' },
])

const code = `<template>
  <Table :items="items">
    <Column field="name" collapsing>
      <template #body="{ data }">
        <Icon name="folder" />
        {{ data.name }}
      </template>
    </Column>
    <Column field="message" />
    <Column field="time" />
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column } from 'vue-fomantic-ui'

const items = ref([
  { name: 'node_modules', message: 'Initial commit', time: '10 hours ago' },
  { name: 'test', message: 'Initial commit', time: '10 hours ago' },
  { name: 'build', message: 'Initial commit', time: '10 hours ago' },
])
<\/script>`
</script>
