<template>
  <DocSection label="Extra Content" :code="code">
    <template #description>
      A card can contain extra content meant to be formatted separately from the main content
    </template>
    <template #example>
      <Card>
        <CardContent header="Cute Dog">
          <template #meta>
            2 days ago
          </template>
          <template #description>
            <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
            <p>Many people also have their own barometers for what makes a cute dog.</p>
          </template>
        </CardContent>
        <CardContent extra>
          <Icon name="check" />
          121 Votes
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
  Icon,
} from 'vue-fomantic-ui'

const code = `<template>
  <Card>
    <CardContent header="Cute Dog">
      <template #meta>
        2 days ago
      </template>
      <template #description>
        <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
        <p>Many people also have their own barometers for what makes a cute dog.</p>
      </template>
    </CardContent>
    <CardContent extra>
      <Icon name="check" />
      121 Votes
    </CardContent>
  </Card>
<\/template>`
</script>
