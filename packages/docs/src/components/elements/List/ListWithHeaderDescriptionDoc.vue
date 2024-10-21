<template>
  <DocSection :code="code">
    <template #example>
      <List relaxed divided>
        <ListItem
          v-for="item in items"
          :key="item.header"
        >
          <template #prepend>
            <Icon name="github" size="large" aligned="middle" />
          </template>

          <ListHeader as="a">{{ item.header }}</ListHeader>
          <ListDescription>{{ item.description }}</ListDescription>
        </ListItem>
      </List>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { List, ListItem, ListHeader, ListDescription, Icon } from 'vue-fomantic-ui'

const items = ref([
  { header: 'fomantic/Fomantic-UI', description: 'Updated 10 mins ago', as: 'a' },
  { header: 'fomantic/Fomantic-UI-Docs', description: 'Updated 22 mins ago', as: 'a' },
  { header: 'fomantic/Fomantic-UI-LESS', description: 'Updated 34 mins ago', as: 'a' },
])

const code = `<template>
  <List relaxed divided>
    <ListItem
      v-for="item in items"
      :key="item.header"
    >
      <template #prepend>
        <Icon name="github" size="large" aligned="middle" />
      </template>

      <ListHeader as="a">{{ item.header }}</ListHeader>
      <ListDescription>{{ item.description }}</ListDescription>
    </ListItem>
  </List>
</template>

<script setup>
import { ref } from 'vue'
import { List, ListItem, ListHeader, ListDescription, Icon } from 'vue-fomantic-ui'

const items = ref([
  { header: 'fomantic/Fomantic-UI', description: 'Updated 10 mins ago', as: 'a' },
  { header: 'fomantic/Fomantic-UI-Docs', description: 'Updated 22 mins ago', as: 'a' },
  { header: 'fomantic/Fomantic-UI-LESS', description: 'Updated 34 mins ago', as: 'a' },
])
<\/script>`
</script>
