<template>
  <DocSection label="Vertically Attached" :code="code">
    <template #description>
      A button can be attached to the top or bottom of other content
    </template>
    <template #example>
      <SuiButton attached="top" content="Top" />
      <SuiSegment attached>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
      </SuiSegment>
      <SuiButton attached="bottom" content="Bottom" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton, SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton attached="top" content="Top" />
  <SuiSegment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non dolores obcaecati. Eligendi, aspernatur dicta sint veniam expedita deleniti quasi dolorum cum fuga culpa quis impedit perspiciatis beatae! Accusantium, quisquam?</p>
  </SuiSegment>
  <SuiButton attached="bottom" content="Bottom" />
<\/template>`
</script>
