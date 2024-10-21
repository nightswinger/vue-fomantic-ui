<template>
  <DocSection label="Label" :code="code">
    <template #description>
      A label
    </template>
    <template #example>
      <SuiLabel>
        <SuiIcon name="mail" />
        23
      </SuiLabel>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel, SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
</template>`
</script>
