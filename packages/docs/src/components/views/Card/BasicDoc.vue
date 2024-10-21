<template>
  <DocSection label="Basic" :code="code">
    <template #description>
      A basic card does not have a border and also supports full color background
    </template>
    <template #example>
      <CardGroup :itemsPerRow="4" basic>
        <Card v-for="color in colors" :color="color">
          <Image src="/vue-fomantic-ui/images/wireframe/white-image.png" style="opacity: 0.5;" />
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
  <CardGroup :itemsPerRow="4" basic>
    <Card v-for="color in colors" :color="color">
      <Image src="/vue-fomantic-ui/images/wireframe/white-image.png" style="opacity: 0.5;" />
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
