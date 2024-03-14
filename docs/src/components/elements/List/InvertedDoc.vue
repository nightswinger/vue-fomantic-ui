<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      A list can be formatted to have items appear horizontally
    </template>
    <template #example>
      <Segment inverted>
        <List inverted relaxed divided>
          <ListItem v-for="item in items">
            <ListContent>
              <ListHeader>{{ item.name }}</ListHeader>
              {{ item.description }}
            </ListContent>
          </ListItem>
        </List>
      </Segment>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import {
  List,
  ListItem,
  ListContent,
  ListHeader,
  Segment,
} from 'vue-fomantic-ui'

const items = ref([
  {
    name: 'Snickerdoodle',
    description: 'An excellent companion',
  },
  {
    name: 'Poodle',
    description: 'A poodle, its pretty basic',
  },
  {
    name: 'Paulo',
    description: 'He\'s also a dog',
  },
])

const code = `<template>
  <Segment inverted>
    <List inverted relaxed divided>
      <ListItem v-for="item in items">
        <ListContent>
          <ListHeader>{{ item.name }}</ListHeader>
          {{ item.description }}
        </ListContent>
      </ListItem>
    </List>
  </Segment>
</template>

<script setup>
import { ref } from 'vue'
import {
  List,
  ListItem,
  ListContent,
  ListHeader,
  Segment,
} from 'vue-fomantic-ui'

const items = ref([
  {
    name: 'Snickerdoodle',
    description: 'An excellent companion',
  },
  {
    name: 'Poodle',
    description: 'A poodle, its pretty basic',
  },
  {
    name: 'Paulo',
    description: 'He\\'s also a dog',
  },
])
<\/script>`
</script>
