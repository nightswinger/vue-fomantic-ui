<template>
  <DocSection label="Horizontal Cards" :code="code">
    <template #description>
      A card can display horizontally
    </template>
    <template #example>
      <Card horizontal>
        <Image wrapped src="/vue-fomantic-ui/images/avatar/large/matthew.png" />
        <CardContent header="Matt Giampietro">
          <template #meta>
            <a>Friends</a>
          </template>
          <template #description>
            Matthew is an interior designer living in New York.
          </template>
        </CardContent>
      </Card>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import {
  Card,
  CardContent,
  Image,
} from 'vue-fomantic-ui'

const code = `<template>
  <Card horizontal>
    <Image wrapped src="/vue-fomantic-ui/images/avatar/large/matthew.png" />
    <CardContent header="Matt Giampietro">
      <template #meta>
        <a>Friends</a>
      </template>
      <template #description>
        Matthew is an interior designer living in New York.
      </template>
    </CardContent>
  </Card>
<\/template>`
</script>
