<template>
  <DocSection label="List" :code="code">
    <template #description>
      A list groups related content
    </template>
    <template #example>
      <List :items="items" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { List } from 'vue-fomantic-ui'

const items = ref(['Apples', 'Pears', 'Oranges'])

const code = `<template>
  <List :items="items" />
</template>

<script setup>
import { ref } from 'vue'
import { List } from 'vue-fomantic-ui'

const items = ref(['Apples', 'Pears', 'Oranges'])
<\/script>`
</script>
