<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      A button can show it is currently unable to be interacted with
    </template>
    <template #example>
      <SuiButton disabled icon="user" content=" Followed" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton disabled icon="user" content=" Followed" />
<\/template>`
</script>
