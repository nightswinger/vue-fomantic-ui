<template>
  <DocSection label="Instant" :code="code">
    <template #description>
      An element can show its content without delay
    </template>
    <template #example>
      <SuiReveal instant animated="move">
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
  <SuiReveal instant animated="move">
    <SuiRevealContent visible>
      <SuiImage size="small" src="/images/wireframe/square-image.png" />
    </SuiRevealContent>
    <SuiRevealContent hidden>
      <SuiImage size="small" src="/images/avatar/large/chris.jpg" />
    </SuiRevealContent>
  </SuiReveal>
<\/template>`
</script>
