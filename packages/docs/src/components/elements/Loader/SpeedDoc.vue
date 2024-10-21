<template>
  <DocSection label="Speed" :code="code">
    <template #description>
      Loaders can appear slow, normal or fast
    </template>
    <template #example>
      <SuiLoader slow active inline />
      <SuiLoader active inline />
      <SuiLoader fast active inline />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLoader } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLoader slow active inline />
  <SuiLoader active inline />
  <SuiLoader fast active inline />
</template>`
</script>
