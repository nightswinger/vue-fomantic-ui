<template>
  <DocSection label="Positive / Success" :code="code">
    <template #description>
      A message may be formatted to display a positive message.
    </template>
    <template #example>
      <Message
        positive
        header="You are eligible for a reward"
        content="Go to your special offers page to see now."
        closable
      />
      <Message
        success
        header="Your user registration was successful."
        content="You may now log-in with the username you have chosen"
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
    positive
    header="You are eligible for a reward"
    content="Go to your special offers page to see now."
    closable
  />
  <Message
    success
    header="Your user registration was successful."
    content="You may now log-in with the username you have chosen"
    closable
  />
<\/template>`
</script>
