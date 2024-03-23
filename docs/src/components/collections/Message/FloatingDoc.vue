<template>
  <DocSection label="Floating" :code="code">
    <template #description>
      A message can float above content that it is related to
    </template>
    <template #example>
      <Message
        floating
        content="Way to go!"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Message } from 'vue-fomantic-ui'

const code = `<template>
  <Message
    floating
    content="Way to go!"
  />
<\/template>`
</script>
