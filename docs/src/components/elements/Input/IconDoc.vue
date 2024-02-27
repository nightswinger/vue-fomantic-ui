<template>
  <DocSection label="Icon" :code="code">
    <template #description>
      An input can be formatted with an icon
    </template>
    <template #example>
      <SuiInput icon="search" placeholder="Search..." />
      <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiInput } from 'vue-fomantic-ui'

const code = `<template>
  <SuiInput icon="search" placeholder="Search..." />
  <SuiInput icon="users" iconPosition="left" placeholder="Search..." />
</template>`
</script>
