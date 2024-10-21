<template>
  <DocSection label="Text" :code="code">
    <template #description>
      A menu can be formatted for text content
    </template>
    <template #example>
      <Menu text :items="items" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { text: "SORT BY", header: true },
  { text: "Closest" },
  { text: "Most Comments" },
  { text: "Most Popular" },
])

const code = `<template>
  <Menu text :items="items" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { text: "SORT BY", header: true },
  { text: "Closest" },
  { text: "Most Comments" },
  { text: "Most Popular" },
])
<\/script>`
</script>
