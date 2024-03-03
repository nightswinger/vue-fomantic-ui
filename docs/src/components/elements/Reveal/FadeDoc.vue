<template>
  <DocSection label="Fade" :code="code">
    <template #description>
      An element can disappear to reveal content below
    </template>
    <template #example>
      <SuiReveal animated="fade">
        <SuiRevealContent visible>
          <SuiImage size="small" src="/vue-fomantic-ui/images/wireframe/square-image.png" />
        </SuiRevealContent>
        <SuiRevealContent hidden>
          <SuiImage size="small" src="/vue-fomantic-ui/images/avatar/large/ade.jpg" />
        </SuiRevealContent>
      </SuiReveal>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiReveal, SuiRevealContent, SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiReveal animated="fade">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/ade.jpg" />
    </SuiRevealContent>
  </SuiReveal>
<\/template>`
</script>
