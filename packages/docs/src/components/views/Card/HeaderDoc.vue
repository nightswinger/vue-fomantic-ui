<template>
  <DocSection label="Header" :code="code">
    <template #description>
      A card can contain a header
    </template>
    <template #example>
      <CardGroup>
        <Card v-for="item in items">
          <CardContent>
            <template #header>
              {{ item.header }}
            </template>
            <template #meta>
              {{ item.meta }}
            </template>
            <template #description>
              {{ item.description }}
            </template>
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
} from 'vue-fomantic-ui'

const items = ref([
  {
    header: 'Elliot Fu',
    meta: 'Friend',
    description: 'Elliot Fu is a film-maker from New York.',
  },
  {
    header: 'Veronika Ossi',
    meta: 'Friend',
    description: 'Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.',
  },
  {
    header: 'Jenny Hess',
    meta: 'Friend',
    description: 'Jenny is a student studying Media Management at the New School',
  }
])

const code = `<template>
  <CardGroup>
    <Card v-for="item in items">
      <template #header>
        {{ item.header }}
      </template>
      <template #meta>
        {{ item.meta }}
      </template>
      <template #description>
        {{ item.description }}
      </template>
    </Card>
  </CardGroup>
<\/template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardGroup,
} from 'vue-fomantic-ui'

const items = ref([
  {
    header: 'Elliot Fu',
    meta: 'Friend',
    description: 'Elliot Fu is a film-maker from New York.',
  },
  {
    header: 'Veronika Ossi',
    meta: 'Friend',
    description: 'Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.',
  },
  {
    header: 'Jenny Hess',
    meta: 'Friend',
    description: 'Jenny is a student studying Media Management at the New School',
  }
])
<\/script>`
</script>
