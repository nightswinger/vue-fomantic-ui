<template>
  <DocSection label="Cards" :code="code">
    <template #description>
      A group of cards.
    </template>
    <template #example>
      <CardGroup>
        <Card v-for="item in items">
          <CardContent>
            <template #header>
              {{ item.header }}
              <Image size="mini" floated="right" :src="item.avatar" />
            </template>
            <template #meta>
              {{ item.meta }}
            </template>
            <template #description>
              {{ item.description }}
            </template>
          </CardContent>
          <CardContent extra>
            <ButtonGroup :widths="2">
              <Button basic color="green">Approve</Button>
              <Button basic color="red">Decline</Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </CardGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import {
  Card,
  CardContent,
  CardGroup,
  Button,
  ButtonGroup,
  Image,
} from 'vue-fomantic-ui'

const items = ref([
  {
    header: 'Elliot Fu',
    avatar: '/vue-fomantic-ui/images/avatar/large/elliot.jpg',
    meta: 'Friends of Veronika',
    description: 'Elliot requested permission to view your contact details',
  },
  {
    header: 'Jenny Hess',
    avatar: '/vue-fomantic-ui/images/avatar/large/jenny.jpg',
    meta: 'New Member',
    description: 'Jenny wants to add you to the group best friends',
  }
])

const code = `<template>
  <CardGroup>
    <Card v-for="item in items">
      <CardContent>
        <template #header>
          {{ item.header }}
          <Image size="mini" floated="right" :src="item.avatar" />
        </template>
        <template #meta>
          {{ item.meta }}
        </template>
        <template #description>
          {{ item.description }}
        </template>
      </CardContent>
      <CardContent extra>
        <ButtonGroup :widths="2">
          <Button basic color="green">Approve</Button>
          <Button basic color="red">Decline</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  </CardGroup>
<\/template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardContent,
  CardGroup,
  Button,
  ButtonGroup,
  Image,
} from 'vue-fomantic-ui'

const items = ref([
  {
    header: 'Elliot Fu',
    avatar: '/images/avatar/large/elliot.jpg',
    meta: 'Friends of Veronika',
    description: 'Elliot requested permission to view your contact details',
  },
  {
    header: 'Jenny Hess',
    avatar: '/images/avatar/large/jenny.jpg',
    meta: 'New Member',
    description: 'Jenny wants to add you to the group best friends',
  }
])
<\/script>`
</script>
