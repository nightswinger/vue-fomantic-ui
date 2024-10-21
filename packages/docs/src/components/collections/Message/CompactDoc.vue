<template>
  <DocSection label="Compact" :code="code">
    <template #description>
      A message can only take up the width of its content.
    </template>
    <template #example>
      <Message
        compact
        content="Get all the best inventions in your e-mail every day. Sign up now!"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Message } from 'vue-fomantic-ui'

const code = `<template>
  <Message
    compact
    content="Get all the best inventions in your e-mail every day. Sign up now!"
  />
<\/template>`
</script>
