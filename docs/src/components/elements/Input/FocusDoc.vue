<template>
  <DocSection label="Focus" :code="code">
    <template #description>
      An input field can show a user is currently interacting with it
    </template>
    <template #example>
      <SuiInput focus placeholder="Search..." />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiInput } from 'vue-fomantic-ui'

const code = `<template>
  <SuiInput focus placeholder="Search..." />
</template>`
</script>
