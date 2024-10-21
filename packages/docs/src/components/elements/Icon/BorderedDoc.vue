<template>
  <DocSection label="Bordered" :code="code">
    <template #description>
      An icon can be formatted to appear bordered
    </template>
    <template #example>
      <SuiIcon name="users" bordered />
      <SuiIcon name="users" bordered color="teal" />
      <SuiIcon name="users" bordered inverted color="black" />
      <SuiIcon name="users" bordered inverted color="teal" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiIcon name="users" bordered />
  <SuiIcon name="users" bordered color="teal" />
  <SuiIcon name="users" bordered inverted color="black" />
  <SuiIcon name="users" bordered inverted color="teal" />
</template>`
</script>
