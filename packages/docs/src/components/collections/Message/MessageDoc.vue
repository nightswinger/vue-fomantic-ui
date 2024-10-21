<template>
  <DocSection label="Message" :code="code">
    <template #description>
      A basic message
    </template>
    <template #example>
      <Message
        header="Changes in Service"
        content="We updated our privacy policy here to better service our customers. We recommend reviewing the changes."
      />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { Message } from 'vue-fomantic-ui'

const code = `<template>
  <Message
    header="Changes in Service"
    content="We updated our privacy policy here to better service our customers. We recommend reviewing the changes."
  />
<\/template>`
</script>
