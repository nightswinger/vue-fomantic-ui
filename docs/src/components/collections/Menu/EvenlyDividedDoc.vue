<template>
  <DocSection label="Evenly Divided" :code="code">
    <template #description>
      A menu may divide its items evenly
    </template>
    <template #example>
      <Menu :widths="3" :items="items"></Menu>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(['Buy', 'Sell', 'Rent'])

const code = `<template>
  <Menu :widths="3" :items="items"></Menu>
<\/template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(['Buy', 'Sell', 'Rent'])
<\/script>`
</script>
