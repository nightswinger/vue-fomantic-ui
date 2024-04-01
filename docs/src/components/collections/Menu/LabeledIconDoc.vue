<template>
  <DocSection label="Labeled Icon" :code="code">
    <template #description>
      A menu may have labeled icons
    </template>
    <template #example>
      <Menu icon="labeled" :items="items"></Menu>
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
  <Menu icon="labeled" :items="items"></Menu>
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
