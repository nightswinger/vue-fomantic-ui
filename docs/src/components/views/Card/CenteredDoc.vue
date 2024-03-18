<template>
  <DocSection label="Centered Card" :code="code">
    <template #description>
      A card can center itself inside its container
    </template>
    <template #example>
      <Card centered>
        <Image src="/vue-fomantic-ui/images/avatar/large/elyse.png" />
        <CardContent header="Elyse" />
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
  <Card centered>
    <Image src="/vue-fomantic-ui/images/avatar/large/elyse.png" />
    <CardContent header="Elyse" />
  </Card>
<\/template>`
</script>
