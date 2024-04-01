<template>
  <DocSection label="Horizontal" :code="code">
    <template #description>
      A list can be formatted to have items appear horizontally
    </template>
    <template #example>
      <List horizontal>
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
    avatar: '/vue-fomantic-ui/images/avatar/small/tom.jpg',
    name: 'Tom',
    description: 'Top Contributor',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/christian.jpg',
    name: 'Christian Rocha',
    description: 'Admin',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/matt.jpg',
    name: 'Matt',
    description: 'Top Rated User',
  },
])

const code = `<template>
  <List horizontal>
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
  Image,
} from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/images/avatar/small/tom.jpg',
    name: 'Tom',
    description: 'Top Contributor',
  },
  {
    avatar: '/images/avatar/small/christian.jpg',
    name: 'Christian Rocha',
    description: 'Admin',
  },
  {
    avatar: '/images/avatar/small/matt.jpg',
    name: 'Matt',
    description: 'Top Rated User',
  },
])
<\/script>`
</script>
