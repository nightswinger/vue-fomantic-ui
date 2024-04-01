<template>
  <DocSection label="Fluid" :code="code">
    <template #description>
      A vertical menu may take the size of its container
    </template>
    <template #example>
      <Menu fluid vertical :items="items"></Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(['Run', 'Walk', 'Bike'])

const code = `<template>
  <Menu fluid vertical :items="items"></Menu>
<\/template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(['Run', 'Walk', 'Bike'])
<\/script>`
</script>
