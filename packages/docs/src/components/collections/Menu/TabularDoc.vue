<template>
  <DocSection label="Tabular" :code="code">
    <template #description>
      A menu can be formatted to show tabs of information
    </template>
    <template #example>
      <Menu
        tabular
        :items="['Bio', 'Photos']"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Menu } from 'vue-fomantic-ui'

const code = `<template>
  <Menu
    tabular
    :items="['Bio', 'Photos']"
  />
<\/template>`
</script>
