<template>
  <DocSection label="Stackable" :code="code">
    <template #description>
      A group of cards can automatically stack rows to a single columns on mobile devices
    </template>
    <template #example>
      <CardGroup :itemsPerRow="3" stackable>
        <Card v-for="avatar in avatars">
          <Image :src="`/vue-fomantic-ui/images/avatar/large/${avatar}.jpg`" />
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
  CardGroup,
  Image,
} from 'vue-fomantic-ui'

const avatars = ref([
  'elliot',
  'helen',
  'jenny',
  'veronika',
  'stevie',
  'steve',
])

const code = `<template>
  <CardGroup :itemsPerRow="3" stackable>
    <Card v-for="avatar in avatars">
      <Image :src="\`/vue-fomantic-ui/images/avatar/large/\${avatar}.jpg\`" />
    </Card>
  </CardGroup>
</template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardGroup,
  Image,
} from 'vue-fomantic-ui'

const avatars = ref([
  'elliot',
  'helen',
  'jenny',
  'veronika',
  'stevie',
  'steve',
])
<\/script>`
</script>
