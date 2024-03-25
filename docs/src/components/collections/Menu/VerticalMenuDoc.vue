<template>
  <DocSection label="Vertical Menu" :code="code">
    <template #description>
      A vertical menu displays elements vertically.
    </template>
    <template #example>
      <Menu vertical :items="items" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref, h, Text } from 'vue'
import { Menu, Label, Input } from 'vue-fomantic-ui'

const items = ref([
  { text: [h(Text, 'Inbox'), h(Label, { color: 'teal' , pointing: 'left' }, () => 1)], color: 'teal' },
  { text: [h(Text, 'Spam'), h(Label, {}, () => 51)] },
  { text: [h(Text, 'Updates'), h(Label, {}, () => 1)] },
  { text: [h(Input, { icon: 'search', placeholder: 'Search mail...', transparent: true })], as: 'div' },
])

const code = `<template>
  <Menu vertical :items="items" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Menu, Label, Input } from 'vue-fomantic-ui'

const items = ref([
  { text: [h(Text, 'Inbox'), h(Label, { color: 'teal' , pointing: 'left' }, () => 1)], color: 'teal' },
  { text: [h(Text, 'Spam'), h(Label, {}, () => 51)] },
  { text: [h(Text, 'Updates'), h(Label, {}, () => 1)] },
  { text: [h(Input, { icon: 'search', placeholder: 'Search mail...', transparent: true })], as: 'div' },
])
<\/script>`
</script>
