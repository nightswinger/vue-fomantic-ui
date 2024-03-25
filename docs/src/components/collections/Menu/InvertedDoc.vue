<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      A menu may have its colors inverted to show greater contrast
    </template>
    <template #example>
      <Menu inverted :items="items"></Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(['Home', 'Messages', 'Friends'])

const code = `<template>
  <Menu inverted :items="items"></Menu>
<\/template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(['Home', 'Messages', 'Friends'])
<\/script>`
</script>
