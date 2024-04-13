<template>
  <DocSection label="Sidebar" :code="code">
    <template #description>
      A sidebar
    </template>
    <template #example>
      <Sidebar v-model:visible="visible" :items="items" />
      <Button icon="plus" @click="visible = !visible" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Sidebar, Button } from 'vue-fomantic-ui'

const visible = ref(false)
const items = [
  { text: 1 },
  { text: 2 },
  { text: 3 },
]

const code = `<template>
  <Sidebar v-model:visible="visible" :items="items" />
  <Button icon="plus" @click="visible = !visible" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Sidebar, Button } from 'vue-fomantic-ui'

const visible = ref(false)
const items = [
  { text: 1 },
  { text: 2 },
  { text: 3 },
]
<\/script>`
</script>
