<template>
  <DocSection label="Buttons" :code="code">
    <template #description>
      A card can contain buttons
    </template>
    <template #example>
      <CardGroup>
        <Card v-for="item in items">
          <CardContent>
            <template #header>
              {{ item.header }}
            </template>
            <template #description>
              {{ item.description }}
            </template>
          </CardContent>
          <Button icon="plus" content="Add Friend" />
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
} from 'vue-fomantic-ui'

const items = ref([
  {
    header: 'Elliot Fu',
    description: 'Elliot Fu is a film-maker from New York.',
  },
  {
    header: 'Veronika Ossi',
    description: 'Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.',
  },
  {
    header: 'Jenny Hess',
    description: 'Jenny is a student studying Media Management at the New School',
  }
])

const code = `<template>
  <CardGroup>
    <Card v-for="item in items">
      <CardContent>
        <template #header>
          {{ item.header }}
        </template>
        <template #description>
          {{ item.description }}
        </template>
      </CardContent>
      <Button icon="plus" content="Add Friend" />
    </Card>
  </CardGroup>
</template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardContent,
  CardGroup,
  Button,
} from 'vue-fomantic-ui'

const items = ref([
  {
    header: 'Elliot Fu',
    description: 'Elliot Fu is a film-maker from New York.',
  },
  {
    header: 'Veronika Ossi',
    description: 'Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.',
  },
  {
    header: 'Jenny Hess',
    description: 'Jenny is a student studying Media Management at the New School',
  }
])
<\/script>`
</script>
