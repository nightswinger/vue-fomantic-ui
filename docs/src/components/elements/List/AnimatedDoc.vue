<template>
  <DocSection label="Animated" :code="code">
    <template #description>
      A list can animate to set the current item apart from the list
    </template>
    <template #example>
      <List animated vertical-align="middle">
        <ListItem v-for="item in items">
          <Image avatar :src="item.avatar" />
          <ListContent>
            <ListHeader>{{ item.name }}</ListHeader>
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
    name: 'Helen',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/christian.jpg',
    name: 'Christian',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/daniel.jpg',
    name: 'Daniel',
  },
])

const code = `<template>
  <List animated vertical-align="middle">
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
import { List, ListItem, ListContent, ListHeader, Image } from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/helen.jpg',
    name: 'Helen',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/christian.jpg',
    name: 'Christian',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/small/daniel.jpg',
    name: 'Daniel',
  },
])
<\/script>`
</script>
