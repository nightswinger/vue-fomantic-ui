<template>
  <DocSection label="Hidden" :code="code">
    <template #description>
      A message can be hidden
    </template>
    <template #example>
      <Message
        hidden
        content="You can't see me"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Message } from 'vue-fomantic-ui'

const code = `<template>
  <Message
    hidden
    content="You can't see me"
  />
<\/template>`
</script>
