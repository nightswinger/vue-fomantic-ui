<template>
  <DocSection label="Horizontally Attached" :code="code">
    <template #description>
	    A button can be attached to the left or right of other content
    </template>
    <template #example>
      <SuiButton attached="left" content="Left" />
      <SuiButton attached="right" content="Right" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton attached="left" content="Left" />
  <SuiButton attached="right" content="Right" />
<\/template>`
</script>
