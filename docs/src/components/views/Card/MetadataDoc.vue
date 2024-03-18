<template>
  <DocSection label="Metadata" :code="code">
    <template #description>
      A card can contain content metadata
    </template>
    <template #example>
      <Card>
        <CardContent header="Cute Dog">
          <template #meta>
            <span>2 days ago</span>
            <a>Animals</a>
          </template>
          <template #description>
            <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
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
  <Card>
    <CardContent header="Cute Dog">
      <template #meta>
        <span>2 days ago</span>
        <a>Animals</a>
      </template>
      <template #description>
        <Image src="/images/wireframe/paragraph.png" />
      </template>
    </CardContent>
  </Card>
<\/template>`
</script>
