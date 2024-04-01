<template>
  <DocSection label="Colored" :code="code">
    <template #description>
      A card can specify a color
    </template>
    <template #example>
      <CardGroup :itemsPerRow="4">
        <Card v-for="color in colors" :color="color">
          <Image src="/vue-fomantic-ui/images/wireframe/white-image.png" />
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

const colors = ref([
  'primary',
  'secondary',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
])

const code = `<template>
  <CardGroup :itemsPerRow="4">
    <Card v-for="color in colors" :color="color">
      <Image src="/vue-fomantic-ui/images/wireframe/white-image.png" />
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

const colors = ref([
  'primary',
  'secondary',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
])
<\/script>`
</script>
