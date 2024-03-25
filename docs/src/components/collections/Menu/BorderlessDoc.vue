<template>
  <DocSection label="Borderless" :code="code">
    <template #description>
      A menu item or menu can have no borders
    </template>
    <template #example>
      <Menu borderless :items="['1','2','3','4','5','6']" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Menu } from 'vue-fomantic-ui'

const code = `<template>
  <Menu borderless :items="['1','2','3','4','5','6']" />
<\/template>`
</script>
