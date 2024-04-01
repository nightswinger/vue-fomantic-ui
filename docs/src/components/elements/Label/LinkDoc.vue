<template>
  <DocSection label="Link" :code="code">
    <template #description>
      A label can be a link or contain an item that links
    </template>
    <template #example>
      <SuiLabel as="a">
        <SuiIcon name="mail" />
        23
      </SuiLabel>
      <SuiLabel>
        <SuiIcon name="mail" />
        23
        <SuiLabelDetail>View Mail</SuiLabelDetail>
      </SuiLabel>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel, SuiLabelDetail, SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="mail" />
    23
    <SuiLabelContent>View Mail</SuiLabelContent>
  </SuiLabel>
</template>`
</script>
