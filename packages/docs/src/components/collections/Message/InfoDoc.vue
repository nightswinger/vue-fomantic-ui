<template>
  <DocSection label="Info" :code="code">
    <template #description>
      A message may be formatted to display information.
    </template>
    <template #example>
      <Message
        info
        header="Was this what you wanted?"
        :list="[
          'It\'s good to see you again.',
          'Did you know it\'s been a while?'
        ]"
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
    info
    header="Was this what you wanted?"
    :list="[
      'It's good to see you again.',
      'Did you know it's been a while?'
    ]"
    closable
  />
<\/template>`
</script>
