<template>
  <DocSection label="Warning" :code="code">
    <template #description>
      A message may be formatted to display warning messages.
    </template>
    <template #example>
      <Message
        warning
        header="You must register before you can do that!"
        content="Visit our registration page, then try again"
        closable
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Message } from 'vue-fomantic-ui'

const code = `<template>
  <Message
    warning
    header="You must register before you can do that!"
    content="Visit our registration page, then try again"
    closable
  />
<\/template>`
</script>
