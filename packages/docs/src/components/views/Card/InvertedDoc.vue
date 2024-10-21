<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      Card's colors can be inverted
    </template>
    <template #example>
      <Segment inverted>
        <CardGroup inverted>
          <Card v-for="item in items">
            <Image :src="item.avatar" />
            <CardContent :header="item.header">
              <template #meta>
                {{ item.meta }}
              </template>
              <template #description>
                {{ item.description }}
              </template>
            </CardContent>
          </Card>
        </CardGroup>
      </Segment>
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
  Image,
  Segment,
} from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/matthew.png',
    header: 'Matt Giampietro',
    meta: 'Friends',
    description: 'Matthew is an interior designer living in New York.',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/molly.png',
    header: 'Molly',
    meta: 'Coworker',
    description: 'Molly is a personal assistant living in Paris.',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/elyse.png',
    header: 'Elyse',
    meta: 'Coworker',
    description: 'Elyse is a copywriter working in New York.',
  }
])

const code = `<template>
  <Segment inverted>
    <CardGroup inverted>
      <Card v-for="item in items">
        <Image :src="item.avatar" />
        <CardContent :header="item.header">
          <template #meta>
            {{ item.meta }}
          </template>
          <template #description>
            {{ item.description }}
          </template>
        </CardContent>
      </Card>
    </CardGroup>
  </Segment>
<\/template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardContent,
  CardGroup,
  Image,
  Segment,
} from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/matthew.png',
    header: 'Matt Giampietro',
    meta: 'Friends',
    description: 'Matthew is an interior designer living in New York.',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/molly.png',
    header: 'Molly',
    meta: 'Coworker',
    description: 'Molly is a personal assistant living in Paris.',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/elyse.png',
    header: 'Elyse',
    meta: 'Coworker',
    description: 'Elyse is a copywriter working in New York.',
  }
])
<\/script>`
</script>
