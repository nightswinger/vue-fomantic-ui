<template>
  <DocSection label="Active" :code="code">
    <template #description>
      An active reveal displays its hidden content
    </template>
    <template #example>
      <SuiReveal active animated="move">
        <SuiRevealContent visible>
          <SuiImage size="small" src="/vue-fomantic-ui/images/wireframe/square-image.png" />
        </SuiRevealContent>
        <SuiRevealContent hidden>
          <SuiImage size="small" src="/vue-fomantic-ui/images/avatar/large/nan.jpg" />
        </SuiRevealContent>
      </SuiReveal>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiReveal, SuiRevealContent, SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiReveal active animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/nan.jpg" />
    </SuiRevealContent>
  </SuiReveal>
<\/template>`
</script>
