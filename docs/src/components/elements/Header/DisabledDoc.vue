<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      A header can show that it is inactive
    </template>
    <template #example>
      <SuiHeader disabled>
        Disabled Header
      </SuiHeader>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiHeader,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiHeader disabled>
    Disabled Header
  </SuiHeader>
</template>`
</script>
