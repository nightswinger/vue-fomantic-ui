<template>
  <DocSection label="Action" :code="code">
    <template #description>
      An input can be formatted to alert the user to an action they may perform
    </template>
    <template #example>
      <SuiInput action="Search" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiInput } from 'vue-fomantic-ui'

const code = `<template>
  <SuiInput action="Search" />
</template>`
</script>
