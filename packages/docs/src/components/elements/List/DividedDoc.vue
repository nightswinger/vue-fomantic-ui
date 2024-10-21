<template>
  <DocSection label="Divided" :code="code">
    <template #description>
      A list can show divisions between content
    </template>
    <template #example>
      <List divided vertical-align="middle">
        <ListItem v-for="item in items">
          <Image avatar :src="item.avatar" />
          <ListContent>
            <ListHeader as="a">{{ item.name }}</ListHeader>
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
    avatar: '/vue-fomantic-ui/images/avatar/small/daniel.jpg',
    name: 'Daniel Louise',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/stevie.jpg',
    name: 'Stevie Feliciano',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/elliot.jpg',
    name: 'Elliot Fu',
  },
])

const code = `<template>
  <List divided vertical-align="middle">
    <ListItem v-for="item in items">
      <Image avatar :src="item.avatar" />
      <ListContent>
        <ListHeader as="a">{{ item.name }}</ListHeader>
      </ListContent>
    </ListItem>
  </List>
</template>

<script setup>
import { ref } from 'vue'
import { List, ListItem, ListContent, ListHeader, Image } from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/daniel.jpg',
    name: 'Daniel Louise',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/stevie.jpg',
    name: 'Stevie Feliciano',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/elliot.jpg',
    name: 'Elliot Fu',
  },
])
<\/script>`
</script>
