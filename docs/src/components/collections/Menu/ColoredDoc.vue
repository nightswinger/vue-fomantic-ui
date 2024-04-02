<template>
  <DocSection label="Colored" :code="code">
    <template #description>
      Additional colors can be specified
    </template>
    <template #example>
      <Menu :items="items" v-model:active-index="active" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { text: 'Red', color: 'red' },
  { text: 'Orange', color: 'orange' },
  { text: 'Yellow', color: 'yellow' },
  { text: 'Green', color: 'green' },
  { text: 'Teal', color: 'teal' },
])
const active = ref(0)

const code = `<template>
  <Menu
    :items="items"
    v-model:active-index="active"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { text: 'Red', color: 'red' },
  { text: 'Orange', color: 'orange' },
  { text: 'Yellow', color: 'yellow' },
  { text: 'Green', color: 'green' },
  { text: 'Teal', color: 'teal' },
])
const active = ref(0)
<\/script>`
</script>
