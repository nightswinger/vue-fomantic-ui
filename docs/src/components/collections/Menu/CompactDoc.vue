<template>
  <DocSection label="Compact" :code="code">
    <template #description>
      A menu can take up only the space necessary to fit its content
    </template>
    <template #example>
      <Menu compact :items="items"></Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { icon: 'gamepad', text: 'Games' },
  { icon: 'video camera', text: 'Channels' },
  { icon: 'video play', text: 'Videos' },
])

const code = `<template>
  <Menu compact :items="items"></Menu>
<\/template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { icon: 'gamepad', text: 'Games' },
  { icon: 'video camera', text: 'Channels' },
  { icon: 'video play', text: 'Videos' },
])
<\/script>`
</script>
