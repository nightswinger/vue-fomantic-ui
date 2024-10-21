<template>
  <DocSection label="Celled" :code="code">
    <template #description>
      A list can divide its items into cells
    </template>
    <template #example>
      <List celled>
        <ListItem v-for="item in items">
          <Image avatar :src="item.avatar" />
          <ListContent>
            <ListHeader>{{ item.name }}</ListHeader>
            {{ item.description }}
          </ListContent>
        </ListItem>
      </List>
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
  Image,
} from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/helen.jpg',
    name: 'Snickerdoodle',
    description: 'An excellent companion',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/christian.jpg',
    name: 'Poodle',
    description: 'A poodle, its pretty basic',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/daniel.jpg',
    name: 'Paulo',
    description: 'He\'s also a dog',
  },
])

const code = `<template>
  <List celled>
    <ListItem v-for="item in items">
      <Image avatar :src="item.avatar" />
      <ListContent>
        <ListHeader>{{ item.name }}</ListHeader>
        {{ item.description }}
      </ListContent>
    </ListItem>
  </List>
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
    avatar: '/images/avatar/small/helen.jpg',
    name: 'Snickerdoodle',
    description: 'An excellent companion',
  },
  {
    avatar: '/images/avatar/small/christian.jpg',
    name: 'Poodle',
    description: 'A poodle, its pretty basic',
  },
  {
    avatar: '/images/avatar/small/daniel.jpg',
    name: 'Paulo',
    description: 'He\\'s also a dog',
  },
])
<\/script>`
</script>
