<template>
  <DocSection label="Rotate" :code="code">
    <template #description>
      An element can rotate to reveal content below
    </template>
    <template #example>
      <SuiReveal animated="rotate">
        <SuiRevealContent visible>
          <SuiImage size="small" src="/vue-fomantic-ui/images/wireframe/square-image.png" />
        </SuiRevealContent>
        <SuiRevealContent hidden>
          <SuiImage size="small" src="/vue-fomantic-ui/images/avatar/large/stevie.jpg" />
        </SuiRevealContent>
      </SuiReveal>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiReveal, SuiRevealContent, SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiReveal animated="rotate">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/stevie.jpg" />
    </SuiRevealContent>
  </SuiReveal>
<\/template>`
</script>
