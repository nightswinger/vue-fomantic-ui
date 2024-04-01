<template>
  <DocSection label="Negative / Error" :code="code">
    <template #description>
      A message may be formatted to display a negative message.
    </template>
    <template #example>
      <Message
        negative
        header="We're sorry we can't apply that discount"
        content="That offer has expired"
        closable
      />
      <Message
        error
        header="There were some errors with your submission"
        :list="[
          'You must include both a upper and lower case letters in your password.',
          'You need to select your home country.'
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
    negative
    header="We're sorry we can't apply that discount"
    content="That offer has expired"
    closable
  />
  <Message
    error
    header="There were some errors with your submission"
    :list="[
      'You must include both a upper and lower case letters in your password.',
      'You need to select your home country.'
    ]"
    closable
  />
<\/template>`
</script>
