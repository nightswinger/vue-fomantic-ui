<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      An icon can show that it is disabled
    </template>
    <template #example>
      <SuiIcon name="users" disabled />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiIcon name="users" disabled />
</template>`
</script>
