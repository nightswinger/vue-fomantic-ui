<template>
  <DocSection label="Structured" :code="code">
    <template #description>
      A table can be formatted to display complex structured data
    </template>
    <template #example>
      <Table celled structured :items="items" rowsGroupBy="name">
        <template #header>
          <tr>
            <th rowspan="2">Name</th>
            <th rowspan="2">Type</th>
            <th rowspan="2">Files</th>
            <th colspan="3">Languages</th>
          </tr>
          <tr>
            <th>Ruby</th>
            <th>JavaScript</th>
            <th>Python</th>
          </tr>
        </template>
        <Column field="name" header="Name" />
        <Column field="type" header="Type" />
        <Column field="files" header="Files" :cellClass="() => 'right aligned'" />
        <Column field="languages" :cellClass="() => 'center aligned'">
          <template #body="{ data }">
            <template v-if="data.languages === 'Ruby'">
              <Icon name="checkmark" size="large" color="green" />
            </template>
          </template>
        </Column>
        <Column field="languages" :cellClass="() => 'center aligned'">
          <template #body="{ data }">
            <template v-if="data.languages === 'Javascript'">
              <Icon name="checkmark" size="large" color="green" />
            </template>
          </template>
        </Column>
        <Column field="languages">
          <template #body="{ data }">
            <template v-if="data.languages === 'Python'">
              <Icon name="checkmark" size="large" color="green" />
            </template>
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
  { name: 'Alpha Team', type: 'Project 1', files: 2, languages: 'Ruby' },
  { name: 'Beta Team', type: 'Project 1', files: 52, languages: 'Ruby' },
  { name: 'Beta Team', type: 'Project 2', files: 12, languages: 'Javascript' },
  { name: 'Beta Team', type: 'Project 3', files: 21, languages: 'Ruby' },
])

const code = `<template>
  <Table celled structured :items="items" rowsGroupBy="name">
    <template #header>
      <tr>
        <th rowspan="2">Name</th>
        <th rowspan="2">Type</th>
        <th rowspan="2">Files</th>
        <th colspan="3">Languages</th>
      </tr>
      <tr>
        <th>Ruby</th>
        <th>JavaScript</th>
        <th>Python</th>
      </tr>
    </template>
    <Column field="name" header="Name" />
    <Column field="type" header="Type" />
    <Column field="files" header="Files" :cellClass="() => 'right aligned'" />
    <Column field="languages" :cellClass="() => 'center aligned'">
      <template #body="{ data }">
        <template v-if="data.languages === 'Ruby'">
          <Icon name="checkmark" size="large" color="green" />
        </template>
      </template>
    </Column>
    <Column field="languages" :cellClass="() => 'center aligned'">
      <template #body="{ data }">
        <template v-if="data.languages === 'Javascript'">
          <Icon name="checkmark" size="large" color="green" />
        </template>
      </template>
    </Column>
    <Column field="languages">
      <template #body="{ data }">
        <template v-if="data.languages === 'Python'">
          <Icon name="checkmark" size="large" color="green" />
        </template>
      </template>
    </Column>
  </Table>
<\/template>

<script setup>
import { ref } from 'vue'
import { Table, Column, Icon } from 'vue-fomantic-ui'

const items = ref([
  { name: 'Alpha Team', type: 'Project 1', files: 2, languages: 'Ruby' },
  { name: 'Beta Team', type: 'Project 1', files: 52, languages: 'Ruby' },
  { name: 'Beta Team', type: 'Project 2', files: 12, languages: 'Javascript' },
  { name: 'Beta Team', type: 'Project 3', files: 21, languages: 'Ruby' },
])
<\/script>`
</script>
