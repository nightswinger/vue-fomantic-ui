<template>
  <DocSection label="Block" :code="code">
    <template #description>
      A header can be formatted to appear inside a content block
    </template>
    <template #example>
      <SuiHeader as="h3" block>
        Block Header
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
  <SuiHeader as="h3" block>
    Block Header
  </SuiHeader>
</template>`
</script>
