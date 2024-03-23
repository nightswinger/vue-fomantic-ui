<template>
  <DocSection label="Dismissable Block" :code="code">
    <template #description>
      A message that the user can choose to hide
    </template>
    <template #example>
      <Message
        header="Welcome back!"
        content="This is a special notification which you can dismiss if you're bored with it."
        closable
        @close="() => console.log('Message closed')"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Message } from 'vue-fomantic-ui'

const code = `<template>
  <Message
    header="Welcome back!"
    content="This is a special notification which you can dismiss if you're bored with it."
    closable
    @close="() => console.log('Message closed')"
  />
<\/template>`
</script>
