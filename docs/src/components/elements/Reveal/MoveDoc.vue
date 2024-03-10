<template>
  <DocSection label="Move" :code="code">
    <template #description>
      An element can move in a direction to reveal content
    </template>
    <template #example>
      <SuiReveal animated="move">
        <SuiRevealContent visible>
          <SuiImage size="small" src="/vue-fomantic-ui/images/wireframe/square-image.png" />
        </SuiRevealContent>
        <SuiRevealContent hidden>
          <SuiImage size="small" src="/vue-fomantic-ui/images/avatar/large/chris.jpg" />
        </SuiRevealContent>
      </SuiReveal>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiReveal, SuiRevealContent, SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiReveal animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
<\/template>`
</script>
