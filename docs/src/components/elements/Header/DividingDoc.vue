<template>
  <DocSection label="Dividing" :code="code">
    <template #description>
      A header can be formatted to divide itself from the content below it
    </template>
    <template #example>
      <SuiHeader as="h3" dividing>
        Dividing Header
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
  <SuiHeader as="h3" dividing>
    Dividing Header
  </SuiHeader>
</template>`
</script>
