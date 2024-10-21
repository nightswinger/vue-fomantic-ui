<template>
  <DocSection label="Button" :code="code">
    <template #description>
      An ad can use button ad unit size
    </template>
    <template #example>
      <Advertisement unit="button" test="Button"  />
      <Advertisement unit="square button" test="Square Button"  />
      <Advertisement unit="small button" test="Small Button"  />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { Advertisement } from 'vue-fomantic-ui'

const code = `<template>
  <Advertisement unit="button" test="Button"  />
  <Advertisement unit="square button" test="Square Button"  />
  <Advertisement unit="small button" test="Small Button"  />
<\/template>`
</script>
