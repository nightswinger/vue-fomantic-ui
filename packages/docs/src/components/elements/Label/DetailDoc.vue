<template>
  <DocSection label="Detail" :code="code">
    <template #description>
      A label can contain a detail
    </template>
    <template #example>
      <SuiLabel>
        Dogs
        <SuiLabelDetail>214</SuiLabelDetail>
      </SuiLabel>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel, SuiLabelDetail } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabel>
    Dogs
    <SuiLabelDetail>214</SuiLabelDetail>
  </SuiLabel>
</template>`
</script>
