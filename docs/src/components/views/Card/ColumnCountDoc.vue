<template>
  <DocSection label="Column Count" :code="code">
    <template #description>
      A group of cards can set how many cards should exist in a row
    </template>
    <template #example>
      <CardGroup :itemsPerRow="4">
        <Card>
          <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
        </Card>
        <Card>
          <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
        </Card>
        <Card>
          <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
        </Card>
        <Card>
          <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
        </Card>
      </CardGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import {
  Card,
  CardGroup,
  Image,
} from 'vue-fomantic-ui'

const code = `<template>
  <CardGroup :itemsPerRow="4">
    <Card>
      <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    </Card>
    <Card>
      <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    </Card>
    <Card>
      <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    </Card>
    <Card>
      <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    </Card>
  </CardGroup>
</template>`
</script>
