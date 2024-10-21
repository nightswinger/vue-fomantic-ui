<template>
  <DocSection label="Icon" :code="code">
    <template #description>
      A label can include an icon
    </template>
    <template #example>
      <SuiLabel>
        <SuiIcon name="mail" />
        Mail
      </SuiLabel>
      <SuiLabel>
        <SuiIcon name="checkmark" />
        Test Passed
      </SuiLabel>
      <SuiLabel icon="dog" />
      <SuiLabel icon="cat" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel, SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabel>
    <SuiIcon name="mail" />
    Mail
  </SuiLabel>
  <SuiLabel>
    <SuiIcon name="checkmark" />
    Test Passed
  </SuiLabel>
  <SuiLabel icon="dog" />
  <SuiLabel icon="cat" />
</template>`
</script>
