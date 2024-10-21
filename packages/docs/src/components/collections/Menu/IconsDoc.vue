<template>
  <DocSection label="Icons" :code="code">
    <template #description>
      A menu may have just icons
    </template>
    <template #example>
      <Menu icon :items="items"></Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { icon: 'gamepad' },
  { icon: 'video camera' },
  { icon: 'video play' },
])

const code = `<template>
  <Menu icon :items="items"></Menu>
<\/template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref([
  { icon: 'gamepad' },
  { icon: 'video camera' },
  { icon: 'video play' },
])
<\/script>`
</script>
